import { ApolloError } from '@apollo/client';

const errorHandler = (error: ApolloError) => {
  return error.message || 'An Error Occured';
};

export default errorHandler;
