import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
  return (<>
    <Router>
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path={["/", "/portfolio"]}>
          <Portfolio />
        </Route>
        <Route exact path={["/", "/contactme"]}>
          <Contact />
        </Route>
      </Switch>
    </Router>
  </>);
}

export default App;
