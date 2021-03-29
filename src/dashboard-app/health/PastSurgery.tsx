import DatePicker from 'dashboard-app/common/DatePicker';
import Dropdown from 'dashboard-app/common/Dropdown';
import MultiAction from 'dashboard-app/common/MultiActions';
import Prompter from 'dashboard-app/common/Prompter';
import RecordHistory from 'dashboard-app/common/RecordHistory';
import TextArea from 'dashboard-app/common/TextArea';
import { Content, ContentWrapper, InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import { SURGERY_OPTIONS } from 'dashboard-app/utils/constants';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { PastSurgery } from 'graphql-types/PastSurgery';
import useUpdateProfile from 'hooks/useUpdateProfile';
import React from 'react';

const PastSurgeryForm = ({ input, index }) => {
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
  } = useUpdateProfile({ input, index, tab: 'Past Surgical History' });

  return (
    <Content padded key={`past-surgery-${index}`}>
      <InputRow>
        <SelectWrapper>
          <Dropdown
            title="Surgery Type"
            options={SURGERY_OPTIONS}
            creatable
            onChange={({ value }) => (!readOnly ? handleInputChange('type', value) : null)}
            value={inputs.type}
            isRequired
            readOnly={readOnly}
            placeholder="Select One"
          />
        </SelectWrapper>
        <SelectWrapper padded>
          <DatePicker
            label="Operation Date"
            withBorderRadius
            onChange={(date) => (!readOnly ? handleInputChange('operationDate', date) : null)}
            value={inputs.operationDate}
            readOnly={readOnly}
            type="DateOnly"
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
            onChange={({ target: { value } }) => handleInputChange('additionalNote', value)}
            value={inputs.additionalNote}
            readOnly={readOnly}
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
            disabled={disabled || !fieldsAreValid('pastSurgery', inputs)}
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

const PastSurgeries = ({ data }) => (
  <ContentWrapper noTopPadding>
    {data.map((input: PastSurgery, index: number) => (
      <PastSurgeryForm input={input} key={input?.id} index={index} />
    ))}
  </ContentWrapper>
);

export default PastSurgeries;
