/* eslint-disable no-use-before-define */
import { ApolloError, useLazyQuery, useMutation } from '@apollo/client';
import {
  CHANGE_PASSCODE,
  COMPLETE_PATIENT_REGISTRATION,
  COMPLETE_SIGNUP_USER,
  FORGOT_PASSCODE,
  LOGIN_ORGANIZATION,
  LOGIN_USER,
  RESEND_OTP,
  SIGNUP_HOSPITAL,
  SIGNUP_USER,
  UPDATE_DEFAULT_EMAIL,
  UPDATE_PHONE_NUMBER,
  VERIFY_OTP,
  VERIFY_PASSCODE_FOR_UPDATE_PHONE_NUMBER,
} from 'dashboard-app/queries/authentication';
import { GET_USER, GET_USER_PROFILE } from 'dashboard-app/queries/user';
import { getPhoneExtensionCode, getRawPhoneNumber } from 'dashboard-app/utils/authentication';
import {
  canAccessHospitalRoute,
  canAccessPatientRoute,
  loggedIn,
} from 'dashboard-app/utils/authTracker';
import decodeAccessToken from 'dashboard-app/utils/decodeAccessToken';
import errorHandler from 'dashboard-app/utils/errorHandler';
import upload from 'dashboard-app/utils/upload';
import { validEmail } from 'dashboard-app/utils/validate-email';
import { validUrl } from 'dashboard-app/utils/validate-website';
import { UserType } from 'graphql-types/globalTypes';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { initialAuthCreds, initialHospitalAuthCreds } from './constants/authentication';
import useLogout from './useLogout';
import { useModal } from './useModal';

export interface AuthCredsType {
  phoneNumber: string;
  email: string;
  passCode: string;
  userId: string;
  password: string;
  oldPasscode: string;
  newPasscode: string;
  verifyPasscode: string;
  userType: UserType;
  otpCode: string;
  firstName: string;
  lastName: string;
  displayPictureUrl: string;
}

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
  | 'lastName'
  | 'displayPictureUrl';

type LevelType = 'Primary' | 'Secondary' | 'Tertiary';

type OwnershipType = 'Private' | 'Public';

type HospitalContactPhoneNumberType = {
  countryCode: '234';
  value: string;
  countryName: 'Nigeria';
};

export interface HospitalAuthCredsType {
  hospitalCountry: string;
  hospitalName: string;
  hospitalAddress: string;
  hospitalWebsite: string;
  hospitalContactFirstName: string;
  hospitalContactMiddleName: string;
  hospitalContactLastName: string;
  hospitalContactEmail: string;
  hospitalContactPhoneNumber: HospitalContactPhoneNumberType;
  ownership: OwnershipType;
  state: string;
  lga: string;
  level: LevelType;
}

type ModalTypes =
  | 'verifyOTP'
  | 'setPassCode'
  | 'accountType'
  | 'profile'
  | 'organizationForm'
  | 'completeReg';

type LoginModalTypes = 'forgotPassword' | 'profile';

export interface SequentialCreds {
  otpCode: string[];
  passCode: string[];
}

