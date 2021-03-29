import styled from 'styled-components';
import colors from '../utils/colors';

export const Base = styled.div`
  width: 100%;
  padding: 20px;
`;

export const BaseWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 5px;
  }
`;

export const SumTotalWrapper = styled(Base)`
  display: flex;
  border-top: 1px solid ${colors.darkBlue};
  border-bottom: 1px solid ${colors.darkBlue};

  .content-left {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    span {
      font-size: 14px;
      font-weight: 400;
      color: ${colors.darkBlue};
    }
  }

  .content-right {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    span {
      font-size: 14px;
      font-weight: 500;
      color: ${colors.darkBlue};
    }
  }
`;

export const BillingStrip = styled.div`
  width: 100%;
  padding: 0px 20px;
  margin: 40px 0px;

  .strip {
    border-top: 2px solid ${colors.darkBlue};
    border-bottom: 2px solid ${colors.darkBlue};
    padding: 16px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 16px;
      font-weight: 500;
      color: ${colors.darkBlue};
    }

    h5 {
      font-size: 16px;
      font-weight: 400;
      color: ${colors.darkBlue};
    }
  }
`;

export const EntryWrapper = styled.div`
  width: 100%;
  padding: 0px;
`;

export const EntryStrip = styled.div`
  width: 100%;
  padding: 0px;
  border-bottom: 1px solid ${colors.lightSilver};

  .strip-header {
    width: 100%;
    padding: 10px 30px;
    box-sizing: border-box;
    border-top: 1px solid ${colors.darkBlue};
    border-bottom: 1px solid ${colors.darkBlue};
    font-size: 16px;
    font-weight: 500;
    color: ${colors.darkBlue};
    margin-top: 36px;
  }
`;

export const ListContentWrapper = styled.div<{ listPage?: boolean; noListPadding?: boolean }>`
  width: 100%;
  // margin-top: 10px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

type ContentWrapperType = {
  listPage?: boolean;
  noTopPadding?: boolean;
  noBottomPadding?: boolean;
  noMargin?: boolean;
  withTab?: boolean;
  vitalPage?: boolean;
};

export const ContentWrapper = styled.div<ContentWrapperType>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.listPage ? 'row' : 'column')};
  padding-top: ${(props) =>
    props.noTopPadding
      ? '0px'
      : props.vitalPage
      ? '0'
      : props.listPage
      ? '140px'
      : props.withTab
      ? '190px'
      : '0'};

  padding-bottom: ${(props) => (props.noBottomPadding ? '0px' : '20px')};
  margin: 0px;
`;

export const DropdownWrapper = styled.div<{ isModal?: boolean }>`
  width: 220px;
`;

export const ContainerWrapper = styled.div`
  padding: 0 32px;
`;

export const ModalContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type ContentType = {
  listPage?: boolean;
  noPadding?: boolean;
  noMargin?: boolean;
  detailsPage?: boolean;
  addPage?: boolean;
  billingPage?: boolean;
  padded?: boolean;
  fullWidth?: boolean;
  noColor?: boolean;
  className?: string;
};

export const Content = styled.div.attrs((props) => {
  return {
    ...props,
  };
})<ContentType>`
  width: 100%;
  max-width: ${({ fullWidth, listPage, detailsPage, billingPage }) =>
    listPage || detailsPage || fullWidth ? '100%' : billingPage ? '900px' : '840px'};
  margin-top: ${(props) =>
    props.noMargin ? '0px' : props.detailsPage || props.addPage || props.padded ? '10px' : '0px'};
  background-color: ${({ noColor, listPage, detailsPage }) =>
    !listPage && !detailsPage && !noColor && colors.white};
  box-sizing: border-box;
  padding: ${(props) => (props.noPadding ? '0px' : '10px 15px 20px')};
  border-radius: 4px;
  display: ${(props) => props.detailsPage && 'flex'};
  align-items: center;
  flex-direction: ${(props) => props.detailsPage && 'column'};
  /* justify-content: ${(props) => props.detailsPage && 'center'}; */
  @media (min-width: 992px) {
    // margin: 20px 0;
    padding: ${(props) => (props.noPadding ? '0px' : '20px 40px 32px')};
  }
  .reaction-wrapper {
    width: 100%;
  }
