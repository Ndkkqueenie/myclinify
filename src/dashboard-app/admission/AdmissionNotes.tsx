import TextArea from 'dashboard-app/common/TextArea';
import { SelectWrapper } from 'dashboard-app/common/Wrapper';
import { AdmissionNoteInput } from 'graphql-types/globalTypes';
import React from 'react';

export interface AdmissionNotesProps {
  readOnly?: boolean;
  onChange: (name, value) => void;
  input?: AdmissionNoteInput;
  handleInputChange: (field: string, name: string, value: any, index: number) => void;
  index: number;
}

const profileMapper = {
  Doctor: ['admissionNotes', 'note', "Doctor's note"],
  OrganizationNurse: ['nurseAdmissionNotes', 'note', "Nurse's note"],
};

const AdmissionNote = ({ input, handleInputChange, index, readOnly }) => {
  const [field, path, label] = profileMapper[input.creatorProfileType];

  return (
    <SelectWrapper fullWidth>
      <TextArea
        name="findings"
        label={label}
        fullWidth
        onChange={({ target: { value } }) => handleInputChange(field, path, value, index)}
        value={input[path]}
        readOnly={readOnly}
      />
    </SelectWrapper>
  );
};

export default AdmissionNote;
