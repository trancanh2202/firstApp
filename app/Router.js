import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import LoadingScreen from './screens/signin/Loading';
import SignCreateScreen from './screens/signin/SigninCreateacc';
import CreateAccScreen from './screens/signin/CreateAcc';
import SignInScreen from './screens/signin/SignIn';
import SyncCalendarScreen from './screens/signin/SyncCalendar';
import HomeWelcomeScreen from './screens/home/HomeWelcome';
import HomeDefaultScreen from './screens/home/HomeDefault';

import MainMenuScreen from './screens/menu/MainMenu';
import EditAccScreen from './screens/menu/EditAcc';
import ChangePassScreen from './screens/menu/ChangePass';
import AboutScreen from './screens/menu/About';
import LegalsScreen from './screens/menu/Legals';
import MyTagScreen from './screens/menu/MyTag';

import TestTwoScreen from './screens/home/TestTwo';

export const RootStack = createStackNavigator(
  {
    Loading_Screen: {
      screen: LoadingScreen,
      navigationOptions: ({navigation}) => ({
        header: null,
        tabBarVisible: false,
        gesturesEnabled: false
      }),
    },
    SignCreate_Screen:{
      screen: SignCreateScreen,
      navigationOptions: ({navigation}) => ({
        header: null,
        tabBarVisible: false,
        gesturesEnabled: false
      }),
    },
    CreateAcc_Screen:{
      screen: CreateAccScreen,
    },
    SignIn_Screen:{
      screen: SignInScreen,
    },
    HomeWelcome_Screen:{
      screen: HomeWelcomeScreen,
      navigationOptions: ({navigation}) => ({
        header: null,
        tabBarVisible: false,
        gesturesEnabled: false
      }),
    },
    HomeDefault_Screen:{
      screen: HomeDefaultScreen,
    },
    MainMenu_Screen:{
      screen: MainMenuScreen,
    },
    EditAcc_Screen:{
      screen: EditAccScreen,
    },
    ChangePass_Screen:{
      screen: ChangePassScreen,
    },
    About_Screen:{
      screen: AboutScreen,
    },
    Legals_Screen:{
      screen: LegalsScreen,
    },
    MyTag_Screen:{
      screen: MyTagScreen,
    },
    TestTwo_Screen:{
      screen: TestTwoScreen,
    },
  },
  {
    initialRouteName: 'HomeWelcome_Screen',
  }
);