import DatePicker from 'dashboard-app/common/DatePicker';
import { MultiIcdInput } from 'dashboard-app/common/IcdInput';
import MultiAction from 'dashboard-app/common/MultiActions';
import Prompter from 'dashboard-app/common/Prompter';
import RecordHistory from 'dashboard-app/common/RecordHistory';
import { Content, ContentWrapper, InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { FamilyHistory } from 'graphql-types/FamilyHistory';
import useUpdateProfile from 'hooks/useUpdateProfile';
import React from 'react';
import Dropdown from '../common/Dropdown';
import TextArea from '../common/TextArea';
import TextInput from '../common/TextInput';
import {
  BLOODGROUP_OPTIONS,
  GENDER_OPTIONS,
  RELATIONSHIP_OPTIONS,
  TITLE_OPTIONS,
} from '../utils/constants';

const FamilyHistoryForms = ({ input, index }) => {
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
  } = useUpdateProfile({ input, index, tab: 'Family History' });

  return (
    <Content padded key={`family-history-${index}`}>
      <InputRow>
        <SelectWrapper>
          <Dropdown
            title="Title"
            onChange={({ value }) => (!readOnly ? handleInputChange('title', value) : null)}
            readOnly={readOnly}
            options={TITLE_OPTIONS}
            placeholder="Select One"
            value={inputs.title}
            creatable
          />
        </SelectWrapper>
        <SelectWrapper>
          <TextInput
            onChange={({ target: { value } }) => handleInputChange('firstName', value)}
            readOnly={readOnly}
            name="firstName"
            title="First Name"
            fullWidth
            placeholder="Enter First Name"
            value={inputs.firstName}
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <SelectWrapper>
          <TextInput
            onChange={({ target: { value } }) => handleInputChange('middleName', value)}
            readOnly={readOnly}
            name="middleName"
            title="Middle Name"
            fullWidth
            placeholder="Enter Middle Name"
            value={inputs.middleName}
          />
        </SelectWrapper>
        <SelectWrapper>
          <TextInput
            onChange={({ target: { value } }) => handleInputChange('lastName', value)}
            readOnly={readOnly}
            name="lastName"
            title="Last Name"
            fullWidth
            placeholder="Enter Last Name"
            value={inputs.lastName}
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <SelectWrapper>
          <Dropdown
            title="Gender"
            onChange={({ value }) => (!readOnly ? handleInputChange('gender', value) : null)}
            readOnly={readOnly}
            options={GENDER_OPTIONS}
            placeholder="Select One"
            value={inputs.gender}
            creatable
          />
        </SelectWrapper>
        <SelectWrapper padded>
          <DatePicker
            label="Date Of Birth"
            onChange={(date) => (!readOnly ? handleInputChange('dateOfBirth', date) : null)}
            readOnly={readOnly}
            placeholder="Enter Date Of Birth"
            value={inputs.dateOfBirth}
          />
        </SelectWrapper>
      </InputRow>
      <InputRow>
        <SelectWrapper>
          <Dropdown
            title="Blood Group"
            onChange={({ value }) => (!readOnly ? handleInputChange('bloodGroup', value) : null)}
            readOnly={readOnly}
            options={BLOODGROUP_OPTIONS}
            placeholder="Select One"
            value={inputs.bloodGroup}
          />
        </SelectWrapper>
        <SelectWrapper>
          <Dropdown
            title="Relationship"
            onChange={({ value }) => (!readOnly ? handleInputChange('relationship', value) : null)}
            readOnly={readOnly}
            options={RELATIONSHIP_OPTIONS}
            placeholder="Select One"
            value={inputs.relationship}
            creatable
            isRequired
          />
        </SelectWrapper>
      </InputRow>
      <InputRow>
        <MultiIcdInput
          onChange={(value) => handleInputChange('condition', value)}
          readOnly={readOnly}
          fieldPath="condition"
          placeholder="Enter Condition"
          values={inputs.condition}
          label="Condition"
          isRequired
        />
      </InputRow>

      <InputRow>
        <TextArea
          name="additionalNote"
          label="Additional Note"
          fullWidth
          readOnly={readOnly}
          onChange={({ target: { value } }) => handleInputChange('additionalNote', value)}
          value={inputs.additionalNote}
        />
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
            disabled={disabled || !fieldsAreValid('familyHistory', inputs)}
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

const FamilyHistories = ({ data }) => (
  <ContentWrapper noTopPadding>
    {data.map((input: FamilyHistory, index: number) => (
      <FamilyHistoryForms input={input} key={input?.id} index={index} />
    ))}
  </ContentWrapper>
);

export default FamilyHistories;
