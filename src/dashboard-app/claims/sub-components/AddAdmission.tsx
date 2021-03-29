import React from 'react';
import { Base, BillingStrip } from 'dashboard-app/common/Wrapper';
import ContentCollapsibleComponent from 'dashboard-app/common/ContentCollapsibleComponent';
import AddAdmissionContent from 'dashboard-app/admission/AddAdmission';

export interface AddAdmissionProps {
  itemType?: 'add' | 'update';
}

const AddAdmission: React.FC<AddAdmissionProps> = () => {
  return (
    <ContentCollapsibleComponent name="Admission" removeItem={() => {}}>
      <Base>
        <AddAdmissionContent hideLayout filterOptions={{}} />
      </Base>
      <BillingStrip>
        <div className="strip">
          <h3>Billing</h3>
          <h5>Currency</h5>
        </div>
      </BillingStrip>
    </ContentCollapsibleComponent>
  );
};

export default AddAdmission;
