/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteAppointments
// ====================================================

export interface DeleteAppointments_deleteAppointments {
  __typename: "AppointmentModel";
  id: string;
}

export interface DeleteAppointments {
  deleteAppointments: DeleteAppointments_deleteAppointments[];
}

export interface DeleteAppointmentsVariables {
  ids: string[];
}
