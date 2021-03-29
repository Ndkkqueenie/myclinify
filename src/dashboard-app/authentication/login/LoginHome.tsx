import * as React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import '../../../styles/components/authentication/index.scss';
import ClinifyLogo from '../icons/ClinifyLogo';
import OrgGroup from '../icons/OrgGroup';
import PatientGroup from '../icons/PatientGroup';

export interface LoginHomeProps {}

const LoginHome: React.FC<LoginHomeProps & RouteComponentProps> = ({ history }) => {
  const handleUserLoginClick = () => {
    history.push('/login/patient');
  };

  const handleIconClick = () => {
    history.push('/');
  };

  const handleOrganizationLoginClick = () => {
    history.push('/login/organization');
  };

  return (
    <div className="container type-selection">
      <div className="logo">
        <ClinifyLogo onClick={() => history.push('/')} />
      </div>

      <div className="group-wrapper">
        <div className="welcome col-12">
          <h2>Welcome,</h2>
          <h3>Select User Type</h3>
        </div>

        <div
          className="login-wrapper col-12 col-md"
          onClick={handleOrganizationLoginClick}
          onKeyPress={handleOrganizationLoginClick}
          tabIndex={0}
          role="button"
        >
          <div className="login-group">
            <div className="card-circle org">
              <OrgGroup />
            </div>
          </div>
          <button type="button" onClick={handleOrganizationLoginClick}>
            Login as an Organization
          </button>
        </div>
        <div
          className="login-wrapper col-12 col-md"
          onClick={handleUserLoginClick}
          onKeyPress={handleUserLoginClick}
          tabIndex={0}
          role="button"
        >
          <div className="login-group">
            <div className="card-circle pat">
              <PatientGroup />
            </div>
          </div>
          <button type="button" onClick={handleUserLoginClick}>
            Login as a Patient
          </button>
        </div>
      </div>
      <div className="terms-login">
        <div>
          Don&apos;t have an account?{' '}
          <Link to="/register">
            <span>Register</span>
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
  );
};

export default withRouter(LoginHome);
