import React from 'react';

import TextInput from 'dashboard-app/common/TextInput';
import {
  ContentWrapper,
  Content,
  ExtraContent,
  InputRow,
  ButtonRow,
  SelectWrapper,
} from 'dashboard-app/common/Wrapper';
import Button from 'dashboard-app/common/Button';

import DatePicker from 'dashboard-app/common/DatePicker';

export interface HMOProps {}

const HMO: React.FC<HMOProps> = () => {
  return (
    <ContentWrapper>
      <Content>
        <InputRow>
          <TextInput
            name="enrolleeNo"
            value={undefined}
            title="Enrollee Number"
            onChange={() => {}}
            placeholder="Enter Enrollee Number"
          />

          <TextInput
            name="hmoProvider"
            value={undefined}
            title="HMO Provider"
            onChange={() => {}}
            placeholder="Enter HMO Provider"
          />
        </InputRow>

        <InputRow>
          <TextInput
            name="plan"
            value={undefined}
            title="Member Plan"
            onChange={() => {}}
            placeholder="Enter Member Plan"
          />
          <SelectWrapper padded>
            <DatePicker
              label="Activation Date"
              withBorderRadius
              onChange={() => {}}
              value={undefined}
              placeholderText="Select Date"
              type="DateOnly"
            />
          </SelectWrapper>
        </InputRow>

        <InputRow>
          <TextInput
            name="employeeNo"
            value={undefined}
            title="Employee Number"
            onChange={() => {}}
            placeholder="Enter Employee Number"
          />
          <TextInput
            name="companyName"
            value={undefined}
            title="Company Name"
            onChange={() => {}}
            placeholder="Enter Company Name"
          />
        </InputRow>

        <ButtonRow>
          <Button text="Add" onClick={() => {}} />
        </ButtonRow>
      </Content>

      <ExtraContent noPadding>
        <Button text="Add New HMO" onClick={() => {}} withIcon />
      </ExtraContent>
    </ContentWrapper>
  );
};

export default HMO;
