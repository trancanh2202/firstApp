import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import Button from '../../common/Button';
import Color from '../../common/Color';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

export default class MainMenuScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            pass: '',
            repass: '',
        }

        this.onDisplayNameHandle = name => this.setState({ name });
        this.onDisplayEmailHandle = email => this.setState({ email });
        this.onDisplayPassHandle = pass => this.setState({ pass });
        this.onDisplayRePassHandle = repass => this.setState({ repass });

        this.focusEmail = () => this.refs.displayemail && this.refs.displayemail.focus();
        this.focusPass = () => this.refs.displaypass && this.refs.displaypass.focus();
        this.focusRePass = () => this.refs.displayrepass && this.refs.displayrepass.focus();
    };

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let headerTitle = 'Menu';
        let headerStyle = {
            backgroundColor: '#ffffff',
        };
        let headerTitleStyle = { color: Color.textDark };
        let headerLeft = (<Button
            containerStyle={{ color: Color.textDark, height: 'auto', marginLeft: 10}}
            text='Cancel'
            textColor='#000000'
            textStyle='#000000'
            onPress={() => {
                navigation.goBack();
            }}
        >
        </Button>);
        let headerRight = (<Button
            containerStyle={{ color: Color.textDark, height: 'auto', marginRight: 10}}
            text='Log out'
            textColor='#000000'
            textStyle='#000000'
            onPress={() => {
                //navigation.goBack();
            }}
        >
        </Button>);
        return { headerTitle, headerStyle, headerTitleStyle, headerLeft,headerRight }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.avatarBlock}>
                    <Image source={require('../../assets/img/avatar.png')} />
                    <View style={styles.nameBlock}>
                        <Text style={styles.name}>Jenny Smith</Text>
                        <Text style={styles.email}>jenny.smith@gmail.com</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.menuIcon}>
                        <View style={styles.icon}>
                            <Image source={require('../../assets/img/icon_love.png')} />
                        </View>
                        <View style={styles.text}>
                            <Text>My Period Tracker</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuIcon}>
                        <View style={styles.icon}>
                            <Image source={require('../../assets/img/icon_goal.png')} />
                        </View>
                        <View style={styles.text}>
                            <Text>My Goal Tracker</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuIcon}
                        onPress={() => {
                            this.props.navigation.navigate('MyTag_Screen')
                        }}
                    >
                        <View style={styles.icon}>
                            <Image source={require('../../assets/img/icon_tag.png')} />
                        </View>
                        <View style={styles.text}>
                            <Text>My Tags</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuIcon}
                        onPress={() => {
                            this.props.navigation.navigate('HomeWelcome_Screen')
                        }}
                    >
                        <View style={styles.icon}>
                            <Image source={require('../../assets/img/icon_calendar2.png')} />
                        </View>
                        <View style={styles.text}>
                            <Text>My Calendars</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuIcon}
                        onPress={() => {
                            this.props.navigation.navigate('EditAcc_Screen')
                        }}
                    >
                        <View style={styles.icon}>
                            <Image source={require('../../assets/img/icon_acc.png')} />
                        </View>
                        <View style={styles.text}>
                            <Text>Account Info</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuIcon}
                        onPress={() => {
                            this.props.navigation.navigate('About_Screen')
                        }}
                    >
                        <View style={styles.icon}>
                            <Image source={require('../../assets/img/icon_about.png')} />
                        </View>
                        <View style={styles.text}>
                            <Text>About</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuIcon}
                        onPress={() => {
                            this.props.navigation.navigate('Legals_Screen')
                        }}
                    >
                        <View style={styles.icon}>
                            <Image source={require('../../assets/img/icon_legals.png')} />
                        </View>
                        <View style={styles.text}>
                            <Text>Legals</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 20,
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
    menuIcon:{
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#DDE1E2',
    },
    text:{
        height: 50,
        justifyContent: 'center',
    },
    icon:{
        width: 50, 
        height: 50, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    avatarBlock:{
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#DDE1E2',
        paddingBottom: 20,
    },
    name:{
        color: Color.third,
        marginVertical: 10,
        fontSize: 20,
    },
    nameBlock:{
        alignItems: 'center',
    }
});