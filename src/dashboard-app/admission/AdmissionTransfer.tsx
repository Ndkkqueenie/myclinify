import AddressInput from 'dashboard-app/common/AddressInput';
import DatePicker from 'dashboard-app/common/DatePicker';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import { SelectWrapper } from 'dashboard-app/common/Wrapper';
import { TransferPatientInput } from 'graphql-types/globalTypes';
import React from 'react';

export interface AdmissionTransferProps {
  readOnly?: boolean;
  writeAllowed?: boolean;
  index: number;
  handleInputChange: (field: string, name: string, value: any, index: number) => void;
  input: TransferPatientInput;
}

const AdmissionTransfer: React.FC<AdmissionTransferProps> = ({
  readOnly,
  input,
  writeAllowed,
  handleInputChange,
  index,
}) => (
  <>
    <SelectWrapper padded>
      <DatePicker
        label="Transfer Date and Time"
        withBorderRadius
        onChange={(date) =>
          writeAllowed
            ? handleInputChange('transferPatients', 'transferDateTime', date, index)
            : null
        }
        value={input.transferDateTime}
        readOnly={readOnly}
        placeholderText="Select Date and Time"
      />
    </SelectWrapper>
    <TextInput
      name="transferredBy"
      title="Transferred By"
      onChange={({ target: { value } }) =>
        handleInputChange('transferPatients', 'transferredBy', value, index)
      }
      value={input.transferredBy}
      readOnly={readOnly}
      placeholder="Enter Name"
    />
    <TextArea
      fullWidth
      name="reason"
      label="Reason For Transfer"
      onChange={({ target: { value } }) =>
        handleInputChange('transferPatients', 'transferReason', value, index)
      }
      value={input.transferReason}
      readOnly={readOnly}
      defaultRows={2}
    />
    <TextInput
      fullWidth
      title="Hospital Name"
      name="hospitalName"
      onChange={({ target: { value } }) =>
        handleInputChange('transferPatients', 'transferHospitalName', value, index)
      }
      readOnly={readOnly}
      value={input.transferHospitalName}
      placeholder="Enter Hospital Name"
    />

    <div className="w-100">
      <AddressInput
        label="Hospital Address"
        fieldPath="transferHospitalAddress"
        handleInputChange={(fieldPath, value) =>
          handleInputChange('transferPatients', fieldPath, value, index)
        }
        readOnly={readOnly}
        value={input.transferHospitalAddress}
        placeholder="Enter Hospital Address"
      />
    </div>
  </>
);

export default AdmissionTransfer;
