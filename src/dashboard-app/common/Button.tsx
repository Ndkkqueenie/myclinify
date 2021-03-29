import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
import Cancel from './icons/Cancel';
import PlusIcon from './icons/PlusIcon';

type StyledButtonType = {
  isCancel?: boolean;
  isSmall?: boolean;
  marginRight?: boolean;
  littleBorderRadius?: boolean;
  deleteButton?: boolean;
  backgroundColor?: string;
  color?: string;
  minWidth?: string;
  iconMargin?: string;
  withIcon?: boolean;
  addButton?: boolean;
  isAuth?: boolean;
};

export const StyledButton = styled.button<StyledButtonType>`
  padding: ${(props) =>
    props.isSmall ? '2px 8px' : props.littleBorderRadius ? '2px 8px' : '6px 22px'};
  @media (min-width: 992px) {
    padding: ${(props) =>
      props.isSmall ? '2px 8px' : props.littleBorderRadius ? '8px 15px' : '6px 22px'};
  }
  box-sizing: border-box;
  color: ${(props) => (props.color ? props.color : colors.white)};
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : colors.iceBlue)};
  border: 1px solid ${(props) => (props.backgroundColor ? props.backgroundColor : colors.iceBlue)};
  border-radius: ${(props) => (props.littleBorderRadius ? '6px' : '6px')};
  cursor: pointer;
  outline: none;
  font-size: 13px;
  font-weight: 500;
  min-width: ${(props) => (props.minWidth ? props.minWidth : '88px')};
  margin-left: ${(props) => props.littleBorderRadius && '10px'};
  margin-right: ${(props) => props.marginRight && '10px'};
  white-space: nowrap;

  @media only screen and (min-width: 768px) {
    font-size: ${({ isAuth }) => (isAuth ? '18px' : '14px')};
  }

  align-items: center;
  height: ${(props) => (props.withIcon ? 'inherit' : null)};

  svg path {
    fill: ${({ color, addButton, deleteButton }) => {
      if (color) return color;
      if (deleteButton) return colors.white;
      return addButton ? colors.darkBlue : colors.iceBlue;
    }};
  }

  svg {
    margin-right: 9px;
    path {
      fill: ${({ color }) => color || colors.white};
    }
  }
  span {
    font-weight: 500;
    font-size: 14px;

    @media only screen and (min-width: 768px) {
      font-size: ${({ isAuth }) => (isAuth ? '18px' : '14px')};
    }
  }

  :hover {
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    opacity: 0.9;
    background-color: transparent;
    color: ${(props) => props.color || colors.iceBlue};
    background: ${({ deleteButton }) => (deleteButton ? colors.red : null)};
    color: ${({ deleteButton }) => (deleteButton ? colors.white : null)};

    svg path {
      fill: ${({ color }) => color || colors.iceBlue};
      fill: ${({ deleteButton }) => (deleteButton ? colors.white : null)};
    }
  }
  :disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

type StyledOutlineButtonType = {
  withoutIcon?: boolean;
  inactive?: boolean;
  withBorderRadius?: boolean;
  fullWidth?: boolean;
  deleteButton?: boolean;
  mini?: boolean;
  grey?: boolean;
  clearButton?: boolean;
  linkOptionWidth?: boolean;
  mainColor?: string;
  textAlign?: 'left' | 'center';
};

const StyledOutlineButton = styled.button<StyledOutlineButtonType>`
  border: 1px solid ${(props) => (props.inactive || props.grey ? colors.pseudoAsh : colors.iceBlue)};
  box-sizing: border-box;
  border-radius: ${(props) => (props.withBorderRadius ? '6px' : '4px')};
  padding: ${({ withBorderRadius, mini, clearButton }) => {
    if (mini) return '2px 4px';
    if (clearButton) return '6px';
    if (withBorderRadius) return '6px 22px';
    return '6px 15px';
  }};
  box-sizing: border-box;
  text-align: ${({ textAlign = 'left' }) => textAlign};
  background-color: ${colors.white};
  margin-right: ${(props) => (props.withBorderRadius ? '15px' : '0px')};
  margin-left: ${(props) => (props.mini || props.clearButton ? '10px' : '0px')};
  min-width: ${({ linkOptionWidth }) => (linkOptionWidth ? '210px' : '80px')};
  max-width: ${({ linkOptionWidth }) => (linkOptionWidth ? '210px' : '100%')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '')};
  margin: ${({ fullWidth }) => (fullWidth ? '0 0 8px' : '')};
  border-color: ${({ mainColor }) => mainColor || ''};
  svg {
    margin-right: 8px;
    path {
      fill: ${(props) => (props.inactive || props.grey ? colors.pseudoAsh : colors.iceBlue)};
    }
  }

  span {
    font-weight: 500;
    font-size: ${(props) => (props.mini || props.clearButton ? '13px' : '14px')};
    color: ${(props) => (props.inactive || props.grey ? colors.pseudoAsh : colors.iceBlue)};
  }
  :hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    span {
      color: ${({ inactive, withoutIcon, deleteButton }) => {
        if (withoutIcon || deleteButton) return colors.white;
        if (inactive) return colors.pseudoAsh;
        return colors.iceBlue;
      }};
    }
    background-color: ${({ deleteButton, grey, withoutIcon }) => {
      if (grey) return colors.pseudoAsh;
      if (withoutIcon) return colors.iceBlue;
      if (deleteButton) return colors.red;
      return colors.white;
    }};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

type StyledOutlineIconButtonType = {
  withoutIcon?: boolean;
  inactive?: boolean;
  withBorderRadius?: boolean;
  mini?: boolean;
  grey?: boolean;
  clearButton?: boolean;
  color?: string;
  deleteButton?: boolean;
  linkOptionWidth?: boolean;
  autoWidth?: boolean;
  noMargin?: boolean;
};

