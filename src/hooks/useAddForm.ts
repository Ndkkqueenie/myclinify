import { useQuery } from '@apollo/client';
import cache from 'apollo/cache';
import {
  ADD_ADMISSION,
  ARCHIVE_ADMISSIONS,
  DELETE_ADMISSIONS,
  FETCH_ADMISSION,
  FETCH_ADMISSIONS,
  UPDATE_ADMISSION,
} from 'dashboard-app/queries/admission';
import { GET_USER } from 'dashboard-app/queries/user';
import formatLinkedRecords from 'dashboard-app/utils/formatLinkedRecords';
import formatDataOnEdit from 'dashboard-app/utils/onEditDataFormatter';
import { useHistory, useLocation } from 'react-router-dom';
import useAddRecord from './useAddRecord';
import useDeleteRecord from './useDeleteRecord';
import { useModal } from './useModal';
import useOnChange from './useOnChange';
import useOnFormProps from './useOnFormProps';
import useSubRecordsLazyQueries from './useSubRecordsLazyQueries';
import useUpdateRecord from './useUpdateRecord';

export default ({
  initialState,
  fetchQuery = FETCH_ADMISSION,
  addQuery = ADD_ADMISSION,
  updateQuery = UPDATE_ADMISSION,
  cacheUpdateQuery = FETCH_ADMISSIONS,
  deleteQuery = DELETE_ADMISSIONS,
  archiveQuery = ARCHIVE_ADMISSIONS,
  icon = '',
  filterOptions,
  pluralRecordType = '',
  isOnForm = true,
  defaultId = '',
  clearAction = () => {},
}) => {
  const { pathname, search } = useLocation();
  const { push } = useHistory();
  const splittedPath = pathname.split('/');
  const id = defaultId || splittedPath[3];
  const isEdit = id !== 'add';
  const iconLowercase = `${icon.charAt(0).toLowerCase()}${icon.slice(1)}`;
  const { isShown: showModalPrompt, toggle } = useModal();

  const {
    inputs,
    handleInputChange,
    clearInputs,
    handleMultipleFieldsChange,
    setInputs,
  } = useOnChange(initialState);

  let clinifyId = '';
  try {
    const cacheData: any = cache.readQuery({ query: GET_USER });
    clinifyId = cacheData?.user?.defaultProfile?.clinifyId;
  } catch (error) {
    clinifyId = '';
  }

  const formatData = (editData: Record<string, any>) => {
    const data = formatDataOnEdit({ ...editData }, initialState);
    formatLinkedRecords(data);
    return data;
  };

  const skipInitialFetch = !isEdit || !isOnForm;
  const { loading: fetchingData, error: errorFetching } = useQuery(fetchQuery, {
    variables: {
      id,
    },
    onCompleted: (editData) => {
      if (editData) {
        return setInputs(formatData(editData[iconLowercase]));
      }
    },
    skip: skipInitialFetch,
    fetchPolicy: icon === 'Admission' ? 'network-only' : 'cache-first',
    nextFetchPolicy: 'cache-first',
  });

  const { addRecordAction, adding } = useAddRecord(
    addQuery,
    icon,
    cacheUpdateQuery,
    filterOptions,
    clearInputs,
    pluralRecordType,
    isOnForm ? 'Adde' : 'Duplicate',
  );

  const { updateRecordAction, updating } = useUpdateRecord(
    updateQuery,
    icon,
    cacheUpdateQuery,
    filterOptions,
    pluralRecordType,
    (data) => {
      let newInputs = formatData(data);
      if (icon === 'Medication')
        newInputs = { ...newInputs, dispenseDetails: inputs.dispenseDetails };
      if (icon === 'Admission')
        newInputs = {
          ...newInputs,
          dischargePatients: inputs.dischargePatients,
          transferPatients: inputs.transferPatients,
          admissionNotes: inputs.admissionNotes,
          nurseAdmissionNotes: inputs.nurseAdmissionNotes,
          bloodTransfusions: inputs.bloodTransfusions,
        };
      setInputs(newInputs);
    },
  );

  const { deleteRecordAction, deleting } = useDeleteRecord(
    deleteQuery,
    icon,
    cacheUpdateQuery,
    filterOptions,
    isOnForm ? () => push(`/patient/${iconLowercase}`) : () => {},
    pluralRecordType,
    'delete',
    toggle,
  );

  const { deleteRecordAction: archiveRecordAction, deleting: archiving } = useDeleteRecord(
    archiveQuery,
    icon,
    cacheUpdateQuery,
    filterOptions,
    clearAction,
    pluralRecordType,
    'archive',
  );

  const duplicateRecord = (input: any) => {
    const inputToSend = formatData(input);
    addRecordAction({ ...inputToSend, clinifyId });
  };

  const {
    fetchSubRecords,
    errorFetchingSubRecords,
    fetchingSubRecords,
  } = useSubRecordsLazyQueries({ inputs, id, setInputs });

  const {
    setStartEdit,
    actionText,
    action,
    readOnly,
    disableActionButton,
    writeAllowed,
    startEdit,
  } = useOnFormProps({
    isEdit,
    addRecordAction,
    updateRecordAction,
    clinifyId,
    updating,
    deleting,
    adding,
    id,
    search,
    inputs,
    setInputs,
    formName: icon,
  });

  return {
    writeAllowed,
    startEdit,
    isEdit,
    setStartEdit,
    handleInputChange,
    handleMultipleFieldsChange,
    inputs,
    actionText,
    action,
    id,
    readOnly,
    disableActionButton,
    deleteRecordAction,
    duplicateRecord,
    archiveRecordAction,
    archiving,
    fetchingData,
    errorFetching,
    showModalPrompt,
    toggle,
    fetchingSubRecords,
    fetchSubRecords,
    errorFetchingSubRecords,
    clinifyId,
  };
};
