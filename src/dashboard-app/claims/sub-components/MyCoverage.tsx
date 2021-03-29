import React, { useState } from 'react';

import { ContentWrapper, Content, ButtonRow } from 'dashboard-app/common/Wrapper';
import Table from 'dashboard-app/common/Table';
import CollapsibleComponent from 'dashboard-app/common/CollapsibleComponent';
import Button from 'dashboard-app/common/Button';

const columns = [
  {
    Header: 'HMO',
    accessor: 'hmo',
  },
  {
    Header: 'Member Number',
    accessor: 'memberNumber',
  },
  {
    Header: 'Member Plan',
    accessor: 'memberPlan',
  },
  {
    Header: 'Member Status',
    accessor: 'memberStatus',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

export interface MyCoverageProps {
  isCoverageOnClaim: boolean;
  hmos: any;
  setCoverageOnClaim: (coverage: any) => void;
}

const MyCoverage: React.FC<MyCoverageProps> = ({ isCoverageOnClaim, hmos, setCoverageOnClaim }) => {
  const primaryHMO = hmos.list?.[0];
  const { hmoProvider, memberNumber, memberPlan, memberStatus } = primaryHMO;
  const data = [
    {
      hmo: hmoProvider?.name,
      memberNumber,
      memberPlan,
      memberStatus,
      action: 'View',
      subRows: undefined,
    },
  ];

  const [isCoverageChecked, setIsCoverageChecked] = useState(isCoverageOnClaim);

  React.useEffect(() => {
    setIsCoverageChecked(isCoverageOnClaim);
  }, [isCoverageOnClaim]);

  return (
    <ContentWrapper>
      <Content billingPage noPadding>
        <CollapsibleComponent
          name="My Coverage"
          id="coverage-information"
          checked={isCoverageChecked}
          onChange={() => setIsCoverageChecked(!isCoverageChecked)}
          isExpanded
        >
          <Table
            evenColumns
            showPagination={false}
            goToPage={() => {}}
            pageCount={0}
            columns={columns}
            onRowClick={() => {}}
            data={data}
          />
        </CollapsibleComponent>

        <ButtonRow>
          <Button
            text="Add to Claim Form"
            onClick={() => setCoverageOnClaim(isCoverageChecked ? primaryHMO : null)}
            withIcon
          />
        </ButtonRow>
      </Content>
    </ContentWrapper>
  );
};

export default MyCoverage;
