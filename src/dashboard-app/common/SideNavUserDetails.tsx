import React from 'react';
import styled from 'styled-components';
import ProfileImageAvatar from './ProfileImageAvatar';

export const MainWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  color: #ffffff;
  padding: 15px 30px;
`;

export const ImageWrapper = styled.div`
  height: 40px;
  width: 40px;
  background-color: #ffffff;
  color: #fff;
  border-radius: 50%;
  border: 1px solid #00abe2;
  overflow: hidden;
`;

export const NameAndId = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const Name = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: auto;
`;

export const Id = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
`;

export interface SideNavUserDetailsProps {
  username: string;
  profileImage: string;
  clinifyId: string;
}

const SideNavUserDetails: React.FC<SideNavUserDetailsProps> = ({
  username,
  profileImage,
  clinifyId,
}) => {
  return (
    <MainWrapper>
      <ProfileImageAvatar profileUrl={profileImage} />
      <NameAndId>
        <Name>{username}</Name>
        <Id>Clinify ID : {clinifyId}</Id>
      </NameAndId>
    </MainWrapper>
  );
};

export default SideNavUserDetails;