`;

export const ToggleRow = styled.div<{ noSidePadding?: boolean }>`
  width: 100%;
  max-width: 840px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.noSidePadding ? '5px 0px ' : '10px 35px')};
  box-sizing: border-box;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.fairBlue};

  .action {
    color: ${colors.darkBlue};
    font-size: 14px;
    @media (min-width: 789px) {
      font-size: 17px;
    }
  }
`;

export const InlineToggleRow = styled(ToggleRow)`
  width: 100%;
  padding: 5px 0px;
`;

export const InlineToggleRowWrapper = styled.div`
  width: 100%;
  padding: 0px 20px;
`;

export const ExtraContent = styled.div<ContentType & { noTopMargin?: boolean }>`
  width: ${(props) => (props.listPage || props.detailsPage ? '100%' : '100%')};
  margin-top: ${(props) => (props.noTopMargin ? '0px' : '30px')};
  max-width: ${(props) =>
    props.listPage || props.detailsPage ? '100%' : props.billingPage ? '900px' : '800px'};

  padding: 0px;
  box-sizing: border-box;
`;

export const ModalContent = styled.div<{ addPage?: boolean }>`
  width: ${(props) => (props.addPage ? '840px' : '1040px')};
  min-height: 500px;
  margin-top: 0px;
  background-color: ${colors.white};
  padding: 0px;
  box-sizing: border-box;
`;

export const Row = styled.div<{ pullRight?: boolean }>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: ${(props) => (props.pullRight ? 'flex-end' : 'space-between')};
`;

export const ModalRow = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-top: 20px;
`;

export const InputRow = styled(Row)<{ noMargin?: boolean }>`
  margin-top: ${({ noMargin }) => (noMargin ? '0px' : '4px')};
  flex-wrap: wrap;
  /* justify-content: center; */
`;

export const ButtonRow = styled(Row)<{
  noMargin?: boolean;
  noPadding?: boolean;
  half?: boolean;
  position?: 'end' | 'start';
}>`
  margin: ${(props) => (props.noMargin ? '0px' : '12px 0px 0px')};
  justify-content: ${({ position }) => `flex-${position || 'end'}`};
  padding: ${(props) => (props.noPadding ? '0px' : '0px 16px')};
  box-sizing: border-box;
  width: ${(props) => (props.half ? '50%' : '100%')};
`;

export const ClaimButtonRow = styled(Row)<{
  noMargin?: boolean;
  noPadding?: boolean;
  half?: boolean;
}>`
  margin: ${(props) => (props.noMargin ? '0px' : '12px 0px')};
  justify-content: space-between;
  padding: ${(props) => (props.noPadding ? '0px' : '0px 16px')};
  box-sizing: border-box;
  width: ${(props) => (props.half ? '50%' : '100%')};
`;

export const ButtonGroup = styled.div`
  margin: 0px;
  padding: 0px;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-bottom: 8px;
  @media (min-width: 568px) {
    flex-direction: row;
  }
  @media (min-width: 769px) {
    margin-bottom: 0;
    width: auto;
    margin-left: 12px;
    margin-right: 8px;
  }
`;

type SelectWrapperType = {
  fullWidth?: boolean;
  padded?: boolean;
  noDropdown?: boolean;
};

export const SelectWrapper = styled.div<SelectWrapperType>`
  width: 100%;
  margin: 0px;
  padding: ${(props) => (props.padded ? '12px 15px' : '0px')};
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: ${(props) => (props.fullWidth ? '100%' : '50%')};
  }
  .block-wrapper {
    width: 100%;
    display: flex;
  }
  .input-wrapper {
    width: 60%;
  }

  .select-dropdown {
    width: 40%;
    flex-grow: 1;

    .unit-tag {
      width: 100%;
      background-color: ${colors.white};
      color: ${colors.black};
      box-sizing: border-box;
      padding: 10px;
      font-size: 14px;
      border-radius: 0px 4px 4px 0px;
      height: 38px;
      border: 1px solid #00274a;
    }
  }

  .twin-block-wrapper {
    width: 100%;
    display: flex;

    .input-wrapper {
      width: ${(props) => (props.noDropdown ? '100%' : '75%')};
      input {
        border-radius: 4px 0px 0px 4px;
        :nth-child(2) {
          border-radius: 0 4px 4px 0;
        }
      }
    }

    .select-dropdown {
      width: 25%;
      flex-grow: 1;

      .unit-tag-wrapper {
        padding: 34px 20px 12px 0px;
        margin-top: 1px;
      }

      .readonly {
        background-color: ${colors.pseudoAsh};
      }

      .unit-tag {
        width: 100%;
        background-color: ${colors.white};
        color: ${colors.black};
        box-sizing: border-box;
        padding: 10px;
        font-size: 14px;
        border-radius: 0px 4px 4px 0px;
        height: 38px;
        border: 1px solid #00274a;
      }
    }
  }
