/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteSocialHabit
// ====================================================

export interface DeleteSocialHabit_deleteHabitInfo {
  __typename: "HabitModel";
  id: string;
}

export interface DeleteSocialHabit {
  deleteHabitInfo: DeleteSocialHabit_deleteHabitInfo;
}

export interface DeleteSocialHabitVariables {
  id: string;
  profileId?: string | null;
}
