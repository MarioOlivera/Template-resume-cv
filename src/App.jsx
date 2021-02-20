import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import TheLayout from './containers/TheLayout'

const About = React.lazy(() => import('./views/About'))
const Awards = React.lazy(() => import('./views/Awards'))
const Education = React.lazy(() => import('./views/Education'))
const Experience = React.lazy(() => import('./views/Experience'))
const Interests = React.lazy(() => import('./views/Interests'))
const Skills = React.lazy(() => import('./views/Skills'))

const Loading = () => (<div><p>LOADING PAGE</p></div>)

function App() {
  return (
    <Router>
      <React.Suspense fallback={<Loading/>}>
        <Switch>
          <Route path="/experience" exact render={ props => (<TheLayout {...props}><Experience {...props}/></TheLayout>)}/>
          <Route path="/education" exact render={ props => (<TheLayout {...props}><Education {...props}/></TheLayout>)}/>
          <Route path="/skills" exact render={ props => (<TheLayout {...props}><Skills {...props}/></TheLayout>)}/>
          <Route path="/interests" exact render={ props => (<TheLayout {...props}><Interests {...props}/></TheLayout>)}/>
          <Route path="/awards" exact render={ props => (<TheLayout {...props}><Awards {...props}/></TheLayout>)}/>
          <Route path="/" render={ props => (<TheLayout {...props}><About {...props}/></TheLayout>)}/>
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
