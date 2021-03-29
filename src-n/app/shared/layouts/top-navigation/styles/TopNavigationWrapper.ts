import styled from 'styled-components';
import colors from 'dashboard-app/utils/colors';

const TopNavigationWrapper = styled.div`
  padding-top: 14px;
  padding-bottom: 14px;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: 25px;
    padding-left: 25px;
  }

  @media (min-width: 992px) {
    padding-right: 32px;
    padding-left: 32px;
  }
  background-color: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.lightGrey};
  top: 0px;
  height: 72px;

  position: fixed;
  z-index: 200;
  width: 100%;
  @media (min-width: 576px) {
    left: 5rem;
    width: calc(100% - 5rem);
  }
  @media (min-width: 992px) {
    left: 260px;
    width: calc(100% - 260px);
  }

  .page-name {
    font-size: 25px;
    font-weight: 600;
  }

  .profile-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .left {
      text-align: right;
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      justify-content: flex-end;

      .add-button {
      }

      .profile-content {
        margin-left: 15px;
        display: flex;
        flex-direction: column;

        .heading {
          font-weight: 500;
          font-size: 16px;
        }

        .text {
          font-size: 12px;
          font-weight: 300;
        }
      }
    }

    .right {
      margin-left: 20px;
      .image-wrapper {
        height: 40px;
        width: 40px;
        background-color: #ffffff;
        color: #fff;
        border-radius: 50%;
        border: 2px solid ${colors.iceBlue};
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export default TopNavigationWrapper;
