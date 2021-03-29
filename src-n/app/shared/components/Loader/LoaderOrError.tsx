import colors from '../utils/colors';
import React, { FC } from 'react';
import { PulseLoader } from 'react-spinners';
import { RecordForm } from '../Form/FormWrapper';
import Message from '../Message';
import './recordHistory.scss';

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