const StyledOutlineIconButton = styled.button<StyledOutlineIconButtonType>`
  box-sizing: border-box;
  border: none;
  border-radius: ${(props) => (props.withBorderRadius ? '6px' : '4px')};
  padding: 7px 10px;
  box-sizing: border-box;
  background-color: ${colors.white};
  margin-right: ${({ noMargin }) => (noMargin ? '0px' : '10px')};
  width: ${({ autoWidth }) => (autoWidth ? 'auto' : '50px')};
  margin-left: ${(props) => (props.mini || props.clearButton ? '10px' : '0px')};
  box-shadow: 0px 16px 50px #f0f0f0;
  :hover {
    background-color: ${({ color, withoutIcon, grey, deleteButton }) => {
      if (color) return color;

      if (grey) return colors.pseudoAsh;
      if (withoutIcon) return colors.white;
      if (deleteButton) return colors.red;
      return colors.iceBlue;
    }};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${({ deleteButton }) => (deleteButton ? colors.white : '')};
    svg path {
      fill: ${colors.white};
    }
  }
`;

export interface ButtonProps {
  withIcon?: boolean;
  addButton?: boolean;
  withCancelIcon?: boolean;
  small?: boolean;
  marginRight?: boolean;
  isCancel?: boolean;
  text?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'submit' | 'button';
  className?: string;
  littleBorderRadius?: boolean;
  icon?: React.ReactChild;
  backgroundColor?: string;
  color?: string;
  minWidth?: string;
  iconMargin?: string;
  isAuth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  withIcon,
  addButton,
  withCancelIcon,
  small,
  marginRight,
  text,
  onClick,
  isCancel,
  type = 'button',
  disabled,
  littleBorderRadius,
  className,
  icon,
  backgroundColor,
  color,
  minWidth,
  iconMargin,
  isAuth,
}) => {
  return (
    <StyledButton
      type={type}
      isSmall={small}
      marginRight={marginRight}
      isCancel={isCancel}
      onClick={onClick}
      disabled={disabled}
      className={className || undefined}
      littleBorderRadius={littleBorderRadius}
      backgroundColor={backgroundColor}
      color={color}
      minWidth={minWidth}
      iconMargin={iconMargin}
      withIcon={withIcon}
      addButton={addButton}
      isAuth={isAuth}
    >
      {withIcon && (icon || <PlusIcon />)}
      {withCancelIcon && <Cancel />}
      {text && <span>{text}</span>}
    </StyledButton>
  );
};

export interface OutlineButtonProps {
  text: string;
  withIcon?: boolean;
  withWrapper?: boolean;
  onClick?: () => void;
  inactive?: boolean;
  mini?: boolean;
  grey?: boolean;
  withBorderRadius?: boolean;
  fullWidth?: boolean;
  deleteButton?: boolean;
  className?: string;
  clearButton?: boolean;
  icon?: React.ReactChild;
  disabled?: boolean;
  linkOptionWidth?: boolean;
  mainColor?: string;
  textAlign?: 'center' | 'left';
}

export const OutlineButton: React.FC<OutlineButtonProps> = ({
  text,
  withIcon = true,
  onClick,
  inactive,
  mini,
  grey,
  withBorderRadius,
  fullWidth,
  deleteButton,
  className,
  clearButton,
  disabled,
  icon,
  linkOptionWidth,
  mainColor,
  textAlign,
}) => {
  return (
    <StyledOutlineButton
      onClick={onClick}
      withoutIcon={!withIcon}
      inactive={inactive}
      withBorderRadius={withBorderRadius}
      fullWidth={fullWidth}
      mini={mini}
      grey={grey}
      mainColor={mainColor}
      deleteButton={deleteButton}
      className={className || undefined}
      clearButton={clearButton}
      disabled={disabled}
      textAlign={textAlign}
      linkOptionWidth={linkOptionWidth}
    >
      {withIcon && (icon || <PlusIcon color={inactive ? colors.pseudoAsh : colors.iceBlue} />)}
      <span>{text}</span>
    </StyledOutlineButton>
  );
};
export interface OutlineIconButtonProps {
  withIcon?: boolean;
  withWrapper?: boolean;
  deleteButton?: boolean;
  onClick?: () => void;
  inactive?: boolean;
  mini?: boolean;
  color?: string;
  grey?: boolean;
  withBorderRadius?: boolean;
  className?: string;
  clearButton?: boolean;
  icon?: React.ReactChild;
  disabled?: boolean;
  linkOptionWidth?: boolean;
  autoWidth?: boolean;
  noMargin?: boolean;
}

export const OutlineIconButton: React.FC<OutlineIconButtonProps> = ({
  withIcon = true,
  onClick,
  inactive,
  deleteButton,
  mini,
  grey,
  withBorderRadius,
  className,
  clearButton,
  disabled,
  icon,
  linkOptionWidth,
  autoWidth,
  noMargin,
  color,
}) => {
  return (
    <StyledOutlineIconButton
      onClick={onClick}
      withoutIcon={!withIcon}
      deleteButton={deleteButton}
      inactive={inactive}
      withBorderRadius={withBorderRadius}
      mini={mini}
      grey={grey}
      className={className || undefined}
      clearButton={clearButton}
      disabled={disabled}
      linkOptionWidth={linkOptionWidth}
      autoWidth={autoWidth}
      noMargin={noMargin}
      color={color}
    >
      {withIcon && (icon || <PlusIcon color={inactive ? colors.pseudoAsh : colors.iceBlue} />)}
    </StyledOutlineIconButton>
  );
};

export default Button;
