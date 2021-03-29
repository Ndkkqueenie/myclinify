import { useQuery } from '@apollo/client';
import { setTitle } from 'apollo/operations';
import DefaultProfileImageWithBlueBorder from 'dashboard-app/common/DefaultProfileImageWithBlueBorder';
import Message from 'dashboard-app/common/Message';
import { Content } from 'dashboard-app/common/Wrapper';
import ImmunizationIcon from 'dashboard-app/layouts/side-navigation/icons/ImmunizationIcon';
import RadiologyIcon from 'dashboard-app/layouts/side-navigation/icons/RadiologyIcon';
import { PATIENT_OVERVIEW } from 'dashboard-app/queries/user';
import colors from 'dashboard-app/utils/colors';
import React from 'react';
import { PulseLoader } from 'react-spinners';
import AdmissionIcon from '../layouts/side-navigation/icons/AdmissionIcon';
import AllergyIcon from '../layouts/side-navigation/icons/AllergyIcon';
import AppointmentIcon from '../layouts/side-navigation/icons/AppointmentIcon';
import ConsultationIcon from '../layouts/side-navigation/icons/ConsultationIcon';
import LabResultIcon from '../layouts/side-navigation/icons/LabResultIcon';
import MedicationIcon from '../layouts/side-navigation/icons/MedicationIcon';
import SurgeryIcon from '../layouts/side-navigation/icons/SurgeryIcon';
import VitalSignsIcon from '../layouts/side-navigation/icons/VitalSignsIcon';
import './overview.scss';

export interface OverviewProps {}

const PROFILE_AVATAR = '/images/profile-image.png';

