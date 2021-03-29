export const formatTableDateTime = ({ value }: any) => {
  if (!value) return '--';
  return `${new Date(value).toLocaleDateString()} ${new Date(value).toLocaleTimeString('en-us')}`;
};

export const formatTableTime = ({ value }: any) => {
  if (!value) return '--';
  return `${new Date(value).toLocaleTimeString('en-us')}`;
};

export const formatTableData = ({ value }: any) => value || '--';

export const formatFieldData = (value: any, path) =>
  value ? `${value?.[0]?.[path]}${value?.[1]?.[path] ? ', ...' : ''}` || '--' : '--';

export const formatFieldMultipleDateTime = (value: any, path) =>
  value
    ? `${new Date(value?.[0]?.[path]).toLocaleDateString()} ${new Date(
        value?.[0]?.[path],
      ).toLocaleTimeString('en-us')}`
    : '--';
