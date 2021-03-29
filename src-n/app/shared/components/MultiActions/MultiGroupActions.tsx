import React from 'react';
import { ButtonRow } from '../Wrapper';
import Button, { OutlineButton } from '../Button/Button';

export interface MultiGroupActionProps {
  index: number;
  items: any[];
  initialItem: any;
  onClick?: (item: any) => void;
  noPadding?: boolean;
}

const MultiGroupAction: React.FC<MultiGroupActionProps> = ({
  items,
  index,
  onClick,
  initialItem,
  noPadding,
}) => (
  <ButtonRow noMargin noPadding={noPadding}>
    {index !== items.length - 1 ? (
      <OutlineButton
        text="Delete"
        // withBorderRadius
        textAlign="center"
        withIcon={false}
        onClick={() => {
          if (onClick) {
            const newItems = items.filter((_, i) => i !== index);
            onClick(newItems);
          }
        }}
      />
    ) : (
      <Button
        text="Add"
        onClick={() => {
          if (onClick) {
            onClick([...items, initialItem]);
          }
        }}
      />
    )}
  </ButtonRow>
);

export default MultiGroupAction;
