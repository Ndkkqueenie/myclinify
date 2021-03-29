import React from 'react';
import { Base, BillingStrip } from 'dashboard-app/common/Wrapper';
import ContentCollapsibleComponent from 'dashboard-app/common/ContentCollapsibleComponent';
import AddSurgeryContent from 'dashboard-app/surgery/AddSurgery';

export interface AddSurgeryProps {}
const AddSurgery: React.FC<AddSurgeryProps> = () => {
  return (
    <ContentCollapsibleComponent name="Surgery" removeItem={() => {}}>
      <Base>
        <AddSurgeryContent hideLayout />
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

export default AddSurgery;
