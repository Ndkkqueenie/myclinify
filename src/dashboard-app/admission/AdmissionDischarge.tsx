import DatePicker from 'dashboard-app/common/DatePicker';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import { SelectWrapper } from 'dashboard-app/common/Wrapper';
import { DischargePatientInput } from 'graphql-types/globalTypes';
import React from 'react';

export interface AdmissionDischargeProps {
  readOnly?: boolean;
  writeAllowed?: boolean;
  index: number;
  handleInputChange: (field: string, name: string, value: any, index: number) => void;
  input: DischargePatientInput;
}

const AdmissionDischarge: React.FC<AdmissionDischargeProps> = ({
  readOnly,
  index,
  input,
  writeAllowed,
  handleInputChange,
}) => (
  <>
    <SelectWrapper padded>
      <DatePicker
        label="Discharge Date and Time"
        withBorderRadius
        onChange={(date) =>
          writeAllowed ? handleInputChange('dischargePatients', 'dischargeDate', date, index) : null
        }
        value={input.dischargeDate}
        readOnly={readOnly}
        placeholderText="Select Date and Time"
      />
    </SelectWrapper>
    <SelectWrapper>
      <TextInput
        name="dischargedBy"
        title="Discharged By"
        onChange={({ target: { value } }) =>
          handleInputChange('dischargePatients', 'dischargedBy', value, index)
        }
        value={input.dischargedBy}
        readOnly={readOnly}
        placeholder="Enter Name"
        fullWidth
      />
    </SelectWrapper>
    <SelectWrapper fullWidth>
      <TextArea
        name="discharge Summary"
        label="Discharge Summary"
        fullWidth
        onChange={({ target: { value } }) =>
          handleInputChange('dischargePatients', 'dischargeSummary', value, index)
        }
        readOnly={readOnly}
        value={input.dischargeSummary}
        isRequired
      />
    </SelectWrapper>
  </>
);

export default AdmissionDischarge;
