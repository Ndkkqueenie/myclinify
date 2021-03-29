import React, { FC } from 'react';
import useICD from 'hooks/useICD';
import InputDropdown from './InputDropdown';
import MultiGroupAction from './MultiGroupActions';

interface IcdInputProps {
  handleInputChange: (fieldPath: string, value: string) => void;
  placeholder: string;
  value?: string | null;
  readOnly?: boolean;
  fieldPath: string;
  label?: string;
  isRequired?: boolean;
}

const IcdInput: FC<IcdInputProps> = ({
  handleInputChange,
  placeholder,
  value,
  readOnly,
  fieldPath,
  label,
  isRequired,
}) => {
  const { search, results, loading } = useICD();

  const formattedResults =
    results.length > 0 ? results.map(({ code, title }) => `${code} - ${title}`) : results;

  return (
    <InputDropdown
      readOnly={readOnly}
      fieldPath={fieldPath}
      label={label}
      placeholder={placeholder}
      handleInputChange={(fieldPath, value) => {
        handleInputChange(fieldPath, value);
        search(value);
      }}
      options={formattedResults}
      value={value || ''}
      fullWidth
      isRequired={isRequired}
      loading={loading}
      isICD
    />
  );
};

interface MultiIcdInputProps {
  onChange: (value: string[]) => void;
  values?: string[];
  placeholder: string;
  readOnly?: boolean;
  fieldPath: string;
  label: string;
  isRequired?: boolean;
}

export const MultiIcdInput: FC<MultiIcdInputProps> = ({
  onChange,
  placeholder,
  values = [''],
  readOnly,
  fieldPath,
  label,
  isRequired,
}) => {
  const icdValues = values?.length ? values : [''];
  return (
    <>
      {icdValues.map((v, idx) => (
        <React.Fragment key={`multi-icd-${idx}`}>
          <IcdInput
            handleInputChange={(_, value) => {
              if (onChange) {
                const newUpdate = [...icdValues];
                newUpdate[idx] = value;
                onChange(newUpdate);
              }
            }}
            readOnly={readOnly}
            fieldPath={fieldPath}
            placeholder={placeholder}
            value={v}
            label={!idx ? label : undefined}
            isRequired={isRequired}
          />
          {!readOnly && (
            <MultiGroupAction
              items={icdValues}
              index={idx}
              initialItem=""
              onClick={(value) => {
                if (onChange) onChange(value);
              }}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default IcdInput;
