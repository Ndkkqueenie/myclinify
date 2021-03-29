import { FlaggedAuthenticationInput } from 'dashboard-app/common/AuthenticationInput';
import Button from 'dashboard-app/common/Button';
import DatePicker from 'dashboard-app/common/DatePicker';
import Divider from 'dashboard-app/common/Divider';
import Dropdown from 'dashboard-app/common/Dropdown';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import {
  ButtonRow,
  Content,
  ContentWrapper,
  InputRow,
  SelectWrapper,
} from 'dashboard-app/common/Wrapper';
import {
  APPOINTMENT_TYPE_OPTIONS,
  BLOODGROUP_OPTIONS,
  GENDER_OPTIONS,
  PAYMENT_OPTIONS,
  PRIORITY_CONSULTATION_OPTIONS,
  SPECIALTY_OPTIONS,
  TITLE_OPTIONS,
} from 'dashboard-app/utils/constants';
import useWaitingList from 'hooks/useWaitingList';
import React, { FC, Fragment } from 'react';

interface AssignPatientFormProps {
  defaultValues?: any;
  path?: string;
}

const PatientDetails = ({ defaultValues, path = 'defaultProfile' }) => (
  <>
    <SelectWrapper>
      <Dropdown
        onChange={() => {}}
        readOnly
        options={TITLE_OPTIONS}
        value={defaultValues[path]?.personalInformation?.title}
        placeholder="Select Title"
        title="Title"
        creatable
      />
    </SelectWrapper>
    <TextInput
      name="firstName"
      value={defaultValues[path]?.personalInformation?.firstName}
      title="First Name"
      onChange={() => {}}
      readOnly
      placeholder="Enter First Name"
    />

    <TextInput
      name="middleName"
      value={defaultValues[path]?.personalInformation?.middleName}
      title="Middle Name"
      onChange={() => {}}
      readOnly
      placeholder="Enter Middle Name"
    />

    <TextInput
      name="lastName"
      value={defaultValues[path]?.personalInformation?.lastName}
      title="Last Name"
      onChange={() => {}}
      readOnly
      placeholder="Enter Last Name"
    />
    <SelectWrapper>
      <Dropdown
        onChange={() => {}}
        readOnly
        options={GENDER_OPTIONS}
        value={defaultValues[path]?.personalInformation?.gender}
        placeholder="Select Gender"
        title="Gender"
        creatable
      />
    </SelectWrapper>

    <SelectWrapper padded>
      <DatePicker
        label="Date of Birth"
        withBorderRadius
        onChange={() => {}}
        readOnly
        value={defaultValues[path]?.personalInformation?.dateOfBirth}
        placeholderText="Select Date"
        type="DateOnly"
      />
    </SelectWrapper>

    <SelectWrapper>
      <Dropdown
        onChange={() => {}}
        options={BLOODGROUP_OPTIONS}
        readOnly
        value={defaultValues[path]?.personalInformation?.bloodGroup}
        placeholder="Select Blood Group"
        title="Blood Group"
      />
    </SelectWrapper>

    <FlaggedAuthenticationInput
      value={`+${
        path === 'defaultProfile'
          ? defaultValues?.phoneNumber
          : defaultValues[path]?.user?.phoneNumber
      }`}
      label="Primary Phone Number"
      name="phoneNumber"
      placeholder="Enter Phone Number"
      countryName={
        path === 'defaultProfile' ? defaultValues?.country : defaultValues[path]?.user?.country
      }
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
  </>
);

interface WaiterFormProps {
  patient?: string;
  waitingListHook: any;
  hideCheckoutButton?: boolean;
  defaultValues?: any;
  isOnWaitingList?: boolean;
  highlightedRecords?: string[];
  checkOutSinglePatient: (id: string) => void;
  items: any;
}

