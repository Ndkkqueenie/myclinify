import { setTitle } from 'apollo/operations';
import ActionSectionSectionWithAuditDetails from 'dashboard-app/common/ActionSectionWithAuditDetails';
import AddressInput from 'dashboard-app/common/AddressInput';
import DatePicker from 'dashboard-app/common/DatePicker';
import DocumentAttacher from 'dashboard-app/common/DocumentAttacher';
import Dropdown from 'dashboard-app/common/Dropdown';
import DurationInput from 'dashboard-app/common/DurationInput';
import { MultiIcdInput } from 'dashboard-app/common/IcdInput';
import Message from 'dashboard-app/common/Message';
import Prompter from 'dashboard-app/common/Prompter';
import RecordLinker, { RecordOptions } from 'dashboard-app/common/RecordLinker';
import SubRecord from 'dashboard-app/common/SubRecord';
import TextInput from 'dashboard-app/common/TextInput';
import { Content, InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import {
  ADD_ADMISSION,
  DELETE_ADMISSIONS,
  FETCH_ADMISSION,
  FETCH_ADMISSIONS,
  UPDATE_ADMISSION,
} from 'dashboard-app/queries/admission';
import colors from 'dashboard-app/utils/colors';
import { HOSPITAL_UNIT_OPTIONS, QUESTION_OPTIONS } from 'dashboard-app/utils/constants';
import { AdmissionFilterInput, UserType } from 'graphql-types/globalTypes';
import useAddForm from 'hooks/useAddForm';
import React from 'react';
import { BeatLoader } from 'react-spinners';
import AdmissionSubRecordsSection from './AdmissionSubRecordsSection';
import {
  dischargeInitialValues,
  noteInitialValues,
  nurseNoteInitialValues,
  transferInitialValues,
  transfusionInitialValues,
} from './constants';

export interface AddAdmissionProps {
  userType?: UserType;
  hideLayout?: boolean;
  filterOptions?: AdmissionFilterInput;
  showTopNav?: boolean;
  noMargin?: boolean;
  fullWidth?: boolean;
  useWhiteBackground?: boolean;
  noTopPadding?: boolean;
  isOnModal?: boolean;
  defaultId?: string;
}

const AddAdmission: React.FC<AddAdmissionProps> = ({ filterOptions, isOnModal, defaultId }) => {
  const initialState = {
    admissionDate: null,
    duration: null,
    admittedBy: '',
    fileNumber: '',
    ward: '',
    hospitalUnit: '',
    roomType: '',
    roomNumber: '',
    bedNumber: '',
    dischargeDate: null,
    transferDate: null,
    admissionNotes: [noteInitialValues],
    nurseAdmissionNotes: [nurseNoteInitialValues],
    transferPatients: [transferInitialValues],
    dischargePatients: [dischargeInitialValues],
    bloodTransfusions: [transfusionInitialValues],
    clinicAddress: '',
    clinicName: '',
    finding: '',
    bedAvailable: '',
    patientConsent: '',
    admissionDiagnosis: [],
    documentUrl: [],
    medications: [],
    vitals: [],
    labTests: [],
    radiology: [],
    surgeries: [],
    allergies: [],
  };

  const fetchQuery = FETCH_ADMISSION;
  const addQuery = ADD_ADMISSION;
  const updateQuery = UPDATE_ADMISSION;
  const deleteQuery = DELETE_ADMISSIONS;
  const cacheUpdateQuery = FETCH_ADMISSIONS;
  const defaultIsEdit = !isOnModal;
  const icon = 'Admission';
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
    disableActionButton,
    handleInputChange,
    handleMultipleFieldsChange,
    inputs,
    actionText,
    action,
    readOnly,
    id,
    fetchingData,
    errorFetching,
    deleteRecordAction,
    showModalPrompt,
    toggle,
    fetchSubRecords,
    fetchingSubRecords,
    errorFetchingSubRecords,
  } = useAddForm(params);

  const recordLinkerOptions: RecordOptions[] = [
    'Allergy',
    'Consultation',
    'Lab Test',
    'Medication',
    'Radiology Exam',
    'Procedure',
    'Vital Signs',
  ];

  React.useEffect(() => (isOnModal ? undefined : setTitle(`${isEdit ? '' : 'Add'} Admission`)), []);

  const newSubrecords = (records) => records.filter((record) => !record.id);

  const inputToSend = {
    ...inputs,
    dischargePatients: null,
    transferPatients: null,
    bloodTransfusions: null,
    admissionNotes: isEdit
      ? null
      : [...newSubrecords(inputs.nurseAdmissionNotes), ...newSubrecords(inputs.admissionNotes)],
  };

  return (
    <Content detailsPage listPage>
      {!errorFetching ? (
        <>
          {fetchingData ? (
            <Message>
              <BeatLoader loading={fetchingData} color={colors.darkBlue} />
            </Message>
          ) : (
            <Content addPage detailsPage={isOnModal}>
              <InputRow>
                <SelectWrapper padded>
                  <DatePicker
                    label="Admission Date and Time"
                    withBorderRadius
                    onChange={(date) =>
                      writeAllowed ? handleInputChange('admissionDate', date) : null
                    }
                    value={inputs.admissionDate}
                    placeholderText="Select Date and Time"
                    isRequired
                    readOnly={readOnly}
                  />
                </SelectWrapper>

                <SelectWrapper padded>
                  <DurationInput
                    title="Duration (YY:MM:DD)"
                    onChange={(value) => handleInputChange('duration', value)}
                    durationValue={inputs.duration}
                    readOnly={readOnly}
                    isYear
                  />
                </SelectWrapper>
              </InputRow>

              <InputRow>
                <TextInput
                  name="admittedBy"
                  title="Admitted By"
                  onChange={({ target: { value } }) => handleInputChange('admittedBy', value)}
                  value={inputs.admittedBy}
                  readOnly={readOnly}
                  placeholder="Enter Doctor's Name"
                />
                <TextInput
                  name="doctorInCharge"
                  title="Doctor In Charge"
                  onChange={({ target: { value } }) => handleInputChange('doctorInCharge', value)}
                  value={inputs.doctorInCharge}
                  readOnly={readOnly}
                  placeholder="Enter Doctor's Name"
                />
              </InputRow>

              <InputRow>
                <MultiIcdInput
                  onChange={(value) => handleInputChange('admissionDiagnosis', value)}
                  readOnly={readOnly}
                  fieldPath="admissionDiagnosis"
                  placeholder="Enter Admission Diagnosis"
                  values={inputs.admissionDiagnosis}
                  label="Admission Diagnosis"
                  isRequired
                />
              </InputRow>

              <InputRow>
                <TextInput
                  name="patientFileNumber"
                  title="Patient File Number"
                  onChange={({ target: { value } }) => handleInputChange('fileNumber', value)}
                  value={inputs.fileNumber}
                  readOnly={readOnly}
                  placeholder="Enter Patient File Number"
                />
                <TextInput
                  name="wardName"
                  title="Ward Name"
                  onChange={({ target: { value } }) => handleInputChange('ward', value)}
                  value={inputs.ward}
                  readOnly={readOnly}
                  placeholder="Enter Ward Name"
                />
              </InputRow>
              <InputRow>
                <SelectWrapper>
                  <Dropdown
                    title="Hospital Unit"
                    options={HOSPITAL_UNIT_OPTIONS}
                    placeholder="Select One"
                    value={inputs?.hospitalUnit}
                    onChange={({ value }) => handleInputChange('hospitalUnit', value)}
                    readOnly={readOnly}
                    creatable
                  />
                </SelectWrapper>
                <TextInput
                  name="roomOption"
                  title="Room Option"
                  onChange={({ target: { value } }) => handleInputChange('roomType', value)}
                  value={inputs.roomType}
                  readOnly={readOnly}
                  placeholder="Enter Room Option"
                />
              </InputRow>
              <InputRow>
                <TextInput
                  name="roomNumber"
                  title="Room Number"
                  onChange={({ target: { value } }) => handleInputChange('roomNumber', value)}
                  value={inputs.roomNumber}
                  readOnly={readOnly}
                  placeholder="Enter Room Number"
                />
                <TextInput
                  name="bedNumber"
                  title="Bed Number"
                  onChange={({ target: { value } }) => handleInputChange('bedNumber', value)}
                  value={inputs.bedNumber}
                  readOnly={readOnly}
                  placeholder="Enter Bed Number"
                />
              </InputRow>
              <InputRow>
                <SelectWrapper>
                  <Dropdown
                    title="Bed Available"
                    options={QUESTION_OPTIONS}
                    placeholder="Select One"
                    value={inputs?.bedAvailable}
                    onChange={({ value }) => handleInputChange('bedAvailable', value)}
                    readOnly={readOnly}
                    creatable
                  />
                </SelectWrapper>
                <SelectWrapper>
                  <Dropdown
                    title="Patient Consent"
                    options={QUESTION_OPTIONS}
                    placeholder="Select One"
                    value={inputs?.patientConsent}
                    onChange={({ value }) => handleInputChange('patientConsent', value)}
                    readOnly={readOnly}
                    creatable
                  />
                </SelectWrapper>
              </InputRow>
              <TextInput
                fullWidth
                title="Hospital Name"
                name="hospitalName"
                onChange={({ target: { value } }) => handleInputChange('clinicName', value)}
                readOnly={readOnly}
                value={inputs.clinicName}
                placeholder="Enter Hospital Name"
                isRequired
              />
              <AddressInput
                label="Hospital Address"
                fieldPath="clinicAddress"
                handleInputChange={handleInputChange}
                readOnly={readOnly}
                value={inputs.clinicAddress}
                placeholder="Enter Hospital Address"
              />

              <SubRecord
                parentRecordId={inputs?.id}
                handleInputChange={handleInputChange}
                inputs={inputs.admissionNotes}
                readOnly={readOnly}
                defaultIsEdit={isEdit}
                handleMultipleFieldsChange={handleMultipleFieldsChange}
                type="admissionNotes"
              />

              <SubRecord
                parentRecordId={inputs?.id}
                handleInputChange={handleInputChange}
                inputs={inputs.nurseAdmissionNotes}
                readOnly={readOnly}
                defaultIsEdit={isEdit}
                handleMultipleFieldsChange={handleMultipleFieldsChange}
                type="nurseAdmissionNotes"
              />

              <AdmissionSubRecordsSection
                handleInputChange={handleInputChange}
                handleMultipleFieldsChange={handleMultipleFieldsChange}
                inputs={inputs}
                isEdit={isEdit}
                parentRecordId={inputs?.id}
                readOnly={readOnly}
                fetchSubRecords={fetchSubRecords}
                fetchingSubRecords={fetchingSubRecords}
                errorFetchingSubRecords={errorFetchingSubRecords}
                type="Admission"
              />

              <InputRow>
                <DocumentAttacher
                  documents={inputs.documentUrl}
                  handleInputChange={handleInputChange}
                  readOnly={readOnly}
                  type="admission"
                />
              </InputRow>

              <InputRow>
                <RecordLinker
                  options={recordLinkerOptions}
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
                onAction={() => action(inputToSend)}
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
            </Content>
          )}
        </>
      ) : (
        <Message>An error occured, refresh page or go back to table</Message>
      )}
    </Content>
  );
};

export default AddAdmission;
