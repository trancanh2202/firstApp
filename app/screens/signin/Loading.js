import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

export default class LoadingScreen extends Component {
  
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      // Add your logic for the transition
      this.props.navigation.navigate('SignCreate_Screen')
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <Image source={require('../../assets/img/logo_bowo.png')} style={{ width: (screenWidth * 80)/100 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
