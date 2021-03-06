export const VITAL_INITIAL_VALUES = {
  anthropometry: {
    height: null,
    heightUnit: 'cm',
    weight: null,
    weightUnit: 'kg',
    hipCircumference: null,
    hipCircumferenceUnit: 'cm',
    waistCircumference: null,
    waistCircumferenceUnit: 'cm',
    skinfoldThickness: null,
    skinfoldThicknessUnit: 'cm',
    leftUpperLimbCircumference: null,
    rightUpperLimbCircumference: null,
    upperLimbCircumferenceUnit: 'cm',
    leftLowerLimbCircumference: null,
    rightLowerLimbCircumference: null,
    lowerLimbCircumferenceUnit: 'cm',
    abdominalGirth: null,
    abdominalGirthUnit: 'cm',
    readingDateTime: null,
    additionalNote: '',
  },
  bloodGlucose: {
    reading: null,
    readingUnit: 'mmol/L',
    mealTime: null,
    readingDateTime: null,
    additionalNote: '',
  },
  bloodPressure: {
    meanArterialPressure: null,
    diastolic: null,
    systolic: null,
    readingDateTime: null,
    additionalNote: '',
  },
  pulseRate: {
    reading: null,
    checkMethod: null,
    rhythm: null,
    readingDateTime: null,
    additionalNote: '',
  },
  respiratoryRate: {
    reading: null,
    oxygenSaturation: null,
    rhythm: null,
    readingDateTime: null,
    additionalNote: '',
  },
  temperature: {
    reading: null,
    readingUnit: 'ºC',
    checkMethod: null,
    checkMethodSpecify: '',
    readingDateTime: null,
    additionalNote: '',
  },
  urineDipstick: {
    blood: null,
    glucose: null,
    ketones: null,
    ph: null,
    protein: null,
    nitrites: null,
    leucocyte: null,
    urobilinogen: null,
    readingDateTime: null,
    additionalNote: '',
  },
  visualAcuity: {
    withGlassesLeft: '',
    withGlassesRight: '',
    withoutGlassesLeft: '',
    withoutGlassesRight: '',
    readingDateTime: null,
    additionalNote: '',
  },
};

export const initialStateOnCreate = {
  hospitalAddress: '',
  hospitalName: '',
  anthropometry: [VITAL_INITIAL_VALUES.anthropometry],
  bloodGlucose: [VITAL_INITIAL_VALUES.bloodGlucose],
  bloodPressure: [VITAL_INITIAL_VALUES.bloodPressure],
  pulseRate: [VITAL_INITIAL_VALUES.pulseRate],
  respiratoryRate: [VITAL_INITIAL_VALUES.respiratoryRate],
  temperature: [VITAL_INITIAL_VALUES.temperature],
  visualAcuity: [VITAL_INITIAL_VALUES.visualAcuity],
  urineDipstick: [VITAL_INITIAL_VALUES.urineDipstick],
  documentUrl: [],
};
