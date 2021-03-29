import DatePicker from 'dashboard-app/common/DatePicker';
import Dropdown from 'dashboard-app/common/Dropdown';
import DurationInput from 'dashboard-app/common/DurationInput';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import { SelectWrapper } from 'dashboard-app/common/Wrapper';
import {
  BLOODGROUP_OPTIONS,
  BLOODTYPE_OPTIONS,
  GENOTYPE_OPTIONS,
  QUESTION_OPTIONS,
  rangeOptionsGenerator,
} from 'dashboard-app/utils/constants';
import { BloodTransfusionInput } from 'graphql-types/globalTypes';
import React from 'react';

export interface BloodTransfusionProps {
  readOnly?: boolean;
  writeAllowed?: boolean;
  index: number;
  handleInputChange: (field: string, name: string, value: any, index: number) => void;
  input: BloodTransfusionInput;
}

const BloodTransfusion: React.FC<BloodTransfusionProps> = ({
  readOnly,
  input,
  writeAllowed,
  handleInputChange,
  index,
}) => {
  return (
    <>
      <SelectWrapper padded>
        <DatePicker
          label="Transfusion Date and Time"
          withBorderRadius
          onChange={(date) =>
            writeAllowed
              ? handleInputChange('bloodTransfusions', 'transfusionDateTime', date, index)
              : null
          }
          value={input.transfusionDateTime}
          readOnly={readOnly}
          placeholderText="Select Date and Time"
        />
      </SelectWrapper>
      <SelectWrapper>
        <Dropdown
          title="Transfusion Order Given"
          options={QUESTION_OPTIONS}
          onChange={({ value }) =>
            writeAllowed
              ? handleInputChange('bloodTransfusions', 'transfusionOrderGiven', value, index)
              : null
          }
          readOnly={readOnly}
          value={input.transfusionOrderGiven}
          placeholder="Select One"
        />
      </SelectWrapper>
      <TextInput
        name="transfusionDoctor"
        title="Transfusion Doctor"
        onChange={({ target: { value } }) =>
          handleInputChange('bloodTransfusions', 'transfusionDoctor', value, index)
        }
        value={input.transfusionDoctor}
        readOnly={readOnly}
        placeholder="Enter Name"
      />
      <TextInput
        name="transfusionNurse"
        title="Transfusion Nurse"
        onChange={({ target: { value } }) =>
          handleInputChange('bloodTransfusions', 'transfusionNurse', value, index)
        }
        value={input.transfusionNurse}
        readOnly={readOnly}
        placeholder="Enter Name"
      />
      <SelectWrapper>
        <Dropdown
          onChange={({ value }) =>
            writeAllowed
              ? handleInputChange('bloodTransfusions', 'patientBloodGroup', value, index)
              : null
          }
          options={BLOODGROUP_OPTIONS}
          readOnly={readOnly}
          value={input.patientBloodGroup}
          placeholder="Select Blood Group"
          title="Patient Blood Group"
        />
      </SelectWrapper>
      <SelectWrapper>
        <Dropdown
          onChange={({ value }) =>
            writeAllowed
              ? handleInputChange('bloodTransfusions', 'patientGenoType', value, index)
              : null
          }
          options={GENOTYPE_OPTIONS}
          readOnly={readOnly}
          value={input.patientGenoType}
          placeholder="Select Genotype"
          title="Patient Genotype"
        />
      </SelectWrapper>
      <SelectWrapper padded>
        <DurationInput
          title="Cross Matching Time"
          onChange={(value) =>
            handleInputChange('bloodTransfusions', 'crossMatchingTime', value, index)
          }
          readOnly={readOnly}
          durationValue={input.crossMatchingTime}
        />
      </SelectWrapper>

      <SelectWrapper>
        <Dropdown
          onChange={({ value }) =>
            writeAllowed
              ? handleInputChange('bloodTransfusions', 'bloodProduct', value, index)
              : null
          }
          readOnly={readOnly}
          value={input.bloodProduct}
          options={BLOODTYPE_OPTIONS}
          placeholder="Select One"
          title="Blood Product"
        />
      </SelectWrapper>

      <TextInput
        name="bloodLabel"
        title="Blood Label (Batch Number)"
        onChange={({ target: { value } }) =>
          handleInputChange('bloodTransfusions', 'bloodLabel', value, index)
        }
        value={input.bloodLabel}
        readOnly={readOnly}
        placeholder="Enter Name"
      />
      <SelectWrapper padded>
        <DatePicker
          label="Expiry Date"
          withBorderRadius
          onChange={(date) =>
            writeAllowed ? handleInputChange('bloodTransfusions', 'expiryDate', date, index) : null
          }
          readOnly={readOnly}
          value={input?.expiryDate?.toString()}
          type="DateOnly"
        />
      </SelectWrapper>

      <SelectWrapper>
        <Dropdown
          onChange={({ value }) =>
            writeAllowed
              ? handleInputChange('bloodTransfusions', 'donorBloodType', value, index)
              : null
          }
          options={BLOODGROUP_OPTIONS}
          readOnly={readOnly}
          value={input.donorBloodType}
          placeholder="Enter Blood Type"
          title="Donor's Blood Type"
        />
      </SelectWrapper>
      {input.donorBloodType === 'Others' && (
        <SelectWrapper>
          <TextInput
            value={input.donorBloodType}
            onChange={({ target: { value } }) =>
              handleInputChange('bloodTransfusions', 'donorBloodType', value, index)
            }
            readOnly={readOnly}
            name="Specify"
            title="Specify Blood Type"
            fullWidth
          />
        </SelectWrapper>
      )}
      <SelectWrapper>
        <Dropdown
          onChange={({ value }) =>
            writeAllowed ? handleInputChange('bloodTransfusions', 'bloodPint', value, index) : null
          }
          options={rangeOptionsGenerator(0, 99)}
          readOnly={readOnly}
          value={input.bloodPint}
          placeholder="Select Blood Pint"
          title="Blood Pint"
        />
      </SelectWrapper>
      <SelectWrapper padded>
        <DurationInput
          title="Length Of Transfusion"
          onChange={(value) =>
            handleInputChange('bloodTransfusions', 'lengthOfTransfusion', value, index)
          }
          readOnly={readOnly}
          durationValue={input.lengthOfTransfusion}
        />
      </SelectWrapper>
      <SelectWrapper>
        <Dropdown
          title="Adverse Reaction"
          options={QUESTION_OPTIONS}
          onChange={({ value }) =>
            writeAllowed
              ? handleInputChange('bloodTransfusions', 'adverseReaction', value, index)
              : null
          }
          readOnly={readOnly}
          value={input.adverseReaction}
          placeholder="Select One"
        />
      </SelectWrapper>

      {input.adverseReaction === 'Yes' && (
        <SelectWrapper>
          <TextInput
            value={input.reaction}
            onChange={({ target: { value } }) =>
              handleInputChange('bloodTransfusions', 'reaction', value, index)
            }
            readOnly={readOnly}
            name="Specify"
            title="Specify Reaction"
            fullWidth
          />
        </SelectWrapper>
      )}

      <TextArea
        fullWidth
        name="reason"
        label="Transfusion Note"
        onChange={({ target: { value } }) =>
          handleInputChange('bloodTransfusions', 'transfusionNote', value, index)
        }
        value={input.transfusionNote}
        readOnly={readOnly}
        defaultRows={2}
      />
      <SelectWrapper>
        <Dropdown
          title="Patient Consent"
          options={QUESTION_OPTIONS}
          onChange={({ value }) =>
            !readOnly
              ? handleInputChange('bloodTransfusions', 'patientConsent', value, index)
              : null
          }
          readOnly={readOnly}
          value={input.patientConsent}
          placeholder="Select One"
        />
      </SelectWrapper>

      {input.patientConsent === 'No' && (
        <SelectWrapper>
          <TextInput
            value={input.consentReason}
            onChange={({ target: { value } }) =>
              handleInputChange('bloodTransfusions', 'consentReason', value, index)
            }
            readOnly={readOnly}
            name="Specify"
            title="Specify Reason"
            fullWidth
          />
        </SelectWrapper>
      )}
      <TextInput
        name="bloodSource"
        title="Blood Source"
        onChange={({ target: { value } }) =>
          handleInputChange('bloodTransfusions', 'bloodSource', value, index)
        }
        value={input.bloodSource}
        readOnly={readOnly}
        placeholder="Enter Source"
      />
    </>
  );
};

export default BloodTransfusion;
