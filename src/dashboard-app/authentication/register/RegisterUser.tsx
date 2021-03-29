import { AuthenticationModalButton } from 'dashboard-app/common/AuthenticationButton';
import AuthenticationInput, {
  FlaggedAuthenticationInput,
} from 'dashboard-app/common/AuthenticationInput';
import {
  AuthenticationBaseCard,
  AuthenticationModalCard,
  RegisterContainer,
} from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import { loggedIn } from 'dashboard-app/utils/authTracker';
import colors from 'dashboard-app/utils/colors';
import useAuthentication, { AuthCredsType, SequentialCreds } from 'hooks/useAuthentication';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { generate } from 'shortid';
import ClinifyLogo from '../icons/ClinifyLogo';
import OTPIcon from '../icons/OTPIcon';
import '../styles/register.scss';
import RegisterOrganization from './RegisterOrganization';
import RegisterPatient from './RegisterPatient';
import OrganizationForm from './OrganizationForm';
import CompleteRegModal from './CompleteRegModal';

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

export interface OTPModalProps {
  verifyOTP: () => void;
  resendOTP: () => void;
  sequentialCreds: SequentialCreds;
  authCreds: AuthCredsType;
  setCredentialsSequentially: (key: 'otpCode', value: string, index: number) => void;
  verifyOTPButtonisDisabled: boolean;
  focusInput: (key: string, index: number) => boolean;
  verifyOTPMutating: boolean;
}

export const OTPModal: React.FC<OTPModalProps> = ({
  verifyOTP,
  resendOTP,
  sequentialCreds: { otpCode },
  authCreds: { phoneNumber },
  setCredentialsSequentially,
  verifyOTPButtonisDisabled,
  focusInput,
  verifyOTPMutating,
}) => (
  <AuthenticationModalCard>
    <div className="top-icon-wrapper">
      <OTPIcon />
    </div>
    <div className="title-wrapper">
      <h1>OTP Verification</h1>
      <h3>
        {`Enter the (OTP) sent to your phone number ending with ${phoneNumber.slice(
          phoneNumber.length - 4,
        )} below.`}
      </h3>
    </div>
    <div className="otp-input-wrapper">
      <div className="input-group-wrapper">
        {otpCode.map((code, index) => (
          <input
            key={nanoid(4)}
            onChange={({ target: { value } }) =>
              setCredentialsSequentially('otpCode', value, index)
            }
            id={generate()}
            name={generate()}
            value={code}
            type="text"
            maxLength={1}
            autoFocus={focusInput('otpCode', index)} //eslint-disable-line
          />
        ))}
      </div>
    </div>
    <div className="alt-text">
      Didn&apos;t get a text?{' '}
      <span style={{ cursor: 'pointer' }} onClick={resendOTP}>
        Resend OTP
      </span>
    </div>
    <div className="button-wrapper">
      <AuthenticationModalButton
        disabled={verifyOTPButtonisDisabled}
        onClick={verifyOTP}
        text={
          verifyOTPMutating ? (
            <PulseLoader color={colors.darkBlue} size={6} />
          ) : (
            'Confirm Phone Number'
          )
        }
      />
    </div>
    {!loggedIn() && (
      <div className="terms">
        By signing up, you agree to our{' '}
        <span>
          <a href="http://myclinify.com/terms-and-conditions">Terms & Conditions</a>
        </span>{' '}
        and{' '}
        <span>
          <a href="http://myclinify.com/privacy-policy">Privacy Policy</a>
        </span>
      </div>
    )}
  </AuthenticationModalCard>
);

export interface SetPasscodeProps {
  setCredentialsSequentially: (key: 'passCode' | 'otpCode', value: string, index: number) => void;
  sequentialCreds: SequentialCreds;
  setPasscodeButtonIsDisabled: boolean;
  focusInput: (key: string, index: number) => boolean;
  authCreds: AuthCredsType;
  setCredentials: (key: CredentialKeys, value: string) => void;
  completeSignup: () => void;
  inputType: string;
  showPasscodeText: () => void;
}

