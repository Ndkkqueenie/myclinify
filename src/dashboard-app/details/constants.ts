import { Gender } from 'graphql-types/globalTypes';

export const DETAILS_INITIAL_VALUES_MAPPER = {
  personalInformation: {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    genoType: '',
    bloodGroup: '',
    weight: 0,
    weightUnit: 'kg',
    height: 0,
    heightUnit: 'cm',
    address: '',
    secondaryPhoneNumber: {
      countryName: 'Nigeria',
      countryCode: '+234',
      value: '',
    },
  },
  nextOfKin: [
    {
      firstName: '',
      lastName: '',
      email: '',
      gender: Gender.Male,
      genoType: '',
      phoneNumber: {
        countryName: 'Nigeria',
        countryCode: '+234',
        value: '',
      },
      phoneNumberAlt: {
        countryName: 'Nigeria',
        countryCode: '+234',
        value: '',
      },
      relationship: '',
      occupation: '',
      address: '',
    },
  ],
  backgroundInformation: {
    maritalStatus: '',
    numberOfChildren: 0,
    education: '',
    state: '',
    religion: '',
    occupation: '',
    salaryRange: '',
  },
};
