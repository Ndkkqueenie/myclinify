import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ConsumablesList from './ConsumablesList';
import AddConsumables from './AddConsumables';

export interface ConsumablesRoutesProps {}

const ConsumablesRoutes: React.FC<ConsumablesRoutesProps> = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}`} exact>
        <ConsumablesList addNewButton={false} />
      </Route>
      <Route path={`${match.path}/request/add`}>
        <AddConsumables />
      </Route>
      <Route path={`${match.path}/request`} exact>
        <ConsumablesList addNewButton />
      </Route>
    </Switch>
  );
};

export default ConsumablesRoutes;
