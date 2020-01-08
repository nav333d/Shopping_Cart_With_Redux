import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ShopingCart from './ShopingCart';
import {Provider} from 'react-redux';
import store from './src/store';

export default class App extends Component {
  render() {
    return (     
      <Provider store={store}>
        <ShopingCart />
        </Provider>
    );
  }
}


