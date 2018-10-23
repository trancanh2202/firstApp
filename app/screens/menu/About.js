import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Button from '../../common/Button';
import Color from '../../common/Color';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

export default class AboutScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
        }
    };

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let headerTitle = 'About';
        let headerStyle = {
            backgroundColor: Color.primary
        };
        let headerTitleStyle = { color: Color.textLight };
        let headerLeft = (<Button
            containerStyle={{ color: Color.textLight, height: 'auto', marginLeft: 10, }}
            text='Back'
            onPress={() => {
                navigation.goBack();
            }}
        >
        </Button>);
        return { headerTitle, headerStyle, headerTitleStyle, headerLeft }
    }

    render() {
        return (
            
            <ScrollView style={styles.container}>
                <View style={styles.avatarBlock}>
                    <Text style={styles.titleUpColor}>CREATOR</Text>
                    <Image source={require('../../assets/img/avatar.png')} />
                    <Text style={styles.name}>Tracey Nguyen</Text>
                    <Text style={styles.title}>Creator of BOWO</Text>
                    <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                </View>
                <View style={styles.avatarBlock}>
                    <Text style={styles.titleUpColor}>BOWO'S STORY</Text>
                    <Text style={styles.desc}>Lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </Text>
                </View>
                <View style={styles.avatarBlock}>
                    <Text style={styles.titleUpColor}>BOWO'S MISSION</Text>
                    <Text style={styles.desc}>Lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </Text>
                </View>
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: Color.primary,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginBottom: 14,
        width: '100%',
    },
    inputWrap: {
        alignItems: 'center',
    },
    avatarBlock:{
        alignItems: 'center',
        marginBottom: 50,
    },
    name:{
        marginVertical: 10,
        fontSize: 20,
    },
    nameBlock:{
        alignItems: 'center',
    },
    edit:{
        marginTop: 10,
    },
    titleUpColor:{
        fontSize: 22,
        color: Color.third,
        marginBottom: 10,
    },
    title:{
        marginBottom: 10,
    },
    desc:{
        textAlign: 'center',
    }
});