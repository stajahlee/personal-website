import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home';
import Paintings from './modules/views/Paintings'
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/paintings" component={Paintings} />
          <Route path={new RegExp('/.*')} component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
