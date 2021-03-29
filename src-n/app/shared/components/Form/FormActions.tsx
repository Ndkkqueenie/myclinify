import React from 'react';
import { ButtonRow } from '../Wrapper';
import Button, { OutlineButton } from '../Button/Button';

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
