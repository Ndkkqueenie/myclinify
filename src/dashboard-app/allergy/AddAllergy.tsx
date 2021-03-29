import { setTitle } from 'apollo/operations';
import ActionSectionSectionWithAuditDetails from 'dashboard-app/common/ActionSectionWithAuditDetails';
import AddressInput from 'dashboard-app/common/AddressInput';
import BadgeInput from 'dashboard-app/common/BadgeInput';
import Divider from 'dashboard-app/common/Divider';
import DocumentAttacher from 'dashboard-app/common/DocumentAttacher';
import Dropdown from 'dashboard-app/common/Dropdown';
import DurationInput from 'dashboard-app/common/DurationInput';
import FormAction from 'dashboard-app/common/FormActions';
import { RecordForm } from 'dashboard-app/common/FormWrapper';
import LoaderOrError from 'dashboard-app/common/LoaderOrError';
import MultiGroupAction from 'dashboard-app/common/MultiGroupActions';
import Prompter from 'dashboard-app/common/Prompter';
import RecordHistory from 'dashboard-app/common/RecordHistory';
import RecordLinker from 'dashboard-app/common/RecordLinker';
import SeverenessInput from 'dashboard-app/common/SeverenessInput';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import { InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import {
  ADD_PATIENT_ALLERGY,
  DELETE_PATIENT_ALLERGY,
  GET_PATIENT_ALLERGY,
  GET_PATIENT_ALLERGY_LIST,
  UPDATE_PATIENT_ALLERGY,
} from 'dashboard-app/queries/allergy';
import { ALLERGY_OPTIONS } from 'dashboard-app/utils/constants';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { NewAllergyInput, SevereType, UserType } from 'graphql-types/globalTypes';
import useAddForm from 'hooks/useAddForm';
import React from 'react';
import DatePicker from '../common/DatePicker';

export interface AddAllergyProps {
  filterOptions: any;
  userType?: UserType;
  hideLayout?: boolean;
  showTopNav?: boolean;
  noMargin?: boolean;
  fullWidth?: boolean;
  useWhiteBackground?: boolean;
  noTopPadding?: boolean;
  isOnModal?: boolean;
  defaultId?: string;
}

export const AddAllergy: React.FC<AddAllergyProps> = ({ filterOptions, isOnModal, defaultId }) => {
  const singleField = { type: '', trigger: '', reactions: [], severeness: 'Mild' as SevereType };
  const initialState: NewAllergyInput = {
    occurenceDate: null,
    duration: null,
    details: [singleField],
    hospitalName: '',
    hospitalAddress: '',
    additionalNote: '',
    clinifyId: '',
    documentUrl: [],
    medications: [],
  };

  const fetchQuery = GET_PATIENT_ALLERGY;
  const addQuery = ADD_PATIENT_ALLERGY;
  const updateQuery = UPDATE_PATIENT_ALLERGY;
  const deleteQuery = DELETE_PATIENT_ALLERGY;
  const cacheUpdateQuery = GET_PATIENT_ALLERGY_LIST;
  const icon = 'Allergy';
  const defaultIsEdit = !isOnModal;
  const pluralRecordType = 'allergies';
  const params = {
    initialState,
    fetchQuery,
    addQuery,
    updateQuery,
    deleteQuery,
    cacheUpdateQuery,
    icon,
    filterOptions,
    defaultIsEdit,
    pluralRecordType,
    defaultId,
  };

  const {
    writeAllowed,
    isEdit,
    startEdit,
    setStartEdit,
    handleInputChange,
    handleMultipleFieldsChange,
    inputs,
    actionText,
    action,
    readOnly,
    id,
    disableActionButton,
    deleteRecordAction,
    fetchingData,
    errorFetching,
    showModalPrompt,
    toggle,
  } = useAddForm(params);

  React.useEffect(() => (isOnModal ? undefined : setTitle(`${isEdit ? '' : 'Add'} Allergy`)), []);

  if (fetchingData || errorFetching) {
    return <LoaderOrError loading={fetchingData} />;
  }

  return (
    <RecordForm>
      <InputRow>
        <SelectWrapper padded>
          <DatePicker
            label="Occurrence Date and Time"
            withBorderRadius
            onChange={(date) => (writeAllowed ? handleInputChange('occurenceDate', date) : null)}
            value={inputs.occurenceDate}
            readOnly={readOnly}
          />
        </SelectWrapper>
        <SelectWrapper padded>
          <DurationInput
            title="Duration (YY:MM:DD)"
            onChange={(duration) => handleInputChange('duration', duration)}
            readOnly={readOnly}
            durationValue={inputs.duration}
            isYear
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        {inputs.details.map((val, idx) => (
          <InputRow key={`allergy-fields-${idx}`}>
            <SelectWrapper>
              <Dropdown
                title="Allergy Type"
                options={ALLERGY_OPTIONS}
                onChange={({ value }) =>
                  writeAllowed ? handleMultipleFieldsChange('details', 'type', value, idx) : null
                }
                value={val.type}
                placeholder="Enter Allergy Type"
                readOnly={readOnly}
                isRequired
                creatable
              />
            </SelectWrapper>
            <TextInput
              name="trigger"
              title="Trigger"
              onChange={({ target: { value } }) =>
                handleMultipleFieldsChange('details', 'trigger', value, idx)
              }
              value={val.trigger}
              readOnly={readOnly}
              placeholder="Enter Trigger"
              isRequired
            />
            <BadgeInput
              fullWidth
              title="Reactions"
              readOnly={readOnly}
              name="reaction"
              placeholder="Enter Reaction and Press Enter or Comma"
              isRequired
              onChange={(newReactions) =>
                handleMultipleFieldsChange('details', 'reactions', newReactions, idx)
              }
              values={val.reactions || []}
            />
            <SelectWrapper padded>
              <SeverenessInput
                name="severeness"
                readOnly={readOnly}
                onChange={({ target: { value } }) =>
                  handleMultipleFieldsChange('details', 'severeness', value, idx)
                }
                value={val.severeness?.toString()}
              />
            </SelectWrapper>
            <SelectWrapper fullWidth padded>
              <Divider />
            </SelectWrapper>
            {!readOnly && (
              <MultiGroupAction
                items={inputs.details}
                index={idx}
                initialItem={singleField}
                onClick={(value) => {
                  handleInputChange('details', value);
                }}
              />
            )}
          </InputRow>
        ))}
      </InputRow>

      <TextInput
        name="hospitalName"
        title="Hospital Name"
        onChange={({ target: { value } }) => handleInputChange('hospitalName', value)}
        value={inputs.hospitalName}
        readOnly={readOnly}
        placeholder="Enter Hospital Name"
        fullWidth
      />
      <AddressInput
        fieldPath="hospitalAddress"
        label="Hospital Address"
        handleInputChange={handleInputChange}
        value={inputs.hospitalAddress}
        readOnly={readOnly}
        placeholder="Enter Hospital Address"
      />

      <InputRow>
        <SelectWrapper fullWidth>
          <TextArea
            name="additionalNote"
            label="Additional Note"
            fullWidth
            readOnly={readOnly}
            onChange={({ target: { value } }) => handleInputChange('additionalNote', value)}
            value={inputs.additionalNote}
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <DocumentAttacher
          documents={inputs.documentUrl}
          handleInputChange={handleInputChange}
          readOnly={readOnly}
          type="allergy"
        />
      </InputRow>

      <InputRow>
        <RecordLinker
          options={['Medication']}
          initialData={inputs}
          readOnly={readOnly}
          handleInputChange={handleInputChange}
        />
      </InputRow>

      <ActionSectionSectionWithAuditDetails
        isEdit={isEdit}
        isEditActive={startEdit}
        toggle={toggle}
        cancelAction={() => setStartEdit(false)}
        disableActionButton={
          disableActionButton || !fieldsAreValid('allergyfields', inputs.details, true)
        }
        onAction={() => action()}
        actionText={actionText}
        inputs={inputs}
      />

      <Modal
        modalContent={
          <Prompter
            text="Are you sure you want to delete this record?"
            actionText="Delete"
            deleteAction={() => deleteRecordAction([id])}
            cancelAction={toggle}
            disabled={disableActionButton}
          />
        }
        isShown={showModalPrompt}
        hide={toggle}
        handleDone={() => {}}
        isAuthentication
      />
    </RecordForm>
  );
};

export default AddAllergy;
