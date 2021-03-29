import Button from 'dashboard-app/common/Button';
import DatePicker from 'dashboard-app/common/DatePicker';
import Dropdown from 'dashboard-app/common/Dropdown';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import { InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import {
  TEMPERATURE_CHECK_METHOD_OPTIONS,
  TEMPERATURE_OPTIONS,
} from 'dashboard-app/utils/constants';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import useVitalSubrecord from 'hooks/useVitalSubrecord';
import React from 'react';
import ActionSectionSectionWithDeleteModal from './ActionSectionWithDeleteModal';
import { OnChangeProps } from './AddVitalSigns';

export interface TemperatureProps {
  defaultOnChange: (field: OnChangeProps) => void;
  input?: any;
  parentRecordId: string;
  tab: string;
  isEdit: boolean;
  remove: () => void;
  isFirstUnsavedItem: boolean;
  clinifyId: string;
}

const Temperature: React.FC<TemperatureProps> = ({
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
            onChange={({ value }) => handleInputChange('checkMethod', value)}
            readOnly={readOnly}
            options={TEMPERATURE_CHECK_METHOD_OPTIONS}
            value={inputs?.checkMethod}
            placeholder="Enter Check Method"
            title="Check Method"
            creatable
          />
        </SelectWrapper>

        {inputs?.checkMethod === 'Others' && (
          <SelectWrapper>
            <TextInput
              name="specifyCheckMethod"
              value={inputs?.checkMethodSpecify}
              onChange={({ target: { value } }) => handleInputChange('checkMethodSpecify', value)}
              readOnly={readOnly}
              title="Specify Check Method"
              fullWidth
              placeholder="Specify Check Method"
            />
          </SelectWrapper>
        )}

        <SelectWrapper>
          <TextInput
            name="reading"
            type="number"
            value={inputs?.reading}
            onChange={({ target: { value } }) => handleInputChange('reading', parseFloat(value))}
            readOnly={readOnly}
            title="Reading"
            fullWidth
            placeholder="Enter Reading"
            withTag
            tag={
              <Dropdown
                options={TEMPERATURE_OPTIONS}
                value={inputs?.readingUnit}
                onChange={({ value }) => handleInputChange('readingUnit', value)}
                readOnly={readOnly}
                placeholder="Unit"
                withTag
              />
            }
            isRequired
          />
        </SelectWrapper>

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
          disableActionButton={disableActionButton || !fieldsAreValid('temperature', inputs)}
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

export default Temperature;
