/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteAdmissionNotes
// ====================================================

export interface DeleteAdmissionNotes_deleteAdmissionNote {
  __typename: "AdmissionNoteModel";
  id: string;
}

export interface DeleteAdmissionNotes {
  deleteAdmissionNote: DeleteAdmissionNotes_deleteAdmissionNote;
}

export interface DeleteAdmissionNotesVariables {
  id: string;
}
