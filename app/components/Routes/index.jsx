import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from '../List/index';
import Form from '../Form/index';
import Repos from '../../containers/Repos';

const Main = () => (
  <main>
    <Switch>
      {/* <Route exact path='/' component={App} /> */}
      <Route path="/list" component={List} />
      <Route path="/form" component={Form} />
      <Route path="/repos" component={Repos} />
    </Switch>
  </main>
);

export default Main;
