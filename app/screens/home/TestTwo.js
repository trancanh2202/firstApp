import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

import CalendarStrip from 'react-native-calendar-strip';

import Button from '../../common/Button';
import Color from '../../common/Color';
import moment from 'moment';

const now = moment().format("YYYY-MM-DD");

export default class TestTwoScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //selected: 20,
        };
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let headerTitle = 'Sign In';
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
        let datesWhitelist = [{
            start: moment("2018-10-17"),
            end: moment("2018-10-20")  // total 4 days enabled
        }];
        let datesBlacklist = [moment("2018-10-19")]; // 1 day disabled
        let selectedDate = [moment("2018-10-15")]; // 1 day disabled
        let demo = [moment("2018-10-15")]; 

        return (
            <View style={styles.container}>
                <CalendarStrip
                    calendarAnimation={{ type: 'sequence', duration: 30 }}
                    daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white' }}
                    style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
                    calendarHeaderStyle={{ color: 'white' }}
                    calendarColor={'#DD7373'}
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    calendar: {
        paddingTop: 5,
        height: 350
    },
    text: {
        textAlign: 'center',
        borderColor: '#bbb',
        padding: 10,
        backgroundColor: '#eeeeee'
    },
    container: {
        flex: 1,
    }
});