import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { RootStack } from './Router';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />
    );
  }
}