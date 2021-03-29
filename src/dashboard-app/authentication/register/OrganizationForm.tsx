import { AuthenticationModalButton } from 'dashboard-app/common/AuthenticationButton';
import AuthenticationInput, {
  FlaggedAuthenticationInput,
} from 'dashboard-app/common/AuthenticationInput';
import { AuthenticationModalCard, AuthSelectWrapper } from 'dashboard-app/common/Wrapper';
import colors from 'dashboard-app/utils/colors';
import React from 'react';
import { PulseLoader } from 'react-spinners';
import { organizationFields } from './constants';

const OrganizationForm = ({
  hospitalAuthCreds,
  setHospitalCredentials,
  createHospitalSubmit,
  createHospitalMutating,
  organizationFormButtonIsDisabled,
}) => (
  <AuthenticationModalCard>
    <div className="title text-center">
      <h3>Fill in these fields</h3>
    </div>
    <div className="fields-wrapper">
      {organizationFields.map(({ name, label, required, id }) =>
        name === 'hospitalContactPhoneNumber' ? (
          <FlaggedAuthenticationInput
            key={id}
            label={label}
            important={required}
            placeholder={`Enter ${label}`}
            value={hospitalAuthCreds[name].value}
            onChange={(e) => {
              setHospitalCredentials(name, e.target.value);
            }}
            name={name}
            disableFlagOnly
          />
        ) : name === 'level' ? (
          <div key={id} className="select-input">
            <label>{label}</label>
            <AuthSelectWrapper
              name={name}
              onChange={(e) => {
                setHospitalCredentials(name, e.target.value);
              }}
            >
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Tertiary">Tertiary</option>
            </AuthSelectWrapper>
          </div>
        ) : name === 'ownership' ? (
          <div key={id} className="select-input">
            <label>{label}</label>
            <AuthSelectWrapper
              name={name}
              onChange={(e) => {
                setHospitalCredentials(name, e.target.value);
              }}
            >
              <option value="Private">Private</option>
              <option value="Public">Public</option>
            </AuthSelectWrapper>
          </div>
        ) : (
          <AuthenticationInput
            key={id}
            label={label}
            important={required}
            placeholder={`Enter ${label}`}
            value={hospitalAuthCreds[name]}
            onChange={(e) => {
              setHospitalCredentials(name, e.target.value);
            }}
            name={name}
          />
        ),
      )}
      <div className="button-wrapper">
        <AuthenticationModalButton
          onClick={createHospitalSubmit}
          disabled={organizationFormButtonIsDisabled}
          text={
            createHospitalMutating ? <PulseLoader color={colors.darkBlue} size={6} /> : 'Complete'
          }
        />
      </div>
    </div>
  </AuthenticationModalCard>
);

export default OrganizationForm;
