import FormAction from 'dashboard-app/common/FormActions';
import RecordHistory from 'dashboard-app/common/RecordHistory';
import { InputRow } from 'dashboard-app/common/Wrapper';
import React from 'react';

const ActionSectionSectionWithAuditDetails = ({
  isEdit,
  isEditActive,
  toggle,
  cancelAction,
  onAction,
  actionText,
  disableActionButton,
  inputs,
}) => (
  <>
    <div className="medication-dispense-action-row parent">
      <div className="audit-section">
        {isEdit && (
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
    </div>
  </>
);

export default ActionSectionSectionWithAuditDetails;
