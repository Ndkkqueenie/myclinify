import { UserType } from 'graphql-types/globalTypes';
import { HospitalAuthCredsType } from 'hooks/useAuthentication';

export const initialAuthCreds = {
  phoneNumber: '+234',
  email: '',
  passCode: '',
  userId: '',
  password: '',
  oldPasscode: '',
  newPasscode: '',
  verifyPasscode: '',
  userType: UserType.Patient,
  otpCode: '',
  firstName: '',
  lastName: '',
  displayPictureUrl: '',
};

export const initialHospitalAuthCreds: HospitalAuthCredsType = {
  hospitalCountry: '',
  hospitalName: '',
  hospitalAddress: '',
  hospitalWebsite: '',
  hospitalContactFirstName: '',
  hospitalContactMiddleName: '',
  hospitalContactLastName: '',
  hospitalContactEmail: '',
  hospitalContactPhoneNumber: {
    countryCode: '234',
    value: '+234',
    countryName: 'Nigeria',
  },
  ownership: 'Private',
  state: '',
  lga: '',
  level: 'Primary',
};
