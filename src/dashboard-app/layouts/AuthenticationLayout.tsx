import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const AuthenticationWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.lightGrey};
`;

export interface AuthenticationLayoutProps {
  children: React.ReactNode;
}

const AuthenticationLayout: React.FC<AuthenticationLayoutProps> = ({ children }) => {
  return <AuthenticationWrapper>{children}</AuthenticationWrapper>;
};

export default AuthenticationLayout;
