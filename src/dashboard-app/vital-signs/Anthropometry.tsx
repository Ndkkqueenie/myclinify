import Button from 'dashboard-app/common/Button';
import DatePicker from 'dashboard-app/common/DatePicker';
import Dropdown from 'dashboard-app/common/Dropdown';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput, { DoubleTextInput } from 'dashboard-app/common/TextInput';
import { InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import {
  HEIGHT_OPTIONS,
  SKINFOLD_THICKNESS_OPTIONS,
  WAIST_OPTIONS,
  WEIGHT_OPTIONS,
  WIDTH_OPTIONS,
} from 'dashboard-app/utils/constants';
import useVitalSubrecord from 'hooks/useVitalSubrecord';
import React from 'react';
import ActionSectionSectionWithDeleteModal from './ActionSectionWithDeleteModal';
import { OnChangeProps } from './AddVitalSigns';

export interface AnthropometryProps {
  defaultOnChange: (field: OnChangeProps) => void;
  input: any;
  parentRecordId: string;
  isEdit: boolean;
  tab: string;
  remove: () => void;
  isFirstUnsavedItem: boolean;
  clinifyId: string;
}

const calculateBmi = (height: number, heightUnit: string, weight: number, weightUnit: string) => {
  let standardHeight = height;
  let standardWeight = weight;
  if (standardHeight && standardWeight) {
    if (heightUnit !== 'cm') standardHeight *= 30.48;
    if (weightUnit === 'lb') standardWeight /= 0.4536;
    return ((standardWeight / standardHeight / standardHeight) * 10000).toFixed(1);
  }
  return 0;
};

const Anthropometry: React.FC<AnthropometryProps> = ({
  input,
  defaultOnChange,
  tab,
  isEdit,
  parentRecordId,
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

  const { height, weight, heightUnit, weightUnit } = inputs;
  const bmi = calculateBmi(height, heightUnit, weight, weightUnit);

  return (
    <>
      <InputRow>
        <SelectWrapper>
          <TextInput
            type="number"
            name="height"
            value={inputs?.height}
            onChange={({ target: { value } }) => handleInputChange('height', value)}
            title="Height"
            fullWidth
            readOnly={readOnly}
            withTag
            tag={
              <Dropdown
                value={inputs?.heightUnit}
                onChange={({ value }) => handleInputChange('heightUnit', value)}
                options={HEIGHT_OPTIONS}
                withTag
                readOnly={readOnly}
              />
            }
            placeholder="Enter Height"
          />
        </SelectWrapper>
        <SelectWrapper>
          <TextInput
            name="weight"
            value={inputs.weight}
            onChange={({ target: { value } }) => handleInputChange('weight', value)}
            title="Weight"
            type="number"
            fullWidth
            readOnly={readOnly}
            withTag
            tag={
              <Dropdown
                value={inputs?.weightUnit}
                onChange={({ value }) => handleInputChange('weightUnit', value)}
                options={WEIGHT_OPTIONS}
                placeholder="Unit"
                withTag
                readOnly={readOnly}
              />
            }
            placeholder="Enter Weight"
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <SelectWrapper>
          <TextInput
            name="BMI"
            title="Body Mass Index (BMI)"
            value={bmi}
            placeholder="Body Mass Index (BMI)"
            fullWidth
            readOnly
          />
        </SelectWrapper>
        <SelectWrapper>
          <TextInput
            name="waist"
            value={inputs?.waistCircumference}
            onChange={({ target: { value } }) => handleInputChange('waistCircumference', value)}
            title="Waist Circumference"
            type="number"
            fullWidth
            readOnly={readOnly}
            withTag
            tag={
              <Dropdown
                value={inputs?.waistCircumferenceUnit}
                onChange={({ value }) => handleInputChange('waistCircumferenceUnit', value)}
                options={WAIST_OPTIONS}
                placeholder="Unit"
                withTag
                readOnly={readOnly}
              />
            }
            placeholder="Enter Waist Circumference"
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <SelectWrapper>
          <TextInput
            name="hip"
            value={inputs?.hipCircumference}
            onChange={({ target: { value } }) => handleInputChange('hipCircumference', value)}
            title="Hip Circumference"
            type="number"
            fullWidth
            readOnly={readOnly}
            withTag
            tag={
              <Dropdown
                value={inputs?.hipCircumferenceUnit}
                onChange={({ value }) => handleInputChange('hipCircumferenceUnit', value)}
                options={WAIST_OPTIONS}
                placeholder="Unit"
                withTag
                readOnly={readOnly}
              />
            }
            placeholder="Enter Hip Circumference"
          />
        </SelectWrapper>
        <SelectWrapper>
          <TextInput
            name="skinfold thickness"
            value={inputs?.skinfoldThickness}
            onChange={({ target: { value } }) => handleInputChange('skinfoldThickness', value)}
            title="Skinfold Thickness"
            type="number"
            fullWidth
            readOnly={readOnly}
            withTag
            tag={
              <Dropdown
                value={inputs?.skinfoldThicknessUnit}
                onChange={({ value }) => handleInputChange('skinfoldThicknessUnit', value)}
                options={SKINFOLD_THICKNESS_OPTIONS}
                placeholder="Unit"
                withTag
                readOnly={readOnly}
              />
            }
            placeholder="Enter Skinfold Thickness"
          />
        </SelectWrapper>
      </InputRow>
      <InputRow>
        <InputRow>
          <SelectWrapper>
            <DoubleTextInput
              nameLeft="Left Upper Limb"
              nameRight="Right Upper Limb"
              valueLeft={inputs?.leftUpperLimbCircumference}
              valueRight={inputs?.rightUpperLimbCircumference}
              onChangeLeft={({ target: { value } }) =>
                handleInputChange('leftUpperLimbCircumference', value)
              }
              onChangeRight={({ target: { value } }) =>
                handleInputChange('rightUpperLimbCircumference', value)
              }
              type="number"
              min={0}
              title="Upper Limb Circumference"
              fullWidth
              readOnly={readOnly}
              placeholderLeft="Enter Left"
              placeholderRight="Enter Right"
              withTag
              tag={
                <Dropdown
                  value={inputs?.upperLimbCircumferenceUnit}
                  onChange={({ value }) => handleInputChange('upperLimbCircumferenceUnit', value)}
                  options={WIDTH_OPTIONS}
                  placeholder="Unit"
                  withTag
                  readOnly={readOnly}
                />
              }
            />
          </SelectWrapper>

          <SelectWrapper>
            <DoubleTextInput
              nameLeft="Left Lower Limb"
              nameRight="Right Lower Limb"
              type="number"
              valueLeft={inputs?.leftLowerLimbCircumference}
              valueRight={inputs?.rightLowerLimbCircumference}
              onChangeLeft={({ target: { value } }) =>
                handleInputChange('leftLowerLimbCircumference', parseFloat(value))
              }
              onChangeRight={({ target: { value } }) =>
                handleInputChange('rightLowerLimbCircumference', parseFloat(value))
              }
              min={0}
              title="Lower Limb Circumference"
              fullWidth
              readOnly={readOnly}
              placeholderLeft="Enter Left"
              placeholderRight="Enter Right"
              withTag
              tag={
                <Dropdown
                  value={inputs?.lowerLimbCircumferenceUnit}
                  onChange={({ value }) => handleInputChange('lowerLimbCircumferenceUnit', value)}
                  options={WIDTH_OPTIONS}
                  placeholder="Unit"
                  withTag
                  readOnly={readOnly}
                />
              }
            />
          </SelectWrapper>
        </InputRow>
      </InputRow>
      <InputRow>
        <SelectWrapper>
          <TextInput
            name="waist"
            value={inputs?.abdominalGirth}
            onChange={({ target: { value } }) =>
              handleInputChange('abdominalGirth', parseFloat(value))
            }
            title="Abdominal Girth"
            type="number"
            fullWidth
            readOnly={readOnly}
            withTag
            tag={
              <Dropdown
                onChange={({ value }) => handleInputChange('abdominalGirthUnit', value)}
                options={WIDTH_OPTIONS}
                placeholder="Unit"
                value={inputs.abdominalGirthUnit}
                withTag
                readOnly={readOnly}
              />
            }
            placeholder="Enter Abdominal Girth"
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

export default Anthropometry;
