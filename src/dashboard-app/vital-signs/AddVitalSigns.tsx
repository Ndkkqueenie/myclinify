import { useQuery } from '@apollo/client';
import { GET_APP_DATA, setTitle } from 'apollo/operations';
import ActionSectionSectionWithAuditDetails from 'dashboard-app/common/ActionSectionWithAuditDetails';
import AddressInput from 'dashboard-app/common/AddressInput';
import Button from 'dashboard-app/common/Button';
import Divider from 'dashboard-app/common/Divider';
import DocumentAttacher from 'dashboard-app/common/DocumentAttacher';
import { FormContent, RecordForm } from 'dashboard-app/common/FormWrapper';
import LoaderOrError from 'dashboard-app/common/LoaderOrError';
import Message from 'dashboard-app/common/Message';
import Prompter from 'dashboard-app/common/Prompter';
import Tab, { TabContent, TabWrapper } from 'dashboard-app/common/Tab';
import TextInput from 'dashboard-app/common/TextInput';
import { Content, InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import {
  ADD_VITAL_SIGNS,
  DELETE_VITAL_SIGNS,
  GET_PATIENT_VITAL_SIGNS_LIST,
  GET_VITAL_SIGN,
  UPDATE_VITAL_SIGNS,
} from 'dashboard-app/queries/vital-signs';
import colors from 'dashboard-app/utils/colors';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { UserType, VitalFilterInput, VitalType } from 'graphql-types/globalTypes';
import useAddForm from 'hooks/useAddForm';
import useFetchVitalSubRecord from 'hooks/useFetchVitalSubRecord';
import { nanoid } from 'nanoid';
import React, { Fragment, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import Anthropometry from './Anthropometry';
import BloodGlucose from './BloodGlucose';
import BloodPressure from './BloodPressure';
import { initialStateOnCreate, VITAL_INITIAL_VALUES } from './constants';
import MultiVitalFieldActions from './MultiVitalFieldActions';
import Pulse from './Pulse';
import RespiratoryRate from './RespiratoryRate';
import Temperature from './Temperature';
import UrineDipstick from './UrineDipstick';
import VisualAcuity from './VisualAcuity';

const VitalTabs = {
  Anthropometry: { view: Anthropometry, field: 'anthropometry' },
  'Blood Glucose': { view: BloodGlucose, field: 'bloodGlucose' },
  'Blood Pressure': { view: BloodPressure, field: 'bloodPressure' },
  'Pulse Rate': { view: Pulse, field: 'pulseRate' },
  'Respiratory Rate': { view: RespiratoryRate, field: 'respiratoryRate' },
  Temperature: { view: Temperature, field: 'temperature' },
  'Urine Dipstick': { view: UrineDipstick, field: 'urineDipstick' },
  'Visual Acuity': { view: VisualAcuity, field: 'visualAcuity' },
};

type TabNameType =
  | 'Anthropometry'
  | 'Blood Glucose'
  | 'Blood Pressure'
  | 'Pulse Rate'
  | 'Respiratory Rate'
  | 'Temperature'
  | 'Visual Acuity'
  | 'Urine Dipstick';

export interface AddVitalSignsProps {
  filterOptions: VitalFilterInput;
  setFilterOptions: React.Dispatch<React.SetStateAction<any>>;
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

export interface OnChangeProps {
  field: string;
  name?: string;
  value?: any;
  index?: number;
  isAdd?: boolean;
  isRemove?: boolean;
}

const AddVitalSigns: React.FC<AddVitalSignsProps> = ({ filterOptions, defaultId, isOnModal }) => {
  const fetchQuery = GET_VITAL_SIGN;
  const addQuery = ADD_VITAL_SIGNS;
  const updateQuery = UPDATE_VITAL_SIGNS;
  const deleteQuery = DELETE_VITAL_SIGNS;
  const cacheUpdateQuery = GET_PATIENT_VITAL_SIGNS_LIST;
  const icon = 'Vital';
  const initialState = initialStateOnCreate;

  const params = {
    initialState,
    fetchQuery,
    addQuery,
    updateQuery,
    deleteQuery,
    cacheUpdateQuery,
    icon,
    filterOptions,
    defaultId,
  };

  const {
    fetchingData,
    errorFetching,
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
    showModalPrompt,
    toggle,
    clinifyId,
  } = useAddForm(params);

  const [currentTab, setCurrentTab] = useState('Anthropometry');

  const TabComponent = VitalTabs[currentTab as VitalType]?.view;
  const section = VitalTabs[currentTab as VitalType]?.field;

  const defaultSubRecords = inputs[section] || [];
  const { vitalSubRecords, loading: fetchingSubRecords } = useFetchVitalSubRecord(
    currentTab,
    id,
    isEdit,
    defaultSubRecords,
  );

  const { hospitalName, hospitalAddress, documentUrl, additionalNote } = inputs;
  const inputsToSend = isEdit
    ? { hospitalAddress, hospitalName, documentUrl }
    : {
        ...inputs,
        anthropometry: inputs?.anthropometry.map((input) => ({
          ...input,
          height: parseFloat(input?.height),
          weight: parseFloat(input?.weight),
          waistCircumference: parseFloat(input?.waistCircumference),
          hipCircumference: parseFloat(input?.hipCircumference),
          skinfoldThickness: parseFloat(input?.skinfoldThickness),
          leftUpperLimbCircumference: parseFloat(input?.leftUpperLimbCircumference),
          rightUpperLimbCircumference: parseFloat(input?.rightUpperLimbCircumference),
        })),
      };

  const disableVitalActionButton =
    disableActionButton || isEdit
      ? false
      : !fieldsAreValid('temperature', inputs.temperature, true);

  const {
    data: {
      appData: { isMobile },
    },
  } = useQuery(GET_APP_DATA);

  React.useEffect(
    () => (isOnModal ? undefined : setTitle(`${isEdit ? '' : 'Add'} Vital Signs`)),
    [],
  );

  if (fetchingData || errorFetching) {
    return <LoaderOrError loading={fetchingData} />;
  }

  return (
    <Content detailsPage>
      <TabWrapper>
        <Tab
          isMobile={isMobile}
          isVisible
          items={Object.keys(VitalTabs)}
          activeItem={currentTab}
          tabClick={(tab) => setCurrentTab(tab)}
        />
        <TabContent isHeaderFixed>
          <RecordForm clear>
            <FormContent>
              {fetchingSubRecords ? (
                <Message>
                  <PulseLoader size={7} color={colors.darkBlue} />
                </Message>
              ) : (
                <>
                  {vitalSubRecords.map((input, i) => (
                    <Fragment key={isEdit ? input?.id || nanoid(10) : `${section}-${i}`}>
                      <TabComponent
                        isFirstUnsavedItem={i === 0 && !input?.id}
                        input={input}
                        tab={currentTab}
                        isEdit={isEdit}
                        parentRecordId={id}
                        defaultOnChange={(fieldPath, value) =>
                          handleMultipleFieldsChange(section, fieldPath, value, i)
                        }
                        remove={() => {}}
                        clinifyId={clinifyId}
                      />
                      <SelectWrapper fullWidth padded>
                        <Divider />
                      </SelectWrapper>
                      {!isEdit && (
                        <MultiVitalFieldActions
                          index={i}
                          count={inputs[section]?.length}
                          addForm={() =>
                            handleInputChange(section, [
                              ...inputs[section],
                              VITAL_INITIAL_VALUES[section],
                            ])
                          }
                          removeForm={() => {
                            const newForm = inputs[section].filter((_, index) => i !== index);
                            handleInputChange(section, newForm);
                          }}
                        />
                      )}
                    </Fragment>
                  ))}
                  {isEdit && (
                    <>
                      {inputs[section]?.map((input, i) => (
                        <Fragment key={nanoid(10)}>
                          <TabComponent
                            input={input}
                            tab={currentTab}
                            isEdit={isEdit}
                            parentRecordId={id}
                            defaultOnChange={(fieldPath, value) =>
                              handleMultipleFieldsChange(section, fieldPath, value, i)
                            }
                            remove={() => {
                              const newForm = inputs[section].filter((_, index) => i !== index);
                              handleInputChange(section, newForm);
                            }}
                            clinifyId={clinifyId}
                          />
                          <SelectWrapper fullWidth padded>
                            <Divider />
                          </SelectWrapper>
                        </Fragment>
                      ))}
                    </>
                  )}
                  {isEdit && (
                    <SelectWrapper padded>
                      <Button
                        text="Add"
                        onClick={() => {
                          const inputsToAdd = inputs[section]?.length ? inputs[section] : [];
                          handleInputChange(section, [
                            ...inputsToAdd,
                            VITAL_INITIAL_VALUES[section],
                          ]);
                        }}
                      />
                    </SelectWrapper>
                  )}
                </>
              )}
              <TextInput
                fullWidth
                name="hospitalName"
                title="Hospital Name"
                onChange={({ target: { value } }) => handleInputChange('hospitalName', value)}
                value={inputs?.hospitalName}
                readOnly={readOnly}
                placeholder="Enter Hospital Name"
              />
              <AddressInput
                fieldPath="hospitalAddress"
                label="Hospital Address"
                handleInputChange={handleInputChange}
                value={inputs?.hospitalAddress}
                readOnly={readOnly}
                placeholder="Enter Hospital Address"
              />
              <InputRow>
                <DocumentAttacher
                  documents={inputs?.documentUrl}
                  handleInputChange={handleInputChange}
                  readOnly={readOnly}
                  type="vital_signs"
                />
              </InputRow>
            </FormContent>
          </RecordForm>
        </TabContent>
        <ActionSectionSectionWithAuditDetails
          isEdit={isEdit}
          isEditActive={startEdit}
          toggle={toggle}
          cancelAction={() => setStartEdit(false)}
          disableActionButton={disableVitalActionButton}
          onAction={() => action(inputsToSend)}
          actionText={actionText}
          inputs={inputs}
        />
      </TabWrapper>
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
    </Content>
  );
};

export default AddVitalSigns;
