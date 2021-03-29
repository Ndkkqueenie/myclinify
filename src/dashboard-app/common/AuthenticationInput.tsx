import AustraliaFlag from 'dashboard-app/authentication/icons/AustraliaFlag';
import React, { useState } from 'react';
import styled from 'styled-components';
import CanadaFlag from '../authentication/icons/CanadaFlag';
import LondonFlag from '../authentication/icons/LondonFlag';
import NigeriaLogo from '../authentication/icons/NigeriaLogo';
import USFlag from '../authentication/icons/USFlag';
import colors from '../utils/colors';
import NotVisibleIcon from './icons/NotVisible';
import VisibilityIcon from './icons/VisibilityIcon';

type WrapperType = {
  onSetProfile?: boolean;
};
const Wrapper = styled.div<WrapperType>`
  width: 100%;
  padding: 0;
  margin: 26px 0px;

  @media only screen and (min-width: 768px) {
    margin: ${({ onSetProfile }) => (onSetProfile ? '13px 0px' : '26px 0px 0px')};
  }

  label {
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    color: ${colors.black};
  }

  .input-wrapper {
    width: 100%;
    margin: 5px 0px 0px;
    padding: 0;
    position: relative;

    input {
      width: 100%;
      font-size: 14px;
      color: ${colors.black};
      padding: 14px 20px;
      border: none;
      border-radius: 0;
      background-color: #ffffff;
      border-bottom: 1px solid #00abe2;

      font-size: 14px;
      ::placeholder {
        color: ${colors.black};
        opacity: 0.5;
        font-size: 13px;
      }

      :focus {
        outline: none;
      }
    }

    svg {
      position: absolute;
      bottom: 12px;
      right: 23px;
      cursor: pointer;
    }
  }
`;

type FlaggedInputWrapperType = {
  noMargin?: boolean;
  withBorderRadius?: boolean;
  smallHeight?: boolean;
  padded?: boolean;
  halfWidth?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  fullBorder?: boolean;
  disableFlagOnly?: boolean;
};

const FlaggedInputWrapper = styled.div<FlaggedInputWrapperType>`
  position: relative;
  width: 100%;
  pointer-events: ${({ readOnly }) => (readOnly ? 'none' : null)};

  padding: ${({ padded }) => (padded ? '12px 20px' : '0px')};
  margin: ${({ noMargin }) => (noMargin ? '0px' : '26px 0px 0px')};
  @media (min-width: 768px) {
    width: ${({ halfWidth }) => (halfWidth ? '50%' : '100%')};
  }
  label {
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    color: ${(props) => (props.disabled ? colors.disabled : '#000')};
  }

  .input-wrapper {
    width: 100%;
    margin: ${({ noMargin }) => (noMargin ? '0px' : '5px 0px 0px')};
    padding: 0;
    position: relative;

    input {
      width: 100%;
      height: ${({ smallHeight }) => (smallHeight ? '40px' : '100%')};
      font-size: 14px;
      color: ${(props) => (props.disabled ? colors.disabled : colors.black)};
      border: none;
      border-radius: 0;
      border-color: ${({ readOnly }) => (readOnly ? colors.pseudoAsh : colors.iceBlue)};
      border-bottom: 1px solid #00abe2;
      border: ${({ fullBorder, readOnly }) =>
        readOnly
          ? `1px solid ${colors.pseudoAsh}`
          : fullBorder
          ? `1px solid ${colors.darkBlue}`
          : ''};
      border-radius: ${({ fullBorder }) => (fullBorder ? '4px' : '')};

      padding: ${({ smallHeight }) => (smallHeight ? '0px 0px 0px 80px' : '14px 80px')};
      background-color: ${({ readOnly }) => (readOnly ? colors.silver : colors.white)};

      font-size: 14px;
      ::placeholder {
        color: ${colors.black};
        font-size: 13px;
        opacity: 0.5;
      }

      :focus {
        outline: none;
      }
    }

    .flag-bearer {
      padding: 0px 12px;
      // width: 70px;
      box-sizing: border-box;
      border-right: 1px solid ${colors.lightSilver};
      border-color: ${({ readOnly }) => (readOnly ? colors.pseudoAsh : colors.lightSilver)};
      position: absolute;
      bottom: ${({ smallHeight }) => (smallHeight ? '6px' : '11px')};
      left: 0px;
      cursor: ${({ disabled, disableFlagOnly }) =>
        disabled || disableFlagOnly ? 'default' : 'pointer'};

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

const FlagWrapper = styled.div`
  width: 300px;
  height: 44px;
  padding: 0px 0px;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  bottom: -34px;
  background: white;
  left: 0;
  position: absolute;
  z-index: 1;
  .flag-holder {
    padding: 0px 12px;
    // width: 70px;
    box-sizing: border-box;
    cursor: pointer;

    svg {
      width: 44px;
      height: 44px;
    }
  }
