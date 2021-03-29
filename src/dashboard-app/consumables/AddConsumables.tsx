import React, { useEffect } from 'react';
import {
  CONSUMABLES_TYPE_OPTIONS,
  PATIENT_OPTIONS,
  PAYMENT_OPTIONS,
} from 'dashboard-app/utils/constants';
import {} from 'dashboard-app/queries/surgery';
import { InputRow, SelectWrapper, ButtonRow } from 'dashboard-app/common/Wrapper';
import Dropdown from 'dashboard-app/common/Dropdown';
import { RecordForm } from 'dashboard-app/common/FormWrapper';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';

import DatePicker from 'dashboard-app/common/DatePicker';
import { setTitle } from 'apollo/operations';
import Button from 'dashboard-app/common/Button';

export interface AddRequestInvestigationProps {}

const AddRequestInvestigation: React.FC<AddRequestInvestigationProps> = () => {
  useEffect(() => setTitle('Add Consumable'), []);

  return (
    <RecordForm>
      <InputRow>
        <SelectWrapper padded>
          <DatePicker
            label="Consumed Date and Time"
            withBorderRadius
            value={undefined}
            onChange={() => {}}
            placeholderText="Select Date"
          />
        </SelectWrapper>
        <TextInput
          name="consumedBy"
          title="Requested By"
          value={undefined}
          onChange={() => {}}
          placeholder="Enter Doctor's Name"
        />
      </InputRow>

      <InputRow>
        <SelectWrapper>
          <Dropdown
            title="Consumable Type"
            options={CONSUMABLES_TYPE_OPTIONS}
            onChange={() => {}}
            placeholder="Enter Type"
          />
        </SelectWrapper>
        <SelectWrapper>
          <TextInput
            value={undefined}
            fullWidth
            onChange={() => {}}
            type="number"
            title="Quantity"
            name="Quantity"
            placeholder="Enter Quantity"
          />
        </SelectWrapper>
        <ButtonRow>
          <Button text="Add" onClick={() => {}} />
        </ButtonRow>
      </InputRow>
      <InputRow>
        <SelectWrapper>
          <Dropdown
            creatable
            title="Patient Type"
            options={PATIENT_OPTIONS}
            onChange={() => {}}
            placeholder="Enter Type"
            isRequired
            value={undefined}
          />
        </SelectWrapper>
        <SelectWrapper>
          <Dropdown
            creatable
            title="Payment Type"
            options={PAYMENT_OPTIONS}
            onChange={() => {}}
            placeholder="Enter Payment Type"
            value={undefined}
          />
        </SelectWrapper>
      </InputRow>
      <InputRow>
        <SelectWrapper fullWidth>
          <TextArea name="additionalNote" label="Additional Note" fullWidth onChange={() => {}} />
        </SelectWrapper>
      </InputRow>
      <ButtonRow>
        <Button text="Submit" onClick={() => {}} />
      </ButtonRow>
    </RecordForm>
  );
};

export default AddRequestInvestigation;
