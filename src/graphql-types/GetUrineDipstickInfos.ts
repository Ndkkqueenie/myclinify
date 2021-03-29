/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUrineDipstickInfos
// ====================================================

export interface GetUrineDipstickInfos_getUrineDipstickInfos {
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

export interface GetUrineDipstickInfos {
  getUrineDipstickInfos: GetUrineDipstickInfos_getUrineDipstickInfos[];
}

export interface GetUrineDipstickInfosVariables {
  parentRecordId: string;
}
