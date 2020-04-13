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
import StoreRedirect from './components/Template/StoreRedirect'
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';

// All of our CSS
import './static/css/main.scss';

const SHOPIFY_URL = 'https://shopify.eliashomsi.com';

ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} />
      <Route name="post" path="/post/:id" component={BlogPost} />
      <Route path='/shopify'  component={ () => <StoreRedirect loc={SHOPIFY_URL}/> } />
      <Route path="/contact" component={Contact} />
      
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
