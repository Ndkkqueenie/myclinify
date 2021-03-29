import { setTitle } from 'apollo/operations';
import ActionSectionSectionWithAuditDetails from 'dashboard-app/common/ActionSectionWithAuditDetails';
import AddressInput from 'dashboard-app/common/AddressInput';
import DatePicker from 'dashboard-app/common/DatePicker';
import DocumentAttacher from 'dashboard-app/common/DocumentAttacher';
import Dropdown from 'dashboard-app/common/Dropdown';
import DurationInput from 'dashboard-app/common/DurationInput';
import { RecordForm } from 'dashboard-app/common/FormWrapper';
import LoaderOrError from 'dashboard-app/common/LoaderOrError';
import Prompter from 'dashboard-app/common/Prompter';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import { InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import {
  ANESTHESIA_OPTIONS,
  CLASS_CONSULTATION_OPTIONS,
  PATIENT_OPTIONS,
  PAYMENT_OPTIONS,
  PRIORITY_SURGERY_OPTIONS,
  QUESTION_OPTIONS,
  SURGERY_OPTIONS,
  SURGERY_SPECIALTY_OPTION,
} from 'dashboard-app/utils/constants';
import { NewSurgeryInput, SurgeryFilterInput, UserType } from 'graphql-types/globalTypes';
import useAddForm from 'hooks/useAddForm';
import useAutocalculate from 'hooks/useAutocalculate';
import React from 'react';
import {
  ADD_PATIENT_SURGERY,
  DELETE_SURGERY,
  GET_PATIENT_SURGERY_LIST,
  GET_SURGERY,
  UPDATE_SURGERY,
} from '../queries/surgery';

export interface AddSurgeryProps {
  userType?: UserType;
  hideLayout?: boolean;
  filterOptions?: SurgeryFilterInput;
  showTopNav?: boolean;
  noMargin?: boolean;
  fullWidth?: boolean;
  useWhiteBackground?: boolean;
  noTopPadding?: boolean;
  isOnModal?: boolean;
  defaultId?: string;
}

const AddSurgery: React.FC<AddSurgeryProps> = ({ filterOptions, isOnModal, defaultId }) => {
  const initialState: NewSurgeryInput = {
    surgeryDate: null,
    duration: null,
    requestedBy: '',
    type: '',
    specialty: '',
    priority: '',
    patientType: '',
    patientConsent: '',
    paymentType: '',
    rank: '',
    assistantSurgeon: '',
    facilityName: '',
    facilityAddress: '',
    operatedBy: '',
    operatingRoomNurse: '',
    anesthetistName: '',
    anesthesia: '',
    surgeryStartDate: null,
    surgeryEndDate: null,
    operationNote: '',
    postOperationNote: '',
    documentUrl: [],
  };

  const fetchQuery = GET_SURGERY;
  const addQuery = ADD_PATIENT_SURGERY;
  const updateQuery = UPDATE_SURGERY;
  const deleteQuery = DELETE_SURGERY;
  const cacheUpdateQuery = GET_PATIENT_SURGERY_LIST;
  const icon = 'Surgery';
  const defaultIsEdit = !isOnModal;
  const pluralRecordType = 'surgeries';
  const params = {
    initialState,
    fetchQuery,
    addQuery,
    updateQuery,
    deleteQuery,
    cacheUpdateQuery,
    icon,
    filterOptions,
    pluralRecordType,
    defaultIsEdit,
    defaultId,
  };

  const {
    writeAllowed,
    isEdit,
    startEdit,
    setStartEdit,
    handleInputChange,
    inputs,
    actionText,
    action,
    readOnly,
    id,
    fetchingData,
    errorFetching,
    disableActionButton,
    deleteRecordAction,
    showModalPrompt,
    toggle,
  } = useAddForm(params);

  React.useEffect(() => (isOnModal ? undefined : setTitle(`${isEdit ? '' : 'Add'} Procedure`)), []);

  useAutocalculate({
    yearDuration: false,
    value:
      inputs.surgeryStartDate && inputs.surgeryEndDate
        ? [inputs.surgeryStartDate, inputs.surgeryEndDate]
        : null,
    onDurationChange: (value) => handleInputChange('duration', value),
  });

  if (fetchingData || errorFetching) {
    return <LoaderOrError loading={fetchingData} />;
  }

  return (
    <RecordForm>
      <InputRow>
        <SelectWrapper padded>
          <DatePicker
            label="Operation Date and Time"
            withBorderRadius
            onChange={(date) => (writeAllowed ? handleInputChange('surgeryDate', date) : null)}
            value={inputs.surgeryDate}
            readOnly={readOnly}
            placeholderText="Select Date and Time"
          />
        </SelectWrapper>

        <SelectWrapper padded>
          <DurationInput
            title="Duration (HH:MM:SS)"
            readOnly
            onChange={(duration) => handleInputChange('duration', duration)}
            durationValue={inputs.duration}
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <SelectWrapper>
          <Dropdown
            title="Procedure Type"
            options={SURGERY_OPTIONS}
            creatable
            onChange={({ value }) => (writeAllowed ? handleInputChange('type', value) : null)}
            isRequired
            readOnly={readOnly}
            placeholder="Select One"
            value={inputs.type}
          />
        </SelectWrapper>
        <SelectWrapper>
          <Dropdown
            title="Priority"
            options={PRIORITY_SURGERY_OPTIONS}
            onChange={({ value }) => (writeAllowed ? handleInputChange('priority', value) : null)}
            readOnly={readOnly}
            placeholder="Enter Priority"
            value={inputs.priority}
            creatable
          />
        </SelectWrapper>
        <SelectWrapper>
          <Dropdown
            title="Patient Type"
            options={PATIENT_OPTIONS}
            creatable
            onChange={({ value }) =>
              writeAllowed ? handleInputChange('patientType', value) : null
            }
            readOnly={readOnly}
            placeholder="Select One"
            value={inputs.patientType}
          />
        </SelectWrapper>
        <SelectWrapper>
          <Dropdown
            title="Patient Consent"
            options={QUESTION_OPTIONS}
            onChange={({ value }) =>
              writeAllowed ? handleInputChange('patientConsent', value) : null
            }
            readOnly={readOnly}
            placeholder="Select One"
            value={inputs.patientConsent}
          />
        </SelectWrapper>
        <SelectWrapper>
          <Dropdown
            creatable
            title="Payment Type"
            options={PAYMENT_OPTIONS}
            onChange={({ value }) =>
              writeAllowed ? handleInputChange('paymentType', value) : null
            }
            placeholder="Enter Payment Type"
            value={inputs.paymentType}
            readOnly={readOnly}
          />
        </SelectWrapper>
        <SelectWrapper>
          <TextInput
            onChange={({ target: { value } }) => handleInputChange('reason', value)}
            name="reason"
            title="Indication (Reason)"
            fullWidth
            readOnly={readOnly}
            value={inputs.reason}
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <SelectWrapper>
          <TextInput
            name="requestedBy"
            title="Requested By"
            placeholder="Enter Doctor's Name"
            onChange={({ target: { value } }) => handleInputChange('requestedBy', value)}
            readOnly={readOnly}
            fullWidth
            value={inputs.requestedBy}
          />
        </SelectWrapper>
        <TextInput
          readOnly={readOnly}
          onChange={({ target: { value } }) => handleInputChange('operatedBy', value)}
          name="operatedBy"
          title="Surgeon's Name"
          placeholder="Enter Surgeon's Name"
          isRequired
          value={inputs.operatedBy}
        />
        <SelectWrapper>
          <Dropdown
            title="Surgeon's Specialty"
            options={SURGERY_SPECIALTY_OPTION}
            onChange={({ value }) => (writeAllowed ? handleInputChange('specialty', value) : null)}
            readOnly={readOnly}
            placeholder="Enter Surgeon's Specialty"
            value={inputs.specialty}
            isRequired
            creatable
          />
        </SelectWrapper>
        <SelectWrapper>
          <Dropdown
            title="Rank"
            options={CLASS_CONSULTATION_OPTIONS}
            onChange={({ value }) => handleInputChange('rank', value)}
            placeholder="Enter Rank"
            value={inputs.rank}
            readOnly={readOnly}
            creatable
          />
        </SelectWrapper>
        <TextInput
          readOnly={readOnly}
          onChange={({ target: { value } }) => handleInputChange('assistantSurgeon', value)}
          name="assistantSurgeon"
          title="Surgeon's Assistant Name"
          placeholder="Enter Assistant's Name"
          value={inputs.assistantSurgeon}
        />
        <TextInput
          readOnly={readOnly}
          onChange={({ target: { value } }) => handleInputChange('operatingRoomNurse', value)}
          name="operatingRoomNurse"
          title="Operating Room Nurse"
          placeholder="Enter ORM's Name"
          value={inputs.operatingRoomNurse}
        />
        <TextInput
          readOnly={readOnly}
          onChange={({ target: { value } }) => handleInputChange('anesthetistName', value)}
          name="anesthetistName"
          title="Anesthetist's Name"
          placeholder="Enter Anesthetist's Name"
          value={inputs.anesthetistName}
        />
        <SelectWrapper>
          <Dropdown
            creatable
            title="Anesthesia Type"
            options={ANESTHESIA_OPTIONS}
            onChange={({ value }) => (writeAllowed ? handleInputChange('anesthesia', value) : null)}
            readOnly={readOnly}
            placeholder="Enter Anesthesia Type"
            value={inputs.anesthesia}
          />
        </SelectWrapper>
        <SelectWrapper padded>
          <DatePicker
            label="Operation Start Date and Time"
            withBorderRadius
            onChange={(date) => (writeAllowed ? handleInputChange('surgeryStartDate', date) : null)}
            value={inputs.surgeryStartDate}
            readOnly={readOnly}
            placeholderText="Select Date and Time"
          />
        </SelectWrapper>

        <SelectWrapper padded>
          <DatePicker
            label="Operation End Date and Time"
            withBorderRadius
            onChange={(date) => (writeAllowed ? handleInputChange('surgeryEndDate', date) : null)}
            value={inputs.surgeryEndDate}
            readOnly={readOnly}
            placeholderText="Select Date and Time"
          />
        </SelectWrapper>
      </InputRow>

      <TextInput
        fullWidth
        name="facilityName"
        title="Hospital Name"
        placeholder="Enter Hospital Name"
        onChange={({ target: { value } }) => handleInputChange('facilityName', value)}
        readOnly={readOnly}
        value={inputs.facilityName}
      />
      <AddressInput
        label="Hospital Address"
        fieldPath="facilityAddress"
        handleInputChange={handleInputChange}
        readOnly={readOnly}
        value={inputs.facilityAddress}
        placeholder="Enter Hospital Address"
      />

      <InputRow>
        <SelectWrapper fullWidth>
          <TextArea
            name="operationNote"
            label="Operation Note"
            fullWidth
            onChange={({ target: { value } }) => handleInputChange('operationNote', value)}
            readOnly={readOnly}
            value={inputs.operationNote}
          />
        </SelectWrapper>
      </InputRow>
      <InputRow>
        <SelectWrapper fullWidth>
          <TextArea
            name="postOperationNote"
            label="Post Operation Order"
            fullWidth
            onChange={({ target: { value } }) => handleInputChange('postOperationNote', value)}
            readOnly={readOnly}
            value={inputs.postOperationNote}
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <DocumentAttacher
          documents={inputs.documentUrl}
          handleInputChange={handleInputChange}
          readOnly={readOnly}
          type="procedure"
        />
      </InputRow>
      <ActionSectionSectionWithAuditDetails
        isEdit={isEdit}
        isEditActive={startEdit}
        toggle={toggle}
        cancelAction={() => setStartEdit(false)}
        disableActionButton={disableActionButton}
        onAction={() => action()}
        actionText={actionText}
        inputs={inputs}
      />
      <Modal
        modalContent={
          <Prompter
            text="Are you sure you want to delete this record?"
            actionText="Delete"
            deleteAction={() => deleteRecordAction([id])}
            cancelAction={toggle}
            disabled={disableActionButton}
          />
        }
        isShown={showModalPrompt}
        hide={toggle}
        handleDone={() => {}}
        isAuthentication
      />
    </RecordForm>
  );
};

export default AddSurgery;