const SetPasscode: React.FC<SetPasscodeProps> = ({
  setCredentialsSequentially,
  sequentialCreds: { passCode },
  setPasscodeButtonIsDisabled,
  focusInput,
  authCreds,
  setCredentials,
  completeSignup,
  inputType,
  showPasscodeText,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <AuthenticationModalCard passcodePage>
      <div className="title text-center">
        <h3>Hey there! You are almost done.</h3>
      </div>
      <div className="title-wrapper">
        <h1>Set Email</h1>
      </div>
      <div className="otp-input-wrapper email-input">
        <AuthenticationInput
          placeholder="Enter Email Address"
          value={authCreds.email}
          onChange={(event) => {
            setIsFocus(false);
            setCredentials('email', event.target.value);
          }}
          name="email"
        />
      </div>
      <div className="title-wrapper">
        <h1>Set Passcode</h1>
        <span onClick={showPasscodeText}>Click to Show Passcode</span>
      </div>
      <div className="otp-input-wrapper">
        <div className="input-group-wrapper">
          {passCode.map((code, index) => (
            <input
              key={nanoid(4)}
              value={code}
              onChange={({ target: { value } }) =>
                setCredentialsSequentially('passCode', value, index)
              }
              type={inputType}
              maxLength={1}
              autoFocus={isFocus ? focusInput('passCode', index) : isFocus} // eslint-disable-line
              onClick={() => {
                setIsFocus(true);
              }}
            />
          ))}
        </div>
      </div>
      <div className="alt-text">
        <span>Hint: </span>Create a six digit passcode that should not contain incremental, reverse
        incremental and sequencial number. eg. 123456, 654321, 000000 - 999999, to continue with
        your registration.
      </div>
      <div className="button-wrapper">
        <AuthenticationModalButton
          // onClick={() => setModalType('accountType')}
          disabled={setPasscodeButtonIsDisabled}
          onClick={completeSignup}
          text="Submit"
        />
      </div>
    </AuthenticationModalCard>
  );
};

interface ProfileType {
  authCreds: AuthCredsType;
  setCredentials: (key: CredentialKeys, value: string) => void;
  country: string;
  switchCountry: (country: string) => void;
  completePatientRegistrationSubmit: () => void;
  uploadProfilePic: (event: any) => void;
  disabledCompletePatientRegistrationButton: boolean;
}

export const Profile: React.FC<ProfileType> = ({
  authCreds: { firstName, lastName, phoneNumber, displayPictureUrl },
  setCredentials,
  country,
  switchCountry,
  completePatientRegistrationSubmit,
  uploadProfilePic,
  disabledCompletePatientRegistrationButton,
}) => {
  const PROFILE_AVATAR = '/images/profile-image.png';
  const PROFILE_CAMERA = '/images/camera.png';

  const profilePic = !displayPictureUrl ? PROFILE_AVATAR : displayPictureUrl;

  return (
    <AuthenticationModalCard>
      <div className="title-wrapper">
        <h1>Patient Profile</h1>
      </div>
      <div className="profile-img-wrapper">
        <div className="upload_image">
          <label htmlFor="fileToUpload">
            <div
              className="profile-pic"
              style={{
                backgroundImage: `url(${profilePic})`,
              }}
            >
              <img src={PROFILE_CAMERA} alt="camera-icon" />
            </div>
          </label>
          <input
            type="File"
            name="fileToUpload"
            id="fileToUpload"
            onChange={uploadProfilePic}
            accept=".jpg,.jpeg,.png,"
          />
        </div>
      </div>
      <div className="profile-input-wrapper">
        <div className="profile-group">
          <div className="input-container">
            <AuthenticationInput
              label="First Name"
              placeholder="Enter First Name"
              value={firstName}
              name="text"
              onChange={(event) => setCredentials('firstName', event.target.value)}
              important
              onSetProfile
            />
          </div>
          <div className="input-container">
            <AuthenticationInput
              label="Last Name"
              placeholder="Enter Last Name"
              value={lastName}
              name="text"
              onChange={(event) => setCredentials('lastName', event.target.value)}
              important
              onSetProfile
            />
          </div>
        </div>
        <FlaggedAuthenticationInput
          label="Phone Number"
          value={phoneNumber}
          onChange={(event) => setCredentials('phoneNumber', event.target.value)}
          name="phoneNumber"
          countryName={country as CountryNameType}
          disabled
          changeCountryName={(country) => switchCountry(country)}
        />
      </div>

      <div className="button-wrapper">
        <AuthenticationModalButton
          onClick={completePatientRegistrationSubmit}
          text="Complete"
          disabled={disabledCompletePatientRegistrationButton}
        />
      </div>
    </AuthenticationModalCard>
  );
};

