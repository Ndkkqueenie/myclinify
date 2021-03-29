/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { HabitInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddSocialHabit
// ====================================================

export interface AddSocialHabit_addHabitInfo {
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

export interface AddSocialHabit {
  addHabitInfo: AddSocialHabit_addHabitInfo;
}

export interface AddSocialHabitVariables {
  profileId?: string | null;
  input: HabitInput;
}
