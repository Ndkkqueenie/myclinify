export const loggedIn = () => sessionStorage.getItem('userToken');
export const userType = () =>
  JSON.parse(sessionStorage.getItem('userData') || '{ "type": "" }').type;

const validPatientDashboardUserTypes = ['Patient'];
const validHospitalDashboarduserTypes = [
  'OrganizationDoctor',
  'OrganizationNurse',
  'OrganizationFrontDeskOfficer',
  'Pharmacist',
];

const routeMapper = {
  ClaimOfficer: '/hmo/enrollment',
  OrganizationDoctor: '/hospital/lookup',
  OrganizationNurse: '/hospital/lookup',
  OrganizationFrontDeskOfficer: '/hospital/lookup',
  Patient: '/patient/overview',
  Pharmacist: '/hospital/lookup',
};

export const redirectPath = () => routeMapper[userType()];
export const canAccessPatientRoute = () =>
  loggedIn() && validPatientDashboardUserTypes.includes(userType());
export const canAccessHospitalRoute = () =>
  loggedIn() && validHospitalDashboarduserTypes.includes(userType());
export const canAccessHmoRoute = () => loggedIn() && userType() === 'ClaimOfficer';
export const canAccessFrontDeskRoute = () =>
  loggedIn() && userType() === 'OrganizationFrontDeskOfficer';
