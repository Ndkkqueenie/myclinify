import DatePicker from 'dashboard-app/common/DatePicker';
import Dropdown from 'dashboard-app/common/Dropdown';
import MultiAction from 'dashboard-app/common/MultiActions';
import Prompter from 'dashboard-app/common/Prompter';
import RecordHistory from 'dashboard-app/common/RecordHistory';
import TextInput from 'dashboard-app/common/TextInput';
import { Content, ContentWrapper, InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import {
  BLOODGROUP_OPTIONS,
  GENDER_OPTIONS,
  RELATIONSHIP_OPTIONS,
  TITLE_OPTIONS,
} from 'dashboard-app/utils/constants';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { Dependent } from 'graphql-types/Dependent';
import useUpdateProfile from 'hooks/useUpdateProfile';
import React from 'react';

const DependentForm = ({ input, index }) => {
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
  } = useUpdateProfile({ input, index, tab: 'Dependents' });

  return (
    <Content padded key={`dependant-${index}`}>
      <InputRow>
        <SelectWrapper>
          <Dropdown
            value={inputs.title}
            title="Title"
            options={TITLE_OPTIONS}
            readOnly={readOnly}
            onChange={({ value }) => handleInputChange('title', value)}
            placeholder="Select Title"
            creatable
          />
        </SelectWrapper>
        <TextInput
          name="firstName"
          value={inputs.firstName}
          title="First Name"
          readOnly={readOnly}
          onChange={({ target: { value } }) => handleInputChange('firstName', value)}
          placeholder="Enter First Name"
          isRequired
        />
      </InputRow>

      <InputRow>
        <TextInput
          name="middleName"
          value={inputs.middleName}
          title="Middle Name"
          onChange={({ target: { value } }) => handleInputChange('middleName', value)}
          readOnly={readOnly}
          placeholder="Enter Middle Name"
        />

        <TextInput
          name="lastName"
          value={inputs.lastName}
          title="Last Name"
          onChange={({ target: { value } }) => handleInputChange('lastName', value)}
          readOnly={readOnly}
          placeholder="Enter Last Name"
          isRequired
        />
      </InputRow>

      <InputRow>
        <SelectWrapper>
          <Dropdown
            onChange={({ value }) => (!readOnly ? handleInputChange('gender', value) : null)}
            options={GENDER_OPTIONS}
            readOnly={readOnly}
            value={inputs.gender}
            placeholder="Select Gender"
            title="Gender"
            creatable
          />
        </SelectWrapper>
        <SelectWrapper padded>
          <DatePicker
            label="Date of Birth"
            withBorderRadius
            onChange={(date) => (!readOnly ? handleInputChange('dateOfBirth', date) : null)}
            readOnly={readOnly}
            value={inputs.dateOfBirth}
            placeholderText="Select Date"
            type="DateOnly"
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <SelectWrapper>
          <Dropdown
            onChange={({ value }) => (!readOnly ? handleInputChange('bloodGroup', value) : null)}
            options={BLOODGROUP_OPTIONS}
            readOnly={readOnly}
            value={inputs.bloodGroup}
            placeholder="Enter Blood Group"
            title="Blood Group"
          />
        </SelectWrapper>
        <SelectWrapper>
          <Dropdown
            onChange={({ value }) => (!readOnly ? handleInputChange('relationship', value) : null)}
            options={RELATIONSHIP_OPTIONS}
            value={inputs.relationship}
            readOnly={readOnly}
            placeholder="Select Relationship"
            title="Relationship"
            creatable
            isRequired
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
            disabled={disabled || !fieldsAreValid('dependents', inputs)}
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

const Dependents = ({ data }) => (
  <ContentWrapper noTopPadding>
    {data.map((input: Dependent, index: number) => (
      <DependentForm input={input} key={input?.id} index={index} />
    ))}
  </ContentWrapper>
);

export default Dependents;
