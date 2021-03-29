import React, { FC } from 'react';
import './styles/avatarWithRing.scss';

const PROFILE_AVATAR = '/images/profile-image.png';

interface DefaultImageProps {
  profileImage: string;
}

const DefaultProfileImageWithBlueBorder: FC<DefaultImageProps> = ({ profileImage }) => (
  <div className="image-wrapper">
    <img
      src={profileImage || PROFILE_AVATAR}
      onError={(e: any) => {
        e.target.onerror = null;
        e.target.src = PROFILE_AVATAR;
      }}
      alt="avatar"
      className="rounded img-fluid"
    />
  </div>
);

export default DefaultProfileImageWithBlueBorder;
