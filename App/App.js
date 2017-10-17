/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import robotApp from './reducers';
import RobotToy from './components/RobotToy';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RobotToy />
      </Provider>
    );
  }
}
