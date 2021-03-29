import AdmissionDischarge from 'dashboard-app/admission/AdmissionDischarge';
import AdmissionNote from 'dashboard-app/admission/AdmissionNotes';
import AdmissionTransfer from 'dashboard-app/admission/AdmissionTransfer';
import BloodTransfusion from 'dashboard-app/admission/BloodTransfusion';
import {
  dischargeInitialValues,
  noteInitialValues,
  nurseNoteInitialValues,
  transferInitialValues,
  transfusionInitialValues,
} from 'dashboard-app/admission/constants';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import { initialDispenseDetail } from 'dashboard-app/medication/constants';
import MedicationDispense from 'dashboard-app/medication/MedicationDispense';
import {
  DELETE_ADMISSION_NOTES,
  DELETE_BLOOD_TRANSFUSION,
  DELETE_DISCHARGE_PATIENT,
  DELETE_TRANSFER_PATIENT,
  FETCH_ADMISSION,
  FETCH_BLOOD_TRANSFUSIONS,
  FETCH_DISCHARGE_PATIENTS,
  FETCH_TRANSFER_PATIENTS,
  SAVE_ADMISSION_NOTES,
  SAVE_BLOOD_TRANSFUSION,
  SAVE_DISCHARGE_PATIENT,
  SAVE_TRANSFER_PATIENT,
  UPDATE_ADMISSION_NOTES,
  UPDATE_BLOOD_TRANSFUSION,
  UPDATE_DISCHARGE_PATIENT,
  UPDATE_TRANSFER_PATIENT,
} from 'dashboard-app/queries/admission';
import {
  DELETE_DISPENSE_DETAIL,
  FETCH_DISPENSE_DETAILS,
  SAVE_DISPENSE_DETAIL,
  UPDATE_DISPENSE_DETAIL,
} from 'dashboard-app/queries/medication';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { DocumentNode } from 'graphql';
import useSubRecord from 'hooks/useSubRecord';
import React, { FC } from 'react';
import Button, { OutlineButton } from './Button';
import Divider from './Divider';
import FormAction from './FormActions';
import Prompter from './Prompter';
import RecordHistory from './RecordHistory';
import { ButtonRow, InputRow, SelectWrapper } from './Wrapper';

interface SubRecordComponentWrapperProps {
  updateQuery: DocumentNode;
  deleteQuery: DocumentNode;
  saveQuery: DocumentNode;
  fetchQuery: DocumentNode;
  fetchPath: string;
  clearAction: (id: string) => void;
  onSaveAction: (savedData: any, index: number) => void;
  removeAction: (index: number) => void;
  input: any;
  defaultIsEdit?: boolean;
  index: number;
  Component: any;
  parentRecordId: string;
  handleInputChange: (field: string, name: string, value: any, index: number) => void;
  onSavePath: string;
  onUpdatePath: string;
  onDeletePath: string;
  isMultiple?: boolean;
}

