import React from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationModalCard } from 'dashboard-app/common/Wrapper';
import CompleteRegLogo from '../icons/CompleteRegLogo';

const CompleteRegModal = () => {
  return (
    <AuthenticationModalCard>
      <div className="title text-center">
        <h3>Organization Account Created</h3>
      </div>
      <div className="top-icon-wrapper my-3">
        <CompleteRegLogo />
      </div>
      <div className="body text-center pb-3">
        <h3>
          A temporary password has been sent to your Email.
          <br /> Proceed to{' '}
          <Link to="/login/orgaization">
            <span>Login</span>
          </Link>
        </h3>
      </div>
    </AuthenticationModalCard>
  );
};

export default CompleteRegModal;
