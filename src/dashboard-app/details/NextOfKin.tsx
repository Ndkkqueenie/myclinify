import AddressInput from 'dashboard-app/common/AddressInput';
import { FlaggedAuthenticationInput } from 'dashboard-app/common/AuthenticationInput';
import Dropdown from 'dashboard-app/common/Dropdown';
import LoaderOrError from 'dashboard-app/common/LoaderOrError';
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
import { NextOfKin } from 'graphql-types/NextOfKin';
import useFetchProfileInfoData from 'hooks/useFetchProfileInfoData';
import useUpdateProfile from 'hooks/useUpdateProfile';
import React from 'react';

const NextOfKinForm = ({ input, index }) => {
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
  } = useUpdateProfile({ input, index, tab: 'Next of Kin' });

  return (
    <Content padded key={`next-of-kin-${index}`}>
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
          readOnly={readOnly}
          onChange={({ target: { value } }) => handleInputChange('lastName', value)}
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
      </InputRow>
      <InputRow>
        <SelectWrapper>
          <Dropdown
            onChange={({ value }) => (!readOnly ? handleInputChange('relationship', value) : null)}
            options={RELATIONSHIP_OPTIONS}
            readOnly={readOnly}
            value={inputs.relationship}
            placeholder="Select Relationship"
            title="Relationship"
            creatable
            isRequired
          />
        </SelectWrapper>

        <TextInput
          name="occupation"
          value={inputs.occupation}
          title="Occupation"
          readOnly={readOnly}
          onChange={({ target: { value } }) => handleInputChange('occupation', value)}
          placeholder="Enter Occupation"
        />
      </InputRow>
      <InputRow>
        <FlaggedAuthenticationInput
          name="phoneNumber"
          value={inputs?.phoneNumber?.value || '+234'}
          onChange={({ target: { value } }) =>
            handleInputChange('phoneNumber', { ...input.phoneNumber, value })
          }
          label="Primary Phone Number"
          placeholder="Enter Primary Phone Number"
          countryName={inputs?.phoneNumber?.countryName || 'Nigeria'}
          smallHeight
          readOnly={readOnly}
          changeCountryName={(countryName, countryCode) =>
            handleInputChange('phoneNumber', { value: countryCode, countryName, countryCode })
          }
          fullBorder
          withBorderRadius
          allowFlagSwitch
          noMargin
          fullWidth
          padded
          halfWidth
        />
        <TextInput
          name="email"
          readOnly={readOnly}
          value={inputs.email}
          title="Primary Email Address"
          onChange={({ target: { value } }) => handleInputChange('email', value)}
          placeholder="Enter Primary Email Address"
        />
      </InputRow>
      <InputRow>
        <FlaggedAuthenticationInput
          name="phoneNumberAlt"
          value={inputs?.phoneNumberAlt?.value || '+234'}
          onChange={({ target: { value } }) =>
            handleInputChange('phoneNumberAlt', { ...input.phoneNumberAlt, value })
          }
          changeCountryName={(countryName, countryCode) =>
            handleInputChange('phoneNumberAlt', { value: countryCode, countryName, countryCode })
          }
          label="Secondary Phone Number"
          placeholder="Enter Secondary Phone Number"
          countryName={inputs?.phoneNumberAlt?.countryName || 'Nigeria'}
          smallHeight
          readOnly={readOnly}
          fullBorder
          withBorderRadius
          noMargin
          fullWidth
          padded
          halfWidth
        />
        <TextInput
          name="emailAlt"
          readOnly={readOnly}
          value={inputs.emailAlt}
          title="Secondary Email Address"
          onChange={({ target: { value } }) => handleInputChange('emailAlt', value)}
          placeholder="Enter Secondary Email Address"
        />
      </InputRow>
      <AddressInput
        label="Contact Address"
        placeholder="Enter Contact Address"
        value={inputs.address || ''}
        handleInputChange={(fieldPath, value) => handleInputChange(fieldPath, value)}
        fieldPath="address"
        readOnly={readOnly}
      />
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
            disabled={disabled || !fieldsAreValid('nextOfKin', inputs)}
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

export interface NextOfKinProps {
  hook: any;
}

const NextOfKins: React.FC<NextOfKinProps> = () => {
  const { profileInfos, fetchingOrError, loading } = useFetchProfileInfoData('Next of Kin');

  if (fetchingOrError) return <LoaderOrError loading={loading} />;

  return (
    <ContentWrapper>
      {profileInfos.map((input: NextOfKin, index: number) => (
        <NextOfKinForm input={input} key={input?.id} index={index} />
      ))}
    </ContentWrapper>
  );
};

export default NextOfKins;
