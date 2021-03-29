import * as React from 'react';
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
import SurgeryRoutes from 'dashboard-app/surgery/SurgeryRoutes';
import AppointmentRoutes from 'dashboard-app/appointment/AppointmentRoutes';
import AdmissionRoutes from 'dashboard-app/admission/AdmissionRoutes';
import ConsultationRoutes from 'dashboard-app/consultation/ConsultationRoutes';
import Coverage from 'dashboard-app/coverage/Coverage';
import Settings from 'dashboard-app/settings/Settings';
import Overview from 'dashboard-app/overview/Overview';
import NotFoundPage from 'dashboard-app/error-pages/404';

const PatientRoutes = () => {
  const match = useRouteMatch();
  return (
    <MainLayout section="patient">
      <Switch>
        <Route path={`${match.path}/overview`} component={Overview} />
        <Route path={`${match.path}/details`} component={Details} />
        <Route path={`${match.path}/coverage`} component={Coverage} />
        <Route path={`${match.path}/health`} component={Health} />
        <Route path={`${match.path}/admission`} component={AdmissionRoutes} />
        <Route path={`${match.path}/allergy`} component={AllergyRoutes} />
        <Route path={`${match.path}/consultation`} component={ConsultationRoutes} />
        <Route path={`${match.path}/laboratory`} component={LabResultRoutes} />
        <Route path={`${match.path}/medication`} component={MedicationRoutes} />
        <Route path={`${match.path}/appointment`} component={AppointmentRoutes} />
        <Route path={`${match.path}/radiology`} component={RadiologyRoutes} />
        <Route path={`${match.path}/vital-signs`} component={VitalSignsRoutes} />
        <Route path={`${match.path}/surgery`} component={SurgeryRoutes} />
        <Route path={`${match.path}/settings`} component={Settings} />
        <Route path={`${match.path}/immunization`} component={ImmunizationRoutes} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </MainLayout>
  );
};

export default PatientRoutes;
