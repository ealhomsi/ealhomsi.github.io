import React from 'react';
import {Link} from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';
import EmailAtSection from '../components/Contact/EmailAtSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactFetcherComponent } from '../components/Template/ContactFetcherComponent';
import {SubscribeToNewsLetter } from '../components/Template/SubscribeToNewsLetter';

export class Contact extends ContactFetcherComponent {
  constructor(props) {
    super(props);
  }
  
  render(){
    const { isLoaded, contacts } = this.state;

    return (
      <Main>
        <Helmet title="Contact" />
        <article className="post" id="contact">
          <header>
            <div className="title">
              <h2><Link to="/contact">Contact</Link></h2>
            </div>
          </header>
          {isLoaded? 
            ( 
            <span>
              <EmailAtSection />
              <ul className="icons">
                {contacts.map(data => (
                  <li key={data.label}><a href={data.link}><FontAwesomeIcon icon={data.icon}/></a></li>
                ))}
              </ul>
              <br/>
              <SubscribeToNewsLetter />
            </span>): (<h3> loading ... </h3>) }
        </article>
      </Main>
    );
  }
};

export default Contact;