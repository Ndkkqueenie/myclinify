import React from 'react';
import { Base, BillingStrip } from 'dashboard-app/common/Wrapper';
import ContentCollapsibleComponent from 'dashboard-app/common/ContentCollapsibleComponent';
import AddRadiologyContent from 'dashboard-app/radiology/AddRadiology';

export interface AddRadiologyProps {}

const AddRadiology: React.FC<AddRadiologyProps> = () => {
  return (
    <ContentCollapsibleComponent name="Radiology" removeItem={() => {}}>
      <Base>
        <AddRadiologyContent hideLayout filterOptions={{}} />
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

export default AddRadiology;
