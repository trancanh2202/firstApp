import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, FlatList, Alert, TouchableOpacity } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

import Button from '../../common/Button';
import Color from '../../common/Color';
import moment from 'moment';
import Swipeout from 'react-native-swipeout';

import { getFoodsFormServer } from '../../networking/Server';

export default class HomeWelcomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            _popup: true,
            _checked: true,
        }

        this.closePopup = this.closePopup.bind(this);
        this.checkBox = this.checkBox.bind(this);
    }

    closePopup() {
        this.setState({
            _popup: !this.state._popup
        })
    }

    _addFriend() {
        Alert.alert('Chưa làm ahihi')
    }

    checkBox() {

    }
    checkHigh(level) {
        if (level == 'one') {
            return require('../../assets/img/important-1.png')
        } else if (level == 'two') {
            return require('../../assets/img/important-2.png')
        } else {
            return;
        }
    }

    componentDidMount() {
        //this.props.navigation.setParams({ addFriend: this._addFriend.bind(this), isAdd: false });
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
                            <Image source={require('../../assets/img/icon_delete.png')} />
                        </View>
                    ),
                    type: 'delete',
                    backgroundColor: 'transparent'
                }
            ],
            rowId: index,
            sectionId: 1,
            backgroundColor: 'transparent',
            style: { marginBottom: 10 }
        }

        return (
            <Swipeout {...swipeSettings}>
                <View style={{ marginLeft: 15, borderRadius: 5, flex: 1, flexDirection: 'row', padding: 15, backgroundColor: '#ffffff', }}>
                    <View style={{ justifyContent: 'center', paddingRight: 10 }}>
                        <TouchableOpacity onPress={() => {
                            this.checkBox();
                        }}>
                            <Image
                                source={require('../../assets/img/check.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignSelf: 'stretch' }}>
                        <View style={{ alignItems: 'flex-start', flex: 1, flexDirection: 'column', marginBottom: 0 }}>
                            <Text style={styles.name}>{item.creators}</Text>
                            <Text style={styles.days}>{item.updatedAt}</Text>
                            <Image style={styles.iconHigh}
                                source={this.checkHigh('one')}
                            />
                        </View>
                        <View>
                            <Text style={{ textAlign: 'right', color: '#AEAEAE' }}>#{item.linkGenarate}</Text>
                        </View>
                    </View>
                </View>
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
        let datesWhitelist = [{
            start: moment("2018-10-17"),
            end: moment("2018-10-20")  // total 4 days enabled
        }];
        let datesBlacklist = [moment("2018-10-19")]; // 1 day disabled
        let selectedDate = [moment("2018-10-15")]; // 1 day disabled
        let demo = [moment("2018-10-15")];

        const resizeMode = 'repeat';
        return (
            <View style={styles.container}>
                <CalendarStrip
                    calendarAnimation={{ type: 'sequence', duration: 30 }}
                    daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white' }}
                    style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
                    calendarHeaderStyle={{ color: 'white' }}
                    calendarColor={Color.primary}
                    dateNumberStyle={{ color: 'white' }}
                    dateNameStyle={{ color: 'white' }}
                    highlightDateNumberStyle={{ color: 'yellow' }}
                    highlightDateNameStyle={{ color: 'yellow' }}
                    disabledDateNameStyle={{ color: '#000' }}
                    disabledDateNumberStyle={{ color: '#000' }}
                    //selectedDate={selectedDate}
                    //onDateLongPress={demo}
                    datesWhitelist={datesWhitelist}
                    datesBlacklist={datesBlacklist}
                    iconContainer={{ flex: 0.1 }}
                />
                <View style={{ flex: 1 }}>
                    <Image
                        style={{
                            flex: 1,
                            resizeMode,
                            position: 'absolute',
                        }}
                        source={require('../../assets/img/home_bg.png')}
                    />

                    <View style={{ flex: 1 }}>
                        <ScrollView>
                            <View>
                                <View>
                                    <Text style={styles.today}>Today</Text>
                                </View>
                                <View style={styles.sort}>
                                    <TouchableOpacity onPress={() => {
                                        this.checkBox();
                                    }}>
                                        <Image source={require('../../assets/img/sort.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ marginRight: 15 }}>
                                <FlatList
                                    //style={(this.state.actMenu == 2) ? {display: 'flex'} : {display: 'none'}}
                                    renderItem={({ item, index }) => this._renderItem(item, index)}
                                    data={this.state.testApi}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                            <View style={styles.botBlock}>
                                <View style={styles.botNoti}>
                                    <Text style={styles.botText1}>The most courageous act is still to think for yourself. Aloud.</Text>
                                    <Text style={styles.botText2}>- Coco Chanel</Text>
                                </View>
                                <Text style={styles.botText3}>keep scrolling for tomorrow's agenda</Text>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.add}>
                        <TouchableOpacity onPress={() => {
                            this.checkBox();
                        }}>
                            <Image source={require('../../assets/img/icon-add.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={this.state._popup == true ? styles.popupIntro : { display: 'none' }}>
                    <View style={styles.intro}>
                        <Image style={styles.img} source={require('../../assets/img/test_homeintro.png')} />
                        <Text style={{ color: Color.primary, fontSize: 35, marginTop: 20, }}>
                            Good moring
                            </Text>
                        <Text style={{ color: Color.primary, fontSize: 60, marginTop: 10, }}>
                            Tracey!
                            </Text>
                        <Text style={{ color: Color.textDark, fontSize: 14, marginTop: 15, paddingHorizontal: 20, textAlign: 'center' }}>
                            We know you've got a busy day ahead. Stay energized and positive - you can do this!
                            </Text>
                        <Button text='Start my day'
                            textStyle={{ alignSelf: 'center', }}
                            containerStyle={{
                                width: 182, height: 40, justifyContent: 'center',
                                marginVertical: 20,
                            }}
                            customStyle={{ backgroundColor: Color.primary }}
                            onPress={() => {
                                this.closePopup();
                            }}
                        />
                    </View>
                </View>

            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#40237E',
    },
    intro: {
        backgroundColor: '#fff',
        padding: 10,
        marginHorizontal: 30,
        alignItems: 'center',
    },
    popupIntro: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    today: {
        fontSize: 28,
        color: Color.textLight,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    iconHigh: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    name: {
        marginBottom: 8,
        fontSize: 16,
    },
    sort: {
        position: 'absolute',
        top: 20,
        right: 10,
        shadowColor: '#636363',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    days: {
        color: '#747474',
    },
    botNoti: {
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginBottom: 10,
    },
    botBlock: {
        width: '70%',
        marginVertical: 30,
        alignSelf: 'center',
    },
    botText1: {
        fontSize: 16,
        textAlign: 'center',
        color: Color.textDark,
        marginBottom: 10,
    },
    botText2: {
        fontSize: 13,
        textAlign: 'center',
        color: Color.textDark,
    },
    botText3: {
        fontSize: 12,
        textAlign: 'center',
        color: Color.textLight,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    add:{
        position: 'absolute',
        bottom: 20,
        right: 15,
    }
});