import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Alert } from 'react-native';

import Button from '../../common/Button';
import Color from '../../common/Color';
import Swipeout from 'react-native-swipeout';

import { getFoodsFormServer } from '../../networking/Server';

const data_demo = [
    {
        key: 1,
        name: 'Mr. Den',
        timeAdd: 'Wating for response',
    },
    {
        key: 2,
        name: 'Ms. Lam',
        timeAdd: 'Added 12/09/2018',
    },
    {
        key: 3,
        name: 'Mr. Den',
        timeAdd: 'Wating for response',
    },
    {
        key: 4,
        name: 'Ms. Lam',
        timeAdd: 'Added 12/09/2018',
    },
    {
        key: 5,
        name: 'Mr. Den',
        timeAdd: 'Wating for response',
    },
    {
        key: 6,
        name: 'Ms. Lam',
        timeAdd: 'Added 12/09/2018',
    },
]

export default class MyTagScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let headerTitle = 'My tags';
        let headerStyle = {
            backgroundColor: Color.primary,
        };
        let headerTitleStyle = { color: '#ffffff' };
        let headerLeft = (<Button
            containerStyle={{ color: Color.textDark, height: 'auto', marginLeft: 10 }}
            text='Back'
            textColor='#000000'
            textStyle='#000000'
            onPress={() => {
                navigation.goBack();
            }}
        >
        </Button>);
        return { headerTitle, headerStyle, headerTitleStyle, headerLeft }
    }

    constructor(props) {
        super(props)
        this.state = {
            data_demo: data_demo,
            actMenu: 1,
            activeKey: null,
            deleteRowKey: null,
            testApi: [],
        }
    }

    _addFriend() {
        alert('Chưa làm ahihi')
    }

    componentDidMount() {
        this.props.navigation.setParams({ addFriend: this._addFriend.bind(this), isAdd: false });
        this.renderDetailFromServer();
    }

    renderDetailFromServer = () => {
        getFoodsFormServer().then((foods) => {
            this.setState({ testApi: foods })
        }).catch((error) => {
            this.setState({ testApi: [] })
            console.log('error');
        });
    }

    _renderItem(item, index) {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeKey != null) {
                    this.setState({ activeKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeKey: item.key });
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure want to delete ?',
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {

                                        this.state.testApi.splice(index, 1);
                                        //refresh
                                        this.refreshFlatList(deletingRow);

                                    }
                                },
                            ],
                            { cancelable: true }
                        )
                    },
                    component: (
                        <View
                            style={{
                              flex: 1,
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexDirection: 'column',
                            }}
                        >
                          <Image source={require('../../assets/img/icon_edit.png')} />
                        </View>
                    ),
                    type: 'edit',
                    backgroundColor: '#F3F3F3'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure want to delete ?',
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {

                                        this.state.testApi.splice(index, 1);
                                        //refresh
                                        this.refreshFlatList(deletingRow);

                                    }
                                },
                            ],
                            { cancelable: true }
                        )
                    },
                    component: (
                        <View
                            style={{
                              flex: 1,
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexDirection: 'column',
                            }}
                        >
                          <Image source={require('../../assets/img/icon_delete.png')} />
                        </View>
                    ),
                    type: 'delete',
                    backgroundColor: '#F3F3F3'
                }
            ],
            rowId: index,
            sectionId: 1,
            backgroundColor: '#ffffff'
        }

        return (
            <Swipeout {...swipeSettings}>
                <View style={{ marginTop: 20, flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 }}>
                    <View style={{ alignItems: 'flex-start', flex: 1, flexDirection: 'column' }}>
                        <Text style={{ textAlign: 'center', color: '#284B96' }}>{item.creators}</Text>
                        {/* <Text style={{ textAlign: 'center', color: '#284B96' }}>{item.updatedAt}</Text> */}
                    </View>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#DDE1E2', marginTop: 20 }}></View>
            </Swipeout>
        )
    }

    refreshFlatList = (deleteKey) => {
        this.setState((prevState) => {
            return {
                deleteRowKey: deleteKey
            };
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    //style={(this.state.actMenu == 2) ? {display: 'flex'} : {display: 'none'}}
                    renderItem={({ item, index }) => this._renderItem(item, index)}
                    data={this.state.testApi}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    menuBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 1)',
    },
    text: {
        fontSize: 16,
    },
    textAct: {
        color: '#F43352',
        fontSize: 16,
    },
    menu: {
        padding: 15,
        position: 'relative',
    },
    lineMenu: {
        position: 'absolute',
        bottom: 0,
        left: 15,
        width: '100%',
        height: 2,
    }
})