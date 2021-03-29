import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
import ExpandIcon from './icons/ExpandIcon';
import CollapseIcon from './icons/CollapseIcon';

export const Collapsible = styled.div<{ withTitle?: boolean }>`
  width: 100%;
  padding: 0px;
  box-sizing: border-box;
  margin: 0px;
  border-bottom: 1px solid ${colors.white};
  background-color: ${colors.white};
  position: relative;

  .title {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    color: ${colors.iceBlue};
  }

  .add-dropdown-wrapper {
    position: absolute;
    top: 5px;
    right: 15px;
  }

  .header {
    width: 100%;
    padding: 10px 30px;
    box-sizing: border-box;
    border-bottom: 1px solid ${colors.white};
    background-color: ${colors.darkBlue};
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-top: ${(props) => (props.withTitle ? '0px' : '20px')};

    .selector {
      display: flex;
      align-items: center;

      .checkbox {
        margin-right: 25px;
      }

      h3 {
        font-size: 14px;
        font-weight: 500;
        color: ${colors.white};
      }
    }

    .action-wrapper {
      display: flex;
      align-items: center;

      button {
        margin-right: 25px;
        border: 1px solid ${colors.white};
        color: ${colors.white};
        background-color: ${colors.darkBlue};
        font-size: 12px;
        border-radius: 20px;
        padding: 6px 14px;
      }
    }
  }
`;

export interface ContentCollapsibleComponentProps {
  children: React.ReactNode;
  name: string;
  withTitle?: boolean;
  removeItem: () => void;
}

const ContentCollapsibleComponent: React.FC<ContentCollapsibleComponentProps> = ({
  children,
  name,
  removeItem,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Collapsible>
      <div
        className="header"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <div className="selector">
          <h3>{name}</h3>
        </div>
        <div className="action-wrapper">
          <button type="button" onClick={removeItem}>
            Delete
          </button>
          {!expanded && <CollapseIcon color="white" />}
          {expanded && <ExpandIcon color="white" />}
        </div>
      </div>
      {expanded && children}
    </Collapsible>
  );
};

export default ContentCollapsibleComponent;
