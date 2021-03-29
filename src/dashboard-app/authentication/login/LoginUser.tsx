import AuthenticationButton from 'dashboard-app/common/AuthenticationButton';
import AuthenticationInput, {
  FlaggedAuthenticationInput,
} from 'dashboard-app/common/AuthenticationInput';
import { AuthenticationBaseCard } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import useAuthentication from 'hooks/useAuthentication';
import React from 'react';
import { Link } from 'react-router-dom';
import { Profile } from '../register/RegisterUser';
import ClinifyLogo from '../icons/ClinifyLogo';
import ForgotPassword from './ForgotPassword';

type CountryNameType = 'Nigeria' | 'United States' | 'Canada' | 'United Kingdom';

export interface LoginUserProps {}
const LoginUser: React.FC<LoginUserProps> = () => {
  const {
    loginPatientUser,
    setCredentials,
    authCreds,
    switchCountry,
    country,
    signInButtonIsDisabled,
    forgotPasskeyButtonIsDisabled,
    onEnterKey,
    isShown,
    toggle,
    history,
    forgotPasskeyAction,
    loginModalType,
    completePatientRegistrationSubmit,
    forgotPasswordToggle,
    uploadProfilePic,
    disabledCompletePatientRegistrationButton,
  } = useAuthentication();

  const modalComponentMapper = {
    profile: Profile,
    forgotPassword: ForgotPassword,
  };

  const ModalComponent = modalComponentMapper[loginModalType];

  return (
    <>
      <div className="base-container d-flex justify-content-center align-items-center">
        <AuthenticationBaseCard>
          <div className="container">
            <div className="logo">
              <ClinifyLogo onClick={() => history.push('/')} />
            </div>
            <div className="title">Welcome Back!</div>
            <div className="position-relative">
              <FlaggedAuthenticationInput
                label="Phone Number"
                value={authCreds.phoneNumber}
                onChange={({ target: { value } }) => setCredentials('phoneNumber', value)}
                name="phoneNumber"
                countryName={country as CountryNameType}
                changeCountryName={switchCountry}
              />
            </div>

            <AuthenticationInput
              label="Passcode"
              placeholder="Enter Passcode"
              type="password"
              value={authCreds?.passCode}
              onKeyPress={(event) => onEnterKey(event, loginPatientUser, signInButtonIsDisabled())}
              onChange={({ target: { value } }) => setCredentials('passCode', value)}
            />

            <div className="button-wrapper">
              <AuthenticationButton
                disabled={signInButtonIsDisabled()}
                onClick={loginPatientUser}
                text="Login"
              />
              <div className="alt-text forgot" onClick={forgotPasswordToggle}>
                <span>Forgot Passcode?</span>
              </div>
            </div>

            <div className="terms">
              <div className="alt-text mb-2">
                You want to sign in as an Organization?{' '}
                <Link to="/login/organization">
                  <span>Login as an Organization</span>
                </Link>
              </div>
              By signing in, you agree to our{' '}
              <span>
                <a href="http://myclinify.com/terms-and-conditions">Terms & Conditions</a>
              </span>{' '}
              and{' '}
              <span>
                <a href="http://myclinify.com/privacy-policy">Privacy Policy</a>
              </span>
            </div>
          </div>
        </AuthenticationBaseCard>
      </div>
      <Modal
        isShown={isShown}
        hide={toggle}
        isAddPage={false}
        modalContent={
          <ModalComponent
            setCredentials={setCredentials}
            authCreds={authCreds}
            completePatientRegistrationSubmit={completePatientRegistrationSubmit}
            country={country}
            switchCountry={switchCountry}
            handleChange={setCredentials}
            forgotPasskeyAction={forgotPasskeyAction}
            forgotPasskeyButtonIsDisabled={forgotPasskeyButtonIsDisabled}
            email={authCreds.email}
            uploadProfilePic={uploadProfilePic}
            disabledCompletePatientRegistrationButton={disabledCompletePatientRegistrationButton}
          />
        }
        handleDone={() => {}}
        isAuthentication
        showExtraActions
      />
    </>
  );
};

export default LoginUser;