`;

export const AuthenticationBaseCard = styled.div`
  padding: 7px;
  @media only screen and (min-width: 768px) {
    padding: 28px 28px 0px 28px;
  }
  box-sizing: border-box;
  background-color: ${colors.white};
  .container {
    max-width: 46rem;
  }
  .logo {
    width: 100%;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      cursor: pointer;
      transform: scale(0.7);
    }
    @media only screen and (min-width: 768px) {
      transform: scale(1);
    }
  }

  .title {
    text-align: left;
    margin: 20px 0px;
    font-weight: 500;
    color: ${colors.darkBlue};
    font-size: 19px;
    @media only screen and (min-width: 768px) {
      font-size: 24px;
      margin: 50px 0px 50px 0px;
    }
  }

  .button-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
  }

  .forgot {
    cursor: pointer;
  }

  .alt-text.forgot {
    color: #00abe2 !important;
  }

  .alt-text {
    color: ${colors.darkBlue};
    font-size: 13px;
    @media only screen and (min-width: 768px) {
      font-size: 18px;
    }

    a {
      span {
        cursor: pointer;
        font-weight: 600;
        color: ${colors.iceBlue};
      }
    }
  }

  .terms {
    margin: 40px 0px 10px;
    width: 100%;
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    @media only screen and (min-width: 768px) {
      margin: 80px 0px 20px;
      font-size: 18px;
    }

    span {
      cursor: pointer;
      a {
        color: ${colors.iceBlue};
      }
    }
  }
`;

export const AdministrationRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  > div {
    display: flex;

    &:first-of-type {
      > div {
        &:first-of-type {
          padding-right: 0;
          flex: 1;
          margin-right: 5px;
        }
        &:last-of-type {
          width: 100px;
          padding-left: 0;
        }
      }
    }
  }
`;

export const DosageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;

  > div {
    border: 1px solid ${colors.silver};
    border-radius: 4px;
    display: flex;

    input,
    select {
      width: 50%;
      border: none;
      padding: 7px 10px;
    }
    input {
      border-radius: 4px 0 0 4px;
    }

    > div {
      width: 50%;

      .react-select__control {
        border-radius: 0px 4px 4px 0px;
        background: #f0f0f0;
        border: none;
      }
    }

    select {
      background: #f0f0f0;
      border-radius: 0px 4px 4px 0px;
    }
  }
