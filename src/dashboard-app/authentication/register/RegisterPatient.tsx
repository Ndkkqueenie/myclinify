import AuthenticationButton from 'dashboard-app/common/AuthenticationButton';
import { FlaggedAuthenticationInput } from 'dashboard-app/common/AuthenticationInput';
import { AuthCredsType } from 'hooks/useAuthentication';
import React from 'react';
import { Link } from 'react-router-dom';

type CountryNameType = 'Nigeria' | 'United States' | 'Canada' | 'United Kingdom';

type CredentialKeys =
  | 'passCode'
  | 'password'
  | 'phoneNumber'
  | 'email'
  | 'userId'
  | 'oldPasscode'
  | 'newPasscode'
  | 'userType'
  | 'otpCode'
  | 'verifyPasscode'
  | 'firstName'
  | 'lastName';

export interface RegisterPatientProps {
  authCreds: AuthCredsType;
  setCredentials: (key: CredentialKeys, value: string) => void;
  country: string;
  switchCountry: (country: string) => void;
  onEnter: () => void;
  initiateRegistration: () => void;
  initiateRegistrationButtonIsDisabledForPhoneNumberOnly: boolean;
}
const RegisterPatient = ({
  authCreds: { phoneNumber },
  setCredentials,
  country,
  switchCountry,
  onEnterKey,
  initiateRegistration,
  initiateRegistrationButtonIsDisabledForPhoneNumberOnly,
}) => {
  return (
    <div className="patient-corner">
      <div className="title">Create your Patient Account</div>
      <FlaggedAuthenticationInput
        label="Phone Number"
        value={phoneNumber}
        onChange={(event) => setCredentials('phoneNumber', event.target.value)}
        name="phoneNumber"
        countryName={country as CountryNameType}
        changeCountryName={(country) => switchCountry(country)}
        onKeyPress={(event) => onEnterKey(event, initiateRegistration)}
      />
      <div className="button-wrapper">
        <AuthenticationButton
          onClick={initiateRegistration}
          text="Register"
          disabled={initiateRegistrationButtonIsDisabledForPhoneNumberOnly()}
        />
      </div>
      <div className="alt-text mb-2">
        Already have an account?{' '}
        <Link to="/login/patient">
          <span>Login as a Patient</span>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPatient;
