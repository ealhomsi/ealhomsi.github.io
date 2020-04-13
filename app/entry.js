import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

// Featured
import Index from './pages/Index';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Redirect from './components/Template/Redirect'

// All of our CSS
import './static/css/main.scss';

const SHOPIFY_URL = 'https://shopify.eliashomsi.com';

ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
      <Route path='/shopify'  component={ () => <Redirect loc={SHOPIFY_URL}/> } />
      
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
