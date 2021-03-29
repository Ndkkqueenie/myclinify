import AuthenticationButton from 'dashboard-app/common/AuthenticationButton';
import { HospitalAuthCredsType, AuthCredsType } from 'hooks/useAuthentication';
import AuthenticationInput from 'dashboard-app/common/AuthenticationInput';
import React from 'react';
import { Link } from 'react-router-dom';

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

export interface RegisterOrganizationProps {
  hospitalAuthCreds: HospitalAuthCredsType;
  setHospitalCredentials: (key: 'hospitalContantEmail', value: string) => void;
  createHospitalButtonIsDisabled: boolean;
  setModalType: (type: string) => void;
  toggle: () => void;
}
const RegisterOrganization = ({
  hospitalAuthCreds,
  setHospitalCredentials,
  createHospitalButtonIsDisabled,
  setModalType,
  toggle,
}) => {
  return (
    <div className="organization-corner">
      <div className="title">Create your Organization Account</div>
      <AuthenticationInput
        type="email"
        label="Contact Email Address"
        placeholder="Enter Contact Email Address"
        value={hospitalAuthCreds.hospitalContantEmail}
        name="Hospital Contact Email"
        onChange={(event) => setHospitalCredentials('hospitalContactEmail', event.target.value)}
      />
      <div className="button-wrapper">
        <AuthenticationButton
          onClick={() => {
            setModalType('organizationForm');
            toggle();
          }}
          text="Register"
          disabled={createHospitalButtonIsDisabled}
        />
      </div>
      <div className="alt-text mb-2">
        Already have an account?{' '}
        <Link to="/login/organization">
          <span>Login as an Organization</span>
        </Link>
      </div>
    </div>
  );
};

export default RegisterOrganization;
