/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeletePatientRadiology
// ====================================================

export interface DeletePatientRadiology_deleteRadiology {
  __typename: "RadiologyModel";
  id: string;
}

export interface DeletePatientRadiology {
  deleteRadiology: DeletePatientRadiology_deleteRadiology[];
}

export interface DeletePatientRadiologyVariables {
  ids: string[];
}
