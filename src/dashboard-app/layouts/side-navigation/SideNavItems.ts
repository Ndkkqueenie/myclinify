import AdmissionIcon from './icons/AdmissionIcon';
import AllergyIcon from './icons/AllergyIcon';
import AppointmentIcon from './icons/AppointmentIcon';
import ConsultationIcon from './icons/ConsultationIcon';
import ConsumablesIcon from './icons/ConsumablesIcon';
import CoverageIcon from './icons/CoverageIcon';
import DetailsIcon from './icons/DetailsIcon';
import ImmunizationIcon from './icons/ImmunizationIcon';
import InpatientListIcon from './icons/InpatientListIcon';
import InvestigationIcon from './icons/InvestigationIcon';
import LabResultIcon from './icons/LabResultIcon';
import LookupIcon from './icons/LookupIcon';
import MedicationIcon from './icons/MedicationIcon';
import MyHealthIcon from './icons/MyHealthIcon';
import PatientRegistrationIcon from './icons/PatientRegistrationIcon';
import RadiologyIcon from './icons/RadiologyIcon';
import RequestConsumablesIcon from './icons/RequestConsumablesIcon';
import RequestInvestigationIcon from './icons/RequestInvestigationIcon';
import SettingsIcon from './icons/SettingsIcon';
import SurgeryIcon from './icons/SurgeryIcon';
import VitalSignsIcon from './icons/VitalSignsIcon';
import WaitingListIcon from './icons/WaitingListIcon';
import { ISideNavItems, ISideNavItemsSelector } from './SideNavigation';

const settingsNav = [
  {
    url: '/settings',
    icon: SettingsIcon,
    title: 'Settings',
  },
];

export const PatientNavs: ISideNavItems[][] = [
  [
    {
      url: '/coverage',
      icon: CoverageIcon,
      title: 'My Coverage',
    },
    {
      url: '/details',
      icon: DetailsIcon,
      title: 'My Details',
    },
    {
      url: '/health',
      icon: MyHealthIcon,
      title: 'My Health',
    },
  ],
  [
    {
      url: '/vital-signs',
      icon: VitalSignsIcon,
      title: 'Vital Signs',
    },
  ],
  [
    {
      url: '/admission',
      icon: AdmissionIcon,
      title: 'Admission',
    },
    {
      url: '/allergy',
      icon: AllergyIcon,
      title: 'Allergy',
    },
    {
      url: '/appointment',
      icon: AppointmentIcon,
      title: 'Appointment',
    },
    {
      url: '/consultation',
      icon: ConsultationIcon,
      title: 'Consultation',
    },
    {
      url: '/immunization',
      icon: ImmunizationIcon,
      title: 'Immunization',
    },
    {
      url: '/laboratory',
      icon: LabResultIcon,
      title: 'Laboratory',
    },
    {
      url: '/medication',
      icon: MedicationIcon,
      title: 'Medication',
    },
    {
      url: '/radiology',
      icon: RadiologyIcon,
      title: 'Radiology',
    },
    {
      url: '/surgery',
      icon: SurgeryIcon,
      title: 'Procedure',
    },
  ],
  settingsNav,
];

const RequestNavs = [
  {
    url: '/consumables/request',
    icon: RequestConsumablesIcon,
    title: 'Request Consumable',
  },
  {
    url: '/request-investigation',
    icon: RequestInvestigationIcon,
    title: 'Request Investigation',
  },
];

export const HospitalNavs: ISideNavItems[][] = [
  [
    {
      url: '/lookup',
      icon: LookupIcon,
      title: 'Patient Lookup',
    },
    {
      url: '/waiting-list',
      icon: WaitingListIcon,
      title: 'Patient Waiting List',
    },
    {
      url: '/inpatient-list',
      icon: InpatientListIcon,
      title: 'Inpatient List',
    },
    {
      url: '/investigations',
      icon: InvestigationIcon,
      title: 'Investigations',
    },
    {
      url: '/consumables',
      icon: ConsumablesIcon,
      title: 'Consumables',
    },
  ],
  settingsNav,
];

const requestNavsWithVitalSigns = [...PatientNavs[1], ...RequestNavs];

const PatientSelectedNavs = [PatientNavs[0], requestNavsWithVitalSigns, PatientNavs[2]];

export const PatientSelectedWithDoctorNavs = [
  HospitalNavs[0].slice(0, 2),
  ...PatientSelectedNavs,
  settingsNav,
];

export const FrontDeskNavs: ISideNavItems[][] = [
  [
    {
      url: '/lookup',
      icon: LookupIcon,
      title: 'Patient Lookup',
    },
    {
      url: '/patient-registration',
      icon: PatientRegistrationIcon,
      title: 'Patient Registration',
    },
    {
      url: '/waiting-list',
      icon: WaitingListIcon,
      title: 'Patient Waiting List',
    },
  ],
  settingsNav,
];

export const sideNavItemsSelector: ISideNavItemsSelector = {
  Patient: PatientNavs,
  OrganizationDoctor: HospitalNavs,
  OrganizationNurse: HospitalNavs,
  OrganizationFrontDeskOfficer: FrontDeskNavs,
};
