/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteAdmissions
// ====================================================

export interface DeleteAdmissions_deleteAdmissions {
  __typename: "AdmissionModel";
  id: string;
}

export interface DeleteAdmissions {
  deleteAdmissions: DeleteAdmissions_deleteAdmissions[];
}

export interface DeleteAdmissionsVariables {
  ids: string[];
}
