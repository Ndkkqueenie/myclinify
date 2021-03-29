import BadgeInput from 'dashboard-app/common/BadgeInput';
import DatePicker from 'dashboard-app/common/DatePicker';
import Dropdown from 'dashboard-app/common/Dropdown';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import { SelectWrapper } from 'dashboard-app/common/Wrapper';
import { PATIENT_OPTIONS, PAYMENT_OPTIONS } from 'dashboard-app/utils/constants';
import { DispenseDetailsInput } from 'graphql-types/globalTypes';
import React from 'react';
import './styles/medicationDispense.scss';

export interface MedicationDispenseProps {
  readOnly?: boolean;
  writeAllowed?: boolean;
  onChange: (name, value) => void;
  input?: DispenseDetailsInput;
  handleInputChange: (field: string, name: string, value: any, index: number) => void;
  index: number;
  isEdit?: boolean;
}

const MedicationDispense: React.FC<MedicationDispenseProps> = ({
  input,
  writeAllowed,
  handleInputChange,
  index,
  readOnly,
}) => (
  <>
    <SelectWrapper padded>
      <DatePicker
        label="Dispense Date and Time"
        withBorderRadius
        onChange={(date) =>
          writeAllowed ? handleInputChange('dispenseDetails', 'dispenseDate', date, index) : null
        }
        value={input?.dispenseDate}
        readOnly={readOnly}
        placeholderText="Select Date and Time"
      />
    </SelectWrapper>
    <SelectWrapper>
      <TextInput
        name="dispenseBy"
        title="Dispensed By"
        onChange={({ target: { value } }) =>
          handleInputChange('dispenseDetails', 'dispensedBy', value, index)
        }
        value={input?.dispensedBy}
        readOnly={readOnly}
        placeholder="Enter Pharmacist's Name"
        fullWidth
      />
    </SelectWrapper>
    <SelectWrapper fullWidth>
      <BadgeInput
        name="medicationName"
        title="Medication Name"
        onChange={(medications) =>
          handleInputChange('dispenseDetails', 'medicationName', medications, index)
        }
        values={input?.medicationName || []}
        readOnly={readOnly}
        placeholder="Enter Medication Name"
        fullWidth
      />
    </SelectWrapper>
    <SelectWrapper>
      <Dropdown
        title="Payment Type"
        onChange={({ value }) =>
          handleInputChange('dispenseDetails', 'dispensePaymentType', value, index)
        }
        value={input?.dispensePaymentType}
        readOnly={readOnly}
        options={PAYMENT_OPTIONS}
        placeholder="Enter Payment Type"
      />
    </SelectWrapper>
    <SelectWrapper>
      <Dropdown
        title="Patient Type"
        onChange={({ value }) =>
          handleInputChange('dispenseDetails', 'dispensePatientType', value, index)
        }
        value={input?.dispensePatientType}
        readOnly={readOnly}
        options={PATIENT_OPTIONS}
        placeholder="Enter Payment Type"
      />
    </SelectWrapper>
    <SelectWrapper fullWidth>
      <TextArea
        name="dispenseNote"
        label="Dispense Note"
        onChange={({ target: { value } }) =>
          handleInputChange('dispenseDetails', 'dispenseNote', value, index)
        }
        readOnly={readOnly}
        value={input?.dispenseNote}
        fullWidth
        isRequired
      />
    </SelectWrapper>
  </>
);

export default MedicationDispense;
