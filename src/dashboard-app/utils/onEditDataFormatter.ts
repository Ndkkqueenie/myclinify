import { noteInitialValues, nurseNoteInitialValues } from 'dashboard-app/admission/constants';

const formatDataOnEdit = (data, initialState) => {
  if (data.dispenseDetails && !data.dispenseDetails.length) {
    data.dispenseDetails = initialState ? initialState.dispenseDetails : null;
  }

  if (data.admissionNotes) {
    const nurseNotes = data.admissionNotes.filter(
      (note) => note.creatorProfileType === 'OrganizationNurse',
    );
    const doctorsNotes = data.admissionNotes.filter(
      (note) => note.creatorProfileType !== 'OrganizationNurse',
    );
    data.admissionNotes = doctorsNotes.length ? doctorsNotes : [noteInitialValues];
    data.nurseAdmissionNotes = nurseNotes.length ? nurseNotes : [nurseNoteInitialValues];
  }

  if (!data.nurseAdmissionNotes) {
    data.nurseAdmissionNotes = initialState ? initialState.nurseAdmissionNotes : null;
  }

  Object.keys(data).forEach((path) => {
    if (!data[path]) data[path] = initialState ? initialState[path] : null;
  });

  return data;
};

export default formatDataOnEdit;
