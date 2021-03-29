import Button from 'dashboard-app/common/Button';
import TextInput from 'dashboard-app/common/TextInput';
import { ButtonRow, Content, ContentWrapper, InputRow } from 'dashboard-app/common/Wrapper';
import useAuthentication from 'hooks/useAuthentication';
import React from 'react';
import TextInputWithVisibilityIcon from './TextInputWithVisibilityIcon';

export interface ChangePasscodeProps {
  currentPhoneNumber: string;
  currentEmail: string;
  currentCountry: string;
}

const ChangePasscode: React.FC<ChangePasscodeProps> = () => {
  const {
    setCredentials,
    changePasskeyAction,
    changePasskeyButtonIsDisabled,
  } = useAuthentication();
  return (
    <ContentWrapper>
      <Content>
        <InputRow>
          <TextInputWithVisibilityIcon
            value=""
            name="oldPasscode"
            label="Enter Old Passcode"
            onChange={({ target: { value } }) => setCredentials('oldPasscode', value)}
          />
        </InputRow>
        <InputRow>
          <TextInputWithVisibilityIcon
            value=""
            name="passcode"
            label="Enter Passcode"
            onChange={({ target: { value } }) => setCredentials('newPasscode', value)}
          />
        </InputRow>
        <InputRow>
          <TextInputWithVisibilityIcon
            value=""
            name="passcode"
            label="Enter Passcode"
            onChange={({ target: { value } }) => setCredentials('verifyPasscode', value)}
          />
        </InputRow>
        <ButtonRow>
          <Button
            text="Reset"
            disabled={changePasskeyButtonIsDisabled}
            onClick={changePasskeyAction}
          />
        </ButtonRow>
        <p>
          Passcode should not contain incremental, reverse incremental and sequential number. eg:
          123456, 654321 and 000000 - 999999.
        </p>
      </Content>
    </ContentWrapper>
  );
};

export default ChangePasscode;
