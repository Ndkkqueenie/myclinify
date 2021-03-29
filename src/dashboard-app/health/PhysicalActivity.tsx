import Dropdown from 'dashboard-app/common/Dropdown';
import MultiAction from 'dashboard-app/common/MultiActions';
import Prompter from 'dashboard-app/common/Prompter';
import RecordHistory from 'dashboard-app/common/RecordHistory';
import TextArea from 'dashboard-app/common/TextArea';
import { Content, ContentWrapper, InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import { PHYSICAL_ACTIVITY_OPTIONS, PHYSICAL_ACTIVITY_TYPES } from 'dashboard-app/utils/constants';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { PhysicalActivity } from 'graphql-types/PhysicalActivity';
import useUpdateProfile from 'hooks/useUpdateProfile';
import React from 'react';

const PhysicalActivityForm = ({ input, index }) => {
  const {
    handleInputChange,
    readOnly,
    updateAction,
    deleteProfileInfo,
    disabled,
    toggle,
    showDeleteModal,
    toggleAllowEdit,
    inputs,
  } = useUpdateProfile({ input, index, tab: 'Physical Activity' });

  const defaultName = PHYSICAL_ACTIVITY_TYPES[inputs.type || '']
    .map(({ value }) => value)
    .includes(inputs.name)
    ? inputs.name
    : '';

  return (
    <Content padded key={`physical-activity-${index}`}>
      <InputRow>
        <SelectWrapper>
          <Dropdown
            onChange={({ value }) => (!readOnly ? handleInputChange('type', value) : null)}
            options={PHYSICAL_ACTIVITY_OPTIONS}
            readOnly={readOnly}
            value={inputs.type}
            placeholder="Select One"
            title="Activity Type"
            isRequired
            creatable
          />
        </SelectWrapper>
        <SelectWrapper>
          <Dropdown
            onChange={({ value }) => (!readOnly ? handleInputChange('name', value) : null)}
            options={inputs.type ? PHYSICAL_ACTIVITY_TYPES[inputs.type] : []}
            value={defaultName}
            readOnly={readOnly}
            placeholder="Select One"
            title="Activity Name"
            isRequired
            creatable
          />
        </SelectWrapper>
      </InputRow>

      <InputRow>
        <SelectWrapper fullWidth>
          <TextArea
            name="additionalNote"
            label="Additional Note"
            fullWidth
            onChange={({ target: { value } }) => handleInputChange('additionalNote', value)}
            readOnly={readOnly}
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
            disabled={disabled || !fieldsAreValid('physicalActivity', inputs)}
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

const PhysicalActivities = ({ data }) => (
  <ContentWrapper noTopPadding>
    {data.map((input: PhysicalActivity, index: number) => (
      <PhysicalActivityForm input={input} key={input?.id} index={index} />
    ))}
  </ContentWrapper>
);

export default PhysicalActivities;
