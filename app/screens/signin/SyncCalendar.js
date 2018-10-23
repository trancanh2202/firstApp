import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';

import Button from '../../common/Button';
import Color from '../../common/Color';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
const mainW = (screenW*90)/100;

export default class SyncCalendarScreen extends Component {
  render() {
    const resizeMode = 'cover';
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Image
            style={{
              flex: 1,
              resizeMode,
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
            source={require('../../assets/img/intro_banner.png')}
          />
          <Text style={styles.bannerText}>Get anything done!</Text>
        </View>
        <View style={styles.btGroup}>
          <Button text='Create Account'
            textStyle={{ alignSelf: 'center', }}
            containerStyle={{
              width: (screenW * 70) / 100, height: 45, justifyContent: 'center',
              marginBottom: 20,
            }}
            customStyle={{ backgroundColor: Color.primary }} 
            onPress={() => {
              this.props.navigation.navigate('CreateAcc_Screen')
            }}
            />
          <Button text='Sign In'
            textStyle={{ alignSelf: 'center', }}
            containerStyle={{
              width: (screenW * 70) / 100, height: 45, justifyContent: 'center',
              marginBottom: 20,
            }}
            customStyle={{ backgroundColor: Color.primary }} 
            onPress={() => {
              this.props.navigation.navigate('SignIn_Screen')
            }}
            />
          <Text style={{ marginBottom: 20 }}>Or continue with</Text>
          <View style={styles.socialGroup}>
            <Button text='Instagram'
              textStyle={{ alignSelf: 'center', fontSize: 12,color: '#B3388D'}}
              containerStyle={{
                width: (mainW*30)/100, height: 31, justifyContent: 'center', marginLeft: (mainW*1.56)/100,marginRight: (mainW*1.56)/100,
                backgroundColor: 'transparent', borderWidth: 1, borderColor: '#B3388D',
              }}
              customStyle={{ backgroundColor: 'transparent' }} />
              <Button text='Facebook'
              textStyle={{ alignSelf: 'center', fontSize: 12,color: '#32599D'}}
              containerStyle={{
                width: (mainW*30)/100, height: 31, justifyContent: 'center', marginLeft: (mainW*1.56)/100,marginRight: (mainW*1.56)/100,
                backgroundColor: 'transparent', borderWidth: 1, borderColor: '#32599D',
              }}
              customStyle={{ backgroundColor: 'transparent' }} />
              <Button text='Gmail'
              textStyle={{ alignSelf: 'center', fontSize: 12,color: '#DC212E'}}
              containerStyle={{
                width: (mainW*30)/100, height: 31, justifyContent: 'center', marginLeft: (mainW*1.56)/100,marginRight: (mainW*1.56)/100,
                backgroundColor: 'transparent', borderWidth: 1, borderColor: '#DC212E',
              }}
              customStyle={{ backgroundColor: 'transparent' }} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  banner: {
    width: "100%",
    height: screenH / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    alignSelf: 'center',
  },
  btGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: screenH / 2,
  },
  socialGroup:{
    flexDirection: 'row',
    width: "90%",
  },
});