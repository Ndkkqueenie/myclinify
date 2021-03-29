/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { VisualAcuityVitalFields } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateVisualAcuityInfo
// ====================================================

export interface UpdateVisualAcuityInfo_updateVisualAcuityInfo {
  __typename: "VisualAcuityModel";
  id: string;
  readingDateTime: any | null;
  withGlassesLeft: string | null;
  withGlassesRight: string | null;
  withoutGlassesLeft: string | null;
  withoutGlassesRight: string | null;
}

export interface UpdateVisualAcuityInfo {
  updateVisualAcuityInfo: UpdateVisualAcuityInfo_updateVisualAcuityInfo;
}

export interface UpdateVisualAcuityInfoVariables {
  input: VisualAcuityVitalFields;
  id: string;
}
