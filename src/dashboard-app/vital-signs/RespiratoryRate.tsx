import Button from 'dashboard-app/common/Button';
import DatePicker from 'dashboard-app/common/DatePicker';
import Dropdown from 'dashboard-app/common/Dropdown';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import UnitTag from 'dashboard-app/common/UnitTag';
import { InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { RHYTHM_OPTIONS } from 'dashboard-app/utils/constants';
import useVitalSubrecord from 'hooks/useVitalSubrecord';
import React from 'react';
import ActionSectionSectionWithDeleteModal from './ActionSectionWithDeleteModal';
import { OnChangeProps } from './AddVitalSigns';

export interface RespiratoryRateProps {
  defaultOnChange: (field: OnChangeProps) => void;
  input?: any;
  parentRecordId: string;
  tab: string;
  isEdit: boolean;
  remove: () => void;
  isFirstUnsavedItem: boolean;
  clinifyId: string;
}

const RespiratoryRate: React.FC<RespiratoryRateProps> = ({
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
            name="reading"
            value={inputs?.reading}
            onChange={({ target: { value } }) => handleInputChange('reading', parseFloat(value))}
            readOnly={readOnly}
            type="number"
            title="Reading"
            fullWidth
            placeholder="Enter Reading"
            withTag
            tag={<UnitTag text="cpm" />}
          />
        </SelectWrapper>

        <SelectWrapper>
          <Dropdown
            value={inputs?.rhythm}
            onChange={({ value }) => handleInputChange('rhythm', value)}
            readOnly={readOnly}
            options={RHYTHM_OPTIONS}
            placeholder="Rhythm"
            title="Rhythm"
            creatable
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
        <SelectWrapper>
          <TextInput
            value={inputs?.oxygenSaturation}
            onChange={({ target: { value } }) =>
              handleInputChange('oxygenSaturation', parseFloat(value))
            }
            readOnly={readOnly}
            type="number"
            name="Oxygen Saturation"
            title="Oxygen Saturation"
            fullWidth
            placeholder="Enter Result"
            withTag
            tag={<UnitTag text="%" />}
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

export default RespiratoryRate;
