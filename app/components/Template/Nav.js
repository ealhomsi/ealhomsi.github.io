import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PRIVACY_POLICY_URL, COOKIE_POLICY_URL } from '../../data/const';
import { ContactFetcherComponent } from './ContactFetcherComponent';

export class Nav extends ContactFetcherComponent {
  constructor(props) {
    super(props);
  }

  render(){
    const { isLoaded, contacts } = this.state;

    return (
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
              <Link to="/about" className="button">Learn More</Link>
            </li>
          </ul>
        </section>
    
        <section id="footer">
          {isLoaded? 
              ( 
              <span>
                <ul className="icons">
                  {contacts.map(data => (
                    <li key={data.label}><a href={data.link}><FontAwesomeIcon icon={data.icon}/></a></li>
                  ))}
                </ul>
              </span>): (<h3> loading ... </h3>) }
          <p className="copyright">&copy;Elias Homsi <Link to="/">eliashomsi.com</Link>.</p>
          <p className="copyright"> <a href={COOKIE_POLICY_URL} target="_blank"> Cookie Policy </a> <br/> <br/> <a href={PRIVACY_POLICY_URL} target="_blank"> Privacy Policy </a></p>
        </section>
      </section>
    );    
  }
};

export default Nav;