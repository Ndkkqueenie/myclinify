import DatePicker from 'dashboard-app/common/DatePicker';
import Dropdown from 'dashboard-app/common/Dropdown';
import MultiAction from 'dashboard-app/common/MultiActions';
import Prompter from 'dashboard-app/common/Prompter';
import RecordHistory from 'dashboard-app/common/RecordHistory';
import TextArea from 'dashboard-app/common/TextArea';
import { Content, ContentWrapper, InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import { rangeOptionsGenerator } from 'dashboard-app/utils/constants';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { ObstetricHistory } from 'graphql-types/ObstetricHistory';
import useUpdateProfile from 'hooks/useUpdateProfile';
import React from 'react';

const ObstetricHistoryForm = ({ input, index }) => {
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
  } = useUpdateProfile({ input, index, tab: 'Obstetric History' });

  return (
    <Content padded key={`obstetric-history-${index}`}>
      <InputRow>
        <SelectWrapper padded>
          <DatePicker
            label="Last Child Birth"
            withBorderRadius
            onChange={(lastBirth) => (!readOnly ? handleInputChange('lastBirth', lastBirth) : null)}
            value={inputs.lastBirth}
            readOnly={readOnly}
            type="DateOnly"
            isRequired
          />
        </SelectWrapper>
        <SelectWrapper>
          <Dropdown
            options={rangeOptionsGenerator(0, 99)}
            readOnly={readOnly}
            onChange={({ value }) =>
              !readOnly ? handleInputChange('childrenCount', parseFloat(value)) : null
            }
            value={inputs.childrenCount}
            placeholder="Number of Children"
            title="Number of Children"
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
            disabled={disabled || !fieldsAreValid('obstetricHistory', inputs)}
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

const ObstetricHistories = ({ data }) => (
  <ContentWrapper noTopPadding>
    {data.map((input: ObstetricHistory, index: number) => (
      <ObstetricHistoryForm input={input} key={input?.id} index={index} />
    ))}
  </ContentWrapper>
);

export default ObstetricHistories;
