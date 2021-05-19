import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import AvatarList from '../../containers/AvatarList';
//import CharacterList from '../characters/CharacterList';
//import CharacterDetail from '../characters/CharacterDetail';

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <AvatarList />
      {/* <Router>
        <Switch>
          <Route
            path="/characters"
            exact
            render={(routerProps) => <AvatarList {...routerProps} />}
          />
          <Route
            path="/characters/:id"
            exact
            render={(routerProps) => <PersonContainer {...routerProps} />}
          />
        </Switch>
      </Router> */}
    </div>
  );
}
