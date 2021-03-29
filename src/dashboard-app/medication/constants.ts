import { DispenseDetailsInput, MedicationDetailsInput } from 'graphql-types/globalTypes';

export const initialDispenseDetail: DispenseDetailsInput = {
  dispenseDate: null,
  medicationName: null,
  dispenseNote: '',
  dispensePatientType: '',
  dispensePaymentType: '',
  dispensedBy: '',
};

export const initialMedicationDetails: MedicationDetailsInput = {
  datePrescribed: null,
  duration: null,
  medicationName: '',
  purpose: '',
  administrationMethod: '',
  type: '',
  quantity: 0,
  prescribedBy: '',
  dosage: 0,
  dosageUnit: 'Bags',
  startDate: null,
  endDate: null,
  discontinue: null,
  refillNumber: 0,
  frequency: null,
};
