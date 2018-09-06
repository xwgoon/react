import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        console.log('componentDidMount()')
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log('componentWillUnmount()')
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default App;