`;

export const AuthenticationModalCard = styled.div<{ passcodePage?: boolean }>`
  width: 100%;
  border-radius: 4px;
  padding: 10px 30px;
  box-sizing: border-box;
  background-color: ${colors.white};
  overflow-y: auto !important;

  @media only screen and (min-width: 768px) {
    width: 650px;
    padding: 30px 50px;
  }

  .top-icon-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0px;
  }

  .title-wrapper {
    text-align: center;
    margin-top: 36px;
    font-weight: 600;

    h1 {
      margin: 0.5em 0;
      text-align: center;
      font-size: 22px;
      font-weight: 500;
      color: ${colors.darkBlue};
    }

    h3 {
      margin: 0px;
      margin-top: 30px;
      font-size: 18px;
      color: ${colors.black};
    }

    span {
      color: ${colors.iceBlue};
      font-weight: 500;
      cursor: pointer;
    }
  }

  .account-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0.5em;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }

    .account-group {
      width: 40%;
      padding: 5px 0;
      background-color: ${colors.white};
      border-radius: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      margin: 0.5em 0;

      @media only screen and (min-width: 768px) {
        padding: 20px 0;
      }

      svg {
        width: 70px;
        height: 90px;

        @media only screen and (min-width: 768px) {
          width: 140px;
          height: 140px;
        }
      }

      h4 {
        text-align: center;
        font-size: 16px;
        color: ${colors.darkBlue};

        @media only screen and (min-width: 768px) {
          margin: 18px 0px;
        }
      }

      :hover {
        box-shadow: 0px 0px 10px ${colors.silver};
      }
    }

    .selected-group {
      box-shadow: 0px 0px 10px ${colors.silver};
    }

    @media only screen and (min-width: 768px) {
      width: 100%;
      margin: 60px 0px;
      display: flex;
      justify-content: space-evenly;
    }
  }

  .otp-input-wrapper {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    width: 100%;

    @media only screen and (min-width: 768px) {
      padding: 0px 70px;
    }

    .title {
      margin-bottom: 2em;
    }
    .input-group-wrapper {
      width: ${(props) => (props.passcodePage ? '94%' : '70%')};
      display: flex;
      justify-content: space-between;

      input {
        width: 30px;
        border: none;
        border-bottom: 1px solid ${colors.iceBlue};
        padding: 2px;
        box-sizing: border-box;
        font-size: 24px;
        text-align: center;

        @media only screen and (min-width: 768px) {
          width: 60px;
        }

        :focus {
          outline: none;
        }
      }
    }
  }

  .email-input {
    margin-top: 0;
  }

  .alt-text {
    margin-top: 20px;
    color: ${colors.black};
    text-align: center;
    font-size: 12px;
    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
    span {
      color: ${colors.iceBlue};
      font-weight: 500;
    }
  }

  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 26px;

    button {
      width: 280px;
      padding: 12px 20px;
      color: ${colors.white};
      background-color: ${colors.iceBlue};
      border-radius: 4px;
      border: none;
      font-size: 16px;
      font-weight: 500;

      :focus {
        outline: none;
      }
    }
  }

  .terms {
    margin: 40px 0px 0px;
    width: 100%;
    text-align: center;
    font-weight: 400;
    font-size: 13px;
    @media only screen and (min-width: 768px) {
      font-size: 18px;
      margin: 60px 0px 0px;
    }
    span {
      cursor: pointer;
      a {
        color: ${colors.iceBlue};
      }
    }
  }

  .profile-img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em 0;

    .image-wrapper {
      width: 80px;
      height: 80px;
    }
  }
  .profile-input-wrapper {
    input {
      border: none !important;
      border: 1px solid ${colors.darkBrown} !important;
      border-radius: 5px !important;
    }
    .profile-group {
      @media only screen and (min-width: 768px) {
        display: flex;
        width: 100%;
        justify-content: space-between;

        .input-container {
          width: 48%;
        }
      }
    }
  }
  .fields-wrapper {
    padding-bottom: 2em;

    .select-input {
      padding: 14px 0px;
    }
  }
`;

export const IceBlueSpan = styled.span<{ isLink?: boolean }>`
  color: ${colors.iceBlue};
  cursor: ${(props) => (props.isLink ? 'pointer' : 'default')};
  font-size: 14px;
`;

export const RegisterContainer = styled.div`
  margin: 0.5em 0;
  padding: 0 0.5em;
  .line {
    display: none;
    width: 100%;
    height: 1px;
    background-color: ${colors.iceBlue};
    margin: 60px 0 0;
  }
  .patient-corner,
  .organization-corner {
    margin: 2em 0;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 2em;
    position: relative;

    .line {
      display: block;
      width: 1px;
      height: 78%;
      position: absolute;
      top: 0.5%;
      left: 50%;
    }
    .patient-corner,
    .organization-corner {
      margin: 0;
      width: 45%;
    }
  }
`;

export const AuthSelectWrapper = styled.select`
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid ${colors.iceBlue};
  padding: 5px 5px;
  border-radius: 5px;
`;
