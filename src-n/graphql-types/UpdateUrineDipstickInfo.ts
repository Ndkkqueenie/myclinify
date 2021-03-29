/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UrineDipstickVitalFields } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateUrineDipstickInfo
// ====================================================

export interface UpdateUrineDipstickInfo_updateUrineDipstickInfo {
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

export interface UpdateUrineDipstickInfo {
  updateUrineDipstickInfo: UpdateUrineDipstickInfo_updateUrineDipstickInfo;
}

export interface UpdateUrineDipstickInfoVariables {
  input: UrineDipstickVitalFields;
  id: string;
}
