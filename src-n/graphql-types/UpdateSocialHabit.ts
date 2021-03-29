/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { HabitInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateSocialHabit
// ====================================================

export interface UpdateSocialHabit_updateHabitInfo {
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

export interface UpdateSocialHabit {
  updateHabitInfo: UpdateSocialHabit_updateHabitInfo;
}

export interface UpdateSocialHabitVariables {
  input: HabitInput;
  id: string;
  profileId?: string | null;
}
