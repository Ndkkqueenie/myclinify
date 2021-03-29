/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AllergyFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetPatientAllergyList
// ====================================================

export interface GetPatientAllergyList_user_allergies_list_details {
  __typename: "AllergyDetails";
  type: string;
  trigger: string;
  reactions: string[] | null;
  severeness: string | null;
}

export interface GetPatientAllergyList_user_allergies_list_medications {
  __typename: "MedicationModel";
  id: string;
}

export interface GetPatientAllergyList_user_allergies_list {
  __typename: "AllergyModel";
  id: string;
  occurenceDate: any | null;
  duration: string | null;
  hospitalName: string | null;
  hospitalAddress: string | null;
  details: GetPatientAllergyList_user_allergies_list_details[] | null;
  documentUrl: string[] | null;
  additionalNote: string | null;
  medications: GetPatientAllergyList_user_allergies_list_medications[] | null;
}

export interface GetPatientAllergyList_user_allergies {
  __typename: "AllergyResponse";
  totalCount: number;
  list: GetPatientAllergyList_user_allergies_list[];
}

export interface GetPatientAllergyList_user {
  __typename: "UserModel";
  allergies: GetPatientAllergyList_user_allergies;
}

export interface GetPatientAllergyList {
  user: GetPatientAllergyList_user;
}

export interface GetPatientAllergyListVariables {
  filterOptions?: AllergyFilterInput | null;
  id?: string | null;
}
