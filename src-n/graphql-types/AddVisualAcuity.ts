/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { VisualAcuityVitalFields } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddVisualAcuity
// ====================================================

export interface AddVisualAcuity_addVisualAcuityInfo {
  __typename: "VisualAcuityModel";
  id: string;
  readingDateTime: any | null;
  withGlassesLeft: string | null;
  withGlassesRight: string | null;
  withoutGlassesLeft: string | null;
  withoutGlassesRight: string | null;
}

export interface AddVisualAcuity {
  addVisualAcuityInfo: AddVisualAcuity_addVisualAcuityInfo;
}

export interface AddVisualAcuityVariables {
  input: VisualAcuityVitalFields;
  parentRecordId: string;
}
