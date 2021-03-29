import AddAdmission from 'dashboard-app/admission/AddAdmission';
import AdmissionList from 'dashboard-app/admission/AdmissionList';
import AllergyList from 'dashboard-app/allergy/AllergyList';
import AddConsultation from 'dashboard-app/consultation/AddConsultation';
import ConsultationList from 'dashboard-app/consultation/ConsultationList';
import AddImmunization from 'dashboard-app/immunization/AddImmunization';
import ImmunizationList from 'dashboard-app/immunization/ImmunizationList';
import AddLabResult from 'dashboard-app/laboratory/AddLabResult';
import LabResultList from 'dashboard-app/laboratory/LabResultList';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import AddMedication from 'dashboard-app/medication/AddMedication';
import MedicationList from 'dashboard-app/medication/MedicationList';
import { FETCH_ADMISSIONS } from 'dashboard-app/queries/admission';
import { GET_PATIENT_ALLERGY_LIST } from 'dashboard-app/queries/allergy';
import { FETCH_PATIENT_CONSULTATIONS } from 'dashboard-app/queries/consultation';
import { GET_IMMUNIZATIONS } from 'dashboard-app/queries/immunization';
import { GET_PATIENT_LAB_TEST_LIST } from 'dashboard-app/queries/lab-test';
import { GET_PATIENT_MEDICATION_LIST } from 'dashboard-app/queries/medication';
import { GET_PATIENT_RADIOLOGY_LIST } from 'dashboard-app/queries/radiology';
import { GET_PATIENT_SURGERY_LIST } from 'dashboard-app/queries/surgery';
import { GET_PATIENT_VITAL_SIGNS_LIST } from 'dashboard-app/queries/vital-signs';
import AddRadiology from 'dashboard-app/radiology/AddRadiology';
import RadiologyList from 'dashboard-app/radiology/RadiologyList';
import AddSurgery from 'dashboard-app/surgery/AddSurgery';
import SurgeryList from 'dashboard-app/surgery/SurgeryList';
import { FILTER_INPUT } from 'dashboard-app/utils/constants';
import AddVitalSigns from 'dashboard-app/vital-signs/AddVitalSigns';
import VitalSignList from 'dashboard-app/vital-signs/VitalSignList';
import { AdmissionInput, MedicationInput, UserType } from 'graphql-types/globalTypes';
import useListPageFilterOptions from 'hooks/useListPageFilterOptions';
import useRecordsLinker from 'hooks/useRecordsLinker';
import React from 'react';
import AddAllergy from '../allergy/AddAllergy';
import colors from '../utils/colors';
import { OutlineButton } from './Button';
import PlusIcon from './icons/PlusIcon';

export type RecordOptions =
  | 'Medication'
  | 'Admission'
  | 'Vital Signs'
  | 'Appointment'
  | 'Radiology Exam'
  | 'Surgery'
  | 'Procedure'
  | 'Immunization'
  | 'Appointment'
  | 'Lab Test'
  | 'Consultation'
  | 'Allergy';

interface RecordLinkerProps {
  options: RecordOptions[];
  handleInputChange: (field: string, value: string | string[]) => void;
  initialData: MedicationInput | AdmissionInput;
  readOnly?: boolean;
}

const recordLinkerParams = {
  Medication: {
    addComponent: AddMedication,
    listComponent: MedicationList,
    fetchQuery: GET_PATIENT_MEDICATION_LIST,
    listPath: 'user.medications',
    linkPath: 'medications',
  },
  Admission: {
    addComponent: AddAdmission,
    listComponent: AdmissionList,
    fetchQuery: FETCH_ADMISSIONS,
    listPath: 'user.admissions',
    linkPath: 'admissions',
  },
  'Vital Signs': {
    addComponent: AddVitalSigns,
    listComponent: VitalSignList,
    fetchQuery: GET_PATIENT_VITAL_SIGNS_LIST,
    listPath: 'user.vitals',
    linkPath: 'vitals',
  },
  'Radiology Exam': {
    addComponent: AddRadiology,
    listComponent: RadiologyList,
    fetchQuery: GET_PATIENT_RADIOLOGY_LIST,
    listPath: 'user.radiology',
    linkPath: 'radiology',
  },
  Procedure: {
    addComponent: AddSurgery,
    listComponent: SurgeryList,
    fetchQuery: GET_PATIENT_SURGERY_LIST,
    listPath: 'user.surgeries',
    linkPath: 'surgeries',
  },
  Immunization: {
    addComponent: AddImmunization,
    listComponent: ImmunizationList,
    fetchQuery: GET_IMMUNIZATIONS,
    listPath: 'user.immunizations',
    linkPath: 'immunizations',
  },
  'Lab Test': {
    addComponent: AddLabResult,
    listComponent: LabResultList,
    fetchQuery: GET_PATIENT_LAB_TEST_LIST,
    listPath: 'user.lab_tests',
    linkPath: 'labTests',
  },
  Consultation: {
    addComponent: AddConsultation,
    listComponent: ConsultationList,
    fetchQuery: FETCH_PATIENT_CONSULTATIONS,
    listPath: 'user.consultations',
    linkPath: 'consultations',
  },
  Allergy: {
    addComponent: AddAllergy,
    listComponent: AllergyList,
    fetchQuery: GET_PATIENT_ALLERGY_LIST,
    listPath: 'user.allergies',
    linkPath: 'allergies',
  },
};

