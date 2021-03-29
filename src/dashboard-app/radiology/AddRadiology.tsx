import { setTitle } from 'apollo/operations';
import ActionSectionSectionWithAuditDetails from 'dashboard-app/common/ActionSectionWithAuditDetails';
import AddressInput from 'dashboard-app/common/AddressInput';
import DatePicker from 'dashboard-app/common/DatePicker';
import DocumentAttacher from 'dashboard-app/common/DocumentAttacher';
import Dropdown, { MultiDropdown } from 'dashboard-app/common/Dropdown';
import DurationInput from 'dashboard-app/common/DurationInput';
import { RecordForm } from 'dashboard-app/common/FormWrapper';
import LoaderOrError from 'dashboard-app/common/LoaderOrError';
import Prompter from 'dashboard-app/common/Prompter';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import { InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import AddLaboratory from 'dashboard-app/laboratory/AddLabResult';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import {
  FILTER_INPUT,
  PATIENT_OPTIONS,
  PAYMENT_OPTIONS,
  PRIORITY_RADIOLOGY_OPTIONS,
  RADIOLOGY_EXAM_OPTIONS,
  REQUEST_OPTIONS,
  SPECIALTY_OPTIONS,
} from 'dashboard-app/utils/constants';
import { NewRadiologyInput, RadiologyFilterInput, UserType } from 'graphql-types/globalTypes';
import useAddForm from 'hooks/useAddForm';
import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  ADD_RADIOLOGY,
  DELETE_RADIOLOGY,
  GET_PATIENT_RADIOLOGY_LIST,
  GET_RADIOLOGY,
  UPDATE_RADIOLOGY,
} from '../queries/radiology';

export interface AddRadiologyProps {
  userType?: UserType;
  hideLayout?: boolean;
  filterOptions: RadiologyFilterInput;
  showTopNav?: boolean;
  noMargin?: boolean;
  fullWidth?: boolean;
  useWhiteBackground?: boolean;
  noTopPadding?: boolean;
  isOnModal?: boolean;
  defaultId?: string;
}

