import React from 'react';
import { Base, EntryStrip, EntryWrapper, BillingStrip } from 'dashboard-app/common/Wrapper';
import ContentCollapsibleComponent from 'dashboard-app/common/ContentCollapsibleComponent';
import AddConsultationContent from 'dashboard-app/consultation/AddConsultation';
import Admission from './Admission';
import Allergy from './Allergy';

export interface AddConsultationProps {
  itemType?: 'add' | 'update';
}

const AddConsultation: React.FC<AddConsultationProps> = () => {
  return (
    <>
      <ContentCollapsibleComponent name="Consultation" removeItem={() => {}}>
        <Base>
          <AddConsultationContent filterOptions={{}} hideLayout />
        </Base>

        <BillingStrip>
          <div className="strip">
            <h3>Billing</h3>
            <h5>Currency</h5>
          </div>
        </BillingStrip>
        <EntryWrapper>
          <EntryStrip>
            <div className="strip-header">Admission</div>
            <Admission entry />
          </EntryStrip>
        </EntryWrapper>
        <EntryWrapper>
          <EntryStrip>
            <div className="strip-header">Allergy</div>
            <Allergy entry />
          </EntryStrip>
        </EntryWrapper>
      </ContentCollapsibleComponent>
    </>
  );
};

export default AddConsultation;
