import { ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

export default onError(({ networkError, graphQLErrors }) => {
  // eslint-disable-next-line no-console
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const cleanTypeName = new ApolloLink((operation, forward) => {
  const unwantedProps = [
    '__typename',
    'secondId',
    'id',
    'updatedDate',
    'updatedBy',
    'createdBy',
    'createdDate',
    'memberStatus',
    'nurseAdmissionNotes',
  ];
  if (operation.variables.input) {
    const omitTypename = (key, value) => (unwantedProps.includes(key) ? undefined : value);
    operation.variables.input = JSON.parse(JSON.stringify(operation.variables.input), omitTypename);
    if (operation?.variables?.input?.duration) {
      const durationSplitted = operation?.variables?.input?.duration.split(':');
      durationSplitted.forEach((item, i) => {
        if (item.length === 0) durationSplitted[i] = '0';
      });
      operation.variables.input.duration = durationSplitted.join(':');
    }
  }
  if (operation.operationName === 'UpdateWaiter') {
    const omitTypename = (key, value) => (['patient'].includes(key) ? undefined : value);
    operation.variables.input = JSON.parse(JSON.stringify(operation.variables.input), omitTypename);
  }
  if (operation.variables.hmoProfileInput) {
    const omitTypename = (key, value) =>
      unwantedProps.slice(0, 2).includes(key) ? undefined : value;
    operation.variables.hmoProfileInput = JSON.parse(
      JSON.stringify(operation.variables.hmoProfileInput),
      omitTypename,
    );
  }
  return forward(operation).map((data) => {
    return data;
  });
});
