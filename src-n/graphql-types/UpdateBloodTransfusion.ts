/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BloodTransfusionInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateBloodTransfusion
// ====================================================

export interface UpdateBloodTransfusion_updateBloodTransfusion {
  __typename: "BloodTransfusionModel";
  id: string;
  transfusionDateTime: any | null;
  transfusionOrderGiven: string;
  transfusionDoctor: string | null;
  transfusionNurse: string | null;
  patientBloodGroup: string | null;
  patientGenoType: string | null;
  crossMatchingTime: string | null;
  bloodLabel: string | null;
  bloodProduct: string | null;
  expiryDate: string | null;
  donorBloodType: string | null;
  bloodPint: string | null;
  lengthOfTransfusion: string | null;
  adverseReaction: string | null;
  reaction: string | null;
  transfusionNote: string | null;
  patientConsent: string | null;
  consentReason: string | null;
  bloodSource: string | null;
}

export interface UpdateBloodTransfusion {
  updateBloodTransfusion: UpdateBloodTransfusion_updateBloodTransfusion;
}

export interface UpdateBloodTransfusionVariables {
  input: BloodTransfusionInput;
  id: string;
}
