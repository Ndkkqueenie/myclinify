/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeletePatientMedications
// ====================================================

export interface DeletePatientMedications_deleteMedications {
  __typename: "MedicationModel";
  id: string;
}

export interface DeletePatientMedications {
  deleteMedications: DeletePatientMedications_deleteMedications[];
}

export interface DeletePatientMedicationsVariables {
  ids: string[];
}
