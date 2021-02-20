import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/experiencie" exact>
          <div>/experiencie</div>
        </Route>

        <Route path="/education" exact>
          <div>/education</div>
        </Route>

        <Route path="/skills" exact>
          <div>/skills</div>
        </Route>

        <Route path="/interest" exact>
          <div>/interest</div>
        </Route>

        <Route path="/interests" exact>
          <div>/interests</div>
        </Route>

        <Route path="/awards">
          <div>/awards</div>
        </Route>

        <Route path="/">
          <div>ABOUT/HOME</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
