import Button from 'dashboard-app/common/Button';
import DatePicker from 'dashboard-app/common/DatePicker';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import UnitTag from 'dashboard-app/common/UnitTag';
import { InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import useVitalSubrecord from 'hooks/useVitalSubrecord';
import React from 'react';
import ActionSectionSectionWithDeleteModal from './ActionSectionWithDeleteModal';
import { OnChangeProps } from './AddVitalSigns';

export interface BloodPressureProps {
  defaultOnChange: (field: OnChangeProps) => void;
  input?: any;
  parentRecordId: string;
  tab: string;
  isEdit: boolean;
  remove: () => void;
  isFirstUnsavedItem: boolean;
  clinifyId: string;
}

const BloodPressure: React.FC<BloodPressureProps> = ({
  input,
  defaultOnChange,
  tab,
  parentRecordId,
  isEdit,
  remove,
  isFirstUnsavedItem,
  clinifyId,
}) => {
  const {
    inputs,
    handleInputChange,
    readOnly,
    toggle,
    startEdit,
    disableActionButton,
    showDeleteModal,
    action,
    actionText,
    cancelAction,
    deleteSubVital,
  } = useVitalSubrecord({
    tab,
    input,
    defaultOnChange,
    parentRecordId,
    isEdit,
    remove,
    clinifyId,
  });

  return (
    <>
      <InputRow>
        <SelectWrapper>
          <TextInput
            value={inputs?.systolic}
            readOnly={readOnly}
            onChange={({ target: { value } }) => handleInputChange('systolic', parseFloat(value))}
            type="number"
            name="systolic"
            title="Systolic (Top Number)"
            placeholder="Enter Result"
            withTag
            tag={<UnitTag text="mmHg" readOnly={readOnly} />}
            fullWidth
          />
        </SelectWrapper>

        <SelectWrapper>
          <TextInput
            value={inputs?.diastolic}
            onChange={({ target: { value } }) => handleInputChange('diastolic', parseFloat(value))}
            readOnly={readOnly}
            type="number"
            name="diastolic"
            title="Diastolic (Bottom Number)"
            fullWidth
            placeholder="Enter Result"
            withTag
            tag={<UnitTag text="mmHg" />}
          />
        </SelectWrapper>
      </InputRow>
      <InputRow>
        <SelectWrapper padded>
          <DatePicker
            withBorderRadius
            onChange={(date) => handleInputChange('readingDateTime', date)}
            label="Reading Date and Time"
            placeholderText="Select Date and Time"
            value={inputs?.readingDateTime}
            readOnly={readOnly}
          />
        </SelectWrapper>
        <SelectWrapper>
          <TextInput
            value={inputs?.meanArterialPressure}
            onChange={({ target: { value } }) =>
              handleInputChange('meanArterialPressure', parseFloat(value))
            }
            readOnly={readOnly}
            type="number"
            name="arterial"
            title="Mean Arterial Pressure"
            fullWidth
            placeholder="Enter Result"
            withTag
            tag={<UnitTag text="mmHg" />}
          />
        </SelectWrapper>
      </InputRow>
      <InputRow>
        <SelectWrapper fullWidth>
          <TextArea
            name="additionalNote"
            label="Additional Note"
            fullWidth
            onChange={({ target: { value } }) => handleInputChange('additionalNote', value)}
            readOnly={readOnly}
            value={inputs?.additionalNote}
          />
        </SelectWrapper>
      </InputRow>

      {isEdit && !isFirstUnsavedItem && (
        <ActionSectionSectionWithDeleteModal
          isEdit={isEdit}
          cancelAction={cancelAction}
          toggle={toggle}
          deleteAction={deleteSubVital}
          isEditActive={startEdit}
          onAction={action}
          actionText={actionText}
          disableActionButton={disableActionButton}
          showModalPrompt={showDeleteModal}
          inputs={inputs}
        />
      )}
      {isEdit && isFirstUnsavedItem && (
        <SelectWrapper padded>
          <Button text="Save" onClick={action} disabled={disableActionButton} />
        </SelectWrapper>
      )}
    </>
  );
};

export default BloodPressure;
