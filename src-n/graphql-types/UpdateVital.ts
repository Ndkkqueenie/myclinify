/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateVitalInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateVital
// ====================================================

export interface UpdateVital_updateVital {
  __typename: "VitalModel";
  id: string;
  hospitalName: string | null;
  hospitalAddress: string | null;
  documentUrl: string[] | null;
  additionalNote: string | null;
}

export interface UpdateVital {
  updateVital: UpdateVital_updateVital;
}

export interface UpdateVitalVariables {
  input: UpdateVitalInput;
  id: string;
}
