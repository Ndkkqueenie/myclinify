/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteLabTests
// ====================================================

export interface DeleteLabTests_deleteLabTests {
  __typename: "LabTestModel";
  id: string;
}

export interface DeleteLabTests {
  deleteLabTests: DeleteLabTests_deleteLabTests[];
}

export interface DeleteLabTestsVariables {
  ids: string[];
}
