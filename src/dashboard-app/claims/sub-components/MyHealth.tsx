import React from 'react';

import { ContentWrapper, Content, ButtonRow } from 'dashboard-app/common/Wrapper';
import Table from 'dashboard-app/common/Table';
import CollapsibleComponent from 'dashboard-app/common/CollapsibleComponent';
import Button from 'dashboard-app/common/Button';

const preExistingConditionColumns = [
  {
    Header: 'Condition',
    accessor: 'condition',
  },
  {
    Header: 'Diagnosed Date and Time',
    accessor: 'dateAndTime',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

const habitsColumns = [
  {
    Header: 'Habit',
    accessor: 'habit',
  },
  {
    Header: 'Level',
    accessor: 'level',
  },
  {
    Header: 'Duration (HH:MM:SS)',
    accessor: 'duration',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

const disabilitiesColumns = [
  {
    Header: 'Disability',
    accessor: 'disability',
  },
  {
    Header: 'Type',
    accessor: 'type',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

const physicalActivitiesColumns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Type',
    accessor: 'type',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

export interface MyHealthProps {
  preExistingConditions?: any;
  habits?: any;
  physicalActivities?: any;
  disabilities?: any;

  isPreExistingConditionsOnClaim: boolean;
  isHabitsOnClaim: boolean;
  isPhysicalActivitiesOnClaim: boolean;
  isDisabilitiesOnClaim: boolean;

  setHealthOnClaim: (health: any) => void;
}

const MyHealth: React.FC<MyHealthProps> = ({
  preExistingConditions,
  habits,
  physicalActivities,
  disabilities,
  isDisabilitiesOnClaim,
  isHabitsOnClaim,
  isPhysicalActivitiesOnClaim,
  isPreExistingConditionsOnClaim,
  setHealthOnClaim,
}) => {
  const [isPreExistingConditionsChecked, setIsPreExistingConditionsChecked] = React.useState(
    isPreExistingConditionsOnClaim,
  );
  const [isPhysicalActivitiesChecked, setIsPhysicalActivitiesChecked] = React.useState(
    isPhysicalActivitiesOnClaim,
  );
  const [isHabitsChecked, setIsHabitsChecked] = React.useState(isHabitsOnClaim);
  const [isDisabilitiesChecked, setIsDisabilitiesChecked] = React.useState(isDisabilitiesOnClaim);

  const conditionsData = preExistingConditions?.map((preExistingCondition) => {
    return {
      condition: preExistingCondition?.condition,
      dateAndTime: preExistingCondition?.diagnosedDate,
      duration: preExistingCondition?.duration,
      action: 'View',
      subRows: undefined,
    };
  });

  const habitsData = habits?.map((habit) => {
    return {
      habit: habit?.socialHabit,
      level: habit?.level,
      duration: habit?.duration,
      action: 'View',
      subRows: undefined,
    };
  });

  const disabilitiesData = disabilities?.map((disability) => {
    return {
      disability: disability?.disability,
      type: disability?.type,
      action: 'View',
      subRows: undefined,
    };
  });

  const physicalActivitiesData = physicalActivities?.map((activity) => {
    return {
      name: activity?.name,
      type: activity?.type,
      action: 'View',
      subRows: undefined,
    };
  });

  const handleSetToClaimForm = () => {
    const health: Record<string, any> = {};
    health.conditions = isPreExistingConditionsChecked ? preExistingConditions : null;
    health.habits = isHabitsChecked ? habits : null;
    health.physicalActivities = isPhysicalActivitiesChecked ? physicalActivities : null;
    health.disability = isDisabilitiesChecked ? disabilities : null;

    setHealthOnClaim(health);
  };

  React.useEffect(() => {
    setIsPreExistingConditionsChecked(isPreExistingConditionsOnClaim);
  }, [isPreExistingConditionsOnClaim]);

  React.useEffect(() => {
    setIsHabitsChecked(isHabitsOnClaim);
  }, [isHabitsOnClaim]);

  React.useEffect(() => {
    setIsPhysicalActivitiesChecked(isPhysicalActivitiesOnClaim);
  }, [isPhysicalActivitiesOnClaim]);

  React.useEffect(() => {
    setIsDisabilitiesChecked(isDisabilitiesOnClaim);
  }, [isDisabilitiesOnClaim]);

  return (
    <ContentWrapper>
      <Content billingPage noPadding>
        <CollapsibleComponent
          name="Pre-existing Condition"
          id="pre-existing-condition"
          checked={isPreExistingConditionsChecked}
          onChange={() => setIsPreExistingConditionsChecked(!isPreExistingConditionsChecked)}
        >
          {preExistingConditions && preExistingConditions.length > 0 && (
            <Table
              evenColumns
              showPagination={false}
              goToPage={() => {}}
              pageCount={0}
              onRowClick={() => {}}
              columns={preExistingConditionColumns}
              data={conditionsData ?? [{}]}
            />
          )}
        </CollapsibleComponent>
        <CollapsibleComponent
          name="Habits"
          id="habits"
          checked={isHabitsChecked}
          onChange={() => setIsHabitsChecked(!isHabitsChecked)}
        >
          {habits && habits.length > 0 && (
            <Table
              evenColumns
              showPagination={false}
              goToPage={() => {}}
              pageCount={0}
              onRowClick={() => {}}
              columns={habitsColumns}
              data={habitsData ?? [{}]}
            />
          )}
        </CollapsibleComponent>
        <CollapsibleComponent
          name="Physical Activities"
          id="physical_activities"
          checked={isPhysicalActivitiesChecked}
          onChange={() => setIsPhysicalActivitiesChecked(!isPhysicalActivitiesChecked)}
        >
          {physicalActivities && physicalActivities.length > 0 && (
            <Table
              evenColumns
              showPagination={false}
              goToPage={() => {}}
              pageCount={0}
              onRowClick={() => {}}
              columns={physicalActivitiesColumns}
              data={physicalActivitiesData ?? [{}]}
            />
          )}
        </CollapsibleComponent>
        <CollapsibleComponent
          name="Disability"
          id="disability"
          checked={isDisabilitiesChecked}
          onChange={() => setIsDisabilitiesChecked(!isDisabilitiesChecked)}
        >
          {disabilities && disabilities.length > 0 && (
            <Table
              evenColumns
              showPagination={false}
              goToPage={() => {}}
              pageCount={0}
              onRowClick={() => {}}
              columns={disabilitiesColumns}
              data={disabilitiesData ?? [{}]}
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

export default MyHealth;