const SubRecordComponentWrapper: FC<SubRecordComponentWrapperProps> = ({
  updateQuery,
  saveQuery,
  deleteQuery,
  clearAction,
  onSaveAction,
  removeAction,
  parentRecordId,
  input,
  index,
  defaultIsEdit,
  Component,
  handleInputChange,
  onSavePath,
  onUpdatePath,
  onDeletePath,
  isMultiple,
  fetchPath,
  fetchQuery,
}) => {
  const {
    remove,
    toggle,
    loading,
    showDeleteModal,
    save,
    readOnly,
    actionText,
    action,
    startEdit,
    setStartEdit,
    writeAllowed,
  } = useSubRecord({
    updateQuery,
    deleteQuery,
    saveQuery,
    onSavePath,
    onUpdatePath,
    fetchPath,
    fetchQuery,
    clearAction,
    onSaveAction,
    onDeletePath,
    isEdit: input.id !== undefined,
    defaultWrite: input.id === undefined,
    parentRecordId,
  });

  const validFields = !readOnly && !fieldsAreValid(onUpdatePath, input);

  return (
    <>
      <Component
        handleInputChange={handleInputChange}
        input={input}
        index={index}
        readOnly={readOnly}
        writeAllowed={writeAllowed}
        isEdit={defaultIsEdit}
      />
      {input.id !== undefined && (
        <>
          <div className="medication-dispense-action-row">
            <div>
              <FormAction
                isEdit={input.id !== undefined}
                isEditActive={startEdit}
                deleteAction={toggle}
                cancelAction={() => setStartEdit(false)}
                disabled={loading || validFields}
                onAction={() => action(input.id, input)}
                actionText={actionText}
              />
            </div>
            <div>
              <InputRow noMargin>
                <RecordHistory
                  createdBy={input?.createdBy?.fullName}
                  createdDate={input?.createdDate}
                  updatedBy={input?.updatedBy?.fullName}
                  updatedDate={input?.updatedDate}
                  className="padded-right small-text"
                />
              </InputRow>
            </div>
          </div>
        </>
      )}
      {!input.id && (
        <ButtonRow position="start">
          {isMultiple && index !== 0 && (
            <div className="delete-btn-wrap">
              <OutlineButton
                text="Delete"
                disabled={loading}
                inactive={loading}
                withIcon={false}
                onClick={() => removeAction(index)}
              />
            </div>
          )}
          {defaultIsEdit && (
            <Button
              text="Save"
              disabled={loading || validFields}
              onClick={() => save(parentRecordId, input)}
            />
          )}
        </ButtonRow>
      )}
      {defaultIsEdit && (
        <SelectWrapper fullWidth padded>
          <Divider />
        </SelectWrapper>
      )}
      <Modal
        modalContent={
          <Prompter
            text="Are you sure you want to delete this record?"
            actionText="Delete"
            deleteAction={() => remove(input.id)}
            cancelAction={toggle}
            disabled={loading}
          />
        }
        isShown={showDeleteModal}
        hide={toggle}
        handleDone={() => {}}
        isAuthentication
      />
    </>
  );
};

type SubRecordTypes =
  | 'dispenseDetails'
  | 'admissionNotes'
  | 'transferPatients'
  | 'dischargePatients'
  | 'nurseAdmissionNotes'
  | 'bloodTransfusions';

interface SubRecordProps {
  readOnly?: boolean;
  writeAllowed?: boolean;
  close?: () => void;
  inputs?: any;
  defaultIsEdit: boolean;
  handleInputChange: (field: string, value: any) => void;
  handleMultipleFieldsChange: (field: string, name: string, value: any, index: number) => void;
  parentRecordId: string;
  type: SubRecordTypes;
}

