import Button from 'dashboard-app/common/Button';
import DatePicker from 'dashboard-app/common/DatePicker';
import Dropdown from 'dashboard-app/common/Dropdown';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import { InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { MEAL_TIME_OPTIONS, RESULT_OPTIONS } from 'dashboard-app/utils/constants';
import useVitalSubrecord from 'hooks/useVitalSubrecord';
import React from 'react';
import ActionSectionSectionWithDeleteModal from './ActionSectionWithDeleteModal';
import { OnChangeProps } from './AddVitalSigns';

export interface BloodGlucoseProps {
  defaultOnChange: (field: OnChangeProps) => void;
  input?: any;
  isEdit: boolean;
  parentRecordId: string;
  tab: string;
  remove: () => void;
  isFirstUnsavedItem: boolean;
  clinifyId: string;
}

const BloodGlucose: React.FC<BloodGlucoseProps> = ({
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
          <Dropdown
            onChange={({ value }) => handleInputChange('mealTime', value)}
            readOnly={readOnly}
            options={MEAL_TIME_OPTIONS}
            value={inputs.mealTime}
            placeholder="Enter Meal Time"
            title="Meal Time"
            creatable
          />
        </SelectWrapper>
        <SelectWrapper>
          <TextInput
            name="result"
            value={inputs?.reading}
            onChange={({ target: { value } }) => handleInputChange('reading', parseFloat(value))}
            type="number"
            readOnly={readOnly}
            title="Reading"
            fullWidth
            placeholder="Enter Reading"
            withTag
            tag={
              <Dropdown
                options={RESULT_OPTIONS}
                value={inputs?.readingUnit}
                onChange={({ value }) => handleInputChange('readingUnit', value)}
                readOnly={readOnly}
                placeholder="Unit"
                withTag
              />
            }
          />
        </SelectWrapper>
      </InputRow>

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

export default BloodGlucose;
