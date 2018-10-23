import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Button from '../../common/Button';
import Color from '../../common/Color';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

export default class ChangePassScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            old_pass: '',
            new_pass: '',
            re_new_pass: '',
        }

        this.onDisplayOldPassHandle = old_pass => this.setState({ old_pass });
        this.onDisplayNewPassHandle = new_pass => this.setState({ new_pass });
        this.onDisplayReNewPassHandle = re_new_pass => this.setState({ re_new_pass });

        this.focusNew = () => this.refs.displaynew && this.refs.displaynew.focus();
        this.focusReNew = () => this.refs.displayrenew && this.refs.displayrenew.focus();
    };

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let headerTitle = 'Change password';
        let headerStyle = {
            backgroundColor: Color.primary
        };
        let headerTitleStyle = { color: Color.textLight };
        let headerLeft = (<Button
            containerStyle={{ color: Color.textLight, height: 'auto', marginLeft: 10 }}
            text='Cancel'
            onPress={() => {
                navigation.goBack();
            }}
        >
        </Button>);
        let headerRight = (<Button
            containerStyle={{ color: Color.textLight, height: 'auto', marginRight: 10 }}
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
                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    contentContainerStyle={styles.container}
                    scrollEnabledabled={false}
                >

                    <ScrollView style={styles.container}>
                        <View style={{ paddingHorizontal: 20 }}>
                            <Text>Enter your old password</Text>
                            <View style={styles.inputWrap}>    
                                <TextInput
                                    style={styles.input}
                                    autoCorrect={false}
                                    underlineColorAndroid='transparent'
                                    ref='displayold'
                                    placeholder={'Old password'}
                                    onChangeText={(this.onDisplayOldPassHandle)}
                                    onSubmitEditing={this.focusNew}
                                    returnKeyType='next'
                                    value={this.state.old_pass}
                                />
                            </View>
                            <Text>Enter your new password</Text>
                            <Text>Passwords must have at least 6 characters, and one number or special character.</Text>
                            <View style={styles.inputWrap}>
                                <TextInput
                                    style={styles.input}
                                    autoCorrect={false}
                                    underlineColorAndroid='transparent'
                                    ref='displaynew'
                                    placeholder={'New password'}
                                    onChangeText={(this.onDisplayNewPassHandle)}
                                    onSubmitEditing={this.focusReNew}
                                    returnKeyType='next'
                                    value={this.state.new_pass}
                                />
                            </View>
                            <View style={styles.inputWrap}>
                                <TextInput
                                    style={styles.input}
                                    autoCorrect={false}
                                    underlineColorAndroid='transparent'
                                    ref='displayrenew'
                                    placeholder={'Cònirm new password'}
                                    onChangeText={(this.onDisplayReNewPassHandle)}
                                    value={this.state.re_new_pass}
                                />
                            </View>
                            <View style={styles.inputWrap}>
                                <Button text='Change Password'
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