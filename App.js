import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './pages/home';
import Profile from './pages/profile';

const App = StackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile }
});

export default App;