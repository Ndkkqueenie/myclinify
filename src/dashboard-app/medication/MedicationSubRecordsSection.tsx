import { ApolloError } from '@apollo/client';
import { OutlineIconButton } from 'dashboard-app/common/Button';
import DispenseMedicationIcon from 'dashboard-app/common/icons/DispenseMedication';
import Message from 'dashboard-app/common/Message';
import SubRecord from 'dashboard-app/common/SubRecord';
import { ButtonRow } from 'dashboard-app/common/Wrapper';
import colors from 'dashboard-app/utils/colors';
import React, { FC } from 'react';
import ReactTooltip from 'react-tooltip';

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

const MedicationSubRecordsSection: FC<SubRecordsSectionProps> = ({
  isEdit,
  parentRecordId,
  readOnly,
  fetchSubRecords,
  errorFetchingSubRecords,
  handleInputChange,
  handleMultipleFieldsChange,
  inputs,
}) => {
  const [isDispense, setDispense] = React.useState(false);
  if (!isEdit) return null;

  return (
    <div>
      <ButtonRow>
        <div className="d-flex w-100">
          <div data-tip="Dispense Medication" data-for="medicationTip">
            <OutlineIconButton
              withIcon
              noMargin
              autoWidth
              color={colors.brightYellow}
              onClick={() => {
                fetchSubRecords('medicationDispenseDetails');
                setDispense(!isDispense);
              }}
              icon={<DispenseMedicationIcon />}
            />
          </div>
          <ReactTooltip
            id="medicationTip"
            place="top"
            className="button-tooltip"
            type="light"
            effect="solid"
          />
        </div>
      </ButtonRow>

      {isDispense ? (
        <SubRecord
          parentRecordId={parentRecordId}
          handleInputChange={handleInputChange}
          inputs={inputs.dispenseDetails}
          readOnly={readOnly}
          close={() => setDispense(false)}
          defaultIsEdit={isEdit}
          handleMultipleFieldsChange={handleMultipleFieldsChange}
          type="dispenseDetails"
        />
      ) : null}
      {errorFetchingSubRecords && <Message>An Error Occured, Please Try Again.</Message>}
    </div>
  );
};

export default MedicationSubRecordsSection;
