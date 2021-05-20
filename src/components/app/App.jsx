import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import AvatarList from '../../containers/AvatarList';
import PersonContainer from '../../containers/PersonContainer';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={AvatarList} />
      <Route exact path="/:id" component={PersonContainer} />
    </Router>

    // <div>
    //   <h1>Avatar: The Last Airbender</h1>
    //   <AvatarList />
    //   {/* <Router>
    //     <Switch>
    //       <Route
    //         path="/characters"
    //         exact
    //         render={(routerProps) => <AvatarList {...routerProps} />}
    //       />
    //       <Route
    //         path="/characters/:id"
    //         exact
    //         render={(routerProps) => <PersonContainer {...routerProps} />}
    //       />
    //     </Switch>
    //   </Router> */}
    // </div>
  );
}
