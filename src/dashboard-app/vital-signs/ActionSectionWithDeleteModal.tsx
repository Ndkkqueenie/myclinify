import FormAction from 'dashboard-app/common/FormActions';
import Prompter from 'dashboard-app/common/Prompter';
import RecordHistory from 'dashboard-app/common/RecordHistory';
import { InputRow } from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import React from 'react';

const ActionSectionSectionWithDeleteModal = ({
  isEdit,
  isEditActive,
  toggle,
  deleteAction,
  cancelAction,
  onAction,
  actionText,
  disableActionButton,
  showModalPrompt,
  inputs,
}) => (
  <>
    <div className="medication-dispense-action-row">
      <div>
        <FormAction
          isEdit={isEdit}
          isEditActive={isEditActive}
          deleteAction={toggle}
          cancelAction={cancelAction}
          disabled={disableActionButton}
          onAction={onAction}
          actionText={actionText}
        />
      </div>
      <div>
        {inputs?.id && (
          <InputRow noMargin>
            <RecordHistory
              createdBy={inputs?.createdBy?.fullName}
              createdDate={inputs?.createdDate}
              updatedBy={inputs?.updatedBy?.fullName}
              updatedDate={inputs?.updatedDate}
              className="padded-right small-text"
            />
          </InputRow>
        )}
      </div>
    </div>
    <Modal
      modalContent={
        <Prompter
          text="Are you sure you want to delete this record?"
          actionText="Delete"
          deleteAction={deleteAction}
          cancelAction={toggle}
          disabled={disableActionButton}
        />
      }
      isShown={showModalPrompt}
      hide={toggle}
      handleDone={() => {}}
      isAuthentication
    />
  </>
);

export default ActionSectionSectionWithDeleteModal;
