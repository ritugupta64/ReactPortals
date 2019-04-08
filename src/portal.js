import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';


const portal = document.getElementById("portal");

class Portal extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle:false
    }

    this.el = document.createElement("div");


  }

  componentDidMount(){
   portal.appendChild(this.el);
  }

  componentWillUnmount(){
    portal.removeChild(this.el);
  }
  


  
  render() {
      const {children} = this.props
    return ReactDOM.createPortal(children, this.el)
  }
}

export default Portal;
