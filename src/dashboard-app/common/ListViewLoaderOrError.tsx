import colors from 'dashboard-app/utils/colors';
import React from 'react';
import { PulseLoader } from 'react-spinners';
import Message from './Message';

const ListViewLoaderOrError = ({ error, isInitialFetch, loading }) => (
  <>
    {error && (
      <Message>
        <p>An error occured, please check your connection and try again</p>
      </Message>
    )}

    {isInitialFetch && (
      <Message>
        <PulseLoader loading={loading} color={colors.darkBlue} />
      </Message>
    )}
  </>
);

export default ListViewLoaderOrError;
