import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import MainLayout from 'dashboard-app/layouts/MainLayout';
import Details from 'dashboard-app/details/Details';
import ImmunizationRoutes from 'dashboard-app/immunization/ImmunizationRoutes';
import Health from 'dashboard-app/health/Health';
import AllergyRoutes from 'dashboard-app/allergy/AllergyRoutes';
import LabResultRoutes from 'dashboard-app/laboratory/LabResultRoutes';
import MedicationRoutes from 'dashboard-app/medication/MedicationRoutes';
import VitalSignsRoutes from 'dashboard-app/vital-signs/VitalSignsRoute';
import RadiologyRoutes from 'dashboard-app/radiology/RadiologyRoutes';
import OverviewRoutes from 'dashboard-app/overview/Overview';
import AppointmentRoutes from 'dashboard-app/appointment/AppointmentRoutes';
import InsuranceBillingRoutes from 'dashboard-app/waiting-list/hospital/WaitingListRoutes';
import RequestInvestigationRoutes from 'dashboard-app/investigation/hospital/RequestInvestigationRoutes';
import InvestigationRoutes from 'dashboard-app/investigation/hospital/InvestigationRoutes';
import LookupRoutes from 'dashboard-app/lookup/LookupRoutes';
import SurgeryRoutes from 'dashboard-app/surgery/SurgeryRoutes';
import AuthorizationRoutes from 'dashboard-app/authorization/AuthorizationRoutes';
import ClaimsRoutes from 'dashboard-app/claims/ClaimsRoutes';
import ConsultationRoutes from 'dashboard-app/consultation/ConsultationRoutes';
import AdmissionRoutes from 'dashboard-app/admission/AdmissionRoutes';
import Coverage from 'dashboard-app/coverage/Coverage';
import { UserType } from 'graphql-types/globalTypes';
import InpatientListRoutes from 'dashboard-app/inpatient-list/InpatientListRoutes';
import ConsumablesRoutes from 'dashboard-app/consumables/ConsumablesRoutes';
import { canAccessFrontDeskRoute } from 'dashboard-app/utils/authTracker';
import Settings from 'dashboard-app/settings/Settings';
import PatientRegistrationRoutes from 'dashboard-app/patient-registration/PatientRegistrationRoutes';

export interface HospitalRoutesProps {}

const HospitalRoutes: React.FC<HospitalRoutesProps> = () => {
  const frontDesk = canAccessFrontDeskRoute();
  const match = useRouteMatch();
  const userType = UserType.OrganizationDoctor;
  return (
    <MainLayout section="hospital">
      <Switch>
        <Route path={`${match.path}/details`}>
          <Details userType={userType} />
        </Route>
        <Route path={`${match.path}/coverage`}>
          <Coverage userType={userType} />
        </Route>
        <Route path={`${match.path}/lookup`}>
          <LookupRoutes frontDesk={frontDesk} />
        </Route>
        <Route path={`${match.path}/claim`}>
          <ClaimsRoutes />
        </Route>
        <Route path={`${match.path}/authorization`}>
          <AuthorizationRoutes />
        </Route>
        <Route path={`${match.path}/health`}>
          <Health userType={userType} />
        </Route>
        <Route path={`${match.path}/admission`}>
          <AdmissionRoutes userType={userType} />
        </Route>
        <Route path={`${match.path}/allergy`}>
          <AllergyRoutes userType={userType} />
        </Route>
        <Route path={`${match.path}/laboratory`}>
          <LabResultRoutes userType={userType} />
        </Route>
        <Route path={`${match.path}/medication`}>
          <MedicationRoutes userType={userType} />
        </Route>
        <Route path={`${match.path}/appointment`}>
          <AppointmentRoutes userType={userType} />
        </Route>
        <Route path={`${match.path}/consultation`}>
          <ConsultationRoutes userType={userType} />
        </Route>
        <Route path={`${match.path}/overview`}>
          <OverviewRoutes />
        </Route>
        <Route path={`${match.path}/radiology`}>
          <RadiologyRoutes userType={userType} />
        </Route>
        <Route path={`${match.path}/vital-signs`}>
          <VitalSignsRoutes userType={userType} />
        </Route>
        <Route path={`${match.path}/immunization`}>
          <ImmunizationRoutes userType={userType} />
        </Route>
        <Route path={`${match.path}/surgery`}>
          <SurgeryRoutes userType={userType} />
        </Route>
        <Route path={`${match.path}/settings`}>
          <Settings userType={userType} />
        </Route>
        <Route path={`${match.path}/waiting-list`}>
          <InsuranceBillingRoutes frontDesk={frontDesk} />
        </Route>
        <Route path={`${match.path}/patient-registration`}>
          <PatientRegistrationRoutes frontDesk={frontDesk} />
        </Route>
        <Route path={`${match.path}/investigations`}>
          <InvestigationRoutes />
        </Route>
        <Route path={`${match.path}/request-investigation`}>
          <RequestInvestigationRoutes />
        </Route>
        <Route path={`${match.path}/inpatient-list`}>
          <InpatientListRoutes />
        </Route>
        <Route path={`${match.path}/consumables`}>
          <ConsumablesRoutes />
        </Route>
      </Switch>
    </MainLayout>
  );
};

export default HospitalRoutes;
