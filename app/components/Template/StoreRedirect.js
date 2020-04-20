import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class StoreRedirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }

  componentDidMount(){
    window.open(this.state.loc);
  }
  
  render(){
    return (<span>
        <h4 style={{margin: "5em"}} >store opened in new tab </h4>
        <Link style={{margin: "5em"}} to="/"> Back to Home Page </Link>
      </span>);
  }
}

export default StoreRedirect;