import React from 'react';
import { ButtonRow } from 'dashboard-app/common/Wrapper';
import Button, { OutlineButton } from 'dashboard-app/common/Button';

export interface FormActionProps {
  isEdit: boolean;
  isEditActive: boolean;
  disabled: boolean;
  onAction: any;
  cancelAction: any;
  deleteAction: any;
  actionText?: string;
}

const FormAction: React.FC<FormActionProps> = ({
  disabled,
  deleteAction,
  actionText = '',
  isEdit,
  isEditActive,
  cancelAction,
  onAction,
}) => (
  <ButtonRow>
    {isEdit && (
      <OutlineButton
        withBorderRadius
        withIcon={false}
        text={isEditActive ? 'Cancel' : 'Delete'}
        onClick={isEditActive ? cancelAction : deleteAction}
      />
    )}
    <Button text={actionText} onClick={onAction} disabled={disabled} />
  </ButtonRow>
);

export default FormAction;
