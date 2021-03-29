import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { useState } from 'react';

export default ({
  isEdit,
  addRecordAction,
  updateRecordAction,
  inputs,
  setInputs,
  updating,
  deleting,
  adding,
  id,
  search,
  clinifyId,
  formName = '',
}) => {
  const defaultStartEdit = isEdit && search.split('=')[1] === 'false';
  const [startEdit, setStartEdit] = useState(defaultStartEdit);

  let actionText = 'Save';
  const recordsRequiringClinifyId = [
    'Appointment',
    'Allergy',
    'Admission',
    'Medication',
    'Immunization',
    'Vital',
  ];
  let action: any = (input = inputs) =>
    addRecordAction({
      ...input,
      clinifyId: recordsRequiringClinifyId.includes(formName) ? clinifyId : null,
    });

  if (isEdit) {
    actionText = 'Edit';
    action = () => setStartEdit(true);
  }

  if (startEdit) {
    actionText = 'Update';
    action = (input) => {
      const fieldsToSend = input || inputs;
      const fieldsWithClinifyId =
        formName !== 'Appointment' ? { ...fieldsToSend, clinifyId } : fieldsToSend;
      updateRecordAction(fieldsWithClinifyId, id);
    };
  }

  const writeAllowed = startEdit || !isEdit;
  const readOnly = !startEdit && isEdit;
  const disableActionButton = adding || updating || deleting || !fieldsAreValid(formName, inputs);

  return {
    setStartEdit,
    inputs,
    actionText,
    action,
    readOnly,
    disableActionButton,
    writeAllowed,
    startEdit,
    setInputs,
  };
};
