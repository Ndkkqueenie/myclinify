export const HEALTH_INITIAL_VALUES_MAPPER = {
  'Pre-existing Condition': {
    condition: '',
    diagnosedDate: null,
    duration: null,
    additionalNote: '',
  },
  'Social History': {
    socialHabit: null,
    level: null,
    duration: null,
    additionalNote: '',
  },
  'Physical Activity': {
    type: 'Aerobic/Endurance',
    name: null,
    additionalNote: '',
  },
  Disability: {
    type: null,
    disability: 'Hearing Impairment',
    additionalNote: '',
  },
  'Family History': {
    firstName: '',
    middleName: '',
    lastName: '',
    relationship: null,
    condition: [],
    additionalNote: '',
  },
  'Past Surgical History': {
    type: null,
    operationDate: null,
    additionalNote: '',
  },
  'Obstetric History': {
    lastBirth: null,
    childrenCount: null,
    additionalNote: '',
  },
  'Gynecologic History': {
    firstMenstrualAge: null,
    menstrualCycleLength: null,
    menstrualFlowDuration: null,
    lastMenstrualPeriod: null,
    menstrualFlow: null,
    contraceptiveUse: null,
    contraceptiveType: null,
    miscarriageOrAbortion: null,
    miscarriageOrAbortionCount: 0,
    additionalNote: '',
  },
  'Past Encounters': {
    fields: [
      {
        diagnosisDate: null,
        duration: null,
        diagnosis: '',
        diagnosedBy: '',
        specialty: null,
        symptoms: [],
      },
    ],
    clinicName: '',
    clinicAddress: '',
    additionalNote: '',
  },
};
