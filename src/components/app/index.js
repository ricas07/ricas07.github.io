import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import myTheme from '../../constants/theme';
import './app.css';

import MyCard from '../my-card';
import Footer from '../footer';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={myTheme}>
        <div className="App">
          <AppBar />
          <div className="container">
            <MyCard />
            <Footer />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
