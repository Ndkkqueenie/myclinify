import { setTitle } from 'apollo/operations';
import ActionSectionSectionWithAuditDetails from 'dashboard-app/common/ActionSectionWithAuditDetails';
import AddressInput from 'dashboard-app/common/AddressInput';
import DatePicker from 'dashboard-app/common/DatePicker';
import DocumentAttacher from 'dashboard-app/common/DocumentAttacher';
import Dropdown from 'dashboard-app/common/Dropdown';
import DurationInput from 'dashboard-app/common/DurationInput';
import { FormContent, RecordForm } from 'dashboard-app/common/FormWrapper';
import CaretDown from 'dashboard-app/common/icons/CaretDown';
import CaretUp from 'dashboard-app/common/icons/CaretUp';
import LoaderOrError from 'dashboard-app/common/LoaderOrError';
import Prompter from 'dashboard-app/common/Prompter';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import ToggleButton from 'dashboard-app/common/ToggleButton';
import {
  BaseWrapper,
  InlineToggleRow,
  InlineToggleRowWrapper,
  InputRow,
  SelectWrapper,
  ToggleRow,
} from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import {
  ADD_IMMUNIZATION,
  DELETE_IMMUNIZATION,
  GET_IMMUNIZATION,
  GET_IMMUNIZATIONS,
  UPDATE_IMMUNIZATION,
} from 'dashboard-app/queries/immunization';
import {
  IMMUNIZATION_DOSAGE_OPTIONS,
  IMMUNIZATION_METHOD_OPTIONS,
  IMMUNIZATION_NAME_OPTIONS,
} from 'dashboard-app/utils/constants';
import { ImmunizationFilterInput, NewImmunizationInput, UserType } from 'graphql-types/globalTypes';
import useAddForm from 'hooks/useAddForm';
import React, { useState } from 'react';

export interface AddImmunizationProps {
  userType?: UserType;
  hideLayout?: boolean;
  filterOptions?: ImmunizationFilterInput;
}

