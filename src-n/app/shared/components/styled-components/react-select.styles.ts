import colors from '../utils/colors';

export default {
  control: (styles, { isDisabled }) => ({
    ...styles,
    backgroundColor: isDisabled ? colors.lightGrey : colors.white,
    boxShadow: 'none',
    maxHeight: '70px',
    overflow: 'auto',
    fontSize: '14px',
  }),
  input: (styles, { isDisabled }) => ({
    ...styles,
    color: isDisabled ? colors.disabled : colors.black,
  }),
  singleValue: (styles, { isDisabled }) => ({
    ...styles,
    color: isDisabled ? colors.disabled : colors.black,
  }),
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: colors.iceBlue,
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: colors.white,
    fontSize: '14px',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: colors.white,
    backgroundColor: colors.transparent,
    ':hover': {
      color: colors.darkBlue,
    },
  }),
};

export const theme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: colors.secondaryBg,
    primary: colors.darkBlue,
  },
});
