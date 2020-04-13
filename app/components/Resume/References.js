import React from 'react';
import { Link } from 'react-router-dom';

const References = () => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <Link to="/contact">
        <h3>References are available upon request</h3>
      </Link>
      <h4> <a target="_blank" href="/resume.pdf"> resume.pdf</a> </h4>
    </div>
  </div>
);

export default References;
