
import './App.css';
import man from'./man.png';

import React, { Component } from 'react'

 class App extends Component {
    state={ 
      Person:{fullName:"David  Hulk",
       bio:" Lorem ipsum dolor sit amet",
      imgSrc:<img src={man} alt=""/>,
    profession:"Doctor" },
    show:true,
    date: new Date()
    }
    
    effacerOuAfficher=()=>{
      this.setState(
        {show:!this.state.show}
        )
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  

  render() {
    const showComponent= this.state.show ? (<div className="showing">
      <p>{this.state.Person.imgSrc}</p>
      <p> Name : {this.state.Person.fullName}</p>
      <p> Profession : {this.state.Person.profession}</p>
      <p> Biographie : {this.state.Person.bio}</p> </div>) :(<div></div>) ;




    return (
      <div style={{textAlign:'center'}}>
        {showComponent}
        <button  className="btn btn-primary" onClick={this.effacerOuAfficher}> Show OR Not </button>
        <h2 style={{color:'DarkSlateBlue'}} >Timer : {this.state.date.toLocaleTimeString()}.</h2>
        
      </div>
    );
  }
}

export default App;
