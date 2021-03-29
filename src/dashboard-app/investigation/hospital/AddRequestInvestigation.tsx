import React from 'react';
import { FILTER_INPUT } from 'dashboard-app/utils/constants';
import {} from 'dashboard-app/queries/surgery';
import AddLaboratory from 'dashboard-app/laboratory/AddLabResult';
import { setTitle } from 'apollo/operations';
import { RecordForm } from 'dashboard-app/common/FormWrapper';

export interface AddRequestInvestigationProps {}

const AddRequestInvestigation: React.FC<AddRequestInvestigationProps> = () => {
  React.useEffect(() => setTitle('Add Investigation'), []);

  return (
    <RecordForm clear>
      <AddLaboratory filterOptions={FILTER_INPUT} />
    </RecordForm>
  );
};

export default AddRequestInvestigation;
