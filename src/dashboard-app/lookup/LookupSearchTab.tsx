import Button, { OutlineIconButton } from 'dashboard-app/common/Button';
import CheckInIcon from 'dashboard-app/common/icons/CheckInIcon';
import SearchInput from 'dashboard-app/common/SearchInput';
import SearchTab from 'dashboard-app/common/SearchTab';
import colors from 'dashboard-app/utils/colors';
import { UsersFilterInput } from 'graphql-types/globalTypes';
import React, { FC } from 'react';
import ReactTooltip from 'react-tooltip';

interface LookupSearchTab {
  filterOptions: UsersFilterInput;
  frontDesk?: boolean;
  dataIsAvailable?: boolean;
  triggerSearch?: () => void;
  delayedSetFilterOptions: (field: string, value: any) => void;
  toggleCheckInModal: () => void;
  enableCheckInIcon?: boolean;
}

const LookupSearchTab: FC<LookupSearchTab> = ({
  filterOptions: { clinifyId, memberNumber },
  frontDesk,
  delayedSetFilterOptions,
  triggerSearch,
  toggleCheckInModal,
  enableCheckInIcon,
}) => (
  <div className="heading-table">
    <SearchTab isVitals>
      <SearchInput
        value={clinifyId}
        placeholder="Enter Clinify ID"
        onChange={({ target: { value } }) => delayedSetFilterOptions('clinifyId', value)}
        outline
      />
      <SearchInput
        value={memberNumber}
        placeholder="Enter Patient's Name"
        onChange={({ target: { value } }) => delayedSetFilterOptions('fullName', value)}
        outline
        last
      />
      <Button text="Search" marginRight onClick={triggerSearch} />

      <div className="checkout-icons">
        {frontDesk && (
          <>
            <div data-tip="Check In" data-for="searchTabTip">
              <OutlineIconButton
                onClick={toggleCheckInModal}
                icon={
                  <CheckInIcon color={!enableCheckInIcon ? colors.tintGrey : colors.darkBlue} />
                }
                disabled={!enableCheckInIcon}
              />
            </div>
            <ReactTooltip
              id="searchTabTip"
              place="top"
              className="button-tooltip"
              type="light"
              effect="solid"
            />
          </>
        )}
      </div>
    </SearchTab>
  </div>
);

export default LookupSearchTab;
