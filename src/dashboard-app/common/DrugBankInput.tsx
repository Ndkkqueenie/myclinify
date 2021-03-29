import axios from 'axios';
import { Modal } from 'dashboard-app/layouts/modal/Modal';
import { useModal } from 'hooks/useModal';
import { baseUrl } from 'index';
import debounce from 'lodash.debounce';
import React, { FC, useCallback, useState } from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';
import Loader from 'react-spinners/PulseLoader';
import Asterisks from './icons/Asterisks';
import Message from './Message';
import './styles/drugDetails.scss';
import customStyles, { theme } from './styles/react-select.styles';
import { StyledInputWrapper, StyledLabel } from './TextInput';

const DrugDetails = ({ data, loading }: any) => {
  return (
    <div className="drug-details">
      {/* <StyledLabel>Medication details</StyledLabel> */}
      <div className="content">
        <h3>DRUG DETAILS</h3>
        {loading && (
          <Message>
            <Loader size={7} />
          </Message>
        )}
        {!loading && !data && (
          <Message>
            <span>Unable to fetch data</span>
          </Message>
        )}
        {data && !loading && (
          <div className="wrapper">
            <div className="detail linked-drugs">
              <h5>
                <u>Linked Drugs</u>
              </h5>
              <div className="prescribable-names">
                <div className="info">
                  <span className="label">Drugs:</span>{' '}
                  <span>
                    {data?.linkedDrugs?.map(({ prescribableName }) => prescribableName).join(' ')}
                  </span>
                </div>
              </div>
            </div>

            <div className="detail linked-drugs">
              <h5>
                <u>Linked Drug concepts</u>
              </h5>
              <div className="prescribable-names">
                {data?.linkedConcepts?.map(({ level, name, route, form, strengths }) => (
                  <div className="info-group">
                    <div className="info">
                      <span className="label">Drug concepts:</span> <span>{name}</span>
                    </div>
                    <div className="info">
                      <span className="label">Level:</span> <span>{level}</span>
                    </div>
                    <div className="info">
                      <span className="label">Route:</span> <span>{route}</span>
                    </div>
                    <div className="info">
                      <span className="label">form:</span> <span>{form}</span>
                    </div>
                    <div className="info">
                      <span className="label">strengths:</span> <span>{strengths}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail linked-drugs">
              <h5>
                <u>Drug Categories</u>
              </h5>
              <div className="prescribable-names">
                {data?.drugCategories.map(({ name, description, categorizationKind }) => (
                  <div className="info-group">
                    <div className="info">
                      <span className="label">Categories:</span> <span>{name}</span>
                    </div>
                    <div className="kind">
                      <span className="label">kind:</span> <span>{categorizationKind}</span>
                    </div>
                    <div className="info">
                      <span className="label">Description:</span> <span>{description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail linked-drugs">
              <h5>
                <u>Linked Indications</u>
              </h5>
              <div className="prescribable-names">
                {data?.linkedIndications?.map(({ kind, condition }) => (
                  <div className="info-group">
                    <div className="info">
                      <span className="label">kind:</span> <span>{kind}</span>
                    </div>
                    <div className="info">
                      <span className="label">condition:</span> <span>{condition}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail linked-drugs">
              <h5>
                <u>Drug to drug interaction</u>
              </h5>
              <div className="prescribable-names">
                {data?.ddi?.map(
                  ({
                    management,
                    description,
                    extendedDescription,
                    ingredient,
                    affectedIngredient,
                    severity,
                    action,
                  }) => (
                    <div className="info-group">
                      <div className="info">
                        <span className="label">Ingredient:</span> <span>{ingredient}</span>
                      </div>
                      <div className="info">
                        <span className="label">Affected ingredient:</span>{' '}
                        <span>{affectedIngredient}</span>
                      </div>
                      <div className="info">
                        <span className="label">Description:</span> <span>{description}</span>
                      </div>
                      <div className="info">
                        <span className="label">Extended Description:</span>{' '}
                        <span>{extendedDescription}</span>
                      </div>
                      <div className="info">
                        <span className="label">Action:</span> <span>{action}</span>
                      </div>
                      <div className="info">
                        <span className="label">Severity:</span> <span>{severity}</span>
                      </div>
                      <div className="info">
                        <span className="label">Management:</span> <span>{management}</span>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="detail linked-drugs">
              <h5>
                <u>Linked Contraindications</u>
              </h5>
              <div className="prescribable-names">
                <div className="info">
                  <span className="label">Contraindications:</span>{' '}
                  <span>{data?.linkedContraindications?.map(({ name }) => name).join(' ')}</span>
                </div>
              </div>
            </div>

            <div className="detail linked-drugs">
              <h5>
                <u>Linked Boxed Warnings</u>
              </h5>
              <div className="prescribable-names">
                {data?.linkedBoxWarnings?.map(({ kind, recommendation, risk }) => (
                  <div className="info-group">
                    <div className="info">
                      <span className="label">kind:</span> <span>{kind}</span>
                    </div>
                    <div className="info">
                      <span className="label">risk:</span> <span>{risk}</span>
                    </div>
                    <div className="info">
                      <span className="label">recommendation:</span> <span>{recommendation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface DrugBankInputProps {
  onChange: (value: string) => void;
  placeholder: string;
  value?: string | null;
  readOnly?: boolean;
  label?: string;
  isRequired?: boolean;
  fullWidth?: boolean;
}

const DrugBankInput: FC<DrugBankInputProps> = ({
  onChange,
  placeholder,
  readOnly,
  label,
  isRequired,
  fullWidth,
  value,
}) => {
  const { toggle, isShown } = useModal();
  const [currentText, setCurrentText] = useState<string>('');
  const [detailsResponse, setDetailsResponse] = useState<any>(null);
  const [fetchingDetails, setFetchingDetails] = useState(false);

  const fetchDetails = async ({ value, id }: any) => {
    if (!readOnly) onChange(value);
    setFetchingDetails(true);
    toggle();
    const drugBankResourceMethod = 'GET';
    const baseDrugBankResourcePathQueries = `us/drugs/${id}`;
    const paths = [
      'products?per_page=2',
      'product_concepts?per_page=2',
      'categories?per_page=2',
      'indications?per_page=2',
      'ddi?per_page=2&severity=moderate',
      'contraindications?per_page=2',
      'boxed_warnings?per_page=2',
    ];

    const allDetails = paths.map((path) =>
      axios.get(
        `${baseUrl}/integrations/drug-bank/?drugBankResourcePathQueries=${baseDrugBankResourcePathQueries}/${path}&drugBankResourceMethod=${drugBankResourceMethod}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
          },
        },
      ),
    );

    const response = await Promise.all(allDetails);
    const arrayedResponse = response.map(({ data }) => data);
    const compactDetails = {
      linkedDrugs: arrayedResponse[0].map(({ prescribable_name }) => ({
        prescribableName: prescribable_name,
      })),
      linkedConcepts: arrayedResponse[1].map(({ name, level, route, form, strengths }) => ({
        name,
        level,
        route,
        form,
        strengths,
      })),
      drugCategories: arrayedResponse[2].map(({ name, description, categorization_kind }) => ({
        name,
        description,
        categorizationKind: categorization_kind,
      })),
      linkedIndications: arrayedResponse[3].map(({ kind, condition }) => ({
        kind,
        condition: condition?.name,
      })),
      ddi: arrayedResponse[4].map(
        ({
          management,
          description,
          extended_description,
          ingredient,
          affected_ingredient,
          action,
          severity,
        }) => ({
          management,
          description,
          extendedDescription: extended_description,
          ingredient: ingredient.name,
          affectedIngredient: affected_ingredient.name,
          action,
          severity,
        }),
      ),
      linkedContraindications: arrayedResponse[5].map(
        ({ patient_conditions }) => patient_conditions || [{ name: '' }],
      ),
      linkedBoxWarnings: arrayedResponse[6].map(({ kind, recommendation, risk }) => ({
        kind,
        recommendation,
        risk: risk ? risk?.name : '',
      })),
    };
    setFetchingDetails(false);
    setDetailsResponse(compactDetails);
  };

  const search = useCallback(
    debounce((inputValue, callback) => {
      if (!inputValue || inputValue.length < 3) {
        return callback([]);
      }
      const drugBankResourcePathQueries = `us/drug_names/simple?q=${inputValue}`;
      const drugBankResourceMethod = 'GET';
      axios
        .get(
          `${baseUrl}/integrations/drug-bank/?drugBankResourcePathQueries=${drugBankResourcePathQueries}&drugBankResourceMethod=${drugBankResourceMethod}`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
            },
          },
        )
        .then((res) =>
          callback(
            res?.data?.products?.map(({ name, ingredients }) => ({
              label: name,
              value: name,
              id: ingredients[0].drugbank_id,
            })),
          ),
        );
    }, 500),
    [],
  );

  return (
    <StyledInputWrapper fullWidth={fullWidth}>
      <StyledLabel disabled={readOnly}>
        {label}
        {isRequired && <Asterisks />}
      </StyledLabel>
      <AsyncCreatableSelect
        components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
        cacheOptions
        defaultOptions
        placeholder={placeholder}
        isLoading={false}
        loadOptions={search}
        inputValue={currentText}
        onInputChange={(value) => setCurrentText(value)}
        onChange={fetchDetails}
        value={value ? { label: value, value } : null}
        openMenuOnClick={false}
        isClearable={false}
        isDisabled={readOnly}
        formatCreateLabel={(value) => value}
        styles={customStyles}
        theme={theme}
      />
      <Modal
        modalContent={<DrugDetails data={detailsResponse} loading={fetchingDetails} />}
        isShown={isShown}
        showExtraActions
        isAuthentication
        hide={toggle}
        handleDone={() => {}}
      />
    </StyledInputWrapper>
  );
};

export default DrugBankInput;
