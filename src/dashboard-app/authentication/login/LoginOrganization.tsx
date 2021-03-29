import AuthenticationButton from 'dashboard-app/common/AuthenticationButton';
import AuthenticationInput from 'dashboard-app/common/AuthenticationInput';
import { AuthenticationBaseCard } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import useAuthentication from 'hooks/useAuthentication';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/components/authentication/index.scss';
import ClinifyLogo from '../icons/ClinifyLogo';
import ForgotPassword from './ForgotPassword';

export interface LoginOrganizationProps {}
const LoginOrganization: React.FC<LoginOrganizationProps> = () => {
  const {
    loginOrganisationUser,
    setCredentials,
    authCreds,
    forgotPasskeyButtonIsDisabled,
    forgotPasskeyAction,
    organisationSignInButtonIsDisabled,
    onEnterKey,
    history,
    isShown,
    toggle,
    forgotPasswordToggle,
  } = useAuthentication();

  return (
    <>
      <div className="base-container d-flex justify-content-center align-items-center">
        <AuthenticationBaseCard>
          <div className="container">
            <div className="logo">
              <ClinifyLogo onClick={() => history.push('/')} />
            </div>
            <div className="title">Welcome Back!</div>
            <AuthenticationInput
              label="Email Address"
              placeholder="Enter Email Address"
              value={authCreds.email}
              name="email"
              onChange={(event) => setCredentials('email', event.target.value)}
            />
            <AuthenticationInput
              label="Password"
              placeholder="Enter Password"
              type="password"
              value={authCreds.password}
              onKeyPress={(event) => onEnterKey(event, loginOrganisationUser)}
              name="password"
              onChange={(event) => setCredentials('password', event.target.value)}
            />
            <div className="button-wrapper">
              <AuthenticationButton
                onClick={loginOrganisationUser}
                text="Login"
                disabled={organisationSignInButtonIsDisabled()}
              />
              <div className="alt-text forgot" onClick={forgotPasswordToggle}>
                <span>Forgot Password?</span>
              </div>
            </div>

            <div className="terms">
              <div className="alt-text mb-2">
                You want to sign in as a Patient?{' '}
                <Link to="/login/patient">
                  <span>Login as a Patient</span>
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
          <ForgotPassword
            handleChange={setCredentials}
            email={authCreds?.email}
            forgotPasskeyAction={forgotPasskeyAction}
            forgotPasskeyButtonIsDisabled={forgotPasskeyButtonIsDisabled}
            isOrg
          />
        }
        handleDone={() => {}}
        isAuthentication
        showExtraActions
      />
    </>
  );
};

export default LoginOrganization;
