import Button from 'dashboard-app/common/Button';
import DatePicker from 'dashboard-app/common/DatePicker';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import { InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import useVitalSubrecord from 'hooks/useVitalSubrecord';
import React from 'react';
import ActionSectionSectionWithDeleteModal from './ActionSectionWithDeleteModal';
import { OnChangeProps } from './AddVitalSigns';

export interface UrineDipstickProps {
  defaultOnChange: (field: OnChangeProps) => void;
  input?: any;
  parentRecordId: string;
  tab: string;
  isEdit: boolean;
  remove: () => void;
  isFirstUnsavedItem: boolean;
  clinifyId: string;
}

const UrineDipstick: React.FC<UrineDipstickProps> = ({
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
            name="blood"
            value={inputs?.blood}
            onChange={({ target: { value } }) => handleInputChange('blood', parseFloat(value))}
            readOnly={readOnly}
            type="number"
            title="Blood"
            fullWidth
            placeholder="Enter Blood"
          />
        </SelectWrapper>

        <SelectWrapper>
          <TextInput
            name="glucose"
            value={inputs?.glucose}
            onChange={({ target: { value } }) => handleInputChange('glucose', parseFloat(value))}
            readOnly={readOnly}
            title="Glucose"
            type="number"
            fullWidth
            placeholder="Enter Glucose"
          />
        </SelectWrapper>
      </InputRow>
      <InputRow>
        <SelectWrapper>
          <TextInput
            name="ketones"
            value={inputs?.ketones}
            onChange={({ target: { value } }) => handleInputChange('ketones', parseFloat(value))}
            readOnly={readOnly}
            type="number"
            title="Ketones"
            fullWidth
            placeholder="Enter Ketones"
          />
        </SelectWrapper>

        <SelectWrapper>
          <TextInput
            name="pH"
            value={inputs?.ph}
            onChange={({ target: { value } }) => handleInputChange('ph', parseFloat(value))}
            readOnly={readOnly}
            title="pH"
            type="number"
            fullWidth
            placeholder="Enter pH"
          />
        </SelectWrapper>
        <SelectWrapper>
          <TextInput
            name="protein"
            value={inputs?.protein}
            onChange={({ target: { value } }) => handleInputChange('protein', parseFloat(value))}
            readOnly={readOnly}
            title="Protein"
            fullWidth
            type="number"
            placeholder="Enter Protein"
          />
        </SelectWrapper>
        <SelectWrapper padded>
          <DatePicker
            withBorderRadius
            onChange={(date) => handleInputChange('readingDateTime', date)}
            label="Reading Date and Time"
            placeholderText="Select Date and Time"
            readOnly={readOnly}
            value={inputs?.readingDateTime}
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

export default UrineDipstick;
