import { setTitle } from 'apollo/operations';
import ActionSectionSectionWithAuditDetails from 'dashboard-app/common/ActionSectionWithAuditDetails';
import AddressInput from 'dashboard-app/common/AddressInput';
import DocumentAttacher from 'dashboard-app/common/DocumentAttacher';
import Dropdown from 'dashboard-app/common/Dropdown';
import DurationInput from 'dashboard-app/common/DurationInput';
import { RecordForm } from 'dashboard-app/common/FormWrapper';
import LoaderOrError from 'dashboard-app/common/LoaderOrError';
import MultiGroupAction from 'dashboard-app/common/MultiGroupActions';
import Prompter from 'dashboard-app/common/Prompter';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import { InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import {
  ADD_PATIENT_LAB_TEST,
  DELETE_LAB_TEST,
  GET_LAB_TEST,
  GET_PATIENT_LAB_TEST_LIST,
  UPDATE_LAB_TEST,
} from 'dashboard-app/queries/lab-test';
import {
  LAB_TEST_OPTIONS,
  PATIENT_OPTIONS,
  PAYMENT_OPTIONS,
  PRIORITY_RADIOLOGY_OPTIONS,
  QUESTION_OPTIONS,
  REQUEST_OPTIONS,
  SPECIALTY_OPTIONS,
} from 'dashboard-app/utils/constants';
import { LabTestFilterInput, NewLabTestInput, UserType } from 'graphql-types/globalTypes';
import useAddForm from 'hooks/useAddForm';
import React from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from '../common/DatePicker';

export interface AddLabResultProps {
  userType?: UserType;
  hideLayout?: boolean;
  filterOptions: LabTestFilterInput;
  showTopNav?: boolean;
  noMargin?: boolean;
  fullWidth?: boolean;
  useWhiteBackground?: boolean;
  noTopPadding?: boolean;
  isOnModal?: boolean;
  defaultId?: string;
}

const AddLabResult: React.FC<AddLabResultProps> = ({ filterOptions, isOnModal, defaultId }) => {
  const initialTestInfo = { testName: '', testCategory: '' };
  const initialState: NewLabTestInput = {
    requestType: 'Laboratory',
    requestDate: null,
    priority: '',
    patientType: '',
    testInfo: [initialTestInfo],
    orderedBy: '',
    specialty: '',
    testDate: null,
    duration: null,
    collectionDate: null,
    collectedBy: '',
    resultDate: null,
    pathologist: '',
    pathologistReport: '',
    verifiedBy: '',
    performedBy: '',
    specimenCollected: '',
    paymentType: '',
    result: '',
    range: '',
    labName: '',
    labAddress: '',
    additionalNote: '',
    documentUrl: [],
  };

  const { pathname } = useLocation();

  const fetchQuery = GET_LAB_TEST;
  const addQuery = ADD_PATIENT_LAB_TEST;
  const updateQuery = UPDATE_LAB_TEST;
  const deleteQuery = DELETE_LAB_TEST;
  const cacheUpdateQuery = GET_PATIENT_LAB_TEST_LIST;
  const icon = 'LabTest';
  const defaultIsEdit = !isOnModal;
  const pluralRecordType = 'lab_tests';
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
    toggle,
    showModalPrompt,
  } = useAddForm(params);

  React.useEffect(
    () => (isOnModal ? undefined : setTitle(`${isEdit ? '' : 'Add'} Laboratory`)),
    [],
  );

  if (fetchingData || errorFetching) {
    return <LoaderOrError loading={fetchingData} />;
  }

  const groupedValue: any[] = inputs?.testInfo?.length ? inputs?.testInfo : [{}];

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
                placeholder="Enter Type"
                onChange={({ target: { value } }) => {}}
                readOnly
                value="Laboratory"
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
        </InputRow>
        <InputRow>
          {groupedValue.map((val, idx) => (
            <InputRow>
              <SelectWrapper>
                <Dropdown
                  title="Lab Order Category"
                  options={LAB_TEST_OPTIONS}
                  onChange={({ value }) => {
                    if (handleInputChange && writeAllowed) {
                      const newUpdate = JSON.parse(JSON.stringify(groupedValue));
                      newUpdate[idx].testCategory = value;
                      handleInputChange('testInfo', newUpdate);
                    }
                  }}
                  placeholder="Enter Lab Order Category"
                  value={val.testCategory}
                  readOnly={readOnly}
                  creatable
                />
              </SelectWrapper>
              <SelectWrapper>
                <Dropdown
                  title="Lab Order (Test Name)"
                  options={LAB_TEST_OPTIONS}
                  onChange={({ value }) => {
                    if (handleInputChange && writeAllowed) {
                      const newUpdate = [...groupedValue];
                      newUpdate[idx].testName = value;
                      handleInputChange('testInfo', newUpdate);
                    }
                  }}
                  placeholder="Enter Lab Order"
                  isRequired
                  value={val.testName}
                  readOnly={readOnly}
                  creatable
                />
              </SelectWrapper>
              {!readOnly && (
                <MultiGroupAction
                  items={groupedValue}
                  index={idx}
                  initialItem={initialTestInfo}
                  onClick={(value) => {
                    handleInputChange('testInfo', value);
                  }}
                />
              )}
            </InputRow>
          ))}
        </InputRow>

        <InputRow>
          <TextInput
            name="doctor"
            title="Ordered By"
            readOnly={readOnly}
            onChange={({ target: { value } }) => handleInputChange('orderedBy', value)}
            value={inputs.orderedBy}
            placeholder="Enter Doctor's Name"
          />
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
            <TextArea
              name="additionalNote"
              label="Additional Note"
              fullWidth
              value={inputs.additionalNote}
              onChange={({ target: { value } }) => handleInputChange('additionalNote', value)}
              readOnly={readOnly}
            />
          </SelectWrapper>
        </InputRow>

        <InputRow>
          <SelectWrapper padded>
            <DatePicker
              label="Test Date and Time"
              withBorderRadius
              onChange={(date) => (writeAllowed ? handleInputChange('testDate', date) : null)}
              readOnly={readOnly}
              value={inputs.testDate}
              placeholderText="Select Date and Time"
            />
          </SelectWrapper>

          <SelectWrapper padded>
            <DurationInput
              title="Duration (HH:MM:SS)"
              onChange={(date) => handleInputChange('duration', date)}
              readOnly={readOnly}
              durationValue={inputs.duration}
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
            <Dropdown
              title="Specimen Collected"
              options={QUESTION_OPTIONS}
              onChange={({ value }) =>
                writeAllowed ? handleInputChange('specimenCollected', value) : null
              }
              readOnly={readOnly}
              placeholder="Select One"
              value={inputs.specimenCollected}
            />
          </SelectWrapper>
          <SelectWrapper padded>
            <DatePicker
              label="Collection Date and Time"
              onChange={(date) => (writeAllowed ? handleInputChange('collectionDate', date) : null)}
              readOnly={readOnly}
              value={inputs.collectionDate}
              placeholderText="Select Date and Time"
              withBorderRadius
            />
          </SelectWrapper>

          <TextInput
            name="collectedBy"
            title="Collected By"
            readOnly={readOnly}
            onChange={({ target: { value } }) => handleInputChange('collectedBy', value)}
            value={inputs.collectedBy}
            placeholder="Enter Phlebotomist Name"
          />
        </InputRow>
        <InputRow>
          <TextInput
            name="performedBy"
            title="Test Performed By"
            readOnly={readOnly}
            onChange={({ target: { value } }) => handleInputChange('performedBy', value)}
            value={inputs.performedBy}
            placeholder="Enter Lab Scientist Name"
          />
          <TextInput
            name="verifiedBy"
            title="Test Verified By"
            readOnly={readOnly}
            onChange={({ target: { value } }) => handleInputChange('verifiedBy', value)}
            value={inputs.verifiedBy}
            placeholder="Enter Lab Scientist Name"
          />
        </InputRow>

        <InputRow>
          <SelectWrapper padded>
            <DatePicker
              label="Result Date and Time"
              onChange={(date) => (writeAllowed ? handleInputChange('resultDate', date) : null)}
              readOnly={readOnly}
              value={inputs.resultDate}
              placeholderText="Select Date and Time"
              withBorderRadius
            />
          </SelectWrapper>
          <TextInput
            name="pathologistName"
            title="Pathologist Name"
            onChange={({ target: { value } }) => handleInputChange('pathologist', value)}
            readOnly={readOnly}
            value={inputs.pathologist}
            placeholder="Enter Pathologist Name"
          />
        </InputRow>
        <InputRow>
          <SelectWrapper fullWidth>
            <TextArea
              name="pathologistReport"
              label="Pathologist Report"
              fullWidth
              value={inputs.pathologistReport}
              onChange={({ target: { value } }) => handleInputChange('pathologistReport', value)}
              readOnly={readOnly}
            />
          </SelectWrapper>
        </InputRow>
        <InputRow>
          <TextInput
            name="result"
            title="Result"
            onChange={({ target: { value } }) => handleInputChange('result', value)}
            value={inputs.result}
            readOnly={readOnly}
            placeholder="Enter Result"
            isRequired
          />
          <TextInput
            name="range"
            title="Range"
            onChange={({ target: { value } }) => handleInputChange('range', value)}
            value={inputs.range}
            readOnly={readOnly}
            placeholder="Enter Range"
          />
        </InputRow>

        <TextInput
          fullWidth
          name="labName"
          title="Facility Name"
          placeholder="Enter Lab Name"
          onChange={({ target: { value } }) => handleInputChange('labName', value)}
          value={inputs.labName}
          readOnly={readOnly}
        />
        <AddressInput
          label="Facility Address"
          fieldPath="labAddress"
          handleInputChange={handleInputChange}
          readOnly={readOnly}
          value={inputs.labAddress}
          placeholder="Enter Lab Address"
        />

        <InputRow>
          <DocumentAttacher
            documents={inputs.documentUrl}
            handleInputChange={handleInputChange}
            readOnly={readOnly}
            type="laboratory"
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

export default AddLabResult;
