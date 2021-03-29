import React from 'react';
import styled from 'styled-components';

export const ImageWrapper = styled.div`
  height: 40px;
  width: 40px;
  background-color: #ffffff;
  color: #fff;
  border-radius: 50%;
  border: 1px solid #00abe2;
  overflow: hidden;
`;

export interface ProfileImageAvatarProps {
  profileUrl: string;
}

const ProfileImageAvatar: React.FC<ProfileImageAvatarProps> = ({ profileUrl }) => {
  return (
    <ImageWrapper>
      <img src={profileUrl} alt="default" width="40" />
    </ImageWrapper>
  );
};

export default ProfileImageAvatar;
