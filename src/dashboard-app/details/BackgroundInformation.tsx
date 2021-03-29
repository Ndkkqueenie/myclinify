import Button, { OutlineButton } from 'dashboard-app/common/Button';
import Dropdown from 'dashboard-app/common/Dropdown';
import TextInput from 'dashboard-app/common/TextInput';
import {
  ButtonRow,
  Content,
  ContentWrapper,
  ExtraContent,
  InputRow,
  SelectWrapper,
} from 'dashboard-app/common/Wrapper';
import {
  EDUCATION_OPTIONS,
  MARITAL_STATUS_OPTIONS,
  NATIONALITY_OPTIONS,
  NUMBER_OF_CHILDREN_OPTIONS,
  QUESTION_OPTIONS,
  RELIGION_OPTIONS,
  SALARY_RANGE_OPTIONS,
  STATES_OPTIONS,
} from 'dashboard-app/utils/constants';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { BackgroundInformationInput } from 'graphql-types/globalTypes';
import React from 'react';

export interface BackgroundInformationProps {
  handleInputChange: (field: string, value: any) => void;
  tab?: string;
  updateProfileDetails: () => void;
  readOnly?: boolean;
  inputs: BackgroundInformationInput;
  toggleAllowEdit: () => void;
  actionText: string;
  disabled: boolean;
}

const BackgroundInformation: React.FC<BackgroundInformationProps> = ({
  handleInputChange,
  updateProfileDetails,
  actionText,
  disabled,
  readOnly,
  inputs,
  toggleAllowEdit,
}) => {
  return (
    <ContentWrapper noTopPadding>
      <Content>
        <InputRow>
          <SelectWrapper>
            <Dropdown
              onChange={({ value }) =>
                !readOnly ? handleInputChange('maritalStatus', value) : null
              }
              options={MARITAL_STATUS_OPTIONS}
              readOnly={readOnly}
              value={inputs.maritalStatus}
              placeholder="Enter Marital Status"
              title="Marital Status"
              creatable
            />
          </SelectWrapper>
          <SelectWrapper>
            <Dropdown
              onChange={({ value }) =>
                !readOnly ? handleInputChange('numberOfChildren', Number(value)) : null
              }
              options={NUMBER_OF_CHILDREN_OPTIONS}
              readOnly={readOnly}
              value={inputs.numberOfChildren}
              placeholder="Enter Number of Children"
              title="Number of Children"
            />
          </SelectWrapper>
        </InputRow>

        <InputRow>
          <SelectWrapper>
            <Dropdown
              onChange={({ value }) => (!readOnly ? handleInputChange('nationality', value) : null)}
              options={NATIONALITY_OPTIONS}
              readOnly={readOnly}
              value={inputs.nationality}
              placeholder="Enter Nationality"
              title="Nationality"
              creatable
            />
          </SelectWrapper>
          <SelectWrapper>
            <Dropdown
              onChange={({ value }) => (!readOnly ? handleInputChange('state', value) : null)}
              options={STATES_OPTIONS}
              readOnly={readOnly}
              value={inputs.state}
              placeholder="Enter State"
              title="State"
              creatable
            />
          </SelectWrapper>
        </InputRow>

        <InputRow>
          <SelectWrapper>
            <Dropdown
              onChange={({ value }) => (!readOnly ? handleInputChange('religion', value) : null)}
              options={RELIGION_OPTIONS}
              readOnly={readOnly}
              value={inputs.religion}
              placeholder="Enter Religion"
              title="Religion"
              creatable
            />
          </SelectWrapper>
          <SelectWrapper>
            <Dropdown
              onChange={({ value }) => (!readOnly ? handleInputChange('education', value) : null)}
              options={EDUCATION_OPTIONS}
              readOnly={readOnly}
              value={inputs.education}
              placeholder="Enter Education"
              title="Education"
              creatable
            />
          </SelectWrapper>
        </InputRow>

        <InputRow>
          <TextInput
            name="occupation"
            title="Occupation"
            readOnly={readOnly}
            onChange={({ target: { value } }) => handleInputChange('occupation', value)}
            value={inputs.occupation}
            placeholder="Enter Occupation"
          />
          <SelectWrapper>
            <Dropdown
              onChange={({ value }) => (!readOnly ? handleInputChange('salaryRange', value) : null)}
              readOnly={readOnly}
              options={SALARY_RANGE_OPTIONS}
              value={inputs.salaryRange}
              placeholder="Enter Salary Range"
              title="Salary Range"
            />
          </SelectWrapper>
        </InputRow>

        <InputRow>
          <SelectWrapper>
            <Dropdown
              title="Organ Donor"
              options={QUESTION_OPTIONS}
              onChange={({ value }) => (!readOnly ? handleInputChange('organDonor', value) : null)}
              readOnly={readOnly}
              value={inputs.organDonor}
              placeholder="Select One"
            />
          </SelectWrapper>
          <SelectWrapper>
            <Dropdown
              title="Blood Donor"
              options={QUESTION_OPTIONS}
              onChange={({ value }) => (!readOnly ? handleInputChange('bloodDonor', value) : null)}
              readOnly={readOnly}
              value={inputs.bloodDonor}
              placeholder="Select One"
            />
          </SelectWrapper>
        </InputRow>
      </Content>
      <ExtraContent noTopMargin>
        <ButtonRow>
          {!readOnly && actionText !== 'Save' && (
            <OutlineButton
              withBorderRadius
              withIcon={false}
              text="Cancel"
              onClick={toggleAllowEdit}
            />
          )}
          <Button
            text={readOnly ? 'Edit' : actionText}
            onClick={() => (readOnly ? toggleAllowEdit() : updateProfileDetails())}
            disabled={disabled}
          />
        </ButtonRow>
      </ExtraContent>
    </ContentWrapper>
  );
};

export default BackgroundInformation;