const AddImmunization: React.FC<AddImmunizationProps> = ({ filterOptions }) => {
  const [showReImmunization, setShowReImmunization] = useState(false);

  const initialState: NewImmunizationInput = {
    administeredDate: null,
    duration: null,
    immunizationName: '',
    administratorName: '',
    hospitalAddress: '',
    hospitalName: '',
    additionalNote: '',
    batchNumber: '',
    expiryDate: null,
    nextAppointmentDateTime: null,
    remindMe: false,
    dosage: 0,
    quantity: 0,
    dosageUnit: 'mm',
    method: '',
    documentUrl: [],
  };

  const fetchQuery = GET_IMMUNIZATION;
  const addQuery = ADD_IMMUNIZATION;
  const updateQuery = UPDATE_IMMUNIZATION;
  const deleteQuery = DELETE_IMMUNIZATION;
  const cacheUpdateQuery = GET_IMMUNIZATIONS;
  const icon = 'Immunization';
  const params = {
    initialState,
    fetchQuery,
    addQuery,
    updateQuery,
    deleteQuery,
    cacheUpdateQuery,
    icon,
    filterOptions,
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
    deleteRecordAction,
    fetchingData,
    errorFetching,
    showModalPrompt,
    toggle,
  } = useAddForm(params);

  React.useEffect(() => setTitle(`${isEdit ? '' : 'Add'} Immunization`), []);

  if (fetchingData || errorFetching) {
    return <LoaderOrError loading={fetchingData} />;
  }

  return (
    <RecordForm clear>
      <FormContent>
        <InputRow>
          <SelectWrapper padded>
            <DatePicker
              label="Administration Date and Time"
              withBorderRadius
              onChange={(date) =>
                writeAllowed ? handleInputChange('administeredDate', date) : null
              }
              isRequired
              readOnly={readOnly}
              value={inputs.administeredDate}
            />
          </SelectWrapper>

          <SelectWrapper padded>
            <DurationInput
              title="Duration (YY:MM:DD)"
              onChange={(duration) => handleInputChange('duration', duration)}
              readOnly={readOnly}
              durationValue={inputs.duration}
              isYear
            />
          </SelectWrapper>
        </InputRow>
        <InputRow>
          <Dropdown
            title="Vaccination Name"
            options={IMMUNIZATION_NAME_OPTIONS}
            placeholder="Select Vaccination Name"
            value={inputs.immunizationName}
            onChange={({ value }) =>
              writeAllowed ? handleInputChange('immunizationName', value) : null
            }
            readOnly={readOnly}
            creatable
            isRequired
          />
        </InputRow>
        <InputRow>
          <SelectWrapper>
            <TextInput
              fullWidth
              name="batchNumber"
              title="Batch Number"
              readOnly={readOnly}
              value={inputs.batchNumber}
              onChange={({ target: { value } }) =>
                writeAllowed ? handleInputChange('batchNumber', value) : null
              }
              placeholder="Enter Batch Number"
            />
          </SelectWrapper>
          <SelectWrapper padded>
            <DatePicker
              label="Expiry Date"
              withBorderRadius
              value={inputs.expiryDate}
              onChange={(value) => (writeAllowed ? handleInputChange('expiryDate', value) : null)}
              readOnly={readOnly}
              type="DateOnly"
            />
          </SelectWrapper>
        </InputRow>
        <InputRow>
          <SelectWrapper>
            <TextInput
              fullWidth
              name="administratorName"
              title="Given By"
              readOnly={readOnly}
              value={inputs.administratorName}
              onChange={({ target: { value } }) => handleInputChange('administratorName', value)}
              placeholder="Enter Nurse's Name"
            />
          </SelectWrapper>
          <SelectWrapper>
            <Dropdown
              title="Route Of Administration"
              options={IMMUNIZATION_METHOD_OPTIONS}
              placeholder="Select Route"
              value={inputs.method}
              onChange={({ value }) => (writeAllowed ? handleInputChange('method', value) : null)}
              readOnly={readOnly}
              creatable
            />
          </SelectWrapper>
        </InputRow>
        <InputRow>
          <SelectWrapper>
            <TextInput
              fullWidth
              name="quantity"
              title="Quantity"
              type="number"
              value={inputs.quantity}
              onChange={({ target: { value } }) => handleInputChange('quantity', Number(value))}
              readOnly={readOnly}
            />
          </SelectWrapper>
          <SelectWrapper>
            <TextInput
              name="dosage"
              title="Dosage"
              type="number"
              onChange={({ target: { value } }) => handleInputChange('dosage', Number(value))}
              value={inputs.dosage}
              readOnly={readOnly}
              fullWidth
              withTag
              tag={
                <Dropdown
                  options={IMMUNIZATION_DOSAGE_OPTIONS}
                  value={inputs.dosageUnit}
                  onChange={({ value }) =>
                    writeAllowed ? handleInputChange('dosageUnit', value) : null
                  }
                  placeholder="Unit"
                  readOnly={readOnly}
                  withTag
                />
              }
            />
          </SelectWrapper>
        </InputRow>
        <TextInput
          name="hospitalName"
          title="Hospital Name"
          onChange={({ target: { value } }) => handleInputChange('hospitalName', value)}
          value={inputs.hospitalName}
          readOnly={readOnly}
          placeholder="Enter Hospital Name"
          fullWidth
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
        <ToggleRow
          onClick={() => {
            setShowReImmunization(!showReImmunization);
          }}
        >
          <span className="action">Re-Immunization</span>
          {!showReImmunization ? <CaretDown /> : <CaretUp />}
        </ToggleRow>
      </div>
      <FormContent>
        {showReImmunization && (
          <>
            <InputRow>
              <SelectWrapper padded>
                <DatePicker
                  label="Administration Date and Time"
                  withBorderRadius
                  onChange={(date) => handleInputChange('nextAppointmentDateTime', date)}
                  readOnly={readOnly}
                  placeholderText="Select Date and Time"
                  value={inputs.nextAppointmentDateTime}
                />
              </SelectWrapper>
              <SelectWrapper padded />
            </InputRow>
            <InlineToggleRowWrapper>
              <InlineToggleRow>
                <span className="action">Set Reminder</span>
                <BaseWrapper>
                  <span>24hrs Before</span>
                  <ToggleButton
                    defaultChecked={inputs.remindMe}
                    onChange={() =>
                      readOnly ? null : handleInputChange('remindMe', !inputs.remindMe)
                    }
                    readOnly={readOnly}
                  />
                </BaseWrapper>
              </InlineToggleRow>
            </InlineToggleRowWrapper>
          </>
        )}

        <InputRow>
          <SelectWrapper fullWidth>
            <TextArea
              onChange={({ target: { value } }) => handleInputChange('additionalNote', value)}
              readOnly={readOnly}
              name="additionalNote"
              label="Additional Note"
              fullWidth
              value={inputs.additionalNote}
            />
          </SelectWrapper>
        </InputRow>

        <InputRow>
          <DocumentAttacher
            documents={inputs.documentUrl}
            handleInputChange={handleInputChange}
            readOnly={readOnly}
            type="immunization"
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

export default AddImmunization;
