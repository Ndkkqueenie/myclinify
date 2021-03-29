import { useLazyQuery } from '@apollo/client';
import {
  dischargeInitialValues,
  transferInitialValues,
  transfusionInitialValues,
} from 'dashboard-app/admission/constants';
import { initialDispenseDetail } from 'dashboard-app/medication/constants';
import {
  FETCH_BLOOD_TRANSFUSIONS,
  FETCH_DISCHARGE_PATIENTS,
  FETCH_TRANSFER_PATIENTS,
} from 'dashboard-app/queries/admission';
import { FETCH_DISPENSE_DETAILS } from 'dashboard-app/queries/medication';

export default ({ setInputs, inputs, id }) => {
  const [
    fetchTransferPatients,
    { loading: fetchingPatientTransfers, error: errorFetchingPatientTransfers },
  ] = useLazyQuery(FETCH_TRANSFER_PATIENTS, {
    onCompleted: (data) =>
      setInputs({
        ...inputs,
        transferPatients: data?.admissionTransferPatients?.length
          ? data?.admissionTransferPatients
          : [transferInitialValues],
      }),
    variables: { parentRecordId: id },
    fetchPolicy: 'cache-and-network',
  });

  const [
    fetchDischargePatients,
    { loading: fetchingDischargePatients, error: errorFetchingDischargePatients },
  ] = useLazyQuery(FETCH_DISCHARGE_PATIENTS, {
    onCompleted: (data) => {
      setInputs({
        ...inputs,
        dischargePatients: data?.admissionDischargePatients?.length
          ? data?.admissionDischargePatients
          : [dischargeInitialValues],
      });
    },
    variables: { parentRecordId: id },
    fetchPolicy: 'cache-and-network',
  });

  const [
    fetchBloodTransfusions,
    { loading: fetchingBloodTransfusions, error: errorFetchingBloodTransfusions },
  ] = useLazyQuery(FETCH_BLOOD_TRANSFUSIONS, {
    onCompleted: (data) =>
      setInputs({
        ...inputs,
        bloodTransfusions: data?.admissionBloodTransfusions?.length
          ? data?.admissionBloodTransfusions
          : [transfusionInitialValues],
      }),
    variables: { parentRecordId: id },
    fetchPolicy: 'cache-and-network',
  });

  const [
    fetchDispenseDetails,
    { loading: fetchingDispenseDetails, error: errorfetchingDispenseDetails },
  ] = useLazyQuery(FETCH_DISPENSE_DETAILS, {
    onCompleted: (data) =>
      setInputs({
        ...inputs,
        dispenseDetails: data?.getDispenseDetails?.length
          ? data?.getDispenseDetails
          : [initialDispenseDetail],
      }),
    variables: { parentRecordId: id },
    fetchPolicy: 'cache-and-network',
  });

  type SubRecordsType =
    | 'admissionTransferPatients'
    | 'admissionBloodTransfusions'
    | 'admissionDischargePatients'
    | 'medicationDispenseDetails';
  const fetchSubRecords = (type: SubRecordsType) => {
    const subRecordsMapper = {
      admissionTransferPatients: fetchTransferPatients,
      admissionDischargePatients: fetchDischargePatients,
      admissionBloodTransfusions: fetchBloodTransfusions,
      medicationDispenseDetails: fetchDispenseDetails,
    };
    const fetchAction = subRecordsMapper[type];
    fetchAction();
  };

  const fetchingSubRecords =
    fetchingPatientTransfers ||
    fetchingDischargePatients ||
    fetchingBloodTransfusions ||
    fetchingDispenseDetails;
  const errorFetchingSubRecords =
    errorFetchingBloodTransfusions ||
    errorFetchingDischargePatients ||
    errorfetchingDispenseDetails ||
    errorFetchingPatientTransfers;

  return {
    fetchSubRecords,
    errorFetchingSubRecords,
    fetchingSubRecords,
  };
};
