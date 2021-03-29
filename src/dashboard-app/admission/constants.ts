import {
  AdmissionNoteInput,
  AdmissionNotesCreatorProfileTypes,
  BloodTransfusionInput,
  DischargePatientInput,
  TransferPatientInput,
} from 'graphql-types/globalTypes';

export const transfusionInitialValues: BloodTransfusionInput = {
  bloodLabel: '',
  bloodPint: '',
  bloodProduct: '',
  bloodSource: '',
  donorBloodType: '',
  expiryDate: '',
  transfusionOrderGiven: '',
  transfusionDateTime: null,
  transfusionDoctor: '',
  transfusionNote: '',
  transfusionNurse: '',
  lengthOfTransfusion: null,
  crossMatchingTime: '',
  consentReason: '',
  patientBloodGroup: '',
  patientConsent: '',
  patientGenoType: '',
  adverseReaction: '',
  reaction: '',
};

export const dischargeInitialValues: DischargePatientInput = {
  dischargeSummary: '',
  dischargeDate: null,
  dischargedBy: '',
};

export const transferInitialValues: TransferPatientInput = {
  transferReason: '',
  transferDateTime: null,
  transferHospitalAddress: '',
  transferHospitalName: '',
  transferredBy: '',
};

export const noteInitialValues: AdmissionNoteInput = {
  creatorProfileType: AdmissionNotesCreatorProfileTypes.Doctor,
  note: '',
};

export const nurseNoteInitialValues = {
  creatorProfileType: AdmissionNotesCreatorProfileTypes.OrganizationNurse,
  note: '',
};
