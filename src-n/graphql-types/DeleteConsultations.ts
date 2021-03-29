/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteConsultations
// ====================================================

export interface DeleteConsultations_deleteConsultations {
  __typename: "ConsultationModel";
  id: string;
}

export interface DeleteConsultations {
  deleteConsultations: DeleteConsultations_deleteConsultations[];
}

export interface DeleteConsultationsVariables {
  ids: string[];
}
