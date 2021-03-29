import { WAITING_LIST_FIELDS } from 'dashboard-app/queries/waitingList';
import { CheckInPatient } from 'graphql-types/CheckInPatient';
import { WaitingListFilterInput } from 'graphql-types/globalTypes';

interface AddWaiterResourceToCacheProps {
  cache: any;
  filterOptions: WaitingListFilterInput;
  clearAction?: () => void;
  data: CheckInPatient;
}

const addWaiterResourceToCache = ({
  cache,
  filterOptions,
  data,
  clearAction = () => {},
}: AddWaiterResourceToCacheProps): void => {
  cache.modify({
    fields: {
      waitingList: (existingWaitingListRefs = { list: [], totalCount: 0 }, { readField }) => {
        const newWaitingListRef = cache.writeFragment({
          data: data?.addPatientToWaitingList,
          fragment: WAITING_LIST_FIELDS,
          variables: { filterOptions },
        });

        if (
          existingWaitingListRefs.list.some(
            (ref) => readField('id', ref) === data?.addPatientToWaitingList?.id,
          )
        )
          return existingWaitingListRefs;

        return {
          list: [...existingWaitingListRefs.list, newWaitingListRef],
          totalCount: existingWaitingListRefs.totalCount + 1,
        };
      },
    },
  });
  clearAction();
};

export default addWaiterResourceToCache;
