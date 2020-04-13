import React, { Component } from 'react';

export class StoreRedirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }

  componentDidMount(){
    window.open(this.state.loc);
  }
  
  render(){
    return <h4 style={{margin: "5em"}} >store opened in new tab, go back to continue browsing </h4>;
  }
}

export default StoreRedirect;