/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender } from "./globalTypes";

// ====================================================
// GraphQL fragment: Dependent
// ====================================================

export interface Dependent {
  __typename: "DependentModel";
  id: string;
  title: string | null;
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  gender: Gender | null;
  dateOfBirth: any | null;
  bloodGroup: string | null;
  genoType: string | null;
  relationship: string | null;
}
