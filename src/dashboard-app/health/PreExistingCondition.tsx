import DatePicker from 'dashboard-app/common/DatePicker';
import DurationInput from 'dashboard-app/common/DurationInput';
import IcdInput from 'dashboard-app/common/IcdInput';
import MultiAction from 'dashboard-app/common/MultiActions';
import Prompter from 'dashboard-app/common/Prompter';
import RecordHistory from 'dashboard-app/common/RecordHistory';
import TextArea from 'dashboard-app/common/TextArea';
import { Content, ContentWrapper, InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { PreExistingCondition } from 'graphql-types/PreExistingCondition';
import useUpdateProfile from 'hooks/useUpdateProfile';
import React from 'react';

const PreExistingConditionForm = ({ input, index }) => {
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
  } = useUpdateProfile({ input, index, tab: 'Pre-existing Condition' });

  return (
    <Content padded key={`pre-existing-condition-${index}`}>
      <InputRow>
        <SelectWrapper fullWidth>
          <IcdInput
            handleInputChange={(fieldPath, value) => handleInputChange(fieldPath, value)}
            readOnly={readOnly}
            fieldPath="condition"
            placeholder="Enter Condition"
            value={inputs.condition}
            label="Condition"
            isRequired
          />
        </SelectWrapper>
      </InputRow>
      <InputRow>
        <SelectWrapper padded>
          <DatePicker
            label="Diagnosis Date and Time"
            withBorderRadius
            onChange={(diagnosedDate) =>
              !readOnly ? handleInputChange('diagnosedDate', diagnosedDate) : null
            }
            value={inputs.diagnosedDate}
            readOnly={readOnly}
            placeholderText="Select Date and Time"
            isRequired
          />
        </SelectWrapper>
        <SelectWrapper padded>
          <DurationInput
            title="Duration (YY:MM:DD)"
            onChange={(value) => handleInputChange('duration', value)}
            readOnly={readOnly}
            durationValue={inputs.duration}
            isYear
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <SelectWrapper fullWidth>
          <TextArea
            name="additionalNote"
            label="Additional Note"
            fullWidth
            onChange={({ target: { value } }) => handleInputChange('additionalNote', value)}
            readOnly={readOnly}
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
            disabled={disabled || !fieldsAreValid('preExistingCondition', inputs)}
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

const PreExistingConditions = ({ data }) => (
  <ContentWrapper noTopPadding>
    {data.map((input: PreExistingCondition, index: number) => (
      <PreExistingConditionForm input={input} key={input?.id} index={index} />
    ))}
  </ContentWrapper>
);

export default PreExistingConditions;
