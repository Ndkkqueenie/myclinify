import { InMemoryCache, makeVar } from '@apollo/client';
import { userType } from 'dashboard-app/utils/authTracker';
import { RecordCreator, UserType } from 'graphql-types/globalTypes';

export type InAppCache = {
  isMobile?: boolean;
  isExpanded?: boolean;
  pageTitle?: string;
  patientIsSelected?: boolean;
  creator?: RecordCreator;
  patientHasAllergies?: boolean;
};

export const inAppDefaults = makeVar<InAppCache>({
  isMobile: false,
  isExpanded: true,
  pageTitle: '',
  patientIsSelected:
    userType() === UserType.OrganizationDoctor && sessionStorage.getItem('patientDetails') !== null,
  creator: RecordCreator.SELF,
  patientHasAllergies: false,
});

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        user: {
          merge: true,
        },
        appData: {
          read() {
            return inAppDefaults();
          },
        },
      },
    },
  },
});
