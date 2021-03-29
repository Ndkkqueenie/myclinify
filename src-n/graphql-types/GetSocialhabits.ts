/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProfileInfosFilterInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetSocialhabits
// ====================================================

export interface GetSocialhabits_getHabits_list {
  __typename: "HabitModel";
  id: string;
  socialHabit: string | null;
  level: string | null;
  duration: string | null;
  typeSpecified: string | null;
  cigrattesPerDay: number | null;
  unitPerWeek: number | null;
  additionalNote: string | null;
}

export interface GetSocialhabits_getHabits {
  __typename: "HabitsResponse";
  totalCount: number;
  list: GetSocialhabits_getHabits_list[];
}

export interface GetSocialhabits {
  getHabits: GetSocialhabits_getHabits;
}

export interface GetSocialhabitsVariables {
  filterInput: ProfileInfosFilterInput;
  profileId?: string | null;
}
