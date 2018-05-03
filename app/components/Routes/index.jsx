import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import List from '../List/index';
import Repos from '../../containers/Repos';
import Login from '../../components/Login';
import AppNavSection from '../Navigation/index';
import AppFooterSection from '../Footer/index';

const AppWrapper = ({
  component: Component, additionalProps, ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      <div>
        <AppNavSection />
        <Component {...props} {...additionalProps} />
        <AppFooterSection />
      </div>
    )}
  />
);

AppWrapper.propTypes = {
  component: PropTypes.element.isRequired,
  additionalProps: PropTypes.objectOf(PropTypes.any)
};

AppWrapper.defaultProps = {
  additionalProps: {}
};

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Login} />
      <AppWrapper path="/todo" component={List} />
      <AppWrapper path="/repos" component={Repos} />
      <Route path="*"component={Login} />
    </Switch>
  </div>
);

export default Main;
