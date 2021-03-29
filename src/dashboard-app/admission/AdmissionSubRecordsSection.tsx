import { ApolloError } from '@apollo/client';
import { OutlineIconButton } from 'dashboard-app/common/Button';
import BloodTransfusionIcon from 'dashboard-app/common/icons/BloodTransfusionIcon';
import DischargeIcon from 'dashboard-app/common/icons/DischargeIcon';
import TransferIcon from 'dashboard-app/common/icons/TransferIcon';
import Message from 'dashboard-app/common/Message';
import SubRecord from 'dashboard-app/common/SubRecord';
import { ButtonRow } from 'dashboard-app/common/Wrapper';
import colors from 'dashboard-app/utils/colors';
import React, { FC, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import ReactTooltip from 'react-tooltip';
import './styles/subRecords.scss';

type SubRecordsType =
  | 'admissionTransferPatients'
  | 'admissionBloodTransfusions'
  | 'admissionDischargePatients'
  | 'medicationDispenseDetails';

interface SubRecordsSectionProps {
  handleInputChange: (field: string, value: any) => void;
  handleMultipleFieldsChange: (field: string, name: string, value: any, index: number) => void;
  readOnly: boolean;
  isEdit: boolean;
  parentRecordId: string;
  fetchSubRecords: (type: SubRecordsType) => void;
  fetchingSubRecords: boolean;
  errorFetchingSubRecords?: ApolloError;
  inputs: any;
  type: string;
}

const AdmissionSubRecordsSection: FC<SubRecordsSectionProps> = ({
  isEdit,
  parentRecordId,
  readOnly,
  fetchSubRecords,
  errorFetchingSubRecords,
  fetchingSubRecords,
  handleInputChange,
  handleMultipleFieldsChange,
  inputs,
}) => {
  const [isDischarge, setDischarge] = useState<boolean>(false);
  const [isTransfer, setTransfer] = useState<boolean>(false);
  const [isTransfusion, setTransfusion] = useState<boolean>(false);

  if (!isEdit) return null;

  return (
    <div>
      <ButtonRow>
        <div className="d-flex w-100">
          <div data-tip="Discharge Patient" data-for="admissionTip">
            <OutlineIconButton
              withIcon
              noMargin
              autoWidth
              color={colors.lightGreen}
              onClick={() => {
                const newStatus = !isDischarge;
                if (newStatus) fetchSubRecords('admissionDischargePatients');
                setDischarge(newStatus);
              }}
              icon={<DischargeIcon />}
            />
          </div>
          <div data-tip="Transfer Patient" data-for="admissionTip">
            <OutlineIconButton
              withIcon
              noMargin
              autoWidth
              onClick={() => {
                const newStatus = !isTransfer;
                if (newStatus) fetchSubRecords('admissionTransferPatients');
                setTransfer(newStatus);
              }}
              icon={<TransferIcon />}
            />
          </div>
          <div data-tip="Blood Transfusion" data-for="admissionTip">
            <OutlineIconButton
              withIcon
              noMargin
              autoWidth
              color={colors.bloodRed}
              onClick={() => {
                const newStatus = !isTransfusion;
                if (newStatus) fetchSubRecords('admissionBloodTransfusions');
                setTransfusion(newStatus);
              }}
              icon={<BloodTransfusionIcon />}
            />
          </div>
          <div className="subrecords-loader">
            {fetchingSubRecords && <PulseLoader size={6} color={colors.darkBlue} />}
          </div>
          <ReactTooltip
            id="admissionTip"
            place="top"
            className="button-tooltip"
            type="light"
            effect="solid"
          />
        </div>
      </ButtonRow>

      {isDischarge && (
        <SubRecord
          parentRecordId={parentRecordId}
          handleInputChange={handleInputChange}
          inputs={inputs.dischargePatients}
          readOnly={readOnly}
          defaultIsEdit={isEdit}
          handleMultipleFieldsChange={handleMultipleFieldsChange}
          type="dischargePatients"
        />
      )}

      {isTransfer && (
        <SubRecord
          parentRecordId={parentRecordId}
          handleInputChange={handleInputChange}
          inputs={inputs.transferPatients}
          readOnly={readOnly}
          defaultIsEdit={isEdit}
          handleMultipleFieldsChange={handleMultipleFieldsChange}
          type="transferPatients"
        />
      )}

      {isTransfusion && (
        <SubRecord
          parentRecordId={parentRecordId}
          handleInputChange={handleInputChange}
          inputs={inputs.bloodTransfusions}
          readOnly={readOnly}
          defaultIsEdit={isEdit}
          handleMultipleFieldsChange={handleMultipleFieldsChange}
          type="bloodTransfusions"
        />
      )}
      {errorFetchingSubRecords && <Message>An Error Occured, Please Try Again.</Message>}
    </div>
  );
};

export default AdmissionSubRecordsSection;
