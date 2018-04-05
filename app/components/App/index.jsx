import React from 'react';
import AppNavSection from '../Navigation/index';
import AppSection from '../Routes/index';
import AppFooterSection from '../Footer/index';
import '../../../assets/styles/components/App.scss';

const App = () => (
  <div>
    <AppNavSection />
    <AppSection />
    <AppFooterSection />
  </div>
);

export default App;
