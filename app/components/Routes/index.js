import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import List from '../List/index';
import Form from '../Form/index';
import App from '../App/index';

const Main = () => (
  <main>
    <Switch>
      {/* <Route exact path='/' component={App} /> */}
      <Route path='/list' component={List} />
      <Route path='/form' component={Form} />
    </Switch>
  </main>
);

export default Main;