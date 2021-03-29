import AddressInput from 'dashboard-app/common/AddressInput';
import { FlaggedAuthenticationInput } from 'dashboard-app/common/AuthenticationInput';
import Button, { OutlineButton } from 'dashboard-app/common/Button';
import DatePicker from 'dashboard-app/common/DatePicker';
import Dropdown from 'dashboard-app/common/Dropdown';
import FormAction from 'dashboard-app/common/FormActions';
import TextInput from 'dashboard-app/common/TextInput';
import {
  ButtonRow,
  Content,
  ContentWrapper,
  ExtraContent,
  InputRow,
  SelectWrapper,
} from 'dashboard-app/common/Wrapper';
import { userType } from 'dashboard-app/utils/authTracker';
import {
  BLOODGROUP_OPTIONS,
  GENDER_OPTIONS,
  GENOTYPE_OPTIONS,
  HEIGHT_OPTIONS,
  TITLE_OPTIONS,
  WEIGHT_OPTIONS,
} from 'dashboard-app/utils/constants';
import { PersonalInformationInput } from 'graphql-types/globalTypes';
import React from 'react';

export interface PersonalInformationProps {
  data: any;
  handleInputChange: (field: string, value: any) => void;
  tab?: string;
  updateProfileDetails: () => void;
  readOnly?: boolean;
  inputs: PersonalInformationInput;
  toggleAllowEdit: () => void;
  actionText: string;
  disabled: boolean;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({
  data,
  handleInputChange,
  updateProfileDetails,
  actionText,
  disabled,
  readOnly,
  inputs,
  toggleAllowEdit,
}) => {
  const frontDeskDashboardReg = userType() === 'OrganizationFrontDeskOfficer';

  return (
    <ContentWrapper noTopPadding>
      <Content>
        <InputRow>
          <SelectWrapper>
            <Dropdown
              onChange={({ value }) => (!readOnly ? handleInputChange('title', value) : null)}
              readOnly={readOnly}
              options={TITLE_OPTIONS}
              value={inputs.title}
              placeholder="Select Title"
              title="Title"
              creatable
            />
          </SelectWrapper>
          <TextInput
            name="firstName"
            value={inputs.firstName}
            title="First Name"
            onChange={({ target: { value } }) => handleInputChange('firstName', value)}
            readOnly={readOnly}
            placeholder="Enter First Name"
            isRequired={frontDeskDashboardReg}
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
            isRequired={frontDeskDashboardReg}
          />
        </InputRow>
        <InputRow>
          <SelectWrapper>
            <Dropdown
              onChange={({ value }) => (!readOnly ? handleInputChange('gender', value) : null)}
              readOnly={readOnly}
              options={GENDER_OPTIONS}
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
              placeholder="Select Blood Group"
              title="Blood Group"
            />
          </SelectWrapper>

          <SelectWrapper>
            <Dropdown
              onChange={({ value }) => (!readOnly ? handleInputChange('genoType', value) : null)}
              options={GENOTYPE_OPTIONS}
              readOnly={readOnly}
              value={inputs.genoType}
              placeholder="Select Genotype"
              title="Genotype"
              isRequired={frontDeskDashboardReg}
            />
          </SelectWrapper>
        </InputRow>
        <InputRow>
          <SelectWrapper>
            <TextInput
              name="weight"
              value={inputs.weight}
              onChange={({ target: { value } }) => handleInputChange('weight', parseInt(value, 10))}
              readOnly={readOnly}
              title="Weight"
              fullWidth
              withTag
              type="number"
              tag={
                <Dropdown
                  onChange={({ value }) =>
                    !readOnly ? handleInputChange('weightUnit', value) : null
                  }
                  options={WEIGHT_OPTIONS}
                  readOnly={readOnly}
                  value={inputs.weightUnit}
                  placeholder="Unit"
                  withTag
                />
              }
              placeholder="Enter Weight"
            />
          </SelectWrapper>
          <SelectWrapper>
            <TextInput
              name="height"
              value={inputs.height}
              onChange={({ target: { value } }) => handleInputChange('height', parseFloat(value))}
              readOnly={readOnly}
              title="Height"
              fullWidth
              withTag
              tag={
                <Dropdown
                  onChange={({ value }) =>
                    !readOnly ? handleInputChange('heightUnit', value) : null
                  }
                  readOnly={readOnly}
                  options={HEIGHT_OPTIONS}
                  value={inputs.heightUnit}
                  placeholder="Unit"
                  withTag
                />
              }
              placeholder="Enter Height"
            />
          </SelectWrapper>
        </InputRow>

        <InputRow>
          <FlaggedAuthenticationInput
            value={`+${data?.user?.phoneNumber}`}
            label="Primary Phone Number"
            name="phoneNumber"
            placeholder="Enter Phone Number"
            countryName={data?.user?.country}
            readOnly
            smallHeight
            withBorderRadius
            noMargin
            fullWidth
            padded
            halfWidth
            disabled
            allowFlagSwitch
            fullBorder
          />
          <TextInput
            name="email"
            value={data?.user?.nonCorporateEmail}
            title="Primary Email Address"
            isDisabled
            readOnly
            placeholder="Enter Email Address"
            isRequired={frontDeskDashboardReg}
          />
        </InputRow>

        <InputRow>
          <FlaggedAuthenticationInput
            name="secondaryPhoneNumber"
            value={inputs?.secondaryPhoneNumber?.value || '+234'}
            onChange={({ target: { value } }) =>
              handleInputChange('secondaryPhoneNumber', { ...inputs.secondaryPhoneNumber, value })
            }
            changeCountryName={(countryName, countryCode) =>
              handleInputChange('secondaryPhoneNumber', {
                value: countryCode,
                countryName,
                countryCode,
              })
            }
            label="Secondary Phone Number"
            placeholder="Enter Secondary Phone Number"
            countryName={inputs?.secondaryPhoneNumber?.countryName || 'Nigeria'}
            smallHeight
            readOnly={readOnly}
            withBorderRadius
            noMargin
            fullWidth
            padded
            halfWidth
            allowFlagSwitch
            fullBorder
          />
          <TextInput
            name="email"
            value={inputs.secondaryEmail}
            onChange={({ target: { value } }) => handleInputChange('secondaryEmail', value)}
            title="Secondary Email Address"
            readOnly={readOnly}
            placeholder="Enter Email Address"
          />
        </InputRow>
        <AddressInput
          label="Contact Address"
          placeholder="Enter Contact Address"
          value={inputs.address}
          handleInputChange={handleInputChange}
          fieldPath="address"
          readOnly={readOnly}
        />
      </Content>
      <ExtraContent noTopMargin>
        <ButtonRow>
          {!readOnly && actionText !== 'Save' && (
            <OutlineButton
              withBorderRadius
              withIcon={false}
              text="Cancel"
              onClick={toggleAllowEdit}
            />
          )}
          <Button
            text={readOnly ? 'Edit' : actionText}
            onClick={() => (readOnly ? toggleAllowEdit() : updateProfileDetails())}
            disabled={disabled}
          />
        </ButtonRow>
        {frontDeskDashboardReg && (
          <div>
            <FormAction
              isEdit={false}
              isEditActive={false}
              deleteAction={() => {}}
              cancelAction={() => {}}
              disabled={false}
              onAction={() => {}}
              actionText="Save"
            />
          </div>
        )}
      </ExtraContent>
    </ContentWrapper>
  );
};

export default PersonalInformation;
