import { useQuery } from '@apollo/client';
import { GET_APP_DATA, setAppData } from 'apollo/operations';
import { RecordCreator } from 'graphql-types/globalTypes';
import React from 'react';
import './styles/globalRecordToggler.scss';
import ToggleButton from './ToggleButton';

const GlobalRecordToggler = () => {
  const {
    data: {
      appData: { creator },
    },
  } = useQuery(GET_APP_DATA);

  const creatorInverseMapper = {
    SELF: 'OTHERS',
    OTHERS: 'SELF',
  };

  const creatorText = creator === RecordCreator.SELF ? 'Patient' : 'Doctor';

  return (
    <div className="toggler_wrapper">
      <div className="global_record_toggler">
        <div className="switch">
          <ToggleButton
            onChange={() => setAppData({ creator: creatorInverseMapper[creator] })}
            defaultChecked={creator === RecordCreator.OTHERS}
            small
          />
        </div>
        <div className="creator-text">
          <span>{creatorText} Created</span>
        </div>
      </div>
    </div>
  );
};

export default GlobalRecordToggler;
