import React from "react";
import List from "../List/index";
import Form from "../Form/index";
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
