import DatePicker from 'dashboard-app/common/DatePicker';
import Dropdown from 'dashboard-app/common/Dropdown';
import MultiAction from 'dashboard-app/common/MultiActions';
import Prompter from 'dashboard-app/common/Prompter';
import RecordHistory from 'dashboard-app/common/RecordHistory';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import UnitTag from 'dashboard-app/common/UnitTag';
import { Content, ContentWrapper, InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import {
  MENSTRUAL_FLOW_OPTIONS,
  QUESTION_OPTIONS,
  rangeOptionsGenerator,
} from 'dashboard-app/utils/constants';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { GynecologicHistory } from 'graphql-types/GynecologicHistory';
import useUpdateProfile from 'hooks/useUpdateProfile';
import React from 'react';

const GynecologicHistoryForms = ({ input, index }) => {
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
  } = useUpdateProfile({ input, index, tab: 'Gynecologic History' });

  return (
    <Content padded key={`gynecologic-history-${index}`}>
      <InputRow>
        <SelectWrapper>
          <TextInput
            onChange={({ target: { value } }) =>
              handleInputChange('firstMenstrualAge', parseFloat(value))
            }
            value={inputs.firstMenstrualAge}
            readOnly={readOnly}
            type="number"
            name="Age of first Menstruation"
            title="Age Of First Menstruation"
            fullWidth
            placeholder="Enter Age"
            withTag
            tag={<UnitTag text="Years" />}
          />
        </SelectWrapper>
        <SelectWrapper>
          <TextInput
            onChange={({ target: { value } }) =>
              handleInputChange('menstrualCycleLength', parseFloat(value))
            }
            value={inputs.menstrualCycleLength}
            readOnly={readOnly}
            type="number"
            name="Length Of Menstrual Cycle"
            title="Length Of Menstrual Cycle"
            fullWidth
            placeholder="Enter Days"
            withTag
            tag={<UnitTag text="Days" />}
          />
        </SelectWrapper>
      </InputRow>
      <InputRow>
        <SelectWrapper>
          <TextInput
            onChange={({ target: { value } }) =>
              handleInputChange('menstrualFlowDuration', parseFloat(value))
            }
            value={inputs.menstrualFlowDuration}
            readOnly={readOnly}
            type="number"
            name="Duration Of Menstrual Flow"
            title="Duration Of Menstrual Flow"
            fullWidth
            placeholder="Enter Days"
            withTag
            isRequired
            tag={<UnitTag text="Days" />}
          />
        </SelectWrapper>
        <SelectWrapper padded>
          <DatePicker
            label="Last Menstrual Period (LMP)"
            withBorderRadius
            onChange={(date) => (!readOnly ? handleInputChange('lastMenstrualPeriod', date) : null)}
            value={inputs.lastMenstrualPeriod}
            readOnly={readOnly}
            type="DateOnly"
          />
        </SelectWrapper>
      </InputRow>
      <InputRow>
        <SelectWrapper>
          <Dropdown
            title="Menstrual Flow"
            options={MENSTRUAL_FLOW_OPTIONS}
            onChange={({ value }) => (!readOnly ? handleInputChange('menstrualFlow', value) : null)}
            value={inputs.menstrualFlow}
            readOnly={readOnly}
            placeholder="Select One"
            isRequired
          />
        </SelectWrapper>
        <SelectWrapper>
          <Dropdown
            title="Contraceptive Use"
            options={QUESTION_OPTIONS}
            onChange={({ value }) =>
              !readOnly ? handleInputChange('contraceptiveUse', value) : null
            }
            value={inputs.contraceptiveUse}
            readOnly={readOnly}
            placeholder="Select One"
          />
        </SelectWrapper>
      </InputRow>
      <InputRow>
        {inputs.contraceptiveUse === 'yes' && (
          <SelectWrapper>
            <TextInput
              onChange={({ target: { value } }) => handleInputChange('contraceptiveType', value)}
              value={inputs.contraceptiveType}
              readOnly={readOnly}
              name="Contraceptive Type"
              title="Contraceptive Type"
              fullWidth
              placeholder="Enter Type"
            />
          </SelectWrapper>
        )}
        <SelectWrapper>
          <Dropdown
            title="Past Miscarriage/Abortion"
            options={QUESTION_OPTIONS}
            onChange={({ value }) =>
              !readOnly ? handleInputChange('miscarriageOrAbortion', value) : null
            }
            value={inputs.miscarriageOrAbortion}
            readOnly={readOnly}
            placeholder="Select One"
          />
        </SelectWrapper>
        {inputs.miscarriageOrAbortion === 'yes' && (
          <SelectWrapper>
            <Dropdown
              onChange={({ value }) =>
                !readOnly
                  ? handleInputChange('miscarriageOrAbortionCount', parseFloat(value))
                  : null
              }
              value={inputs.miscarriageOrAbortionCount}
              options={rangeOptionsGenerator(0, 99)}
              readOnly={readOnly}
              placeholder="Number of Miscarriage/Abortion"
              title="Number of Miscarriage/Abortion"
            />
          </SelectWrapper>
        )}
      </InputRow>
      <InputRow>
        <SelectWrapper fullWidth>
          <TextArea
            name="additionalNote"
            label="Additional Note"
            fullWidth
            readOnly={readOnly}
            onChange={({ target: { value } }) => handleInputChange('additionalNote', value)}
            value={inputs.additionalNote}
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
            disabled={disabled || !fieldsAreValid('gynecologicHistory', inputs)}
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

const GynecologicHistories = ({ data }) => (
  <ContentWrapper noTopPadding>
    {data.map((input: GynecologicHistory, index: number) => (
      <GynecologicHistoryForms input={input} key={input?.id} index={index} />
    ))}
  </ContentWrapper>
);

export default GynecologicHistories;