export default () => {
  const { addToast } = useToasts();
  const { isShown, toggle } = useModal();
  const [modalType, setModalType] = useState<ModalTypes>('verifyOTP');
  const [loginModalType, setLoginModalType] = useState<LoginModalTypes>('forgotPassword');
  const history = useHistory();
  const { pathname } = useLocation();

  type HospitalAuthCredsKey =
    | 'hospitalCountry'
    | 'hospitalName'
    | 'hospitalAddress'
    | 'hospitalWebsite'
    | 'hospitalContactFirstName'
    | 'hospitalContactMiddleName'
    | 'hospitalContactLastName'
    | 'hospitalContactEmail'
    | 'hospitalContactPhoneNumber'
    | 'ownership'
    | 'state'
    | 'lga'
    | 'level';

  const [authCreds, setAuthCreds] = useState<AuthCredsType>(initialAuthCreds);
  const clearCreds = () => setAuthCreds(initialAuthCreds);

  const [hospitalAuthCreds, setHospitalAuthCreds] = useState<HospitalAuthCredsType>(
    initialHospitalAuthCreds,
  );

  const [sequentialCreds, setSequentialCreds] = useState<SequentialCreds>({
    otpCode: ['', '', '', ''],
    passCode: ['', '', '', '', '', ''],
  });

  const [country, setCountry] = useState<string>('Nigeria');

  const [inputType, setInputType] = useState<string>('password');

  const {
    passCode,
    password,
    phoneNumber,
    email,
    newPasscode,
    oldPasscode,
    verifyPasscode,
    userId,
    userType,
    otpCode,
    firstName,
    lastName,
    displayPictureUrl,
  } = authCreds;

  const {
    hospitalCountry,
    hospitalName,
    hospitalAddress,
    hospitalWebsite,
    hospitalContactFirstName,
    hospitalContactMiddleName,
    hospitalContactLastName,
    hospitalContactEmail,
    hospitalContactPhoneNumber,
    ownership,
    state,
    lga,
    level,
  } = hospitalAuthCreds;

  const passcodeCheck = (passcode: string) => {
    return (
      !/^([0-9])\1+$/.test(passcode) &&
      '01234567890'.indexOf(passcode) === -1 &&
      '09876543210'.indexOf(passcode) === -1
    );
  };

  const stringToNumber = (value) => {
    const result = Number(value);
    if (Number.isNaN(result)) {
      return false;
    }
    return true;
  };

  const { logOut } = useLogout();

  const clientError = (message: string) =>
    addToast(message, {
      appearance: 'error',
    });

  const switchCountry = (country: string) => {
    setCountry(country);
    setAuthCreds({ ...authCreds, phoneNumber: getPhoneExtensionCode(country) });
  };

  const setHospitalCredentials = (key: HospitalAuthCredsKey, value: string) => {
    if (key === 'hospitalContactPhoneNumber') {
      const minimumPhoneNumberLength = getPhoneExtensionCode('Nigeria').length;
      const cannotAcceptNumber = value.length < minimumPhoneNumberLength;
      if (cannotAcceptNumber) return;
      return setHospitalAuthCreds({
        ...hospitalAuthCreds,
        hospitalContactPhoneNumber: { ...hospitalContactPhoneNumber, value },
      });
    }
    setHospitalAuthCreds({ ...hospitalAuthCreds, [key]: value });
  };

  const setCredentials = (key: CredentialKeys, value: string) => {
    if (key === 'phoneNumber') {
      const minimumPhoneNumberLength = getPhoneExtensionCode(country).length;
      const cannotAcceptNumber = value.length < minimumPhoneNumberLength;
      if (cannotAcceptNumber) return;
    }
    if (key === 'otpCode' && value.length === 4)
      loggedIn()
        ? updatePhoneNumber({
            variables: {
              input: {
                otpCode: value,
                phoneNumber: phoneNumber.slice(1),
                country,
              },
            },
          })
        : verifyOTP({
            variables: { verifyOtpInput: { userId, otpCode: value } },
          });
    setAuthCreds({ ...authCreds, [key]: value });
  };

  const setCredentialsSequentially = (
    key: 'passCode' | 'otpCode',
    value: string,
    index: number,
  ) => {
    const credentialToUpdate = [...sequentialCreds[key]];
    credentialToUpdate[index] = value;
    setSequentialCreds({ ...sequentialCreds, [key]: credentialToUpdate });
    setCredentials(key, credentialToUpdate.join(''));

    const passcodeCorrect: boolean =
      key === 'passCode' &&
      credentialToUpdate.join('').length === 6 &&
      !passcodeCheck(credentialToUpdate.join(''));
    stringToNumber(credentialToUpdate.join('')) ? null : clientError('Only digits are required');
    if (passcodeCorrect) {
      clientError('Passcode not Allowed!');
    }
  };

  const canPerformLoginAction = () => {
    const rawPhoneNumber = getRawPhoneNumber(country, phoneNumber);
    const canPerformAction = rawPhoneNumber.length === 10 && passCode.length > 0;
    return canPerformAction;
  };

  const focusInput = (key: string, index: number) => {
    const path = sequentialCreds[key];
    const allIsEmpty = !path.join('');
    const focus = (allIsEmpty && index === 0) || (index > 0 && path[index - 1] && !path[index]);
    return focus;
  };

  const onError = (error: ApolloError) =>
    addToast(errorHandler(error), {
      appearance: 'error',
    });

  const forgotPasswordToggle = () => {
    setLoginModalType('forgotPassword');
    toggle();
  };

  const [getUserProfile, { loading: fetchingUserDetails }] = useLazyQuery(GET_USER_PROFILE, {
    onCompleted: (data: any) => {
      const userProfileType = data?.user?.defaultProfile?.type;
      sessionStorage.setItem(
        'userData',
        JSON.stringify({ ...data?.user?.defaultProfile, phoneNumber: data?.user?.phoneNumber }),
      );
      if (pathname.split('/')[2] === 'settings') return;
      if (canAccessPatientRoute()) return history.push('/patient/overview');
      if (canAccessHospitalRoute()) return history.push('/hospital/lookup');
      if (userProfileType === UserType.ClaimOfficer) return history.push('/hmo/enrollment');
      if (userType === UserType.Doctor) {
        sessionStorage.removeItem('userToken');
        sessionStorage.removeItem('userData');
        return addToast('Please Sign In From The Mobile App', { appearance: 'info' });
      }
    },
    onError: (error) => {
      onError(error);
      logOut();
    },
  });

  const onCompleteSignin = (token) => {
    sessionStorage.setItem('userToken', token);
    const decodedAccessToken = decodeAccessToken(token);
    const userId = decodedAccessToken.sub;
    getUserProfile({ variables: { id: userId } });
  };

  const [loginPatientUser, { loading: loggingIn }] = useMutation(LOGIN_USER, {
    onCompleted: ({ login: { accessToken, hasProfile } }) => {
      if (!hasProfile) {
        sessionStorage.setItem('userToken', accessToken);
        setLoginModalType('profile');
        return toggle();
      }
      return onCompleteSignin(accessToken);
    },
    onError,
    variables: {
      loginInput: {
        passCode,
        phoneNumber: phoneNumber.slice(1),
      },
    },
  });

  const [loginOrganisationUser, { loading: corporateLoginMutating }] = useMutation(
    LOGIN_ORGANIZATION,
    {
      variables: {
        loginInput: {
          email,
          password,
        },
      },
      onCompleted: ({ corporateLogin: { accessToken } }) => onCompleteSignin(accessToken),
      onError,
    },
  );

  const [initiateRegistration, { loading: initiateRegistrationMutating }] = useMutation(
    SIGNUP_USER,
    {
      onCompleted: ({ signup: { id } }) => {
        addToast('OTP Has Been Sent To Your Phone Number!', {
          appearance: 'success',
        });
        setModalType('verifyOTP');
        setCredentials('userId', id);
        if (!isShown) toggle();
      },
      onError,
      variables: {
        registrationInput: {
          phoneNumber: phoneNumber.slice(1),
          country,
        },
      },
    },
  );

  const [completeSignup, { loading: completeSignupMutating }] = useMutation(COMPLETE_SIGNUP_USER, {
    onCompleted: ({ completeSignup: { accessToken } }) => {
      sessionStorage.setItem('userToken', accessToken);
      setModalType('profile');
    },
    onError,
    variables: {
      completeSignupInput: {
        userId,
        passCode,
        email,
      },
    },
  });

  const [
    completePatientRegistration,
    { loading: completePatientRegistrationMutating },
  ] = useMutation(COMPLETE_PATIENT_REGISTRATION, {
    onCompleted: () => {
      addToast('Registration completed successfully|', {
        appearance: 'success',
      });
      const token = sessionStorage.getItem('userToken');
      onCompleteSignin(token);
    },
    onError,
    variables: {
      completeRegistrationInput: {
        details: {
          firstName,
          lastName,
          displayPictureUrl,
        },
        userType,
      },
    },
  });

  const [createHospital, { loading: createHospitalMutating }] = useMutation(SIGNUP_HOSPITAL, {
    onCompleted: () => {
      setModalType('completeReg');
      toggle();
    },
    onError,
    variables: {
      createHospitalInput: {
        country: hospitalCountry,
        hospitalName,
        hospitalAddress,
        hospitalWebsite,
        hospitalContactFirstName,
        hospitalContactMiddleName,
        hospitalContactLastName,
        hospitalContactEmail,
        hospitalContactPhoneNumber: {
          ...hospitalContactPhoneNumber,
          value: hospitalContactPhoneNumber.value.slice(4),
        },
        ownership,
        state,
        lga,
        level,
      },
    },
  });

  const [verifyOTP, { loading: verifyOTPMutating }] = useMutation(VERIFY_OTP, {
    onCompleted: () => setModalType('setPassCode'),
    onError,
    variables: {
      verifyOtpInput: {
        userId,
        otpCode,
      },
    },
  });

  const [verifyPasscodeForUpdatePhoneNumber, { loading: verifyPasscodeMutating }] = useMutation(
    VERIFY_PASSCODE_FOR_UPDATE_PHONE_NUMBER,
    {
      onCompleted: toggle,
      onError,
      variables: {
        input: {
          phoneNumber,
          passCode,
        },
      },
    },
  );

  const [updatePhoneNumber, { loading: updatePhoneNumberMutating }] = useMutation(
    UPDATE_PHONE_NUMBER,
    {
      onCompleted: () => {
        toggle();
        addToast('Phone Number Updated Successfully', { appearance: 'success' });
      },
      onError,
      variables: {
        input: {
          otpCode: sequentialCreds.otpCode.join(''),
          phoneNumber: phoneNumber.slice(1),
          country,
        },
      },
    },
  );

  const [resendOTP, { loading: resendOTPMutating }] = useMutation(RESEND_OTP, {
    onCompleted: () => addToast('OTP Resent, Please Check Again', { appearance: 'success' }),
    onError,
    variables: {
      phoneNumber: phoneNumber.slice(1),
    },
  });

  const [forgotPasskeyAction, { loading: forgotPasskeyMutating }] = useMutation(FORGOT_PASSCODE, {
    variables: {
      forgotPasscodeInput: { email },
    },
    onCompleted: () => {
      setCredentials('email', '');
      addToast('New Password Sent To Your Mail', { appearance: 'info' });
      toggle();
    },
    onError,
  });

  const [changePasskeyAction, { loading: changePasskeyMutating }] = useMutation(CHANGE_PASSCODE, {
    onCompleted: () => {
      addToast('Passcode Changed Successfully ', {
        appearance: 'success',
      });
    },
    onError,
    variables: {
      resetPasswordInput: {
        oldPasscode,
        newPasscode,
      },
    },
  });

  const [updateEmailAction, { loading: updateEmailMutating }] = useMutation(UPDATE_DEFAULT_EMAIL, {
    onCompleted: () =>
      addToast('Email Updated Successfully', {
        appearance: 'success',
      }),
    onError,
    variables: {
      updateDefaultEmailInput: { email },
    },
    update: (cache) => {
      setAuthCreds({ ...authCreds, passCode: '', email });
      const cacheData: any = cache.readQuery({
        query: GET_USER,
        variables: {
          id: JSON.parse(sessionStorage.getItem('patientDetails') || '{}').id,
        },
      });

      cache.writeQuery({
        query: GET_USER,
        variables: {
          id: JSON.parse(sessionStorage.getItem('patientDetails') || '{}').id,
        },
        data: {
          user: {
            ...cacheData.user,
            email,
          },
        },
      });
    },
  });

  const updateEmail = (phoneNumber) =>
    loginPatientUser({
      variables: {
        loginInput: {
          phoneNumber,
          passCode,
        },
      },
      update: () => updateEmailAction(),
    });

  const uploadProfilePic = async (event) => {
    try {
      const response = await upload(event, 'avatar');
      addToast('Image Uploaded Successfully', { appearance: 'success' });
      const uploadedImage = response?.data?.data.map(({ url }) => url)[0];
      setCredentials('displayPictureUrl', uploadedImage);
    } catch (error) {
      clientError('Error Occured Trying To Upload');
    }
  };

  const onEnterKey = ({ key }, action: () => void, canPerformAction?: boolean) => {
    const canSubmit = key === 'Enter' && canPerformAction;
    if (canSubmit) action();
  };

  const awaitingResponse =
    loggingIn ||
    forgotPasskeyMutating ||
    changePasskeyMutating ||
    corporateLoginMutating ||
    initiateRegistrationMutating ||
    verifyOTPMutating ||
    resendOTPMutating ||
    completeSignupMutating ||
    updateEmailMutating ||
    verifyPasscodeMutating ||
    updatePhoneNumberMutating ||
    completePatientRegistrationMutating ||
    fetchingUserDetails ||
    createHospitalMutating;

  const updatePhoneNumberButtonIsDisabled = !phoneNumber || !passCode || awaitingResponse;

  const signInButtonIsDisabled = () => !canPerformLoginAction() || awaitingResponse;

  const updateEmailButtonIsDisabled = () =>
    !validEmail.test(email) || !passCode || awaitingResponse;

  const organisationSignInButtonIsDisabled = () =>
    !validEmail.test(email) || !password || awaitingResponse;

  const initiateRegistrationButtonIsDisabled = () =>
    !validEmail.test(email) ||
    getRawPhoneNumber(country, phoneNumber).length < 10 ||
    awaitingResponse;

  const initiateRegistrationButtonIsDisabledForPhoneNumberOnly = () =>
    getRawPhoneNumber(country, phoneNumber).length < 10 || awaitingResponse;

  const createHospitalButtonIsDisabled = !validEmail.test(hospitalContactEmail) || awaitingResponse;

  const stringOTPCode: string = sequentialCreds.otpCode.join('');

  const verifyOTPButtonisDisabled: boolean =
    stringOTPCode.length < 4 || Number.isNaN(Number(stringOTPCode)) || awaitingResponse;

  const forgotPasskeyButtonIsDisabled = () => !validEmail.test(email) || awaitingResponse;

  const changePasskeyButtonIsDisabled =
    !newPasscode ||
    !oldPasscode ||
    oldPasscode === newPasscode ||
    newPasscode !== verifyPasscode ||
    awaitingResponse;

  const setPasscodeButtonIsDisabled: boolean =
    passCode.length !== 6 ||
    Number.isNaN(Number(passCode)) ||
    !passcodeCheck(passCode) ||
    !validEmail.test(email) ||
    awaitingResponse;

  const showPasscodeText = () => {
    if (inputType === 'text') {
      setInputType('password');
    }
    if (inputType === 'password') {
      setInputType('text');
    }
  };

  const completePatientRegistrationSubmit = () => {
    if (!firstName || !lastName) {
      return clientError('Please fill all compulsory fields!');
    }
    completePatientRegistration();
  };

  const disabledCompletePatientRegistrationButton: boolean = !firstName || !lastName;

  const resendOTPAction = loggedIn() ? resendOTP : initiateRegistration;
  const phoneNumberMutating = verifyOTPMutating || updatePhoneNumberMutating;

  const createHospitalSubmit = () => {
    if (!!hospitalWebsite && !validUrl.test(hospitalWebsite))
      return clientError('Invalid hospital website!');
    createHospital();
  };

  const organizationFormButtonIsDisabled =
    !hospitalName ||
    !hospitalAddress ||
    !hospitalContactFirstName ||
    !hospitalContactLastName ||
    !hospitalContactPhoneNumber ||
    !hospitalCountry ||
    awaitingResponse;

  return {
    loginPatientUser,
    loginOrganisationUser,
    initiateRegistration,
    completeSignup,
    completePatientRegistrationSubmit,
    updateEmail,
    verifyOTP,
    resendOTP: resendOTPAction,
    modalType,
    verifyOTPMutating: phoneNumberMutating,
    setModalType,
    changePasskeyAction,
    forgotPasskeyAction,
    setCredentials,
    focusInput,
    clearCreds,
    verifyPasscodeForUpdatePhoneNumber,
    updatePhoneNumber,
    updatePhoneNumberButtonIsDisabled,
    sequentialCreds,
    setCredentialsSequentially,
    verifyOTPButtonisDisabled,
    authCreds,
    switchCountry,
    canPerformLoginAction,
    onEnterKey,
    signInButtonIsDisabled,
    updateEmailButtonIsDisabled,
    organisationSignInButtonIsDisabled,
    forgotPasskeyButtonIsDisabled,
    initiateRegistrationButtonIsDisabled,
    changePasskeyButtonIsDisabled,
    setPasscodeButtonIsDisabled,
    country,
    history,
    addToast,
    isShown,
    toggle,
    initiateRegistrationButtonIsDisabledForPhoneNumberOnly,
    createHospitalButtonIsDisabled,
    inputType,
    showPasscodeText,
    passcodeCheck,
    loginModalType,
    forgotPasswordToggle,
    uploadProfilePic,
    disabledCompletePatientRegistrationButton,
    hospitalAuthCreds,
    setHospitalCredentials,
    createHospitalSubmit,
    createHospitalMutating,
    organizationFormButtonIsDisabled,
  };
};
