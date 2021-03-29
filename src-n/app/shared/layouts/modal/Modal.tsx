import Button from 'dashboard-app/common/Button';
import colors from 'dashboard-app/utils/colors';
import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';
import CloseButton from './icons/CloseButton';

export const Wrapper = styled.div<{ isAddPage?: boolean; isAuthentication?: boolean }>`
  position: fixed;
  top: 50%;
  margin-top: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  width: inherit;
  min-width: 90%;
  outline: 0;
  overflow-y: auto;
  max-height: ${({ isAddPage }) => (isAddPage ? '850px' : '700px')};
  display: ${({ isAuthentication }) => (isAuthentication ? 'flex' : 'block')};
  justify-content: center;

  @media only screen and (min-width: 768px) {
    min-width: 60%;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${colors.backdrop};
  z-index: 999;
  overflow-y: scroll;
`;

export const StyledModal = styled.div`
  z-index: 9900;
  background: ${colors.white};
  position: relative;
  margin: auto;
  max-width: 90vw;
`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  border-bottom: 1px solid ${colors.fadedGrey};
  justify-content: space-between;

  .more-action {
    margin-bottom: 8px;
    margin-right: 4px;
    @media (min-width: 568px) {
      margin-right: 0;
      margin-bottom: 0;
    }
  }

  .title {
    text-align: center;
    align-self: center;
    color: ${colors.darkBlue};
    font-weight: 600;
    font-size: 16px;
    order: -1;
    width: 100%;
    margin-bottom: 8px;
    @media (min-width: 568px) {
      width: auto;
      margin-bottom: 0;
      order: 0;
    }
  }

  .close-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-self: center;
    margin-bottom: 8px;
    @media (min-width: 568px) {
      margin-bottom: 0;
    }
    .close-wrapper {
      cursor: pointer;
    }

    svg {
      cursor: pointer;
      margin-left: 15px;
    }
  }
`;

export const HeaderText = styled.div`
  align-self: center;
  color: ${colors.darkBlue};
  font-weight: 600;
  font-size: 16px;
`;

export const Content = styled.div<{ widerWidth?: boolean }>`
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${colors.white};
  width: ${({ widerWidth }) => (widerWidth ? '100%' : 'auto')};

  .auth-close-button {
    text-align: right;
    padding: 5px 5px 0px 0px;

    svg {
      cursor: pointer;
    }
  }
`;

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText?: string;
  showExtraActions?: boolean;
  isAddPage?: boolean;
  handleDone: () => void;
  showAddNew?: boolean;
  handleAddNew?: () => void;
  addButtonText?: string;
  isAuthentication?: boolean;
  selectedRecordType?: string;
  showDone?: boolean;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  isAuthentication,
  hide,
  modalContent,
  headerText,
  showExtraActions,
  handleDone,
  isAddPage,
  showDone = true,
}) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isShown) {
      hide();
    }
  };

  useEffect(() => {
    isShown ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
    document.addEventListener('keydown', onKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  });

  const modal = (
    <>
      <Backdrop />
      <FocusLock>
        <Wrapper
          aria-modal
          aria-labelledby={headerText}
          tabIndex={-1}
          role="dialog"
          isAddPage={isAddPage}
          isAuthentication={isAuthentication}
        >
          {!isAuthentication && (
            <StyledModal>
              <Header>
                {showExtraActions && (
                  <>
                    <div className="more-action" />
                    <div className="title">{headerText}</div>
                    <div className="close-wrapper">
                      {showDone && <Button text="Done" onClick={handleDone} />}
                      <div className="close-button" onClick={() => hide()}>
                        <CloseButton />
                      </div>
                    </div>
                  </>
                )}
              </Header>
              <Content widerWidth={!isAddPage}>{modalContent}</Content>
            </StyledModal>
          )}
          {isAuthentication && (
            <Content>
              <div className="close-button auth-close-button" onClick={() => hide()}>
                <CloseButton />
              </div>
              {modalContent}
            </Content>
          )}
        </Wrapper>
      </FocusLock>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
