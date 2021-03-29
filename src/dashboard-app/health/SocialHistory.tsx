import Dropdown from 'dashboard-app/common/Dropdown';
import DurationInput from 'dashboard-app/common/DurationInput';
import MultiAction from 'dashboard-app/common/MultiActions';
import Prompter from 'dashboard-app/common/Prompter';
import RecordHistory from 'dashboard-app/common/RecordHistory';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import { Content, ContentWrapper, InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import { HABITS, LEVEL_OPTIONS } from 'dashboard-app/utils/constants';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { HabitInput } from 'graphql-types/globalTypes';
import { Habit } from 'graphql-types/Habit';
import useUpdateProfile from 'hooks/useUpdateProfile';
import React from 'react';

const calculatePackYears = ({ duration, cigrattesPerDay }: HabitInput) => {
  if (!duration || !cigrattesPerDay) return 0;
  const [year = '0', month = '0', day = '0'] = duration?.split(':');
  let years = parseInt(year || '0', 10);
  years += parseInt(month || '0', 10) / 12;
  years += parseInt(day || '0', 10) / 365;
  return (cigrattesPerDay / 20) * years;
};

const SocialHistoryForm = ({ input, index }) => {
  const {
    handleInputChange,
    readOnly,
    updateAction,
    deleteProfileInfo,
    disabled,
    toggle,
    showDeleteModal,
    toggleAllowEdit,
    inputs,
  } = useUpdateProfile({ input, index, tab: 'Social History' });
  const cigrattesPackYears = calculatePackYears(inputs).toFixed(0);

  return (
    <Content padded>
      <InputRow>
        <SelectWrapper>
          <Dropdown
            onChange={({ value }) => (!readOnly ? handleInputChange('socialHabit', value) : null)}
            readOnly={readOnly}
            value={inputs.socialHabit}
            options={HABITS}
            placeholder="Select One"
            title="Habit"
            isRequired
            creatable
          />
        </SelectWrapper>
        <SelectWrapper padded>
          <DurationInput
            title="Duration (YY:MM:DD)"
            isYear
            readOnly={readOnly}
            onChange={(value) => handleInputChange('duration', value)}
            durationValue={inputs.duration}
            isRoundable
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        {inputs.socialHabit === 'Cigrattes' && (
          <>
            <SelectWrapper>
              <TextInput
                value={inputs.cigrattesPerDay}
                onChange={({ target: { value } }) =>
                  handleInputChange('cigrattesPerDay', parseFloat(value))
                }
                readOnly={readOnly}
                type="number"
                name="Sticks Per Day"
                title="Sticks Per Day"
                fullWidth
                placeholder="Enter Sticks Per Day"
              />
            </SelectWrapper>
            <SelectWrapper>
              <TextInput
                value={cigrattesPackYears}
                readOnly
                type="number"
                name="Pack Years"
                title="Pack Years"
                fullWidth
              />
            </SelectWrapper>
          </>
        )}
        {inputs.socialHabit === 'Alcohol Intake' && (
          <>
            <SelectWrapper>
              <TextInput
                value={inputs.unitPerWeek}
                onChange={({ target: { value } }) =>
                  handleInputChange('unitPerWeek', parseFloat(value))
                }
                readOnly={readOnly}
                type="number"
                name="Units Per Week"
                title="Units Per Week"
                fullWidth
                placeholder="Enter Units Per Week"
              />
            </SelectWrapper>
            <SelectWrapper>
              <TextInput
                value={inputs.typeSpecified}
                onChange={({ target: { value } }) => handleInputChange('typeSpecified', value)}
                readOnly={readOnly}
                name="Type"
                title="Type"
                fullWidth
              />
            </SelectWrapper>
          </>
        )}

        {inputs.socialHabit === 'Hard Drugs' && (
          <SelectWrapper>
            <TextInput
              value={inputs.typeSpecified}
              onChange={({ target: { value } }) => handleInputChange('typeSpecified', value)}
              readOnly={readOnly}
              name="Type"
              title="Type"
              fullWidth
            />
          </SelectWrapper>
        )}

        {inputs.socialHabit === 'Others' && (
          <SelectWrapper>
            <TextInput
              value={inputs.typeSpecified}
              onChange={({ target: { value } }) => handleInputChange('typeSpecified', value)}
              readOnly={readOnly}
              name="Specify"
              title="Specify Habit"
              fullWidth
            />
          </SelectWrapper>
        )}
        <SelectWrapper>
          <Dropdown
            options={LEVEL_OPTIONS}
            onChange={({ value }) => (!readOnly ? handleInputChange('level', value) : null)}
            value={inputs.level}
            readOnly={readOnly}
            placeholder="Select One"
            title="Level"
            isRequired
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <SelectWrapper fullWidth>
          <TextArea
            name="additionalNote"
            label="Additional Note"
            fullWidth
            readOnly={readOnly}
            value={inputs.additionalNote}
            onChange={({ target: { value } }) => handleInputChange('additionalNote', value)}
          />
        </SelectWrapper>
      </InputRow>
      <div className="medication-dispense-action-row parent">
        <div>
          {index !== 0 && (
            <InputRow>
              <RecordHistory
                createdBy={inputs?.createdBy?.fullName}
                createdDate={inputs?.createdDate}
                updatedBy={inputs?.updatedBy?.fullName}
                updatedDate={inputs?.updatedDate}
                className="padded"
              />
            </InputRow>
          )}
        </div>
        <div className="audit-section">
          <MultiAction
            field="health"
            index={index}
            readOnly={readOnly}
            updateAction={updateAction}
            disabled={disabled || !fieldsAreValid('socialHistory', inputs)}
            deleteAction={toggle}
            toggleAllowEdit={toggleAllowEdit}
          />
        </div>
      </div>
      <Modal
        modalContent={
          <Prompter
            text="Are you sure you want to delete this record?"
            actionText="Delete"
            deleteAction={deleteProfileInfo}
            cancelAction={toggle}
            disabled={disabled}
          />
        }
        isShown={showDeleteModal}
        hide={toggle}
        handleDone={() => {}}
        isAuthentication
      />
    </Content>
  );
};

const SocialHistory = ({ data }) => (
  <ContentWrapper noTopPadding>
    {data.map((input: Habit, index: number) => (
      <SocialHistoryForm input={input} key={input?.id} index={index} />
    ))}
  </ContentWrapper>
);

export default SocialHistory;
