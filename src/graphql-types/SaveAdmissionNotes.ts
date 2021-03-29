/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AdmissionNoteInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SaveAdmissionNotes
// ====================================================

export interface SaveAdmissionNotes_saveAdmissionNote {
  __typename: "AdmissionNoteModel";
  id: string;
  creatorProfileType: string;
  note: string | null;
}

export interface SaveAdmissionNotes {
  saveAdmissionNote: SaveAdmissionNotes_saveAdmissionNote;
}

export interface SaveAdmissionNotesVariables {
  input: AdmissionNoteInput;
  id: string;
  clinifyId: string;
}
