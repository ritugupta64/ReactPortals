import React, { Component } from 'react';

import './App.css';
import Portal from "./portal";


const styles = {
  toggleColor:{
    padding:"5px",
    color:"red",
    border:"1px solid green",
    display:"inlineBlock"
    },

    toggleContent:{
      padding:"5px",
      color:"yellow",
      border:"1px solid green",
      display:"inlineBlock",
      backgroundColor:"grey",
      width:"100%",
      height:"100%"
    }
  }

class App extends Component {
  

   state = {
      toggle:false
    }


 


  onToggle = () => {
    this.setState({
      toggle:!this.state.toggle
    })
  }


  render() {
    return( <div className="App"> <button type="button" onClick={this.onToggle} style={styles.toggleColor}>Toggle</button>
    
   {this.state.toggle && <Portal><div style={styles.toggleContent}>test</div></Portal>}
    
     </div> );
  }
}

export default App;

