/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender } from "./globalTypes";

// ====================================================
// GraphQL fragment: FamilyHistory
// ====================================================

export interface FamilyHistory {
  __typename: "FamilyHistoryModel";
  id: string;
  title: string | null;
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  gender: Gender | null;
  dateOfBirth: any | null;
  bloodGroup: string | null;
  relationship: string | null;
  condition: string[];
  additionalNote: string | null;
}
