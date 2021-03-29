const fieldsToValidateMapper = {
  admission: ['admissionDate', 'clinicName'],
  allergyfields: ['type', 'trigger', 'reactions'],
  appointment: ['appointmentDateTime', 'facilityName'],
  consultation: ['priority', 'doctorName', 'provisionalDiagnosis'],
  immunization: ['administeredDate', 'immunizationName'],
  labtest: ['patientType', 'result', 'requestType'],
  testInfo: ['testName'],
  medicationdetails: ['medicationName', 'purpose'],
  radiology: ['requestType', 'patientType', 'examType'],
  surgery: ['type', 'operatedBy', 'specialty'],
  preexistingcondition: ['condition', 'diagnosedDate'],
  pastsurgery: ['type', 'operationDate'],
  gynecologichistory: ['menstrualFlowDuration', 'menstrualFlow'],
  obstetrichistory: ['childrenCount', 'lastBirth'],
  familyhistory: ['relationship', 'condition'],
  socialhistory: ['socialHabit', 'level'],
  physicalactivity: ['type', 'name'],
  disability: ['disability', 'type'],
  pastencounters: ['diagnosisDate', 'diagnosis', 'symptoms'],
  bloodglucose: ['reading'],
  bloodpressure: ['systolic', 'diastolic'],
  pulserate: ['reading'],
  respiratoryrate: ['reading'],
  coverage: ['hmoProvider', 'memberStatus'],
  nextofkin: ['firstName', 'lastName', 'relationship'],
  dependents: ['firstName', 'lastName', 'relationship'],
  temperature: ['reading'],
  updatedispensedetails: ['dispenseNote'],
  updatedischargepatient: ['dischargeSummary'],
};

const validator = (form: string, inputs: { [key: string]: any }) => {
  const fieldsToValidate = fieldsToValidateMapper[form.toLowerCase()];
  let validated = false;
  if (!inputs) return validated;
  if (!fieldsToValidate) {
    const allInputs = Object.values(inputs);
    allInputs.forEach((input) => {
      if (input && input.length > 0) validated = true;
    });
  }

  if (fieldsToValidate) {
    let counter = 0;
    fieldsToValidate.forEach((field) => {
      if (
        (!!inputs[field] && inputs[field].length > 0) ||
        (typeof inputs[field] === 'number' && !Number.isNaN(inputs[field]))
      )
        counter += 1;
    });
    if (counter === fieldsToValidate.length) validated = true;
  }

  return validated;
};

export default (form: string, inputs: any, multi = false) => {
  if (form === 'Allergy' || form === 'Vital') return true;
  if (!multi) return validator(form, inputs);
  let multiIsValid = true;
  inputs.forEach((input) => {
    const result = validator(form, input);
    if (!result) multiIsValid = false;
  });

  return multiIsValid;
};
