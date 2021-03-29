import React from 'react';
import { ButtonRow } from 'dashboard-app/common/Wrapper';
import Button, { OutlineButton } from 'dashboard-app/common/Button';

export interface MultiActionProps {
  index: number;
  readOnly: boolean;
  disabled: boolean;
  updateAction: any;
  toggleAllowEdit: any;
  deleteAction: any;
  field?: string;
}

const MultiAction: React.FC<MultiActionProps> = ({
  updateAction,
  toggleAllowEdit,
  deleteAction,
  index,
  readOnly,
  disabled,
  field = '',
}) => (
  <ButtonRow>
    {index !== 0 ? (
      <>
        <OutlineButton
          withBorderRadius
          withIcon={false}
          text={readOnly ? 'Delete' : 'Cancel'}
          onClick={() => (readOnly ? deleteAction(field, index) : toggleAllowEdit(index))}
        />
        <Button
          text={readOnly ? 'Edit' : 'Update'}
          onClick={() => (readOnly ? toggleAllowEdit(index) : updateAction(field, index))}
          disabled={disabled}
        />
      </>
    ) : (
      <Button text="Save" onClick={() => updateAction(field, index)} disabled={disabled} />
    )}
  </ButtonRow>
);

export default MultiAction;
