import Button from 'dashboard-app/common/Button';
import DatePicker from 'dashboard-app/common/DatePicker';
import TextArea from 'dashboard-app/common/TextArea';
import { DoubleTextInput } from 'dashboard-app/common/TextInput';
import { InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import useVitalSubrecord from 'hooks/useVitalSubrecord';
import React from 'react';
import ActionSectionSectionWithDeleteModal from './ActionSectionWithDeleteModal';
import { OnChangeProps } from './AddVitalSigns';

export interface VisualAcuityProps {
  defaultOnChange: (field: OnChangeProps) => void;
  input?: any;
  parentRecordId: string;
  tab: string;
  isEdit: boolean;
  remove: () => void;
  isFirstUnsavedItem: boolean;
  clinifyId: string;
}

const VisualAcuity: React.FC<VisualAcuityProps> = ({
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
        <SelectWrapper noDropdown>
          <div className="twin-block-wrapper">
            <div className="input-wrapper">
              <DoubleTextInput
                nameLeft="Without Glasses"
                nameRight="Without Glasses"
                valueLeft={inputs?.withoutGlassesLeft}
                valueRight={inputs?.withoutGlassesRight}
                onChangeLeft={({ target: { value } }) =>
                  handleInputChange('withoutGlassesLeft', value)
                }
                onChangeRight={({ target: { value } }) =>
                  handleInputChange('withoutGlassesRight', value)
                }
                type="text"
                title="Without Glasses"
                fullWidth
                min={0}
                readOnly={readOnly}
                placeholderLeft="Enter Left"
                placeholderRight="Enter Right"
              />
            </div>
          </div>
        </SelectWrapper>
        <SelectWrapper noDropdown>
          <div className="twin-block-wrapper">
            <div className="input-wrapper">
              <DoubleTextInput
                nameLeft="With Glasses"
                nameRight="With Glasses"
                valueLeft={inputs?.withGlassesLeft}
                valueRight={inputs?.withGlassesRight}
                onChangeLeft={({ target: { value } }) =>
                  handleInputChange('withGlassesLeft', value)
                }
                onChangeRight={({ target: { value } }) =>
                  handleInputChange('withGlassesRight', value)
                }
                min={0}
                type="text"
                title="With Glasses"
                fullWidth
                readOnly={readOnly}
                placeholderLeft="Enter Left"
                placeholderRight="Enter Right"
              />
            </div>
          </div>
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

export default VisualAcuity;
