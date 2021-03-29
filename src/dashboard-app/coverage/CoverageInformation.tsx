import AddressInput from 'dashboard-app/common/AddressInput';
import DatePicker from 'dashboard-app/common/DatePicker';
import Dropdown from 'dashboard-app/common/Dropdown';
import MultiAction from 'dashboard-app/common/MultiActions';
import Prompter from 'dashboard-app/common/Prompter';
import RecordHistory from 'dashboard-app/common/RecordHistory';
import TextInput from 'dashboard-app/common/TextInput';
import { Content, ContentWrapper, InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import { HMO_OPTIONS, MEMBER_STATUS_OPTIONS } from 'dashboard-app/utils/constants';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { Hmo } from 'graphql-types/Hmo';
import useUpdateProfile from 'hooks/useUpdateProfile';
import React from 'react';

export interface FormProps {
  input: Hmo;
  index: number;
}

const Form: React.FC<FormProps> = ({ index, input }) => {
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
  } = useUpdateProfile({ input, index, tab: 'Coverage Information' });

  const statusMapper = {
    ACTIVE: 'Active',
    INACTIVE: 'Inactive',
  };

  return (
    <Content padded>
      <InputRow>
        <SelectWrapper>
          <Dropdown
            value={inputs.hmoProvider}
            options={HMO_OPTIONS}
            title="Health Management Organization (HMO) Name"
            readOnly={readOnly}
            onChange={({ value }) => (!readOnly ? handleInputChange('hmoProvider', value) : null)}
            placeholder="Enter HMO Name"
            isRequired
            creatable
          />
        </SelectWrapper>

        <TextInput
          name="memberNumber"
          value={inputs.memberNumber}
          title="Member Number"
          readOnly={readOnly}
          onChange={({ target: { value } }) => handleInputChange('memberNumber', value)}
          placeholder="Enter Member Number"
        />
      </InputRow>

      <InputRow>
        <TextInput
          name="memberPlan"
          value={inputs.memberPlan}
          title="Member Plan"
          readOnly={readOnly}
          onChange={({ target: { value } }) => handleInputChange('memberPlan', value)}
          placeholder="Enter Member Plan"
        />
        <SelectWrapper padded>
          <DatePicker
            label="Member Start Date"
            withBorderRadius
            readOnly={readOnly}
            onChange={(date) => (!readOnly ? handleInputChange('memberStartDate', date) : null)}
            value={inputs.memberStartDate}
            type="DateOnly"
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <SelectWrapper>
          <Dropdown
            onChange={({ value }) => (!readOnly ? handleInputChange('memberStatus', value) : null)}
            readOnly={readOnly}
            options={MEMBER_STATUS_OPTIONS}
            value={statusMapper[input.memberStatus || '']}
            placeholder="Select Member Status"
            title="Member Status"
            isRequired
          />
        </SelectWrapper>
        <TextInput
          name="employeeNumber"
          value={inputs.employeeNumber}
          title="Employee Number"
          readOnly={readOnly}
          onChange={({ target: { value } }) => handleInputChange('employeeNumber', value)}
          placeholder="Enter Employee Number"
        />
      </InputRow>
      <InputRow>
        <TextInput
          name="companyName"
          value={inputs.companyName}
          title="Company Name"
          readOnly={readOnly}
          onChange={({ target: { value } }) => handleInputChange('companyName', value)}
          placeholder="Enter Company Name"
        />
        <div className="google-address-wrapper-row">
          <AddressInput
            label="Company Address"
            value={inputs.companyAddress}
            readOnly={readOnly}
            handleInputChange={(fieldPath, value) => handleInputChange('companyAddress', value)}
            placeholder="Enter Company Address"
            fieldPath="companyAddress"
          />
        </div>
      </InputRow>
      <InputRow>
        <TextInput
          name="primaryProviderName"
          value={inputs.primaryProviderName}
          title="Primary Provider Name"
          readOnly={readOnly}
          onChange={({ target: { value } }) => handleInputChange('primaryProviderName', value)}
          placeholder="Enter Primary Provider Name"
        />
        <div className="google-address-wrapper-row">
          <AddressInput
            label="Contact Address"
            placeholder="Enter Contact Address"
            value={inputs.primaryProviderAddress}
            handleInputChange={(fieldPath, value) => handleInputChange(fieldPath, value)}
            fieldPath="primaryProviderAddress"
            readOnly={readOnly}
          />
        </div>
      </InputRow>

      <InputRow>
        <TextInput
          name="secondaryProviderName"
          value={inputs.secondaryProviderName}
          title="Secondary Provider Name"
          readOnly={readOnly}
          onChange={({ target: { value } }) => handleInputChange('secondaryProviderName', value)}
          placeholder="Secondary Provider Name"
        />
        <div className="google-address-wrapper-row">
          <AddressInput
            label="Contact Address"
            placeholder="Enter Contact Address"
            value={inputs.secondaryProviderAddress}
            handleInputChange={(fieldPath, value) => handleInputChange(fieldPath, value)}
            fieldPath="secondaryProviderAddress"
            readOnly={readOnly}
          />
        </div>
      </InputRow>

      <InputRow>
        <TextInput
          name="tertiaryProviderName"
          value={inputs.tertiaryProviderName}
          readOnly={readOnly}
          title="Tertiary Provider Name"
          onChange={({ target: { value } }) => handleInputChange('tertiaryProviderName', value)}
          placeholder="Tertiary Provider Name"
        />
        <div className="google-address-wrapper-row">
          <AddressInput
            label="Contact Address"
            placeholder="Enter Contact Address"
            value={inputs.tertiaryProviderAddress}
            handleInputChange={(fieldPath, value) => handleInputChange(fieldPath, value)}
            fieldPath="tertiaryProviderAddress"
            readOnly={readOnly}
          />
        </div>
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
            disabled={disabled || !fieldsAreValid('coverage', inputs)}
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

export interface CoverageInformationProps {
  data: any;
}

const CoverageInformation: React.FC<CoverageInformationProps> = ({ data }) => (
  <ContentWrapper noTopPadding>
    {data.map((input: Hmo, i: number) => (
      <Form input={input} key={input?.id} index={i} />
    ))}
  </ContentWrapper>
);

export default CoverageInformation;