const RecordLinker: React.FC<RecordLinkerProps> = ({
  options,
  initialData,
  handleInputChange,
  readOnly,
}) => {
  const {
    selectedRecordType,
    showModal,
    showList,
    initialiseModal,
    setShowList,
    closeModal,
    selectRecord,
    selectedRecords,
    recordToView,
    setRecordToView,
  } = useRecordsLinker(options, handleInputChange);

  const { listComponent, addComponent, fetchQuery, listPath, linkPath } = recordLinkerParams[
    selectedRecordType
  ];

  const filterOptions = FILTER_INPUT;

  const toggleContent = (id?: string) => {
    setShowList(!showList);
    setRecordToView(id || 'add');
  };

  const addFormParams = {
    isOnModal: true,
    readOnly,
    recordsToView: selectedRecords,
    toggleContent,
    isOnForm: false,
  };

  const listPageHook = useListPageFilterOptions(
    fetchQuery,
    listPath,
    {},
    filterOptions,
    addFormParams,
  );

  // TODO: The Add Allergy from the mapper sometimes resolve to undefined for some
  // unknown reason for now. hence the || clause in. added to investigation list.
  const ModalContent = showList ? listComponent : addComponent || AddAllergy;

  const highlightIcon = (option) => {
    const setValues = initialData[recordLinkerParams[option].linkPath];
    if (setValues) return setValues.length > 0;
    return false;
  };

  return (
    <div
      className="record-linkers"
      style={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        padding: '12px 20px',
        justifyContent: 'space-between',
      }}
    >
      {options.map((option, idx) => {
        const newInitialData = initialData[recordLinkerParams[option].linkPath] || [];
        const allowRecordView = readOnly && newInitialData.length > 0;

        return (
          <div className="wrapper" style={{ marginBottom: '10px' }} key={`record-link-${idx}`}>
            <OutlineButton
              withWrapper
              inactive={!highlightIcon(option)}
              disabled={readOnly && newInitialData.length === 0}
              withIcon
              icon={
                <PlusIcon
                  size={16}
                  color={!highlightIcon(option) ? colors.pseudoAsh : colors.iceBlue}
                />
              }
              linkOptionWidth
              text={`${allowRecordView ? 'View' : 'Add'} ${option}`}
              onClick={() => initialiseModal(option, newInitialData || [])}
            />
          </div>
        );
      })}
      <Modal
        isShown={showModal}
        hide={() => closeModal()}
        headerText={`${readOnly ? 'View' : 'Add'} ${selectedRecordType}`}
        modalContent={
          <ModalContent
            listPageHook={listPageHook}
            filterOptions={listPageHook.filterOptions}
            setFilterOptions={listPageHook.setFilterOptions}
            userType={UserType.Patient}
            showSearchTab={false}
            showTopNav={false}
            noMargin
            fullWidth
            useWhiteBackground
            isOnModal
            noTopPadding
            noListPadding
            selectRecord={selectRecord}
            selectedRecords={selectedRecords}
            selectedRecordType={selectedRecordType}
            handleAddNew={toggleContent}
            readOnly={readOnly}
            defaultId={recordToView}
          />
        }
        selectedRecordType={selectedRecordType}
        showExtraActions
        isAddPage={!showList}
        handleDone={() => (showList ? closeModal(true, linkPath) : toggleContent())}
        addButtonText={`Add ${showList ? 'New' : ''} ${selectedRecordType}`}
        showAddNew={showList}
        handleAddNew={toggleContent}
      />
    </div>
  );
};

export default RecordLinker;
