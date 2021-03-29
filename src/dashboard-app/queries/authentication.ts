import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
  mutation SignupUser($registrationInput: RegistrationInput!) {
    signup(registrationInput: $registrationInput) {
      id
      phoneNumber
      country
    }
  }
`;

export const SIGNUP_HOSPITAL = gql`
  mutation CreateHospital($createHospitalInput: CreateHospitalInput!) {
    createHospital(createHospitalInput: $createHospitalInput) {
      id
      name
      createdDate
      status
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      accessToken
      hasProfile
    }
  }
`;

export const VERIFY_OTP = gql`
  mutation VerifyOTP($verifyOtpInput: VerifyOtpInput!) {
    verifyOtp(verifyOtpInput: $verifyOtpInput) {
      status
      phone
    }
  }
`;

export const RESEND_OTP = gql`
  mutation ResendOTP($phoneNumber: String!) {
    resendOtp(phoneNumber: $phoneNumber) {
      message
    }
  }
`;

export const COMPLETE_SIGNUP_USER = gql`
  mutation CompleteSignupUser($completeSignupInput: CompleteSignupInput!) {
    completeSignup(completeSignupInput: $completeSignupInput) {
      accessToken
      hasProfile
    }
  }
`;

export const COMPLETE_PATIENT_REGISTRATION = gql`
  mutation CompleteRegistration($completeRegistrationInput: CompleteRegistrationInput!) {
    completeRegistration(completeRegistrationInput: $completeRegistrationInput) {
      id
      clinifyId
      createdDate
      details {
        displayPictureUrl
      }
    }
  }
`;

export const LOGIN_ORGANIZATION = gql`
  mutation LoginOrganization($loginInput: CorporateLoginInput!) {
    corporateLogin(loginInput: $loginInput) {
      accessToken
    }
  }
`;

export const FORGOT_PASSCODE = gql`
  mutation ForgotPassCode($forgotPasscodeInput: ForgotPasscodeInput!) {
    forgotPasscode(forgotPasscodeInput: $forgotPasscodeInput) {
      id
    }
  }
`;

export const UPDATE_DEFAULT_EMAIL = gql`
  mutation UpdateDefaultEmail($updateDefaultEmailInput: UpdateDefaultEmailInput!) {
    updateDefaultEmail(updateDefaultEmailInput: $updateDefaultEmailInput) {
      email
    }
  }
`;

export const CHANGE_PASSCODE = gql`
  mutation ChangePassCode($resetPasswordInput: ResetPasscodeInput!) {
    changePasscode(resetPasscodeInput: $resetPasswordInput) {
      id
    }
  }
`;

export const VERIFY_PASSCODE_FOR_UPDATE_PHONE_NUMBER = gql`
  mutation VerifyPassCodeForUpdatePhoneNumber($input: VerifyPassCodeForUpdatePhoneNumberInput!) {
    verifyPassCodeForUpdatePhoneNumber(verifyPassCodeForUpdatePhoneNumberInput: $input) {
      message
    }
  }
`;

export const UPDATE_PHONE_NUMBER = gql`
  mutation UpdatePhoneNumber($input: UpdatePhoneNumberInput!) {
    updatePhoneNumber(updatePhoneNumberInput: $input) {
      phoneNumber
    }
  }
`;
