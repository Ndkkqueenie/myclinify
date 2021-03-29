/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AdmissionNoteInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateAdmissionNotes
// ====================================================

export interface UpdateAdmissionNotes_updateAdmissionNote {
  __typename: "AdmissionNoteModel";
  id: string;
  creatorProfileType: string;
  note: string | null;
}

export interface UpdateAdmissionNotes {
  updateAdmissionNote: UpdateAdmissionNotes_updateAdmissionNote;
}

export interface UpdateAdmissionNotesVariables {
  input: AdmissionNoteInput;
  id: string;
}