const AddRadiology: React.FC<AddRadiologyProps> = ({ filterOptions, isOnModal, defaultId }) => {
  const initialState: NewRadiologyInput = {
    examDate: null,
    duration: null,
    requester: '',
    requestDate: null,
    requestType: 'Radiology',
    patientType: '',
    paymentType: '',
    examType: [],
    specialty: '',
    report: '',
    impression: '',
    priority: '',
    radiologist: '',
    radiologyName: '',
    radiologyAddress: '',
    clinicalNote: '',
    documentUrl: [],
  };

  const { pathname } = useLocation();

  const fetchQuery = GET_RADIOLOGY;
  const addQuery = ADD_RADIOLOGY;
  const updateQuery = UPDATE_RADIOLOGY;
  const deleteQuery = DELETE_RADIOLOGY;
  const cacheUpdateQuery = GET_PATIENT_RADIOLOGY_LIST;
  const icon = 'Radiology';
  const defaultIsEdit = !isOnModal;
  const pluralRecordType = 'radiology';
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
    disableActionButton,
    fetchingData,
    errorFetching,
    deleteRecordAction,
    showModalPrompt,
    toggle,
  } = useAddForm(params);

  React.useEffect(() => (isOnModal ? undefined : setTitle(`${isEdit ? '' : 'Add'} Radiology`)), []);

  if (fetchingData || errorFetching) {
    return <LoaderOrError loading={fetchingData} />;
  }

  return (
    <>
      <RecordForm>
        <InputRow>
          {pathname.split('/')[1] === 'patient' ? (
            <SelectWrapper>
              <TextInput
                fullWidth
                name="requester"
                title="Request Type"
                placeholder="Enter Doctor's Name"
                onChange={({ target: { value } }) => {}}
                readOnly
                value="Radiology"
              />
            </SelectWrapper>
          ) : (
            <SelectWrapper>
              <Dropdown
                title="Request Type"
                options={REQUEST_OPTIONS}
                onChange={({ value }) =>
                  writeAllowed ? handleInputChange('requestType', value) : null
                }
                placeholder="Enter Request Type"
                isRequired
                value={inputs.requestType}
                readOnly={readOnly}
                creatable
              />
            </SelectWrapper>
          )}
          <SelectWrapper padded>
            <DatePicker
              label="Request Date and Time"
              withBorderRadius
              onChange={(date) => (writeAllowed ? handleInputChange('requestDate', date) : null)}
              value={inputs.requestDate}
              placeholderText="Select Date and Time"
              readOnly={readOnly}
            />
          </SelectWrapper>
        </InputRow>
        <InputRow>
          <SelectWrapper>
            <Dropdown
              creatable
              title="Priority"
              options={PRIORITY_RADIOLOGY_OPTIONS}
              onChange={({ value }) => (writeAllowed ? handleInputChange('priority', value) : null)}
              placeholder="Enter Priority"
              readOnly={readOnly}
              value={inputs.priority}
            />
          </SelectWrapper>

          <SelectWrapper>
            <TextInput
              fullWidth
              name="requester"
              title="Requested By"
              placeholder="Enter Doctor's Name"
              onChange={({ target: { value } }) => handleInputChange('requester', value)}
              readOnly={readOnly}
              value={inputs.requester}
            />
          </SelectWrapper>
        </InputRow>

        <InputRow>
          <SelectWrapper>
            <Dropdown
              creatable
              title="Patient Type"
              options={PATIENT_OPTIONS}
              onChange={({ value }) =>
                writeAllowed ? handleInputChange('patientType', value) : null
              }
              placeholder="Enter Patient Type"
              isRequired
              value={inputs.patientType}
              readOnly={readOnly}
            />
          </SelectWrapper>

          <SelectWrapper>
            <Dropdown
              creatable
              title="Specialty"
              options={SPECIALTY_OPTIONS}
              onChange={({ value }) =>
                writeAllowed ? handleInputChange('specialty', value) : null
              }
              placeholder="Enter Specialty"
              value={inputs.specialty}
              readOnly={readOnly}
            />
          </SelectWrapper>
        </InputRow>
        <InputRow>
          <SelectWrapper fullWidth>
            <MultiDropdown
              creatable
              title="Examination Type"
              options={RADIOLOGY_EXAM_OPTIONS}
              onChange={(value) => (writeAllowed ? handleInputChange('examType', value) : null)}
              placeholder="Enter Examination Type"
              isRequired
              values={inputs.examType}
              readOnly={readOnly}
            />
          </SelectWrapper>
        </InputRow>

        <InputRow>
          <SelectWrapper fullWidth>
            <TextArea
              readOnly={readOnly}
              onChange={({ target: { value } }) => handleInputChange('clinicalNote', value)}
              name="clinicalNote"
              label="Clinical History"
              value={inputs.clinicalNote}
              fullWidth
            />
          </SelectWrapper>
        </InputRow>

        <InputRow>
          <SelectWrapper padded>
            <DatePicker
              label="Examination Date and Time"
              withBorderRadius
              onChange={(date) => (writeAllowed ? handleInputChange('examDate', date) : null)}
              value={inputs.examDate}
              placeholderText="Select Date and Time"
              readOnly={readOnly}
            />
          </SelectWrapper>
          <SelectWrapper padded>
            <DurationInput
              title="Duration (HH:MM:SS)"
              onChange={(duration) => handleInputChange('duration', duration)}
              durationValue={inputs.duration}
              readOnly={readOnly}
            />
          </SelectWrapper>
        </InputRow>

        <InputRow>
          <SelectWrapper>
            <TextInput
              fullWidth
              name="radiologist"
              title="Radiologist Name"
              placeholder="Enter Radiologist Name"
              onChange={({ target: { value } }) => handleInputChange('radiologist', value)}
              value={inputs.radiologist}
              readOnly={readOnly}
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
        </InputRow>

        <TextInput
          fullWidth
          name="radiologyName"
          value={inputs.radiologyName}
          title="Facility Name"
          onChange={({ target: { value } }) => handleInputChange('radiologyName', value)}
          readOnly={readOnly}
          placeholder="Enter Facility Name"
        />
        <AddressInput
          label="Facility Address"
          fieldPath="radiologyAddress"
          handleInputChange={handleInputChange}
          readOnly={readOnly}
          value={inputs.radiologyAddress}
          placeholder="Enter Facility Address"
        />
        <InputRow>
          <SelectWrapper fullWidth>
            <TextArea
              readOnly={readOnly}
              onChange={({ target: { value } }) => handleInputChange('report', value)}
              name="report"
              value={inputs.report}
              label="Report"
              fullWidth
            />
          </SelectWrapper>
        </InputRow>
        <InputRow>
          <SelectWrapper fullWidth>
            <TextArea
              readOnly={readOnly}
              onChange={({ target: { value } }) => handleInputChange('impression', value)}
              name="impression"
              value={inputs.impression}
              label="Impression"
              fullWidth
            />
          </SelectWrapper>
        </InputRow>

        <InputRow>
          <DocumentAttacher
            documents={inputs.documentUrl}
            handleInputChange={handleInputChange}
            readOnly={readOnly}
            type="radiology"
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
      </RecordForm>
      {inputs.requestType === 'Laboratory' && <AddLaboratory filterOptions={FILTER_INPUT} />}
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
    </>
  );
};

export default AddRadiology;
