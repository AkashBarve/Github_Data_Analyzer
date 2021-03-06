import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import TopNav from './components/Top_Nav';
import NavBar from './components/Nav_Bar';
import Repository from './components/Repository/Repository'
import Home from './components/Home/Home'
import Users from './components/Users/Users'
import SavedGraphs from './components/SavedGraphs/SavedGraphs'
import Languages from './components/Languages/Languages'


class App  extends React.Component {
  state = {
    selectedTab: 'Home'

  };
  componentWillMount() {
    console.log ("Page rendered");
  };
  changeTab(selectedTab){
    this.setState({
      selectedTab: selectedTab
    });
    console.log("callback made for: ", selectedTab);
  };


  render() {  

    let content = (<Home />);

    if(this.state.selectedTab === 'Home'){
      content = (<Home />);
    }
    else if(this.state.selectedTab === 'Repository'){
      content = (<Repository />);              
    }
    else if(this.state.selectedTab === 'Languages'){
      content = (<Languages />);              
    }
    else if(this.state.selectedTab === 'Users'){
      content = (<Users />);              
    }
    else if(this.state.selectedTab === 'SavedGraphs'){
      content = (<SavedGraphs />);              
    }  

    return (
      <div className="App">
        <div className="header">
          <TopNav />
          <div className="container">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Github Analyzer</h1>
              <p className="bannerDesc">Github trends analysis visualized!</p>
            </header>
          </div>
          <div className="Navbar">
            <NavBar callBackFunction={this.changeTab.bind(this)}/>           
          </div>
        </div>
        {content}
      </div>
    );
  }
}


export default App;
