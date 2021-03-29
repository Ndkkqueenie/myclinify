import React from 'react';
import { ButtonRow } from 'dashboard-app/common/Wrapper';
import Button, { OutlineButton } from 'dashboard-app/common/Button';

export interface MultiActionProps {
  index: number;
  count: number;
  addForm: () => void;
  removeForm: () => void;
}

const MultiVitalFieldActions: React.FC<MultiActionProps> = ({
  addForm,
  removeForm,
  index,
  count,
}) => (
  <ButtonRow>
    {index !== count - 1 ? (
      <OutlineButton text="Delete" withBorderRadius withIcon={false} onClick={removeForm} />
    ) : (
      <Button text="Add" onClick={addForm} />
    )}
  </ButtonRow>
);

export default MultiVitalFieldActions;