export interface RegisterUserProps {}
const RegisterUser: React.FC<RegisterUserProps> = () => {
  const {
    initiateRegistration,
    verifyOTP,
    resendOTP,
    completeSignup,
    completePatientRegistrationSubmit,
    setCredentials,
    setCredentialsSequentially,
    sequentialCreds,
    authCreds,
    switchCountry,
    setModalType,
    country,
    modalType,
    onEnterKey,
    initiateRegistrationButtonIsDisabledForPhoneNumberOnly,
    createHospitalButtonIsDisabled,
    verifyOTPButtonisDisabled,
    verifyOTPMutating,
    setPasscodeButtonIsDisabled,
    isShown,
    toggle,
    history,
    focusInput,
    inputType,
    showPasscodeText,
    uploadProfilePic,
    disabledCompletePatientRegistrationButton,
    clearCreds,
    hospitalAuthCreds,
    setHospitalCredentials,
    createHospitalSubmit,
    createHospitalMutating,
    organizationFormButtonIsDisabled,
  } = useAuthentication();

  const modalComponentMapper = {
    verifyOTP: OTPModal,
    setPassCode: SetPasscode,
    // accountType: AccountType,
    profile: Profile,
    organizationForm: OrganizationForm,
    completeReg: CompleteRegModal,
  };

  const ModalComponent = modalComponentMapper[modalType];

  return (
    <div className="register-container-wrapper">
      <AuthenticationBaseCard>
        <div className="logo">
          <ClinifyLogo onClick={() => history.push('/')} />
        </div>
        <RegisterContainer>
          <RegisterOrganization
            hospitalAuthCreds={hospitalAuthCreds}
            setHospitalCredentials={setHospitalCredentials}
            createHospitalButtonIsDisabled={createHospitalButtonIsDisabled}
            setModalType={setModalType}
            toggle={toggle}
          />
          <div className="line" />
          <RegisterPatient
            authCreds={authCreds}
            setCredentials={setCredentials}
            country={country}
            switchCountry={switchCountry}
            onEnterKey={onEnterKey}
            initiateRegistration={initiateRegistration}
            initiateRegistrationButtonIsDisabledForPhoneNumberOnly={
              initiateRegistrationButtonIsDisabledForPhoneNumberOnly
            }
          />
        </RegisterContainer>
      </AuthenticationBaseCard>
      <div className="terms-register">
        By signing up, you agree to our&nbsp;{' '}
        <span>
          {' '}
          <a href="http://myclinify.com/terms-and-conditions"> Terms & Conditions </a>
        </span>
        &nbsp; and&nbsp;{' '}
        <span>
          <a href="http://myclinify.com/privacy-policy">Privacy Policy</a>
        </span>
      </div>
      <Modal
        isShown={isShown}
        hide={() => {
          toggle();
          clearCreds();
        }}
        isAddPage={false}
        modalContent={
          <ModalComponent
            setCredentials={setCredentials}
            sequentialCreds={sequentialCreds}
            setCredentialsSequentially={setCredentialsSequentially}
            authCreds={authCreds}
            verifyOTP={verifyOTP}
            verifyOTPMutating={verifyOTPMutating}
            resendOTP={resendOTP}
            completeSignup={completeSignup}
            completePatientRegistrationSubmit={completePatientRegistrationSubmit}
            setModalType={setModalType}
            verifyOTPButtonisDisabled={verifyOTPButtonisDisabled}
            setPasscodeButtonIsDisabled={setPasscodeButtonIsDisabled}
            focusInput={focusInput}
            inputType={inputType}
            showPasscodeText={showPasscodeText}
            country={country}
            switchCountry={switchCountry}
            uploadProfilePic={uploadProfilePic}
            disabledCompletePatientRegistrationButton={disabledCompletePatientRegistrationButton}
            hospitalAuthCreds={hospitalAuthCreds}
            setHospitalCredentials={setHospitalCredentials}
            createHospitalSubmit={createHospitalSubmit}
            createHospitalMutating={createHospitalMutating}
            organizationFormButtonIsDisabled={organizationFormButtonIsDisabled}
          />
        }
        handleDone={() => {}}
        isAuthentication
      />
    </div>
  );
};

export default RegisterUser;
