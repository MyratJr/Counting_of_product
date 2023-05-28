import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state={
    counters:[
        {id:1,value:0,children:'apple'},
        {id:2,value:1,children:'phone'},
        {id:3,value:2,children:'carrot'},
        {id:4,value:3,children:'book'},
    ]
};

constructor(){
  super();
  console.log('App-Constructor');
}

componentDidMount(){
  console.log('App - Mounted');
}

handleIncrement=counter=>{
    const counters=[...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
};

handleReset=()=>{
    const counters=this.state.counters.map(c=>{
        c.value=0;
        return c;
    });
    this.setState({counters});
};

handleDelete = counterId =>{
    const counters = this.state.counters.filter(c=>c.id!=counterId);
    this.setState({counters});
}
  render(){
    console.log('app rendered')
    return (
      <React.Fragment>
        <NavBar totalCounters=
          {this.state.counters.filter(c => c.value>0).length}
        />
          <main className='container'>
            <Counters
              onReset={this.handleReset} 
              onIncrement={this.handleIncrement} 
              onDelete={this.handleDelete} 
              counters={this.state.counters}
            />
          </main>
      </React.Fragment>
    );
  }
}

export default App;