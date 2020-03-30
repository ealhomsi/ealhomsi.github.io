import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
 
const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p> Source available <a href="https://github.com/ealhomsi/ealhomsi.github.io">here</a>.</p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to check out my {' '}
        <Link to="/resume">Resume</Link>, {' '}
        <Link to="/projects">Projects</Link>, {' '}
        or <Link to="/contact">Contact Me</Link>
      </p>
    </article>
  </Main>
);

export default Index;
