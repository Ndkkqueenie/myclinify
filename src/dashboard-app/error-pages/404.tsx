import React from 'react';
import { useHistory } from 'react-router-dom';
import ClinifyLogo from 'dashboard-app/authentication/icons/ClinifyLogo';

const NotFoundPage = () => {
  const { goBack } = useHistory();

  return (
    <div className="not-found">
      <div className="clinify-logo-wrapper">
        <ClinifyLogo />
      </div>
      <div className="content-text">
        <div className="not-found-text">Page does not exist!!!</div>
        <div className="go-back-text">
          <button type="button" onClick={() => goBack()}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
