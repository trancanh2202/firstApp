import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Button from '../../common/Button';
import Color from '../../common/Color';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

export default class CreateAccScreen extends Component {

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
        let headerTitle = 'Create Account';
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
        return { headerTitle, headerStyle, headerTitleStyle, headerLeft }
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
                        <View style={styles.inputWrap}>
                            <TextInput
                                style={styles.input}
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                                ref='displayname'
                                placeholder={'Name'}
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
                                placeholder={'Email'}
                                onChangeText={(this.onDisplayEmailHandle)}
                                onSubmitEditing={this.focusPass}
                                returnKeyType='next'
                                value={this.state.email}
                            />
                        </View>
                        <View style={styles.inputWrap}>
                            <TextInput
                                style={styles.input}
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                                ref='displaypass'
                                placeholder={'Password'}
                                onChangeText={(this.onDisplayPassHandle)}
                                onSubmitEditing={this.focusRePass}
                                returnKeyType='next'
                                value={this.state.pass}
                            />
                        </View>
                        <View style={styles.inputWrap}>
                            <TextInput
                                style={styles.input}
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                                ref='displayrepass'
                                placeholder={'Confirm Password'}
                                onChangeText={(this.onDisplayRePassHandle)}
                                value={this.state.repass}
                            />
                        </View>
                        <View style={styles.inputWrap}>
                            <Button text='Create Account'
                                textStyle={{ alignSelf: 'center', }}
                                containerStyle={{
                                    width: (screenW * 80) / 100, height: 45, justifyContent: 'center',
                                    marginVertical: 20,
                                }}
                                customStyle={{ backgroundColor: Color.primary }} />
                        </View>
                        <View style={styles.inputWrap}>
                            <TouchableOpacity onPress={() => { 
                                    // this.props.navigation.navigate('EventDetail_Screen')
                                }}>
                                <Text style={{textAlign: 'center', paddingHorizontal: 40 }}>
                                    By creating an account you agree to the 
                                    <Text style={{color: Color.textLink}}> Terms of use</Text>
                                </Text>
                            </TouchableOpacity> 
                        </View>
                    </View>
                </ScrollView>
                <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', alignItems: 'center' }}>
                    <Button text='Already have an account?'
                        textStyle={{ alignSelf: 'center', color: Color.textLink }}
                        containerStyle={{
                            width: (screenW * 80) / 100, height: 45, justifyContent: 'center',
                            marginVertical: 20, backgroundColor: 'transparent'
                        }}/>  
                </View>
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
    }
});