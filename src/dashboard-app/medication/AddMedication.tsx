import { setTitle } from 'apollo/operations';
import ActionSectionSectionWithAuditDetails from 'dashboard-app/common/ActionSectionWithAuditDetails';
import AddressInput from 'dashboard-app/common/AddressInput';
import DatePicker from 'dashboard-app/common/DatePicker';
import DocumentAttacher from 'dashboard-app/common/DocumentAttacher';
import Dropdown from 'dashboard-app/common/Dropdown';
import DurationInput from 'dashboard-app/common/DurationInput';
import { FormContent, RecordForm } from 'dashboard-app/common/FormWrapper';
import LoaderOrError from 'dashboard-app/common/LoaderOrError';
import Prompter from 'dashboard-app/common/Prompter';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import ToggleButton from 'dashboard-app/common/ToggleButton';
import { InputRow, SelectWrapper, ToggleRow } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import {
  ADD_PATIENT_MEDICATION,
  DELETE_PATIENT_MEDICATION,
  GET_PATIENT_MEDICATION,
  GET_PATIENT_MEDICATION_LIST,
  UPDATE_PATIENT_MEDICATION,
} from 'dashboard-app/queries/medication';
import { INTERVAL_OPTIONS, PATIENT_OPTIONS, PAYMENT_OPTIONS } from 'dashboard-app/utils/constants';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { MedFilterOptions, MedicationInput, UserType } from 'graphql-types/globalTypes';
import useAddForm from 'hooks/useAddForm';
import React from 'react';
import { initialDispenseDetail, initialMedicationDetails } from './constants';
import MedicationDetails from './MedicationDetails';
import MedicationSubRecordsSection from './MedicationSubRecordsSection';

export interface AddMedicationProps {
  filterOptions: MedFilterOptions;
  userType?: UserType;
  hideLayout?: boolean;
  showTopNav?: boolean;
  noMargin?: boolean;
  fullWidth?: boolean;
  useWhiteBackground?: boolean;
  noTopPadding?: boolean;
  isOnModal?: boolean;
  defaultId?: string;
}

