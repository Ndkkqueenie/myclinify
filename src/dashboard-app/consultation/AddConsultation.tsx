import { setTitle } from 'apollo/operations';
import ActionSectionSectionWithAuditDetails from 'dashboard-app/common/ActionSectionWithAuditDetails';
import AddressInput from 'dashboard-app/common/AddressInput';
import DatePicker from 'dashboard-app/common/DatePicker';
import DocumentAttacher from 'dashboard-app/common/DocumentAttacher';
import Dropdown from 'dashboard-app/common/Dropdown';
import DurationInput from 'dashboard-app/common/DurationInput';
import { RecordForm } from 'dashboard-app/common/FormWrapper';
import { MultiIcdInput } from 'dashboard-app/common/IcdInput';
import LoaderOrError from 'dashboard-app/common/LoaderOrError';
import Prompter from 'dashboard-app/common/Prompter';
import RecordLinker, { RecordOptions } from 'dashboard-app/common/RecordLinker';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import { InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import {
  ADD_CONSULTATION,
  DELETE_CONSULTATION,
  FETCH_CONSULTATION,
  FETCH_PATIENT_CONSULTATIONS,
  UPDATE_CONSULTATION,
} from 'dashboard-app/queries/consultation';
import {
  CLASS_CONSULTATION_OPTIONS,
  PATIENT_OPTIONS,
  PAYMENT_OPTIONS,
  PRIORITY_CONSULTATION_OPTIONS,
  SPECIALTY_OPTIONS,
} from 'dashboard-app/utils/constants';
import { ConsultationFilterInput, ConsultationInput, UserType } from 'graphql-types/globalTypes';
import useAddForm from 'hooks/useAddForm';
import useAutocalculate from 'hooks/useAutocalculate';
import React from 'react';

export interface AddConsultationProps {
  userType?: UserType;
  hideLayout?: boolean;
  filterOptions: ConsultationFilterInput;
  showTopNav?: boolean;
  noMargin?: boolean;
  fullWidth?: boolean;
  useWhiteBackground?: boolean;
  noTopPadding?: boolean;
  isOnModal?: boolean;
  defaultId?: string;
}

const AddConsultation: React.FC<AddConsultationProps> = ({
  filterOptions,
  isOnModal,
  defaultId,
}) => {
  const initialState: ConsultationInput = {
    consultationDateTime: null,
    duration: null,
    priority: '',
    doctorName: '',
    specialty: '',
    class: '',
    patientType: '',
    paymentType: '',
    consultationStartDate: null,
    consultationEndDate: null,
    clinicName: '',
    clinicAddress: '',
    complaint: '',
    complaintHistory: '',
    systemReview: '',
    physicalExam: '',
    treatmentPlan: '',
    provisionalDiagnosis: [],
    finalDiagnosis: [],
    documentUrl: [],
    admissions: [],
    allergies: [],
    labTests: [],
    medications: [],
    radiology: [],
    surgeries: [],
    vitals: [],
  };

  const fetchQuery = FETCH_CONSULTATION;
  const addQuery = ADD_CONSULTATION;
  const updateQuery = UPDATE_CONSULTATION;
  const deleteQuery = DELETE_CONSULTATION;
  const cacheUpdateQuery = FETCH_PATIENT_CONSULTATIONS;
  const icon = 'Consultation';
  const defaultIsEdit = !isOnModal;
  const params = {
    initialState,
    fetchQuery,
    addQuery,
    updateQuery,
    deleteQuery,
    cacheUpdateQuery,
    icon,
    filterOptions,
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
    disableActionButton,
    fetchingData,
    errorFetching,
    deleteRecordAction,
    toggle,
    showModalPrompt,
  } = useAddForm(params);

  const recordLinkOptions: RecordOptions[] = [
    'Admission',
    'Allergy',
    'Medication',
    'Lab Test',
    'Radiology Exam',
    'Procedure',
    'Vital Signs',
  ];

  useAutocalculate({
    yearDuration: false,
    value:
      inputs.consultationStartDate && inputs.consultationEndDate
        ? [inputs.consultationStartDate, inputs.consultationEndDate]
        : null,
    onDurationChange: (value) => handleInputChange('duration', value),
  });

  React.useEffect(
    () => (isOnModal ? undefined : setTitle(`${isEdit ? '' : 'Add'} Consultation`)),
    [],
  );

  if (fetchingData || errorFetching) {
    return <LoaderOrError loading={fetchingData} />;
  }

  return (
    <RecordForm>
      <InputRow>
        <SelectWrapper padded>
          <DatePicker
            label="Consultation Date and Time"
            withBorderRadius
            onChange={(date) =>
              writeAllowed ? handleInputChange('consultationDateTime', date) : null
            }
            value={inputs.consultationDateTime}
            placeholderText="Select Date and Time"
            readOnly={readOnly}
          />
        </SelectWrapper>

        <SelectWrapper padded>
          <DurationInput
            title="Duration (HH:MM:SS)"
            onChange={(value) => handleInputChange('duration', value)}
            durationValue={inputs.duration}
            readOnly
          />
        </SelectWrapper>
      </InputRow>
      <InputRow>
        <SelectWrapper>
          <Dropdown
            title="Priority"
            options={PRIORITY_CONSULTATION_OPTIONS}
            onChange={({ value }) => (writeAllowed ? handleInputChange('priority', value) : null)}
            placeholder="Enter Priority"
            value={inputs.priority}
            readOnly={readOnly}
            isRequired
            creatable
          />
        </SelectWrapper>
        <SelectWrapper>
          <TextInput
            fullWidth
            name="doctorName"
            title="Doctor's Name"
            onChange={({ target: { value } }) => handleInputChange('doctorName', value)}
            value={inputs.doctorName}
            placeholder="Enter Doctor's Name"
            readOnly={readOnly}
            isRequired
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <SelectWrapper>
          <Dropdown
            title="Specialty"
            options={SPECIALTY_OPTIONS}
            onChange={({ value }) => (writeAllowed ? handleInputChange('specialty', value) : null)}
            placeholder="Enter Specialty"
            value={inputs.specialty}
            readOnly={readOnly}
            creatable
          />
        </SelectWrapper>
        <SelectWrapper>
          <Dropdown
            title="Rank"
            options={CLASS_CONSULTATION_OPTIONS}
            onChange={({ value }) => (writeAllowed ? handleInputChange('class', value) : null)}
            placeholder="Enter Rank"
            value={inputs.class}
            readOnly={readOnly}
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

        <SelectWrapper padded>
          <DatePicker
            label="Consulation Start Date and Time"
            withBorderRadius
            onChange={(date) =>
              writeAllowed ? handleInputChange('consultationStartDate', date) : null
            }
            value={inputs.consultationStartDate}
            readOnly={readOnly}
            placeholderText="Select Date and Time"
          />
        </SelectWrapper>

        <SelectWrapper padded>
          <DatePicker
            label="Consulation End Date and Time"
            withBorderRadius
            onChange={(date) =>
              writeAllowed ? handleInputChange('consultationEndDate', date) : null
            }
            value={inputs.consultationEndDate}
            readOnly={readOnly}
            placeholderText="Select Date and Time"
          />
        </SelectWrapper>
      </InputRow>

      <TextInput
        fullWidth
        name="hospitalName"
        title="Hospital Name"
        onChange={({ target: { value } }) => handleInputChange('clinicName', value)}
        placeholder="Enter Hospital Name"
        value={inputs.clinicName}
        readOnly={readOnly}
      />
      <AddressInput
        label="Hospital Address"
        fieldPath="clinicAddress"
        handleInputChange={handleInputChange}
        readOnly={readOnly}
        value={inputs.clinicAddress}
        placeholder="Enter Hospital Address"
      />

      <InputRow>
        <SelectWrapper fullWidth>
          <TextArea
            name="complaints"
            label="Presenting Complaints"
            fullWidth
            onChange={({ target: { value } }) => handleInputChange('complaint', value)}
            value={inputs.complaint}
            readOnly={readOnly}
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <SelectWrapper fullWidth>
          <TextArea
            name="complaintsHistory"
            label="History Of Presenting Complaints"
            fullWidth
            onChange={({ target: { value } }) => handleInputChange('complaintHistory', value)}
            value={inputs.complaintHistory}
            readOnly={readOnly}
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <SelectWrapper>
          <TextArea
            name="systemsReview"
            label="Review Of Systems"
            fullWidth
            onChange={({ target: { value } }) => handleInputChange('systemReview', value)}
            value={inputs.systemReview}
            readOnly={readOnly}
          />
        </SelectWrapper>
        <SelectWrapper>
          <TextArea
            name="physicalExam"
            label="Physical Examination"
            fullWidth
            onChange={({ target: { value } }) => handleInputChange('physicalExam', value)}
            value={inputs.physicalExam}
            readOnly={readOnly}
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <MultiIcdInput
          onChange={(value) => handleInputChange('provisionalDiagnosis', value)}
          readOnly={readOnly}
          fieldPath="provisionalDiagnosis"
          placeholder="Enter Provisional Diagnosis"
          values={inputs.provisionalDiagnosis}
          label="Provisional Diagnosis"
          isRequired
        />
      </InputRow>

      <InputRow>
        <MultiIcdInput
          onChange={(value) => handleInputChange('finalDiagnosis', value)}
          readOnly={readOnly}
          fieldPath="finalDiagnosis"
          placeholder="Enter Final Diagnosis"
          values={inputs.finalDiagnosis}
          label="Final Diagnosis"
        />
      </InputRow>
      <InputRow>
        <SelectWrapper fullWidth>
          <TextArea
            name="treatmentPlan"
            label="Treatment Plan"
            fullWidth
            onChange={({ target: { value } }) => handleInputChange('treatmentPlan', value)}
            value={inputs.treatmentPlan}
            readOnly={readOnly}
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <DocumentAttacher
          documents={inputs.documentUrl}
          handleInputChange={handleInputChange}
          readOnly={readOnly}
          type="consultation"
        />
      </InputRow>

      <InputRow>
        <RecordLinker
          options={recordLinkOptions}
          handleInputChange={handleInputChange}
          initialData={inputs}
          readOnly={readOnly}
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

export default AddConsultation;
