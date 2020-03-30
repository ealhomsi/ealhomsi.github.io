import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Elias Homsi</h2>
        <p><a href="mailto:hi@eliashomsi.com">hi@eliashomsi.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Elias. I like solving problems.
            I am a <a href="https://mcgill.ca/">McGill B.Eng </a> undergraduate. I was
            at <a href="http://Microsoft.com">Microsoft</a>, <a href="http://Shopify.com">Shopify</a>, <a href="https://www.rbcroyalbank.com">RBC Bank</a>, and <a href="http://d3center.ca/">District3 Innovation Center </a>.
            My personality type is <a href="https://www.16personalities.com/intj-personality">INTJ-T</a>
      </p>
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">Learn More</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      <p className="copyright">&copy;Elias Homsi <Link to="/">eliashomsi.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
