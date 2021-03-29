import AddressInput from 'dashboard-app/common/AddressInput';
import BadgeInput from 'dashboard-app/common/BadgeInput';
import Divider from 'dashboard-app/common/Divider';
import Dropdown from 'dashboard-app/common/Dropdown';
import DurationInput from 'dashboard-app/common/DurationInput';
import IcdInput from 'dashboard-app/common/IcdInput';
import MultiAction from 'dashboard-app/common/MultiActions';
import MultiGroupAction from 'dashboard-app/common/MultiGroupActions';
import Prompter from 'dashboard-app/common/Prompter';
import RecordHistory from 'dashboard-app/common/RecordHistory';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import { Content, ContentWrapper, InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import { SPECIALTY_OPTIONS } from 'dashboard-app/utils/constants';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { PastEncounter } from 'graphql-types/PastEncounter';
import useUpdateProfile from 'hooks/useUpdateProfile';
import React, { Fragment } from 'react';
import DatePicker from '../common/DatePicker';
import { HEALTH_INITIAL_VALUES_MAPPER } from './constants';

const EncounterForm = ({ input, index }) => {
  const {
    handleInputChange,
    handleMultipleFieldsChange,
    readOnly,
    updateAction,
    deleteProfileInfo,
    disabled,
    toggle,
    showDeleteModal,
    toggleAllowEdit,
    inputs,
  } = useUpdateProfile({ input, index, tab: 'Past Encounters' });

  return (
    <Content padded key={`past-encounter${index}`}>
      {inputs?.details?.map((field, i) => (
        <Fragment key={field?.id}>
          <InputRow>
            <SelectWrapper padded>
              <DatePicker
                label="Diagnosis Date and Time"
                withBorderRadius
                onChange={(diagnosedDate) =>
                  !readOnly
                    ? handleMultipleFieldsChange('details', 'diagnosisDate', diagnosedDate, i)
                    : null
                }
                value={field.diagnosisDate}
                placeholderText="Select Date and Time"
                readOnly={readOnly}
                isRequired
              />
            </SelectWrapper>

            <SelectWrapper padded>
              <DurationInput
                title="Duration (YY:MM:DD)"
                onChange={(value) => handleMultipleFieldsChange('details', 'duration', value, i)}
                durationValue={field.duration}
                readOnly={readOnly}
                isYear
              />
            </SelectWrapper>
          </InputRow>
          <IcdInput
            handleInputChange={(fieldPath, value) =>
              handleMultipleFieldsChange('details', fieldPath, value, i)
            }
            readOnly={readOnly}
            fieldPath="diagnosis"
            placeholder="Enter Diagnosis"
            value={field.diagnosis}
            label="Diagnosis"
            isRequired
          />
          <InputRow>
            <SelectWrapper>
              <TextInput
                fullWidth
                name="disgnosedBy"
                title="Diagnosed By"
                onChange={({ target: { value } }) =>
                  handleMultipleFieldsChange('details', 'diagnosedBy', value, i)
                }
                value={field.diagnosedBy}
                placeholder="Enter Doctor's Name"
                readOnly={readOnly}
              />
            </SelectWrapper>
            <SelectWrapper>
              <Dropdown
                title="Specialty"
                options={SPECIALTY_OPTIONS}
                placeholder="Enter Specialty"
                readOnly={readOnly}
                onChange={({ value }) =>
                  handleMultipleFieldsChange('details', 'specialty', value, i)
                }
                value={field.specialty}
                creatable
              />
            </SelectWrapper>
          </InputRow>
          <BadgeInput
            fullWidth
            title="Symptoms"
            readOnly={readOnly}
            name="symptom"
            placeholder="Enter Symptom and Press Enter or Comma"
            onChange={(newSymptoms) =>
              handleMultipleFieldsChange('details', 'symptoms', newSymptoms, i)
            }
            values={field.symptoms || []}
            isRequired
          />
          <SelectWrapper fullWidth padded>
            <Divider />
          </SelectWrapper>
          {!readOnly && (
            <MultiGroupAction
              items={inputs.details}
              index={i}
              initialItem={HEALTH_INITIAL_VALUES_MAPPER['Past Encounters'].fields[0]}
              onClick={(value) => handleInputChange('details', value)}
            />
          )}
        </Fragment>
      ))}
      <TextInput
        fullWidth
        name="hospitalName"
        title="Hospital Name"
        onChange={({ target: { value } }) => handleInputChange('clinicName', value)}
        value={inputs.clinicName}
        placeholder="Enter Hospital Name"
        readOnly={readOnly}
      />
      <AddressInput
        label="Hospital Address"
        fieldPath="clinicAddress"
        readOnly={readOnly}
        handleInputChange={(fieldPath, value) => handleInputChange(fieldPath, value)}
        value={inputs.clinicAddress}
        placeholder="Enter Hospital Address"
      />
      <InputRow>
        <SelectWrapper fullWidth>
          <TextArea
            name="additionalNote"
            label="Additional Note"
            readOnly={readOnly}
            fullWidth
            onChange={({ target: { value } }) => handleInputChange('additionalNote', value)}
            value={inputs.additionalNote}
          />
        </SelectWrapper>
      </InputRow>
      <div className="medication-dispense-action-row parent">
        <div>
          {index !== 0 && (
            <InputRow>
              <RecordHistory
                createdBy={inputs?.createdBy?.fullName}
                createdDate={inputs?.createdDate}
                updatedBy={inputs?.updatedBy?.fullName}
                updatedDate={inputs?.updatedDate}
                className="padded"
              />
            </InputRow>
          )}
        </div>
        <div className="audit-section">
          <MultiAction
            field="health"
            index={index}
            readOnly={readOnly}
            updateAction={updateAction}
            disabled={disabled || !fieldsAreValid('pastEncounters', inputs.details, true)}
            deleteAction={toggle}
            toggleAllowEdit={toggleAllowEdit}
          />
        </div>
      </div>
      <Modal
        modalContent={
          <Prompter
            text="Are you sure you want to delete this record?"
            actionText="Delete"
            deleteAction={deleteProfileInfo}
            cancelAction={toggle}
            disabled={disabled}
          />
        }
        isShown={showDeleteModal}
        hide={toggle}
        handleDone={() => {}}
        isAuthentication
      />
    </Content>
  );
};

const PastEncounters = ({ data }) => (
  <ContentWrapper noTopPadding>
    {data.map((input: PastEncounter, index: number) => (
      <EncounterForm input={input} index={index} key={input?.id} />
    ))}
  </ContentWrapper>
);

export default PastEncounters;
