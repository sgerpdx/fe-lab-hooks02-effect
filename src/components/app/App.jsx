import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AvatarList from '../../containers/AvatarList';
import PersonContainer from '../../containers/PersonContainer';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={AvatarList} />
      <Route exact path="/:id" component={PersonContainer} />
      {/* <Route
        path="/pokemon/:id"
        exact
        render={(routerProps) => <PersonContainer {...routerProps} />}
      /> */}
    </Router>
  );
}