`;

export interface AuthenticationInputProps {
  value?: string;
  label?: string;
  placeholder?: string;
  type?: 'email' | 'text' | 'password' | undefined;
  name?: string;
  onKeyPress?: (e: any) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  important?: boolean;
  onSetProfile?: boolean;
}

const AuthenticationInput: React.FC<AuthenticationInputProps> = ({
  value,
  label,
  onKeyPress,
  placeholder,
  type = 'text',
  name,
  onChange,
  important,
  onSetProfile,
}) => {
  const [passwordType, setPasswordType] = useState<'text' | 'password' | 'email' | undefined>(type);
  return (
    <Wrapper onSetProfile={onSetProfile}>
      <label htmlFor="input">{label}</label>
      {important ? <span style={{ color: 'red' }}>*</span> : null}
      <div className="input-wrapper">
        <input
          type={passwordType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          onKeyPress={onKeyPress}
        />
        {type === 'password' &&
          (passwordType === 'password' ? (
            <NotVisibleIcon
              onClick={() => {
                setPasswordType('text');
              }}
            />
          ) : (
            <VisibilityIcon
              onClick={() => {
                setPasswordType('password');
              }}
            />
          ))}
      </div>
    </Wrapper>
  );
};

export interface FlaggedAuthenticationInputProps {
  value?: string | null;
  label?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  countryName?: string | null;
  changeCountryName?: (name: string, code: string) => void;
  onKeyPress?: (event: React.KeyboardEvent) => void;
  smallHeight?: boolean;
  fullBorder?: boolean;
  fullWidth?: boolean;
  withBorderRadius?: boolean;
  noMargin?: boolean;
  padded?: boolean;
  halfWidth?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  allowFlagSwitch?: boolean;
  important?: boolean;
  disableFlagOnly?: boolean;
}

export const FlaggedAuthenticationInput: React.FC<FlaggedAuthenticationInputProps> = ({
  value,
  label,
  placeholder,
  name,
  type,
  onChange,
  countryName = 'Nigeria',
  changeCountryName,
  smallHeight,
  fullBorder,
  withBorderRadius,
  noMargin,
  padded,
  halfWidth,
  disabled,
  readOnly,
  onKeyPress,
  allowFlagSwitch = true,
  important,
  disableFlagOnly,
}) => {
  const [showFlags, setShowFlags] = useState(false);

  const handleCountryChange = (_countryName: string, _code: string) => {
    if (disabled || readOnly) return;
    changeCountryName && changeCountryName(_countryName, _code);
    setShowFlags(!showFlags);
  };

  return (
    <>
      <FlaggedInputWrapper
        noMargin={noMargin}
        withBorderRadius={withBorderRadius}
        smallHeight={smallHeight}
        fullBorder={fullBorder}
        padded={padded}
        halfWidth={halfWidth}
        disabled={disabled}
        readOnly={readOnly}
        disableFlagOnly={disableFlagOnly}
      >
        <label htmlFor="input">{label}</label>
        {important ? <span style={{ color: 'red' }}>*</span> : null}
        <div className="input-wrapper">
          <input
            type={type || 'text'}
            placeholder={placeholder}
            value={value || ''}
            name={name}
            onChange={disabled ? () => {} : onChange}
            disabled={disabled}
            readOnly={readOnly}
            onKeyPress={onKeyPress}
          />
          <div
            className="flag-bearer"
            onClick={
              disabled || disableFlagOnly
                ? () => {}
                : () => (allowFlagSwitch ? setShowFlags(!showFlags) : null)
            }
          >
            {countryName === 'Nigeria' && <NigeriaLogo />}
            {countryName === 'United Kingdom' && <LondonFlag />}
            {countryName === 'United States' && <USFlag />}
            {countryName === 'Canada' && <CanadaFlag />}
            {countryName === 'Australia' && <AustraliaFlag />}
          </div>
        </div>
        {showFlags && (
          <FlagWrapper>
            <div
              className="flag-holder"
              onClick={() => {
                handleCountryChange('Nigeria', '+234');
              }}
            >
              <NigeriaLogo />
            </div>
            <div
              className="flag-holder"
              onClick={() => {
                handleCountryChange('United Kingdom', '+44');
              }}
            >
              <LondonFlag />
            </div>
            <div
              className="flag-holder"
              onClick={() => {
                handleCountryChange('United States', '+1');
              }}
            >
              <USFlag />
            </div>
            <div
              className="flag-holder"
              onClick={() => {
                handleCountryChange('Canada', '+1');
              }}
            >
              <CanadaFlag />
            </div>
            <div
              className="flag-holder"
              onClick={() => {
                handleCountryChange('Australia', '+61');
              }}
            >
              <AustraliaFlag />
            </div>
          </FlagWrapper>
        )}
      </FlaggedInputWrapper>
    </>
  );
};

export default AuthenticationInput;