const AddMedication: React.FC<AddMedicationProps> = ({ filterOptions, defaultId, isOnModal }) => {
  const initialState: MedicationInput = {
    details: [initialMedicationDetails],
    additionalNote: '',
    paymentType: '',
    patientType: '',
    hospitalName: '',
    hospitalAddress: '',
    documentUrl: [],
    interval: null,
    intervalUnit: 'Hour',
    setReminder: false,
    reminderStartDate: null,
    reminderEndDate: null,
    medicationStartTime: null,
    medicationEndTime: null,
    remindMe: null,
    dispenseDetails: [initialDispenseDetail],
  };

  const fetchQuery = GET_PATIENT_MEDICATION;
  const addQuery = ADD_PATIENT_MEDICATION;
  const updateQuery = UPDATE_PATIENT_MEDICATION;
  const deleteQuery = DELETE_PATIENT_MEDICATION;
  const cacheUpdateQuery = GET_PATIENT_MEDICATION_LIST;
  const icon = 'Medication';
  const params = {
    initialState,
    fetchQuery,
    addQuery,
    updateQuery,
    deleteQuery,
    cacheUpdateQuery,
    icon,
    filterOptions,
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
    handleMultipleFieldsChange,
    toggle,
    showModalPrompt,
    fetchSubRecords,
    fetchingSubRecords,
    errorFetchingSubRecords,
  } = useAddForm(params);

  React.useEffect(
    () => (isOnModal ? undefined : setTitle(`${isEdit ? '' : 'Add'} Medication`)),
    [],
  );

  if (fetchingData || errorFetching) {
    return <LoaderOrError loading={fetchingData} />;
  }

  const saveButtonIsDisabled =
    disableActionButton || !fieldsAreValid('medicationdetails', inputs.details, true);

  const inputsToSend = {
    ...inputs,
    dispenseDetails: null,
  };

  return (
    <RecordForm clear>
      <FormContent>
        <MedicationDetails
          handleInputChange={handleMultipleFieldsChange}
          onClick={(newDetailsForm) => handleInputChange('details', newDetailsForm)}
          inputs={inputs.details}
          readOnly={readOnly}
          writeAllowed={writeAllowed}
          isEdit={isEdit}
        />
        <InputRow>
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
        </InputRow>
        <TextInput
          fullWidth
          name="hospitalName"
          title="Hospital Name"
          onChange={({ target: { value } }) => handleInputChange('hospitalName', value)}
          value={inputs.hospitalName}
          readOnly={readOnly}
          placeholder="Enter Hospital Name"
        />
        <AddressInput
          fieldPath="hospitalAddress"
          label="Hospital Address"
          handleInputChange={handleInputChange}
          value={inputs.hospitalAddress}
          readOnly={readOnly}
          placeholder="Enter Hospital Address"
        />
      </FormContent>
      <div>
        <ToggleRow>
          <span className="action">Set Reminder</span>
          <ToggleButton
            onChange={() =>
              writeAllowed ? handleInputChange('setReminder', !inputs.setReminder) : null
            }
            defaultChecked={inputs.setReminder}
            readOnly={readOnly}
          />
        </ToggleRow>
      </div>
      <FormContent>
        {inputs.setReminder && (
          <>
            <InputRow>
              <SelectWrapper padded>
                <DatePicker
                  label="Reminder Start Date"
                  withBorderRadius
                  onChange={(date) =>
                    writeAllowed ? handleInputChange('reminderStartDate', date) : null
                  }
                  value={inputs.reminderStartDate}
                  readOnly={readOnly}
                  type="DateOnly"
                />
              </SelectWrapper>
              <SelectWrapper padded>
                <DatePicker
                  label="Reminder End Date"
                  withBorderRadius
                  onChange={(date) =>
                    writeAllowed ? handleInputChange('reminderEndDate', date) : null
                  }
                  value={inputs.reminderEndDate}
                  readOnly={readOnly}
                  type="DateOnly"
                />
              </SelectWrapper>
            </InputRow>
            <InputRow />
            <InputRow>
              <SelectWrapper padded>
                <DatePicker
                  label="Medication Start Time"
                  withBorderRadius
                  onChange={(date) =>
                    writeAllowed ? handleInputChange('medicationStartTime', date) : null
                  }
                  value={inputs.medicationStartTime}
                  readOnly={readOnly}
                  type="TimeOnly"
                  placeholderText="Select Time"
                />
              </SelectWrapper>
              <SelectWrapper padded>
                <DatePicker
                  label="Medication End Time"
                  withBorderRadius
                  onChange={(date) =>
                    writeAllowed ? handleInputChange('medicationEndTime', date) : null
                  }
                  value={inputs.medicationEndTime}
                  readOnly={readOnly}
                  type="TimeOnly"
                  placeholderText="Select Time"
                />
              </SelectWrapper>
              <SelectWrapper>
                <TextInput
                  name="interval"
                  title="Interval"
                  type="number"
                  onChange={({ target: { value } }) =>
                    writeAllowed ? handleInputChange('interval', parseInt(value, 10)) : null
                  }
                  value={inputs.interval}
                  readOnly={readOnly}
                  fullWidth
                  withTag
                  tag={
                    <Dropdown
                      options={INTERVAL_OPTIONS}
                      onChange={({ value }) =>
                        writeAllowed ? handleInputChange('intervalUnit', value) : null
                      }
                      value={inputs.intervalUnit}
                      placeholder="Unit"
                      readOnly={readOnly}
                      withTag
                    />
                  }
                />
              </SelectWrapper>
              <SelectWrapper padded>
                <DurationInput
                  title="Remind Me"
                  onChange={(durationValue) => handleInputChange('remindMe', durationValue)}
                  durationValue={inputs.remindMe}
                  readOnly={readOnly}
                />
              </SelectWrapper>
            </InputRow>
          </>
        )}

        <InputRow>
          <SelectWrapper fullWidth>
            <TextArea
              name="additionalNote"
              label="Additional Note"
              fullWidth
              onChange={({ target: { value } }) => handleInputChange('additionalNote', value)}
              value={inputs.additionalNote}
              readOnly={readOnly}
            />
          </SelectWrapper>
        </InputRow>

        <MedicationSubRecordsSection
          handleInputChange={handleInputChange}
          handleMultipleFieldsChange={handleMultipleFieldsChange}
          inputs={inputs}
          isEdit={isEdit}
          parentRecordId={inputs?.id}
          readOnly={readOnly}
          fetchSubRecords={fetchSubRecords}
          fetchingSubRecords={fetchingSubRecords}
          errorFetchingSubRecords={errorFetchingSubRecords}
          type="Medication"
        />

        <InputRow>
          <DocumentAttacher
            documents={inputs.documentUrl}
            handleInputChange={handleInputChange}
            readOnly={readOnly}
            type="medication"
          />
        </InputRow>

        <ActionSectionSectionWithAuditDetails
          isEdit={isEdit}
          isEditActive={startEdit}
          toggle={toggle}
          cancelAction={() => setStartEdit(false)}
          disableActionButton={saveButtonIsDisabled}
          onAction={() => action(inputsToSend)}
          actionText={actionText}
          inputs={inputs}
        />
      </FormContent>
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

export default AddMedication;