const WaiterForm: FC<WaiterFormProps> = ({
  patient,
  hideCheckoutButton,
  defaultValues,
  isOnWaitingList,
  highlightedRecords,
  checkOutSinglePatient = () => {},
  items,
}) => {
  const {
    mutationLoading,
    handleInputChange,
    input,
    specialistOptions,
    assignButtonIsDisabled,
    assignAction,
    assignActionText,
  } = useWaitingList({
    patient,
    defaultValues,
    isOnWaitingList,
    highlightedRecords,
    items,
    isOnModal: true,
  });

  return (
    <>
      <SelectWrapper padded>
        <DatePicker
          label="Arrival Date And Time"
          withBorderRadius
          onChange={(date) => handleInputChange('arrivalDateTime', date)}
          value={input?.arrivalDateTime || ''}
          placeholderText="Select Date"
          type="DateTime"
        />
      </SelectWrapper>

      <SelectWrapper>
        <Dropdown
          onChange={({ value }) => handleInputChange('priority', value)}
          options={PRIORITY_CONSULTATION_OPTIONS}
          value={input.priority}
          placeholder="Enter Priority reason"
          title="Priority"
        />
      </SelectWrapper>

      <SelectWrapper>
        <Dropdown
          onChange={({ value }) => handleInputChange('paymentType', value)}
          options={PAYMENT_OPTIONS}
          value={input.paymentType}
          placeholder="Select One"
          title="Payment Type"
        />
      </SelectWrapper>

      <SelectWrapper>
        <Dropdown
          onChange={({ value }) => handleInputChange('visitType', value)}
          options={APPOINTMENT_TYPE_OPTIONS}
          value={input.visitType}
          placeholder="Select One"
          title="Visit Type"
        />
      </SelectWrapper>

      <TextArea
        fullWidth
        value={input.visitationReason}
        label="Reason For Visitation"
        name="reason"
        onChange={({ target: { value } }) => handleInputChange('visitationReason', value)}
      />

      <SelectWrapper>
        <Dropdown
          onChange={({ value }) => handleInputChange('specialtyAssignedTo', value)}
          options={SPECIALTY_OPTIONS}
          value={input.specialtyAssignedTo}
          placeholder="Select One"
          title="Specialty"
        />
      </SelectWrapper>

      <SelectWrapper>
        <Dropdown
          onChange={({ id }) => handleInputChange('assignedTo', id)}
          options={specialistOptions}
          value={
            specialistOptions?.filter(({ id }) => id === input.assignedTo)[0]?.value ||
            defaultValues?.assignedTo?.fullName
          }
          placeholder="Select One"
          title="Assign To"
        />
      </SelectWrapper>
      {!hideCheckoutButton && defaultValues.status !== 'Checked Out' ? (
        <div className="row-button-group">
          <Button
            text="Check Out"
            onClick={() => checkOutSinglePatient(defaultValues?.id)}
            disabled={mutationLoading}
          />
          <Button
            text={
              defaultValues.status === 'Checked In and Unassigned' ? 'Assign' : assignActionText
            }
            onClick={assignAction}
            disabled={mutationLoading || assignButtonIsDisabled}
          />
        </div>
      ) : (
        <ButtonRow position="end">
          <Button
            text={assignActionText}
            onClick={assignAction}
            disabled={mutationLoading || assignButtonIsDisabled}
          />
        </ButtonRow>
      )}
    </>
  );
};

interface AssignPatientFormProps {
  defaultValues?: any;
  defaultValuesPath?: string;
  selectedWaiters?: string[];
  waitingListHook: any;
  hideCheckoutButton?: boolean;
  isOnWaitingList?: boolean;
  checkOutSinglePatient?: (id: string) => void;
  items?: any;
}

const AssignPatientForm: FC<AssignPatientFormProps> = ({
  defaultValues,
  defaultValuesPath,
  selectedWaiters = [],
  waitingListHook,
  hideCheckoutButton,
  isOnWaitingList,
  checkOutSinglePatient = () => {},
  items,
}) => (
  <div className="assign-patient-form">
    <ContentWrapper>
      <Content>
        <InputRow>
          {defaultValues.map((value, i) => (
            <Fragment key={value.id}>
              <PatientDetails defaultValues={value} path={defaultValuesPath} />
              <WaiterForm
                patient={value?.defaultProfile?.id}
                waitingListHook={waitingListHook}
                hideCheckoutButton={hideCheckoutButton}
                defaultValues={value}
                isOnWaitingList={isOnWaitingList}
                highlightedRecords={selectedWaiters}
                checkOutSinglePatient={checkOutSinglePatient}
                items={items}
              />
              {i !== defaultValues.length - 1 && (
                <SelectWrapper fullWidth padded>
                  <Divider />
                </SelectWrapper>
              )}
            </Fragment>
          ))}
        </InputRow>
      </Content>
    </ContentWrapper>
  </div>
);

export default AssignPatientForm;
