import Dropdown from 'dashboard-app/common/Dropdown';
import MultiAction from 'dashboard-app/common/MultiActions';
import Prompter from 'dashboard-app/common/Prompter';
import RecordHistory from 'dashboard-app/common/RecordHistory';
import TextArea from 'dashboard-app/common/TextArea';
import { Content, ContentWrapper, InputRow, SelectWrapper } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import { DISABILITY_OPTIONS, DISABILITY_TYPES } from 'dashboard-app/utils/constants';
import fieldsAreValid from 'dashboard-app/utils/fieldsAreValid';
import { Disability } from 'graphql-types/Disability';
import useUpdateProfile from 'hooks/useUpdateProfile';
import React from 'react';

const DisabilityForms = ({ input, index }) => {
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
  } = useUpdateProfile({ input, index, tab: 'Disability' });

  const defaultName = DISABILITY_TYPES[inputs?.disability || '']
    ?.map(({ value }) => value)
    ?.includes(inputs?.type)
    ? inputs?.type
    : '';

  return (
    <Content padded key={`disability-${index}`}>
      <InputRow>
        <SelectWrapper>
          <Dropdown
            onChange={({ value }) => (!readOnly ? handleInputChange('disability', value) : null)}
            options={DISABILITY_OPTIONS}
            readOnly={readOnly}
            value={inputs.disability}
            placeholder="Select One"
            title="Disability Name"
            isRequired
            creatable
          />
        </SelectWrapper>
        <SelectWrapper>
          <Dropdown
            onChange={({ value }) => (!readOnly ? handleInputChange('type', value) : null)}
            readOnly={readOnly}
            options={DISABILITY_TYPES[inputs.disability || ''] || []}
            value={defaultName}
            placeholder="Select One"
            title="Disability Type"
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
            readOnly={readOnly}
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
            disabled={disabled || !fieldsAreValid('disability', inputs)}
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

const Disabilities = ({ data }) => (
  <ContentWrapper noTopPadding>
    {data.map((input: Disability, index: number) => (
      <DisabilityForms input={input} key={input?.id} index={index} />
    ))}
  </ContentWrapper>
);

export default Disabilities;
