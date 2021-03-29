import colors from 'dashboard-app/utils/colors';
import React, { FC } from 'react';
import { PulseLoader } from 'react-spinners';
import { RecordForm } from './FormWrapper';
import Message from './Message';
import './styles/recordHistory.scss';

interface LoaderOrErrorProps {
  loading?: boolean;
}

const LoaderOrError: FC<LoaderOrErrorProps> = ({ loading }) => (
  <RecordForm clear>
    <Message>
      {loading ? (
        <PulseLoader loading color={colors.darkBlue} />
      ) : (
        'An error occured, please refresh page or go back to record list.'
      )}
    </Message>
  </RecordForm>
);

export default LoaderOrError;
