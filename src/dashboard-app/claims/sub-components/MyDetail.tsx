import React from 'react';

import { ContentWrapper, Content, ButtonRow } from 'dashboard-app/common/Wrapper';
import Table from 'dashboard-app/common/Table';
import CollapsibleComponent from 'dashboard-app/common/CollapsibleComponent';
import Button from 'dashboard-app/common/Button';

const personalInfoColumns = [
  {
    Header: ' First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Gender',
    accessor: 'gender',
  },
  {
    Header: 'DOB',
    accessor: 'dob',
  },
  {
    Header: 'Blood Group',
    accessor: 'bloodGroup',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

const backgroundInfoColumns = [
  {
    Header: 'Marital Status',
    accessor: 'maritalStatus',
  },
  {
    Header: 'Number of Children',
    accessor: 'numberOfChildren',
  },
  {
    Header: 'Education',
    accessor: 'education',
  },
  {
    Header: 'State',
    accessor: 'state',
  },
  {
    Header: 'Occupation',
    accessor: 'occupation',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

const nextOfKinInfoColumns = [
  {
    Header: ' First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Gender',
    accessor: 'gender',
  },
  {
    Header: 'Relationship',
    accessor: 'relationship',
  },
  {
    Header: 'Blood Group',
    accessor: 'bloodGroup',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

export interface MyDetailProps {
  personalInformation?: any;
  backgroundInformation?: any;
  nextOfKin?: any;

  isPersonalInformationOnClaim: boolean;
  isBackgroundInformationOnClaim: boolean;
  isNextOfKinOnClaim: boolean;

  setDetailsOnClaim: (details: any) => void;
}

const MyDetail: React.FC<MyDetailProps> = ({
  personalInformation,
  backgroundInformation,
  nextOfKin,
  isBackgroundInformationOnClaim,
  isNextOfKinOnClaim,
  isPersonalInformationOnClaim,
  setDetailsOnClaim,
}) => {
  const [isPersonalInformationChecked, setIsPersonalInformationChecked] = React.useState(
    isPersonalInformationOnClaim,
  );
  const [isBackgroundInformationChecked, setIsBackgroundInformationChecked] = React.useState(
    isBackgroundInformationOnClaim,
  );
  const [isNextOfKinChecked, setIsNextOfKinChecked] = React.useState(isNextOfKinOnClaim);

  const personalInfoData = [
    {
      firstName: personalInformation?.firstName,
      lastName: personalInformation?.lastName,
      gender: personalInformation?.gender,
      dob: personalInformation?.dateOfBirth,
      bloodGroup: personalInformation?.bloodGroup,
      action: 'View',
      subRows: undefined,
    },
  ];

  const backgroundInfoData = [
    {
      maritalStatus: backgroundInformation?.maritalStatus,
      numberOfChildren: backgroundInformation?.numberOfChildren,
      education: backgroundInformation?.education,
      state: backgroundInformation?.state,
      occupation: backgroundInformation?.occupation,
      action: 'View',
      subRows: undefined,
    },
  ];

  const nextOfKinData = [
    {
      firstName: nextOfKin?.firstName,
      lastName: nextOfKin?.lastName,
      gender: nextOfKin?.gender,
      relationship: nextOfKin?.relationship,
      bloodGroup: nextOfKin?.bloodGroup,
      action: 'View',
      subRows: undefined,
    },
  ];

  const handleSetToClaimForm = () => {
    const details: Record<string, any> = {};
    details.personalInfo = isPersonalInformationChecked ? personalInformation : null;
    details.backgroundInfo = isBackgroundInformationChecked ? backgroundInformation : null;
    details.nextofKin = isNextOfKinChecked ? nextOfKin : null;

    setDetailsOnClaim(details);
  };

  React.useEffect(() => {
    setIsPersonalInformationChecked(isPersonalInformationOnClaim);
  }, [isPersonalInformationOnClaim]);

  React.useEffect(() => {
    setIsBackgroundInformationChecked(isBackgroundInformationOnClaim);
  }, [isBackgroundInformationOnClaim]);

  React.useEffect(() => {
    setIsNextOfKinChecked(isNextOfKinOnClaim);
  }, [isNextOfKinOnClaim]);

  return (
    <ContentWrapper>
      <Content billingPage noPadding>
        <CollapsibleComponent
          name="Personal Information"
          id="personal-information"
          checked={isPersonalInformationChecked}
          onChange={() => setIsPersonalInformationChecked(!isPersonalInformationChecked)}
        >
          {personalInformation && (
            <Table
              evenColumns
              showPagination={false}
              goToPage={() => {}}
              pageCount={0}
              onRowClick={() => {}}
              columns={personalInfoColumns}
              data={personalInfoData}
            />
          )}
        </CollapsibleComponent>
        <CollapsibleComponent
          name="Background Information"
          id="background-information"
          checked={isBackgroundInformationChecked}
          onChange={() => setIsBackgroundInformationChecked(!isBackgroundInformationChecked)}
        >
          {backgroundInformation && (
            <Table
              evenColumns
              showPagination={false}
              goToPage={() => {}}
              pageCount={0}
              onRowClick={() => {}}
              columns={backgroundInfoColumns}
              data={backgroundInfoData}
            />
          )}
        </CollapsibleComponent>
        <CollapsibleComponent
          name="Next Of Kin"
          id="next_of_kin"
          checked={isNextOfKinChecked}
          onChange={() => setIsNextOfKinChecked(!isNextOfKinChecked)}
        >
          {nextOfKin && (
            <Table
              evenColumns
              showPagination={false}
              goToPage={() => {}}
              pageCount={0}
              onRowClick={() => {}}
              columns={nextOfKinInfoColumns}
              data={nextOfKinData}
            />
          )}
        </CollapsibleComponent>

        <ButtonRow>
          <Button text="Add to Claim Form" onClick={handleSetToClaimForm} withIcon />
        </ButtonRow>
      </Content>
    </ContentWrapper>
  );
};

export default MyDetail;