const dataMapper = {
  dispenseDetails: {
    Component: MedicationDispense,
    updateQuery: UPDATE_DISPENSE_DETAIL,
    saveQuery: SAVE_DISPENSE_DETAIL,
    deleteQuery: DELETE_DISPENSE_DETAIL,
    fetchQuery: FETCH_DISPENSE_DETAILS,
    fetchPath: 'getDispenseDetails',
    initialValues: initialDispenseDetail,
    onSavePath: 'saveDispenseDetail',
    onUpdatePath: 'updateDispenseDetails',
    onDeletePath: 'deleteDispenseDetail',
    text: 'Dispense Detail',
    isMultiple: true,
  },
  admissionNotes: {
    Component: AdmissionNote,
    updateQuery: UPDATE_ADMISSION_NOTES,
    saveQuery: SAVE_ADMISSION_NOTES,
    deleteQuery: DELETE_ADMISSION_NOTES,
    initialValues: noteInitialValues,
    fetchPath: '',
    fetchQuery: FETCH_ADMISSION,
    onSavePath: 'saveAdmissionNote',
    onUpdatePath: 'updateAdmissionNote',
    onDeletePath: 'deleteAdmissionNote',
    text: `Doctor's Note`,
    isMultiple: true,
  },
  nurseAdmissionNotes: {
    Component: AdmissionNote,
    updateQuery: UPDATE_ADMISSION_NOTES,
    saveQuery: SAVE_ADMISSION_NOTES,
    deleteQuery: DELETE_ADMISSION_NOTES,
    initialValues: nurseNoteInitialValues,
    fetchPath: '',
    fetchQuery: FETCH_ADMISSION,
    onSavePath: 'saveAdmissionNote',
    onUpdatePath: 'updateAdmissionNote',
    onDeletePath: 'deleteAdmissionNote',
    text: 'Nurses Note',
    isMultiple: true,
  },
  bloodTransfusions: {
    Component: BloodTransfusion,
    saveQuery: SAVE_BLOOD_TRANSFUSION,
    updateQuery: UPDATE_BLOOD_TRANSFUSION,
    deleteQuery: DELETE_BLOOD_TRANSFUSION,
    fetchQuery: FETCH_BLOOD_TRANSFUSIONS,
    initialValues: transfusionInitialValues,
    fetchPath: 'admissionBloodTransfusions',
    onSavePath: 'saveBloodTransfusion',
    onUpdatePath: 'updateBloodTransfusion',
    onDeletePath: 'deleteBloodTransfusion',
    text: 'Blood Transfusion',
    isMultiple: true,
  },
  transferPatients: {
    Component: AdmissionTransfer,
    saveQuery: SAVE_TRANSFER_PATIENT,
    updateQuery: UPDATE_TRANSFER_PATIENT,
    deleteQuery: DELETE_TRANSFER_PATIENT,
    fetchQuery: FETCH_TRANSFER_PATIENTS,
    initialValues: transferInitialValues,
    fetchPath: 'admissionTransferPatients',
    onSavePath: 'saveTransferPatient',
    onUpdatePath: 'updateTransferPatient',
    onDeletePath: 'deleteTransferPatient',
    text: 'Transfer Patient',
    isMultiple: false,
  },
  dischargePatients: {
    Component: AdmissionDischarge,
    saveQuery: SAVE_DISCHARGE_PATIENT,
    updateQuery: UPDATE_DISCHARGE_PATIENT,
    deleteQuery: DELETE_DISCHARGE_PATIENT,
    fetchQuery: FETCH_DISCHARGE_PATIENTS,
    initialValues: dischargeInitialValues,
    fetchPath: 'admissionDischargePatients',
    onSavePath: 'saveDischargePatient',
    onUpdatePath: 'updateDischargePatient',
    onDeletePath: 'deleteDischargePatient',
    text: 'Discharge Patient',
    isMultiple: false,
  },
};

const SubRecord: FC<SubRecordProps> = ({
  type,
  inputs,
  defaultIsEdit,
  parentRecordId,
  handleInputChange,
  handleMultipleFieldsChange,
}) => {
  const {
    Component,
    saveQuery,
    updateQuery,
    deleteQuery,
    initialValues,
    onSavePath,
    onDeletePath,
    onUpdatePath,
    isMultiple,
    fetchPath,
    fetchQuery,
  } = dataMapper[type];

  const clearAction = (index) => {
    const currentInputLength = inputs.length;
    handleInputChange(
      type,
      inputs.filter((_, i) => i !== index),
    );
    // add back a fresh form after it was cleared to zero
    if (currentInputLength === 1) handleInputChange(type, [initialValues]);
  };

  const onSaveAction = (savedData, i) => {
    const currentDispenseDetails = [...inputs];
    currentDispenseDetails[i] = savedData;
    handleInputChange(type, currentDispenseDetails);
  };

  const removeAction = (index) =>
    handleInputChange(
      type,
      inputs.filter((_, i) => i !== index),
    );

  const createForm = () => handleInputChange(type, [...inputs, initialValues]);

  return (
    <div className="sub-record">
      <InputRow>
        {inputs?.map((input, i) => (
          <SubRecordComponentWrapper
            Component={Component}
            input={input}
            index={i}
            parentRecordId={parentRecordId}
            onSaveAction={(savedData) => onSaveAction(savedData, i)}
            removeAction={removeAction}
            clearAction={() => clearAction(i)}
            defaultIsEdit={defaultIsEdit}
            handleInputChange={handleMultipleFieldsChange}
            saveQuery={saveQuery}
            updateQuery={updateQuery}
            fetchPath={fetchPath}
            fetchQuery={fetchQuery}
            deleteQuery={deleteQuery}
            onSavePath={onSavePath}
            onDeletePath={onDeletePath}
            onUpdatePath={onUpdatePath}
            isMultiple={isMultiple}
          />
        ))}
        {isMultiple && defaultIsEdit && (
          <ButtonRow position="start">
            <Button text="Add" onClick={createForm} />
          </ButtonRow>
        )}
      </InputRow>
    </div>
  );
};

export default SubRecord;
