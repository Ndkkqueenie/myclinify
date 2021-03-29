/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { HospitalFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetHospitals
// ====================================================

export interface GetHospitals_hospitals_list {
  __typename: "HospitalModel";
  id: string;
  name: string;
}

export interface GetHospitals_hospitals {
  __typename: "HospitalResponse";
  totalCount: number;
  list: GetHospitals_hospitals_list[];
}

export interface GetHospitals {
  hospitals: GetHospitals_hospitals;
}

export interface GetHospitalsVariables {
  filterOptions?: HospitalFilterInput | null;
}
