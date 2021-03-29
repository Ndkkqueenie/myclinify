import DatePicker from 'dashboard-app/common/DatePicker';
import Divider from 'dashboard-app/common/Divider';
import Dropdown from 'dashboard-app/common/Dropdown';
import DurationInput from 'dashboard-app/common/DurationInput';
import MultiGroupAction from 'dashboard-app/common/MultiGroupActions';
import TextInput from 'dashboard-app/common/TextInput';
import { InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import {
  ADMINISTRATION_METHOD_OPTIONS,
  DOSAGE_OPTIONS,
  MEDICATION_FREQUENCY,
  QUESTION_OPTIONS,
} from 'dashboard-app/utils/constants';
import { MedicationDetailsInput } from 'graphql-types/globalTypes';
import React, { FC } from 'react';
import { initialMedicationDetails } from './constants';
import './styles/medicationDetails.scss';

interface MedicationDetailsProp {
  isEdit?: boolean;
  readOnly?: boolean;
  writeAllowed?: boolean;
  inputs: MedicationDetailsInput[];
  handleInputChange: (field: string, name: string, value: any, index: number) => void;
  onClick: (newDetails: MedicationDetailsInput[]) => void;
}

const MedicationDetails: FC<MedicationDetailsProp> = ({
  inputs,
  handleInputChange,
  readOnly,
  writeAllowed,
  isEdit,
  onClick,
}) => (
  <div className="medication-details">
    {inputs.map((input, i) => (
      <div key={`key~${i}`} className="detail">
        <InputRow className="detail-row">
          <SelectWrapper padded>
            <DatePicker
              label="Prescription Date and Time"
              withBorderRadius
              onChange={(date) =>
                writeAllowed ? handleInputChange('details', 'datePrescribed', date, i) : null
              }
              value={input.datePrescribed}
              readOnly={readOnly}
            />
          </SelectWrapper>
          <TextInput
            name="purpose"
            title="Indication (Reason)"
            readOnly={readOnly}
            onChange={({ target: { value } }) => handleInputChange('details', 'purpose', value, i)}
            value={input.purpose}
            placeholder="Enter Reason"
            isRequired
          />
          <SelectWrapper>
            <TextInput
              fullWidth
              name="medicationName"
              title="Medication Name"
              onChange={({ target: { value } }) =>
                handleInputChange('details', 'medicationName', value, i)
              }
              value={input.medicationName}
              readOnly={readOnly}
              placeholder="Enter Medication Name"
              isRequired
            />
          </SelectWrapper>
          <TextInput
            name="prescribedBy"
            title="Prescribed By"
            onChange={({ target: { value } }) =>
              handleInputChange('details', 'prescribedBy', value, i)
            }
            value={input.prescribedBy}
            readOnly={readOnly}
            placeholder="Enter Doctor's Name"
          />
          <SelectWrapper>
            <Dropdown
              title="Route Of Administration"
              options={ADMINISTRATION_METHOD_OPTIONS}
              onChange={({ value }) =>
                handleInputChange('details', 'administrationMethod', value, i)
              }
              placeholder="Enter Route"
              readOnly={readOnly}
              value={input.administrationMethod}
              creatable
            />
          </SelectWrapper>
          <SelectWrapper>
            <TextInput
              name="dosage"
              title="Dosage"
              type="number"
              placeholder="Enter Dosage"
              onChange={({ target: { value } }) =>
                handleInputChange('details', 'dosage', Number(value), i)
              }
              value={input.dosage}
              readOnly={readOnly}
              fullWidth
              withTag
              tag={
                <Dropdown
                  options={DOSAGE_OPTIONS}
                  value={input.dosageUnit}
                  onChange={({ value }) =>
                    writeAllowed ? handleInputChange('details', 'dosageUnit', value, i) : null
                  }
                  placeholder="Unit"
                  readOnly={readOnly}
                  withTag
                />
              }
            />
          </SelectWrapper>

          <SelectWrapper>
            <Dropdown
              title="Frequency"
              options={MEDICATION_FREQUENCY}
              onChange={({ value }) =>
                writeAllowed ? handleInputChange('details', 'frequency', value, i) : null
              }
              readOnly={readOnly}
              value={input.frequency}
              placeholder="Enter Frequency"
              creatable
            />
          </SelectWrapper>
          <SelectWrapper>
            <TextInput
              fullWidth
              type="number"
              name="quantity"
              title="Quantity"
              placeholder="Enter Quantity"
              value={input.quantity}
              onChange={({ target: { value } }) =>
                handleInputChange('details', 'quantity', Number(value), i)
              }
              readOnly={readOnly}
            />
          </SelectWrapper>

          <SelectWrapper padded>
            <DatePicker
              label="Start Date"
              withBorderRadius
              onChange={(date) =>
                writeAllowed ? handleInputChange('details', 'startDate', date, i) : null
              }
              readOnly={readOnly}
              value={input.startDate}
              type="DateOnly"
            />
          </SelectWrapper>
          <SelectWrapper padded>
            <DatePicker
              label="End Date"
              withBorderRadius
              onChange={(date) =>
                writeAllowed ? handleInputChange('details', 'endDate', date, i) : null
              }
              value={input.endDate}
              readOnly={readOnly}
              type="DateOnly"
            />
          </SelectWrapper>

          <SelectWrapper padded>
            <DurationInput
              title="Duration (YY:MM:DD)"
              onChange={(duration) => handleInputChange('details', 'duration', duration, i)}
              readOnly={readOnly}
              durationValue={input.duration}
              isYear
            />
          </SelectWrapper>

          {isEdit && (
            <SelectWrapper>
              <Dropdown
                title="Discontinue Prescription"
                options={QUESTION_OPTIONS}
                onChange={({ value }) =>
                  writeAllowed ? handleInputChange('details', 'discontinue', value, i) : null
                }
                readOnly={readOnly}
                value={input.discontinue}
                placeholder="Select One"
              />
            </SelectWrapper>
          )}
          <SelectWrapper fullWidth padded>
            <Divider />
          </SelectWrapper>
          {!readOnly && (
            <MultiGroupAction
              items={inputs}
              index={i}
              initialItem={initialMedicationDetails}
              onClick={onClick}
            />
          )}
        </InputRow>
      </div>
    ))}
  </div>
);

export default MedicationDetails;
