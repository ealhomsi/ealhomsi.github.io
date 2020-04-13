import React, { Component } from 'react';

export class Redirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }

  componentDidMount(){
    window.location = this.state.loc;
  }
  
  render(){
    return null;
  }
}

export default Redirect;