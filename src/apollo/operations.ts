import { gql } from '@apollo/client';
import { InAppCache, inAppDefaults } from './cache';

export const GET_APP_DATA = gql`
  query GetAppData {
    appData @client {
      isMobile
      isExpanded
      pageTitle
      patientIsSelected
      patientHasAllergies
      creator
    }
  }
`;

export const setAppData = (update: InAppCache) => {
  const settings = inAppDefaults();
  const newSettings = { ...settings, ...update };
  return inAppDefaults(newSettings);
};

export const setTitle = (pageTitle: string) => {
  const settings = inAppDefaults();
  const newSettings = { ...settings, pageTitle };
  inAppDefaults(newSettings);
};
