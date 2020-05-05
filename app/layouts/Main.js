import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ReactGA from 'react-ga';
import Header from '../components/Template/Header';
import Nav from '../components/Template/Nav';
import CookieConsent from "react-cookie-consent";
import { PRIVACY_POLICY_URL, COOKIE_POLICY_URL } from '../data/const';
 
class Main extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
  };
  
  static defaultProps = {
    children: null,
    fullPage: false,
  };

  componentDidMount () {
    window.scrollTo(0, 0);

    // Intialize GA
    ReactGA.initialize(GA_ID);
    ReactGA.set({
      page: window.location.pathname,
    });
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div id="wrapper">
        <Helmet titleTemplate="%s | Elias Homsi" defaultTitle="Elias Homsi" />
        <Header />
        <div id="main">
          {this.props.children}
        </div>
        {!this.props.fullPage && <Nav />}
        <CookieConsent
          location="bottom"
          buttonText="I love cookies"
          cookieName="myAwesomeCookieName2"
          buttonStyle={{ background: "#000", padding: "auto"}}
          expires={150}
        >
          <span>
            We use cookies to understand how you use our site and to improve your experience.
            By continuing to use our site, you accept our {' '}
            <a href={PRIVACY_POLICY_URL} target="_blank">Privacy</a>{' '}
            <a href={COOKIE_POLICY_URL} target="_blank">& Cookie</a>  Policy
          </span>
        </CookieConsent>
      </div>);
  }
}

export default Main;