const Overview: React.FC<OverviewProps> = () => {
  const { data, loading, error } = useQuery(PATIENT_OVERVIEW, { fetchPolicy: 'network-only' });

  React.useEffect(() => setTitle('Overview'), []);

  if (loading)
    return (
      <Message>
        <PulseLoader />
      </Message>
    );

  if (error)
    return (
      <Message>
        <PulseLoader />
      </Message>
    );

  const patientHospitalRecord = [
    {
      icon: AllergyIcon,
      title: 'patient allergies',
      table: {
        'Occurence Date & Time': data?.userOverView?.lastAllergy?.occurenceDate
          ? new Date(data?.userOverView?.lastAllergy?.occurenceDate).toLocaleDateString()
          : null,
        'Allergy type': data?.userOverView?.lastAllergy?.type,
        Trigger: data?.userOverView?.lastAllergy?.trigger,
        Reactions: data?.userOverView?.lastAllergy?.reactions?.join(', '),
      },
      theme: '#9FE295',
    },
    {
      icon: VitalSignsIcon,
      title: 'LAST VITAL SIGN READINGS',
      theme: '#F7BB85',
      table: {
        'Created Date & Time': data?.userOverView?.lastVitalSign?.createdDate
          ? new Date(data?.userOverView?.lastVitalSign?.createdDate).toLocaleDateString()
          : '--',
        Height: data?.userOverView?.lastVitalSign?.anthropometry[0]?.height
          ? `${data?.userOverView?.lastVitalSign?.anthropometry[0]?.height} ${
              data?.userOverView?.lastVitalSign?.anthropometry[0]?.heightUnit || ''
            }`
          : '--',
        Weight: data?.userOverView?.lastVitalSign?.anthropometry[0]?.weight
          ? `${data?.userOverView?.lastVitalSign?.anthropometry[0]?.weight} ${
              data?.userOverView?.lastVitalSign?.anthropometry[0]?.weightUnit || ''
            }`
          : '--',
        'Blood Glucose': data?.userOverView?.lastVitalSign?.bloodGlucose[0]?.reading
          ? `${data?.userOverView?.lastVitalSign?.bloodGlucose[0]?.reading} ${
              data?.userOverView?.lastVitalSign?.bloodGlucose[0]?.readingUnit || ''
            }`
          : '--',
        'Blood Pressure': data?.userOverView?.lastVitalSign?.bloodPressure[0]?.systolic
          ? `${data?.userOverView?.lastVitalSign?.bloodPressure[0]?.systolic} / ${
              data?.userOverView?.lastVitalSign?.bloodPressure[0]?.diastolic || ''
            }`
          : '--',
        'Pulse Rate': data?.userOverView?.lastVitalSign?.pulseRate[0]?.reading
          ? `${data?.userOverView?.lastVitalSign?.pulseRate[0]?.reading} bpm`
          : '--',
        'Respiratory Rate': data?.userOverView?.lastVitalSign?.pulseRate[0]?.reading
          ? `${data?.userOverView?.lastVitalSign?.pulseRate[0]?.reading} cpm`
          : '--',
        Temperature: data?.userOverView?.lastVitalSign?.temperature[0]?.reading
          ? `${data?.userOverView?.lastVitalSign?.temperature[0]?.reading} ${
              data?.userOverView?.lastVitalSign?.temperature[0]?.readingUnit || ''
            }`
          : '--',
      },
    },
    {
      icon: ImmunizationIcon,
      title: 'Last Immunization',
      theme: '#FFB4F6',
      table: {
        'Administration Date & Time': data?.userOverView?.lastImmunization?.administeredDate
          ? new Date(data?.userOverView?.lastImmunization?.administeredDate).toLocaleDateString()
          : '--',
        'Vaccination Name': data?.userOverView?.lastImmunization?.immunizationName,
        'Given By': data?.userOverView?.lastImmunization?.administratorName,
        'Route Of Administration': data?.userOverView?.lastImmunization?.method,
      },
    },
    {
      icon: ConsultationIcon,
      title: 'LAST CONSULTATION',
      theme: '#79C5DC',
      table: {
        'Consultation Date & Time': data?.userOverView?.lastConsultation?.consultationDateTime
          ? new Date(
              data?.userOverView?.lastConsultation?.consultationDateTime,
            ).toLocaleDateString()
          : '--',
        'Provisional Diagnosis': data?.userOverView?.lastConsultation?.provisionalDiagnosis,
        'Final Diagnosis': data?.userOverView?.lastConsultation?.finalDiagnosis,
        'Doctor’s Name': data?.userOverView?.lastConsultation?.doctorName,
      },
    },
    {
      icon: LabResultIcon,
      title: 'LAST LAB TEST',
      theme: '#F8F19E',
      table: {
        'Test Date & Time': data?.userOverView?.lastLabTest?.testDate
          ? new Date(data?.userOverView?.lastLabTest?.testDate).toLocaleDateString()
          : '--',
        'Test Name (Lab Order)': data?.userOverView?.lastLabTest?.testInfo[0]?.testName,
        'Ordered By': data?.userOverView?.lastLabTest?.orderedBy,
        'Test Performed By': data?.userOverView?.lastLabTest?.performedBy,
      },
    },
    {
      icon: RadiologyIcon,
      title: 'LAST RADIOLOGY EXAM',
      theme: '#E0E0E0',
      table: {
        'Examination Date and Time': data?.userOverView?.lastRadiology?.examDate
          ? new Date(data?.userOverView?.lastRadiology?.examDate).toLocaleDateString()
          : '--',
        'Examination Type': data?.userOverView?.lastRadiology?.examType,
        'Requested By': data?.userOverView?.lastRadiology?.requester,
        'Radiologist Name': data?.userOverView?.lastRadiology?.radiologist,
      },
    },
    {
      icon: AdmissionIcon,
      title: 'LAST ADMISSION',
      theme: '#93ECDD',
      table: {
        'Admission Date & Time': data?.userOverView?.lastAdmission?.admissionDate
          ? new Date(data?.userOverView?.lastAdmission?.admissionDate).toLocaleDateString()
          : '--',
        'Admitted By': data?.userOverView?.lastAdmission?.admittedBy,
        'Admission Diagnosis': data?.userOverView?.lastAdmission?.admissionDiagnosis,
        'Hospital Unit': data?.userOverView?.lastAdmission?.hospitalUnit,
      },
    },
    {
      icon: SurgeryIcon,
      title: 'LAST PROCEDURE',
      theme: '#D9AC8F',
      table: {
        'Operation Date & Time': data?.userOverView?.lastProcedure?.surgeryDate
          ? new Date(data?.userOverView?.lastProcedure?.surgeryDate).toLocaleDateString()
          : '--',
        'Procedure Type': data?.userOverView?.lastProcedure?.type,
        'Operated By': data?.userOverView?.lastProcedure?.operatedBy,
        Specialty: data?.userOverView?.lastProcedure?.specialty,
      },
    },
    {
      icon: AppointmentIcon,
      title: 'LAST APPOINTMENT',
      theme: '#FF8787',
      table: {
        'Appointment Date & Time': data?.userOverView?.lastAppointment?.appointmentDateTime
          ? new Date(data?.userOverView?.lastAppointment?.appointmentDateTime).toLocaleDateString()
          : '--',
        'Facility Name': data?.userOverView?.lastAppointment?.facilityName,
        "Doctor's Name": data?.userOverView?.lastAppointment?.doctorsName,
        Specialty: data?.userOverView?.lastAppointment?.specialty,
      },
    },
    {
      icon: MedicationIcon,
      title: 'Current Medication',
      theme: '#C19FE0',
      table: {
        'Prescription Date and Time': data?.userOverView?.currentMedication?.details[0]
          ?.datePrescribed
          ? new Date(
              data?.userOverView?.currentMedication?.details[0]?.datePrescribed,
            ).toLocaleDateString()
          : null,
        'Medication Name': data?.userOverView?.currentMedication?.details[0]
          ? data?.userOverView?.currentMedication?.details[0].medicationName
          : '--',
        'Indication (Reason)': data?.userOverView?.currentMedication?.details[0]
          ? data?.userOverView?.currentMedication?.details[0]?.purpose
          : '--',
        'Prescribed By': data?.userOverView?.currentMedication?.details[0]
          ? data?.userOverView?.currentMedication?.details[0]?.prescribedBy
          : '--',
      },
    },
  ];

  const {
    primaryEmail,
    primaryPhoneNumber,
    personalInformation: {
      displayPictureUrl,
      firstName,
      lastName,
      phoneNumber,
      dateOfBirth,
      gender,
      bloodGroup,
      genoType,
      height,
      heightUnit,
      weight,
      weightUnit,
      address,
    },
    nextOfKin,
    dependent,
    coverage,
  } = data?.userOverView;

  return (
    <Content detailsPage listPage>
      <div className="overview-row row">
        <div className="col-12 col-md-4">
          <div className="patient-details">
            <div className="summary">
              <h3>PATIENT DETAILS</h3>
              <DefaultProfileImageWithBlueBorder profileImage={displayPictureUrl} />
              <div className="profile-progress">
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${data?.userOverView.completion}%` }}
                  />
                </div>
                <p>{data?.userOverView.completion}% Profile Completed</p>
              </div>
              <h4>
                {firstName} {lastName}
              </h4>
              <h5>{phoneNumber}</h5>
            </div>
            <div className="personal-information">
              <h3>Personal Information</h3>
              <div className="details">
                <h5 className="title">Age:</h5>
                <h5 className="result">
                  {dateOfBirth
                    ? new Date().getFullYear() - new Date(dateOfBirth).getFullYear()
                    : '--'}
                </h5>
              </div>
              <div className="details">
                <h5 className="title">Gender:</h5>
                <h5 className="result">{gender || '--'}</h5>
              </div>
              <div className="details">
                <h5 className="title">Blood Group:</h5>
                <h5 className="result">{bloodGroup || '--'}</h5>
              </div>
              <div className="details">
                <h5 className="title">GenoType:</h5>
                <h5 className="result">{genoType || '--'}</h5>
              </div>
              <div className="details">
                <h5 className="title">Weight:</h5>
                <h5 className="result">{weight ? `${weight} ${weightUnit || 'kg'}` : '--'}</h5>
              </div>
              <div className="details">
                <h5 className="title">Height:</h5>
                <h5 className="result">{height ? `${height} ${heightUnit || 'cm'}` : '--'}</h5>
              </div>
              <div className="details">
                <h5 className="title">Primary Email Address:</h5>
                <h5 className="result">{primaryEmail}</h5>
              </div>
              <div className="details">
                <h5 className="title">Primary Phone Number:</h5>
                <h5 className="result">{primaryPhoneNumber}</h5>
              </div>
              <div className="details">
                <h5 className="title">Contact Address:</h5>
                <h5 className="result">{address || '--'}</h5>
              </div>
            </div>
            <div className="next-of-kin">
              <h3>Next of Kin</h3>
              <div className="details">
                <h5 className="title">Name:</h5>
                <h5 className="result">
                  {nextOfKin?.firstName || '-'} {nextOfKin?.lastName || '-'}
                </h5>
              </div>
              <div className="details">
                <h5 className="title">Gender:</h5>
                <h5 className="result">{nextOfKin?.gender || '--'}</h5>
              </div>
              <div className="details">
                <h5 className="title">Blood Group:</h5>
                <h5 className="result">{nextOfKin?.bloodGroup || '--'}</h5>
              </div>
              <div className="details">
                <h5 className="title">Relationship:</h5>
                <h5 className="result">{nextOfKin?.relationship || '--'}</h5>
              </div>
              <div className="details">
                <h5 className="title">Occupation:</h5>
                <h5 className="result">{nextOfKin?.occupation || '--'}</h5>
              </div>
              <div className="details">
                <h5 className="title">Primary Email Address:</h5>
                <h5 className="result">{nextOfKin?.email || '--'}</h5>
              </div>
              <div className="details">
                <h5 className="title">Contact Address:</h5>
                <h5 className="result">{nextOfKin?.address || '--'}</h5>
              </div>
            </div>
            <div className="coverage_information">
              <h3>COVERAGE INFORMATION</h3>
              <div className="details">
                <h5 className="title">HMO Name:</h5>
                <h5 className="result">{coverage?.hmoProvider || '--'}</h5>
              </div>
              <div className="details">
                <h5 className="title">Member Number:</h5>
                <h5 className="result">{coverage?.memberNumber || '--'}</h5>
              </div>
              <div className="details">
                <h5 className="title">Member Plan:</h5>
                <h5 className="result">{coverage?.memberPlan || '--'}</h5>
              </div>
              <div className="details">
                <h5 className="title">Member Status:</h5>
                <h5 className="result">
                  {coverage?.memberStatus
                    ? `${coverage.memberStatus[0]}${coverage.memberStatus.slice(1).toLowerCase()}`
                    : '--'}
                </h5>
              </div>
              <div className="details">
                <h5 className="title">Company Name:</h5>
                <h5 className="result">{coverage?.companyName || '--'}</h5>
              </div>
              <div className="details">
                <h5 className="title">Company Address:</h5>
                <h5 className="result">{coverage?.companyAddress || '--'}</h5>
              </div>
            </div>

            <div className="dependent">
              <h3>Dependent</h3>
              <div className="details">
                <h5 className="title">Name:</h5>
                <h5 className="result">
                  {dependent?.firstName || '-'} {dependent?.lastName || '-'}
                </h5>
              </div>
              <div className="details">
                <h5 className="title">Gender:</h5>
                <h5 className="result">{dependent?.gender || '--'}</h5>
              </div>
              <div className="details">
                <h5 className="title">Date Of Birth:</h5>
                <h5 className="result">
                  {dependent?.dateOfBirth
                    ? new Date(dependent?.dateOfBirth).toLocaleDateString()
                    : '--'}
                </h5>
              </div>
              <div className="details">
                <h5 className="title">Blood Group:</h5>
                <h5 className="result">{dependent?.bloodGroup || '--'}</h5>
              </div>
              <div className="details">
                <h5 className="title">Relationship:</h5>
                <h5 className="result">{dependent?.relationship || '--'}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="patient-hospital-record">
            <div className="card">
              <div className="title">
                <div className="icon" style={{ backgroundColor: '#9FE295' }}>
                  <AllergyIcon color={colors.black} />
                </div>
                <h3>PATIENT ALLERGIES</h3>
              </div>
              <div className="contents">
                {data?.userOverView?.allergies.map((allergy, i) => (
                  <>
                    <div className="content" key={i}>
                      <h5 className="title">Occurence Date & Time</h5>
                      <h5 className="result">
                        {allergy.occurenceDate
                          ? new Date(allergy.occurenceDate).toLocaleDateString()
                          : '--'}
                      </h5>
                    </div>
                    <div className="content">
                      <h5 className="title">Allergy Type</h5>
                      <h5 className="result">
                        {Array.isArray(allergy.details) ? allergy?.details?.[0].type : '--'}
                      </h5>
                    </div>
                    <div className="content">
                      <h5 className="title">Trigger</h5>
                      <h5 className="result">
                        {Array.isArray(allergy.details) ? allergy?.details?.[0].trigger : '--'}
                      </h5>
                    </div>
                    <div className="content">
                      <h5 className="title">Reactions</h5>
                      <h5 className="result">
                        {Array.isArray(allergy.details)
                          ? allergy?.details[0]?.reactions.join(', ')
                          : '--'}
                      </h5>
                    </div>
                  </>
                ))}
              </div>
            </div>
            {patientHospitalRecord.slice(1).map(({ icon: Icon, title, table, theme }, i) => (
              <div className="card" key={i}>
                <div className="title">
                  <div className="icon" style={{ backgroundColor: theme }}>
                    <Icon color={colors.black} />
                  </div>
                  <h3>{title}</h3>
                </div>
                <div className="contents">
                  {Object.keys(table).map((data, i) => (
                    <div className="content" key={i}>
                      <h5 className="title">{data}</h5>
                      <h5 className="result">{table[`${data}`] || '--'}</h5>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Overview;
