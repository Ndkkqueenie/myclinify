import { OTPModal } from 'dashboard-app/authentication/register/RegisterUser';
import { FlaggedAuthenticationInput } from 'dashboard-app/common/AuthenticationInput';
import Button from 'dashboard-app/common/Button';
import TextInput from 'dashboard-app/common/TextInput';
import {
  ButtonRow,
  Content,
  ContentWrapper,
  InputRow,
  SelectWrapper,
} from 'dashboard-app/common/Wrapper';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import { getPhoneExtensionCode } from 'dashboard-app/utils/authentication';
import useAuthentication from 'hooks/useAuthentication';
import React, { useEffect } from 'react';
import TextInputWithVisibilityIcon from './TextInputWithVisibilityIcon';

type CountryNameType = 'Nigeria' | 'United States' | 'Canada' | 'United Kingdom';

export interface ChangePhoneNumberProps {
  currentPhoneNumber: string;
  currentEmail: string;
  currentCountry: CountryNameType;
}

const ChangePhoneNumber: React.FC<ChangePhoneNumberProps> = ({
  currentCountry,
  currentPhoneNumber,
}) => {
  const {
    setCredentials,
    setCredentialsSequentially,
    sequentialCreds,
    updatePhoneNumber,
    updatePhoneNumberButtonIsDisabled,
    verifyPasscodeForUpdatePhoneNumber,
    resendOTP,
    focusInput,
    verifyOTPButtonisDisabled,
    verifyOTPMutating,
    authCreds,
    isShown,
    toggle,
    country,
    switchCountry,
  } = useAuthentication();

  useEffect(() => {
    const extensionCode = getPhoneExtensionCode(currentCountry);
    switchCountry(currentCountry);
    setCredentials(
      'phoneNumber',
      `${extensionCode}${currentPhoneNumber.slice(extensionCode.length - 1)}`,
    );
  }, []);

  return (
    <>
      <ContentWrapper noTopPadding>
        <Content>
          <SelectWrapper padded>
            <h3>Primary Phone Number</h3>
          </SelectWrapper>
          <InputRow>
            <FlaggedAuthenticationInput
              value={authCreds.phoneNumber}
              label="Phone Number"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              countryName={country}
              changeCountryName={switchCountry}
              onChange={({ target: { value } }) => setCredentials('phoneNumber', value)}
              smallHeight
              withBorderRadius
              noMargin
              padded
              fullWidth
              allowFlagSwitch
              fullBorder
            />
          </InputRow>
          <InputRow>
            <TextInputWithVisibilityIcon
              name="passcode"
              label="Enter Passcode"
              onChange={({ target: { value } }) => setCredentials('passCode', value)}
              value={authCreds.passCode}
            />
          </InputRow>
          <ButtonRow>
            <Button
              text="Update"
              onClick={verifyPasscodeForUpdatePhoneNumber}
              disabled={updatePhoneNumberButtonIsDisabled}
            />
          </ButtonRow>
        </Content>
      </ContentWrapper>
      <Modal
        isShown={isShown}
        hide={toggle}
        isAddPage={false}
        handleDone={() => {}}
        isAuthentication
        modalContent={
          <OTPModal
            verifyOTP={updatePhoneNumber}
            sequentialCreds={sequentialCreds}
            resendOTP={resendOTP}
            verifyOTPButtonisDisabled={verifyOTPButtonisDisabled}
            setCredentialsSequentially={setCredentialsSequentially}
            focusInput={focusInput}
            authCreds={authCreds}
            verifyOTPMutating={verifyOTPMutating}
          />
        }
      />
    </>
  );
};

export default ChangePhoneNumber;
