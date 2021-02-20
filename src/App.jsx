import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const About = React.lazy(() => import('./views/About'))
const Awards = React.lazy(() => import('./views/Awards'))
const Education = React.lazy(() => import('./views/Education'))
const Experiencie = React.lazy(() => import('./views/Experiencie'))
const Interests = React.lazy(() => import('./views/Interests'))
const Skills = React.lazy(() => import('./views/Skills'))

const loading = () => (<div><p>LOADING PAGE</p></div>)

function App() {
  return (
    <Router>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route path="/experiencie" exact render={ props => <Experiencie {...props}/>}/>
          <Route path="/education" exact render={ props => <Education {...props}/>}/>
          <Route path="/skills" exact render={ props => <Skills {...props}/>}/>
          <Route path="/interests" exact render={ props => <Interests {...props}/>}/>
          <Route path="/awards" exact render={ props => <Awards {...props}/>}/>
          <Route path="/" render={ props => <About {...props}/>}/>
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
