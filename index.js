import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      pos:0,
      neg:0
    };
  }
  increase=()=>{
    //console.log("skj");
    this.setState({number:this.state.number+1});

  }
  decrease=()=>{
    this.setState({number:this.state.number-1});
    
  }
  add=()=>{
    let val=this.state.number+this.state.pos;
    this.setState({number:val});
  }
  sub=()=>{
    let val=this.state.number-this.state.neg;
    this.setState({number:val});
  }
  positive=()=>{
      //console.log(typeof(event.target.value));
        this.setState({pos:Number(event.target.value)});
    
  
    //value=event.target.value;
    //console.log(event.target.value);
    
  }
  negative=()=>{
    this.setState({neg:Number(event.target.value)});
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.increase}>increase 1</button>
        <button onClick={this.decrease}>decrease 1</button><br></br>
        <input type="number" size="5" onChange={this.positive}></input><button onClick={this.add}>add </button><br></br>
        <input type="number" size="5" onChange={this.negative}></input><button onClick={this.sub}>sub </button>
      </div>
    );
  }
}
const elem=<p>anything </p>;
render(<App />, document.getElementById('root'));


