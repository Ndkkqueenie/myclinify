/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Allergy
// ====================================================

export interface Allergy_details {
  __typename: "AllergyDetails";
  type: string;
  trigger: string;
  reactions: string[] | null;
  severeness: string | null;
}

export interface Allergy {
  __typename: "AllergyModel";
  id: string;
  occurenceDate: any | null;
  duration: string | null;
  hospitalName: string | null;
  hospitalAddress: string | null;
  details: Allergy_details[] | null;
  documentUrl: string[] | null;
  additionalNote: string | null;
}
