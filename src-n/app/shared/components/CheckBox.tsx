import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const CheckboxWrapper = styled.label<{ addMarginLeft?: boolean; coloe?: string }>`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  margin: 0;

  .checkbox__control {
    display: inline-grid;
    width: 20px;
    height: 20px;
    padding: 3px;
    border-radius: 4px;
    border: 1px solid ${colors.tintGrey};

    svg {
      transition: transform 0.1s ease-in 25ms;
      transform: scale(0);
    }
  }

  .checkbox__input {
    display: grid;
    grid-template-areas: 'checkbox';

    > * {
      grid-area: checkbox;
    }

    input {
      opacity: 0;

      &:checked + .checkbox__control {
        border: 1px solid ${({ color }) => color || colors.darkBlue};
      }

      &:checked + .checkbox__control svg {
        transform: scale(1);
        border-color: ${({ color }) => color || colors.darkBlue};
      }
    }
  }
`;

export interface CheckBoxProps {
  id: string;
  name: string;
  onClick?: (check) => void;
  onChange?: () => void;
  color?: string;
  checked?: boolean;
  addMarginLeft?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  id,
  name,
  onChange,
  onClick,
  color,
  checked = false,
  addMarginLeft,
}) => {
  return (
    <CheckboxWrapper className="checkbox" color={color} addMarginLeft={addMarginLeft}>
      <span className="checkbox__input">
        <input
          type="checkbox"
          id={id}
          name={name}
          onClick={onClick}
          onChange={onChange}
          checked={checked}
        />
        <span className="checkbox__control">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              d="M1.73 12.91l6.37 6.37L22.79 4.59"
            />
          </svg>
        </span>
      </span>
    </CheckboxWrapper>
  );
};

export default CheckBox;
