import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
import CheckBox from './CheckBox';
import ExpandIcon from './icons/ExpandIcon';
import CollapseIcon from './icons/CollapseIcon';

const Collapsible = styled.div`
  width: 100%;
  padding: 0px;
  box-sizing: border-box;
  margin: 0px;
  border-bottom: 1px solid ${colors.silver};

  .header {
    width: 100%;
    padding: 20px 30px;
    box-sizing: border-box;
    border-bottom: 1px solid ${colors.silver};
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    .selector {
      display: flex;
      align-items: center;

      .checkbox {
        margin-right: 25px;
      }

      h3 {
        font-size: 14px;
        font-weight: 500;
        color: ${colors.darkBlue};
      }
    }
  }
`;

export interface CollapsibleComponentProps {
  children: React.ReactNode;
  name: string;
  id: string;
  noCheckBox?: boolean;
  checked?: boolean;
  onChange?: () => void;
  isExpanded?: boolean;
}

const CollapsibleComponent: React.FC<CollapsibleComponentProps> = ({
  children,
  name,
  id,
  noCheckBox,
  checked,
  onChange,
  isExpanded = false,
}) => {
  const [expanded, setExpanded] = useState(isExpanded);
  return (
    <Collapsible>
      <div
        className="header"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <div className="selector">
          {!noCheckBox && <CheckBox id={id} name={name} checked={checked} onChange={onChange} />}
          <h3>{name}</h3>
        </div>
        {!expanded && <CollapseIcon />}
        {expanded && <ExpandIcon />}
      </div>
      {expanded && children}
    </Collapsible>
  );
};

export default CollapsibleComponent;
