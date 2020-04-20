import React, { Component } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const CustomMailChimpForm = ({ status, _, onValidated }) => {
    let email;
    const submit = () =>
      email && email.value.indexOf("@") > -1 && onValidated({ EMAIL: email.value});
  
    return (
      <div>
        {status === "sending" && <div key="1">sending...</div>}
        {status === "success" && <div key="2">check your inbox for verification </div>}
        <input
          key="3"
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
     
        <br />
        <button onClick={submit}>
          Subscribe
        </button>
      </div>
    );
};

export class SubscribeToNewsLetter extends Component {
  render() {
    return (
      <div className="newsLetterSubscribe">
        <h4> Subscribe to my news letter </h4>
        <MailchimpSubscribe
          url={MAILCHIMP_URL}
          render={({ subscribe, status, message }) => (
            <CustomMailChimpForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
    );
  }
}

export default SubscribeToNewsLetter;
