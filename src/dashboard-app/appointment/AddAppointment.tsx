import { useQuery } from '@apollo/client';
import { setTitle } from 'apollo/operations';
import ActionSectionSectionWithAuditDetails from 'dashboard-app/common/ActionSectionWithAuditDetails';
import AddressInput from 'dashboard-app/common/AddressInput';
import { OutlineIconButton } from 'dashboard-app/common/Button';
import CheckBox from 'dashboard-app/common/CheckBox';
import DatePicker from 'dashboard-app/common/DatePicker';
import DocumentAttacher from 'dashboard-app/common/DocumentAttacher';
import Dropdown from 'dashboard-app/common/Dropdown';
import DurationInput from 'dashboard-app/common/DurationInput';
import { FormContent, RecordForm } from 'dashboard-app/common/FormWrapper';
import CaretDown from 'dashboard-app/common/icons/CaretDown';
import CaretUp from 'dashboard-app/common/icons/CaretUp';
import ClearFilterIcon from 'dashboard-app/common/icons/ClearFilterIcon';
import LoaderOrError from 'dashboard-app/common/LoaderOrError';
import Prompter from 'dashboard-app/common/Prompter';
import SearchTab from 'dashboard-app/common/SearchTab';
import TextArea from 'dashboard-app/common/TextArea';
import TextInput from 'dashboard-app/common/TextInput';
import ToggleButton from 'dashboard-app/common/ToggleButton';
import {
  ContainerWrapper,
  DropdownWrapper,
  InputRow,
  SelectWrapper,
  ToggleRow,
} from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import {
  ADD_APPOINTMENT,
  DELETE_APPOINTMENT,
  FETCH_APPOINTMENT,
  FETCH_APPOINTMENTS,
  UPDATE_APPOINTMENT,
} from 'dashboard-app/queries/appointment';
import { GET_HOSPITALS } from 'dashboard-app/queries/hospital';
import {
  APPOINTMENT_TYPE_OPTIONS,
  CLASS_CONSULTATION_OPTIONS,
  FACILITY_LEVEL_OPTIONS,
  FACILITY_OWNERSHIP_OPTIONS,
  LGA_OPTIONS,
  SPECIALTY_OPTIONS,
  STATES_OPTIONS,
} from 'dashboard-app/utils/constants';
import {
  AppointmentFilterInput,
  AppointmentType,
  Currency,
  NewAppointmentInput,
} from 'graphql-types/globalTypes';
import useAddForm from 'hooks/useAddForm';
import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import './listOption.scss';

const frequencyOptions = ['Never', 'Daily', 'Weekend', 'Weekdays', 'Biweekly', 'Monthly', 'Yearly'];
const occurenceOptions = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

interface ListOptionProps {
  option: string;
  onChange: (value: string) => void;
  name: string;
  selectedOption: string;
}

const ListOption: React.FC<ListOptionProps> = ({ option, onChange, name, selectedOption }) => (
  <div className="list-option">
    <div className="wrapper">
      <div className="option">{option}</div>
      <div className="checkbox-section">
        <CheckBox
          id={option}
          color="iceBlue"
          name={name}
          checked={option === selectedOption}
          onChange={() => onChange(option)}
        />
      </div>
    </div>
  </div>
);

export interface AddAppointmentProps {
  filterOptions: AppointmentFilterInput;
}

