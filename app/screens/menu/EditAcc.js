import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Button from '../../common/Button';
import Color from '../../common/Color';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

export default class EditAccScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
        }

        this.onDisplayNameHandle = name => this.setState({ name });
        this.onDisplayEmailHandle = email => this.setState({ email });

        this.focusEmail = () => this.refs.displayemail && this.refs.displayemail.focus();
    };

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let headerTitle = 'Account Info';
        let headerStyle = {
            backgroundColor: Color.primary
        };
        let headerTitleStyle = { color: Color.textLight };
        let headerLeft = (<Button
            containerStyle={{ color: Color.textLight, height: 'auto', marginLeft: 10, }}
            text='Cancel'
            onPress={() => {
                navigation.goBack();
            }}
        >
        </Button>);
        let headerRight = (<Button
            containerStyle={{ color: Color.textLight, height: 'auto', marginRight: 10, }}
            text='Save'
            onPress={() => {
                //navigation.goBack();
            }}
        >
        </Button>);
        return { headerTitle, headerStyle, headerTitleStyle, headerLeft, headerRight }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.avatarBlock}>
                        <Image source={require('../../assets/img/avatar.png')} />
                        <TouchableOpacity style={styles.nameBlock} 
                            onPress={() => {
                                this.props.navigation.navigate('EditAcc_Screen')
                            }}
                        >
                            <Text style={styles.edit}>Edit Photo</Text>
                        </TouchableOpacity>
                </View>
                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    contentContainerStyle={styles.container}
                    scrollEnabledabled={false}
                >

                    <ScrollView style={styles.container}>
                        <View style={{ paddingHorizontal: 20 }}>
                            <View style={styles.inputWrap}>
                                <TextInput
                                    style={styles.input}
                                    autoCorrect={false}
                                    underlineColorAndroid='transparent'
                                    ref='displayname'
                                    placeholder={'Jenny Smith'}
                                    onChangeText={(this.onDisplayNameHandle)}
                                    onSubmitEditing={this.focusEmail}
                                    returnKeyType='next'
                                    value={this.state.name}
                                />
                            </View>
                            <View style={styles.inputWrap}>
                                <TextInput
                                    style={styles.input}
                                    autoCorrect={false}
                                    underlineColorAndroid='transparent'
                                    ref='displayemail'
                                    placeholder={'jenny.smith@gmail.com'}
                                    onChangeText={(this.onDisplayEmailHandle)}
                                    returnKeyType='next'
                                    value={this.state.email}
                                />
                            </View>
                            <View style={styles.inputWrap}>
                                <Button text='Change Password'
                                    onPress={() => {
                                        this.props.navigation.navigate('ChangePass_Screen')
                                    }}
                                    textStyle={{ alignSelf: 'center', }}
                                    containerStyle={{
                                        width: (screenW * 80) / 100, height: 45, justifyContent: 'center',
                                        marginVertical: 20,
                                    }}
                                    customStyle={{ backgroundColor: Color.primary }} />
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAwareScrollView>
            </View>
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
    avatarBlock:{
        alignItems: 'center',
    },
    name:{
        color: Color.third,
        marginVertical: 10,
        fontSize: 20,
    },
    nameBlock:{
        alignItems: 'center',
    },
    edit:{
        marginTop: 10,
    }
});