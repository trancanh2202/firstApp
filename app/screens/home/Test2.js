import React from 'react';
import {
    SafeAreaView, ActivityIndicator, View, ListView, Text, StatusBar, Image, AppRegistry,
    ScrollView, StyleSheet, TouchableHighlight, FlatList
} from 'react-native';
import { Calendar, Agenda } from 'react-native-calendars';

export default class AppCalendar extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Calendar",
    });

    constructor(props) {
        super(props)
        this.state = {
            clonedMovies: [],
            isLoading: true,
            events: []
        }
    }

    renderCalendarList = () => {
        return (
            <FlatList
                pageSize={1}
                horizontal={true}
                pagingEnabled={true}
                scrollEnabled={true}
                keyExtractor={this.keyExtractor}
                ref={(c) => this.calendarList = c}
                getItemLayout={this.getItemLayout}
                renderItem={this.renderCalendarComponent}
                onViewableItemsChanged={this.onViewableItemsChanged}
                data={(this.state.weekMode ? this.state.weekRows : this.state.rows)} />
        )
    }

    switchView = () => {
        this.setState({ weekMode: !this.state.weekMode });

        // next week is going to be month view
        if (this.state.weekMode) {
            const mYClone = this.state.monthYears.slice(0);
            const selectedDay = DateUtils.formatDateInMY(this.props.selectedDay);

            for (let i = 0; i < mYClone.length; i++) {
                if (selectedDay === mYClone[i]) {
                    this.setState({ currentMonth: this.props.selectedDay })
                    this.calendarList.scrollToIndex({ animated: false, index: i });
                }
            }
        } else {             // next week is going to be week view
            const rowClone = this.state.weekRows.slice(0);

            for (let i = 0; i < rowClone.length; i++) {
                if (isSameWeek(rowClone[i], this.props.selectedDay)) {
                    this.setState({ currentMonth: rowClone[i] });
                    this.calendarList.scrollToIndex({ animated: false, index: i });
                }
            }
        }
    }

    render() {
        const { container, monthContainer, weekContainer } = styles;
        const { currentMonth, firstDay, style, weekMode } = this.props;
        if (!weekMode) {
            const days = DateUtils.populateMonth(currentMonth, firstDay);
            const weeks = [];
            while (days.length) {
                weeks.push(this.renderWeek(days.splice(0, 7), weeks.length));
            }
            return (
                <View style={[container, style]}>
                    <View style={[monthContainer]}>{weeks}</View>
                </View>
            )
        } else {
            const startDay = subDays(currentMonth, 3); // focus on middle
            const endDay = addDays(startDay, 6)
            const days = eachDay(startDay, endDay, 1);
            const daysToRender = [];
            days.forEach((day, dayID) => {
                daysToRender.push(this.renderDay(day, dayID))
            });
            return (
                <View style={style}>
                    <View style={[weekContainer]}>
                        {daysToRender}
                    </View>
                </View>
            )
        }
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
})