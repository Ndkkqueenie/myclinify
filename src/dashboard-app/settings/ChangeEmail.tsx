import Button from 'dashboard-app/common/Button';
import TextInput from 'dashboard-app/common/TextInput';
import {
  ButtonRow,
  Content,
  ContentWrapper,
  InputRow,
  SelectWrapper,
} from 'dashboard-app/common/Wrapper';
import useAuthentication from 'hooks/useAuthentication';
import React from 'react';
import TextInputWithVisibilityIcon from './TextInputWithVisibilityIcon';

export interface ChangeEmailProps {
  currentPhoneNumber: string;
  currentEmail: string;
  currentCountry: string;
}

const ChangeEmail: React.FC<ChangeEmailProps> = ({ currentEmail, currentPhoneNumber }) => {
  const {
    setCredentials,
    updateEmail,
    updateEmailButtonIsDisabled,
    authCreds: { email, passCode },
  } = useAuthentication();

  return (
    <ContentWrapper noTopPadding>
      <Content>
        <SelectWrapper padded>
          <h3>Primary Email Address</h3>
        </SelectWrapper>
        <InputRow>
          <TextInput
            fullWidth
            name="occupation"
            title="Email Address"
            value={email || currentEmail}
            onChange={({ target: { value } }) => setCredentials('email', value)}
          />
        </InputRow>
        <InputRow>
          <TextInputWithVisibilityIcon
            name="passcode"
            value={passCode}
            label="Enter Passcode"
            onChange={({ target: { value } }) => setCredentials('passCode', value)}
          />
        </InputRow>
        <ButtonRow>
          <Button
            text="Update"
            disabled={updateEmailButtonIsDisabled()}
            onClick={() => updateEmail(currentPhoneNumber)}
          />
        </ButtonRow>
      </Content>
    </ContentWrapper>
  );
};

export default ChangeEmail;