const AddAppointment: React.FC<AddAppointmentProps> = ({ filterOptions }) => {
  const [showRepeat, setShowRepeat] = useState(false);
  const [showOccurence, setShowOccurence] = useState(false);
  const [showFrequency, setShowFrequency] = useState(false);

  const initialFilterOptions = {
    skip: 0,
    lga: null,
    state: null,
    keyword: '',
    level: null,
    ownership: null,
  };
  const [facilityFilterOptions, setFacilityFilterOptions] = useState(initialFilterOptions);

  const { data } = useQuery(GET_HOSPITALS, {
    variables: {
      filterOptions: facilityFilterOptions,
    },
  });

  let facilityOptions: { value: string; label: string; id: string }[] = [];
  if (data) {
    facilityOptions = data.hospitals.list.map(({ name, id }) => ({ value: id, label: name, id }));
  }

  const initialState: NewAppointmentInput = {
    facilityName: '',
    facilityAddress: '',
    appointmentDateTime: null,
    type: AppointmentType.Organization,
    guestClinifyId: '',
    reason: '',
    category: '',
    specialty: '',
    currency: Currency.KOBO,
    remindMe: false,
    reminderDateTime: null,
    reminderDuration: null,
    additionalNote: '',
    frequency: '',
    duration: null,
    documentUrl: [],
  };

  const fetchQuery = FETCH_APPOINTMENT;
  const addQuery = ADD_APPOINTMENT;
  const updateQuery = UPDATE_APPOINTMENT;
  const deleteQuery = DELETE_APPOINTMENT;
  const cacheUpdateQuery = FETCH_APPOINTMENTS;
  const icon = 'Appointment';
  const params = {
    initialState,
    fetchQuery,
    addQuery,
    updateQuery,
    deleteQuery,
    cacheUpdateQuery,
    icon,
    filterOptions,
  };

  const {
    writeAllowed,
    isEdit,
    startEdit,
    setStartEdit,
    handleInputChange,
    inputs,
    actionText,
    action,
    readOnly,
    id: recordId,
    disableActionButton,
    fetchingData,
    errorFetching,
    deleteRecordAction,
    showModalPrompt,
    toggle,
  } = useAddForm(params);

  React.useEffect(() => setTitle(`${isEdit ? '' : 'Add'} Appointment`), []);

  if (fetchingData || errorFetching) {
    return <LoaderOrError loading={fetchingData} />;
  }

  return (
    <div style={{ width: '100%' }}>
      <ContainerWrapper>
        <SearchTab isVitals addMarginBottom row>
          <DropdownWrapper>
            <Dropdown
              isNavbar
              options={STATES_OPTIONS}
              onChange={({ value }) =>
                writeAllowed
                  ? setFacilityFilterOptions({ ...facilityFilterOptions, state: value })
                  : null
              }
              readOnly={readOnly}
              placeholder="Select State"
              value={facilityFilterOptions.state}
              withoutIcon
              grey
              expanded
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Dropdown
              isNavbar
              options={LGA_OPTIONS}
              onChange={({ value }) =>
                writeAllowed
                  ? setFacilityFilterOptions({ ...facilityFilterOptions, lga: value })
                  : null
              }
              readOnly={readOnly}
              placeholder="Select LGA"
              value={facilityFilterOptions.lga}
              withoutIcon
              grey
              expanded
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Dropdown
              isNavbar
              options={FACILITY_LEVEL_OPTIONS}
              onChange={({ value }) =>
                writeAllowed
                  ? setFacilityFilterOptions({ ...facilityFilterOptions, level: value })
                  : null
              }
              readOnly={readOnly}
              placeholder="Select Facility Level"
              value={facilityFilterOptions.level}
              withoutIcon
              grey
              expanded
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Dropdown
              isNavbar
              options={FACILITY_OWNERSHIP_OPTIONS}
              onChange={({ value }) =>
                writeAllowed
                  ? setFacilityFilterOptions({ ...facilityFilterOptions, ownership: value })
                  : null
              }
              readOnly={readOnly}
              placeholder="Select Ownership"
              value={facilityFilterOptions.ownership}
              withoutIcon
              grey
              expanded
            />
          </DropdownWrapper>
          <div data-tip="Clear Filter" data-for="appointmentTip">
            <OutlineIconButton
              withIcon
              onClick={() => (writeAllowed ? setFacilityFilterOptions(initialFilterOptions) : null)}
              icon={<ClearFilterIcon />}
            />
          </div>
          <ReactTooltip
            id="appointmentTip"
            place="top"
            className="button-tooltip"
            type="light"
            effect="solid"
          />
        </SearchTab>
      </ContainerWrapper>
      <RecordForm clear>
        <FormContent>
          <InputRow>
            <SelectWrapper padded>
              <DatePicker
                label="Appointment Date and Time"
                withBorderRadius
                onChange={(date) =>
                  writeAllowed ? handleInputChange('appointmentDateTime', date) : null
                }
                value={inputs.appointmentDateTime}
                placeholderText="Select Date and Time"
                readOnly={readOnly}
                isRequired
              />
            </SelectWrapper>

            <SelectWrapper padded>
              <DurationInput
                title="Duration (HH:MM:SS)"
                onChange={(value) => handleInputChange('duration', value)}
                readOnly={readOnly}
                durationValue={inputs.duration}
              />
            </SelectWrapper>
          </InputRow>

          <Dropdown
            title="Facility Name"
            options={facilityOptions}
            onChange={({ label }) =>
              writeAllowed ? handleInputChange('facilityName', label) : null
            }
            readOnly={readOnly}
            value={inputs.facilityName}
            placeholder="Enter Facility Name"
            creatable
            isRequired
          />

          <AddressInput
            fieldPath="facilityAddress"
            label="Facility Address"
            handleInputChange={handleInputChange}
            value={inputs.facilityAddress}
            readOnly={readOnly}
            placeholder="Enter Facility Address"
          />

          <InputRow>
            <SelectWrapper>
              <Dropdown
                title="Category"
                options={APPOINTMENT_TYPE_OPTIONS}
                onChange={({ value }) =>
                  writeAllowed ? handleInputChange('category', value) : null
                }
                placeholder="Enter Category"
                readOnly={readOnly}
                value={inputs.category}
                creatable
              />
            </SelectWrapper>
            <SelectWrapper>
              <TextInput
                fullWidth
                name="doctorName"
                title="Doctor's Name"
                onChange={({ target: { value } }) => handleInputChange('doctorsName', value)}
                value={inputs.doctorsName}
                readOnly={readOnly}
                placeholder="Enter Doctor's Name"
              />
            </SelectWrapper>
            <SelectWrapper>
              <Dropdown
                title="Specialty"
                options={SPECIALTY_OPTIONS}
                onChange={({ value }) =>
                  writeAllowed ? handleInputChange('specialty', value) : null
                }
                placeholder="Enter Specialty"
                readOnly={readOnly}
                value={inputs.specialty}
                creatable
              />
            </SelectWrapper>
            <SelectWrapper>
              <Dropdown
                title="Rank"
                options={CLASS_CONSULTATION_OPTIONS}
                onChange={({ value }) => (writeAllowed ? handleInputChange('class', value) : null)}
                placeholder="Enter Rank"
                readOnly={readOnly}
                value={inputs.class}
                creatable
              />
            </SelectWrapper>
          </InputRow>

          <InputRow>
            <SelectWrapper fullWidth>
              <TextArea
                name="reason"
                label="Reason"
                fullWidth
                readOnly={readOnly}
                onChange={({ target: { value } }) => handleInputChange('reason', value)}
                value={inputs.reason}
              />
            </SelectWrapper>
          </InputRow>
        </FormContent>
        <div>
          <ToggleRow
            onClick={() => {
              setShowRepeat(!showRepeat);
            }}
          >
            <span className="action" style={{ fontWeight: 'bold' }}>
              Repeat
            </span>
            {!showRepeat && <CaretUp />}
            {showRepeat && <CaretDown />}
          </ToggleRow>
        </div>
        {showRepeat && (
          <FormContent>
            <ToggleRow
              onClick={() => {
                setShowFrequency(!showFrequency);
              }}
            >
              <span className="action">Frequency</span>
              {showFrequency ? <CaretDown /> : <CaretUp />}
            </ToggleRow>
            <div>
              {showFrequency &&
                frequencyOptions.map((frequency, idx) => (
                  <ListOption
                    key={`freq-opt-${idx}`}
                    option={frequency}
                    name="frequency"
                    onChange={() => handleInputChange('frequency', frequency)}
                    selectedOption={inputs.frequency}
                  />
                ))}
            </div>
            <ToggleRow
              onClick={() => {
                setShowOccurence(!showOccurence);
              }}
            >
              <span className="action">Occurence</span>
              {showOccurence ? <CaretDown /> : <CaretUp />}
            </ToggleRow>
            <div>
              {showOccurence &&
                occurenceOptions.map((occurence, idx) => (
                  <ListOption
                    key={`occ-opt-${idx}`}
                    option={occurence}
                    name="occurence"
                    onChange={() => handleInputChange('occurance', occurence)}
                    selectedOption={inputs.occurance}
                  />
                ))}
            </div>
          </FormContent>
        )}
        <div>
          <ToggleRow>
            <span className="action">Set Reminder</span>
            <ToggleButton
              onChange={() =>
                writeAllowed ? handleInputChange('remindMe', !inputs.remindMe) : null
              }
              defaultChecked={inputs.remindMe}
              readOnly={readOnly}
            />
          </ToggleRow>
        </div>
        <FormContent>
          {inputs.remindMe && (
            <InputRow>
              <SelectWrapper padded>
                <DatePicker
                  label="Date and Time"
                  withBorderRadius
                  onChange={(time) =>
                    writeAllowed ? handleInputChange('reminderDateTime', time) : null
                  }
                  placeholderText="Select Date and Time"
                  value={inputs.reminderDateTime}
                  readOnly={readOnly}
                />
              </SelectWrapper>
              <SelectWrapper padded>
                <DurationInput
                  title="Remind Me"
                  onChange={(value) => handleInputChange('reminderDuration', value)}
                  readOnly={readOnly}
                  durationValue={inputs.reminderDuration}
                />
              </SelectWrapper>
            </InputRow>
          )}

          <InputRow>
            <SelectWrapper fullWidth>
              <TextArea
                name="additionalNote"
                label="Additional Note"
                fullWidth
                onChange={({ target: { value } }) => handleInputChange('additionalNote', value)}
                value={inputs.additionalNote}
                readOnly={readOnly}
              />
            </SelectWrapper>
          </InputRow>

          <InputRow>
            <DocumentAttacher
              documents={inputs.documentUrl}
              handleInputChange={handleInputChange}
              readOnly={readOnly}
              type="appointment"
            />
          </InputRow>

          <ActionSectionSectionWithAuditDetails
            isEdit={isEdit}
            isEditActive={startEdit}
            toggle={toggle}
            cancelAction={() => setStartEdit(false)}
            disableActionButton={disableActionButton}
            onAction={() => action()}
            actionText={actionText}
            inputs={inputs}
          />
        </FormContent>
      </RecordForm>
      <Modal
        modalContent={
          <Prompter
            text="Are you sure you want to delete this record?"
            actionText="Delete"
            deleteAction={() => deleteRecordAction([recordId])}
            cancelAction={toggle}
            disabled={disableActionButton}
          />
        }
        isShown={showModalPrompt}
        hide={toggle}
        handleDone={() => {}}
        isAuthentication
      />
    </div>
  );
};

export default AddAppointment;
