import { MemoryRouter as Router } from 'react-router-dom';

import AppRoutes from './router/AppRoutes';
import AnimatedAppWrapper from './components/AnimatedAppWrapper';
import './App.scss';

export default function App() {
  return (
    <Router>
      <AnimatedAppWrapper>
        <AppRoutes />
      </AnimatedAppWrapper>
    </Router>
  );
}
