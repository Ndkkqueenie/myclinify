/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NewVitalInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddVital
// ====================================================

export interface AddVital_addVital {
  __typename: "VitalModel";
  id: string;
  hospitalName: string | null;
  hospitalAddress: string | null;
  documentUrl: string[] | null;
  additionalNote: string | null;
}

export interface AddVital {
  addVital: AddVital_addVital;
}

export interface AddVitalVariables {
  input: NewVitalInput;
}
