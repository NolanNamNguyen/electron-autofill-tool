import { Switch, Route } from 'react-router-dom';

import * as AppRoutes from './constant/routes';
import Hello from '../components/WelcomeScreen';
import AnimatedAppWrapper from '../components/AnimatedAppWrapper';
import KDPForm from '../components/KDPInfo';

const ROUTES = [
  {
    path: `${AppRoutes.HOME}`,
    exact: true,
    component: <Hello />,
  },
  {
    path: `${AppRoutes.KDPInfo}`,
    exact: true,
    component: <KDPForm />,
  },
];

const AppRoutesFlow = () => {
  return (
    <Switch>
      {ROUTES.map((route, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Route key={`route-${i}`} path={route.path} exact={route.exact}>
          {route.component}
        </Route>
      ))}
    </Switch>
  );
};

export default AppRoutesFlow;
