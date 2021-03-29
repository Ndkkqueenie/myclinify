/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UrineDipstickVitalFields } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddUrineDipstick
// ====================================================

export interface AddUrineDipstick_addUrineDipstickInfo {
  __typename: "UrineDipstickModel";
  id: string;
  readingDateTime: any | null;
  blood: number | null;
  glucose: number | null;
  ketones: number | null;
  ph: number | null;
  protein: number | null;
  nitrites: number | null;
  leucocyte: number | null;
  urobilinogen: number | null;
}

export interface AddUrineDipstick {
  addUrineDipstickInfo: AddUrineDipstick_addUrineDipstickInfo;
}

export interface AddUrineDipstickVariables {
  input: UrineDipstickVitalFields;
  parentRecordId: string;
}
