import { AuthenticationModalButton } from 'dashboard-app/common/AuthenticationButton';
import AuthenticationInput from 'dashboard-app/common/AuthenticationInput';
import { AuthenticationModalCard } from 'dashboard-app/common/Wrapper';
import React from 'react';
import LockIcon from '../icons/LockIcon';

type CredentialKeys =
  | 'passCode'
  | 'phoneNumber'
  | 'email'
  | 'oldPasscode'
  | 'newPasscode'
  | 'verifyPasscode';

export interface ForgotPasswordProps {
  handleChange: (key: CredentialKeys, value: string) => void;
  forgotPasskeyAction: () => void;
  email: string;
  forgotPasskeyButtonIsDisabled: () => boolean;
  isOrg?: boolean;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  handleChange,
  forgotPasskeyAction,
  email,
  forgotPasskeyButtonIsDisabled,
  isOrg,
}) => (
  <AuthenticationModalCard>
    <div className="top-icon-wrapper">
      <LockIcon />
    </div>
    <div className="title-wrapper">
      <h1>Forgotten {isOrg ? 'Password' : 'Passcode'}</h1>
      <h3>Enter the email address associated with your account below.</h3>
    </div>
    <AuthenticationInput
      label="Email"
      placeholder="Enter email address"
      type="text"
      value={email}
      onChange={(event) => handleChange('email', event.target.value)}
    />

    <div className="button-wrapper">
      <AuthenticationModalButton
        disabled={forgotPasskeyButtonIsDisabled()}
        onClick={forgotPasskeyAction}
        text="Send"
      />
    </div>
    <div className="alt-text">
      You will recieve a {isOrg ? 'password' : 'passcode'} from us via this email.
    </div>
  </AuthenticationModalCard>
);

export default ForgotPassword;
