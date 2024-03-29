import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/styles';

export default class App extends Component {
  
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
    let val=this.state.number-this.state.pos;
    this.setState({number:val});
  }
  positive=()=>{
        if((Number(event.target.value))>0){
          this.setState({pos:Number(event.target.value)});
        }
        else{
          this.setState({pos:Number(0)});
        }
  
  }
  render() {
    
    return (
      
      <div><div style={{textAlign:"center",marginBottom:10}}>
        <Chip label={this.state.number} variant="outlined"/>
        </div>
        <div style={{textAlign:"center"}}>
        <Button variant="contained" color="primary" onClick={this.increase} >add </Button>
        <Button variant="contained" color="secondary" onClick={this.decrease}>sub </Button>
        <br></br></div><div style={{textAlign:"center"}}><TextField
        label="Number only"
        defaultValue=""
        margin="dense"
        variant="outlined"
        onChange={this.positive}
        className="root" style={{marginLeft:25}} /></div><br></br>
        <div style={{textAlign:"center"}}>
        <Fab color="primary" aria-label="Add" onClick={this.add} >
        <AddIcon/>
      </Fab>
        <Fab color="secondary" aria-label="Add" onClick={this.sub}>
        ----
      </Fab> </div>
      </div>
    
    );
  }
}
const elem=<p>anything </p>;
render(<App />, document.getElementById('root'));


