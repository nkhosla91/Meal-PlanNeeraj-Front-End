import React from 'react';
// import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import BarcodeScanner from './Food/BarcodeScanner'
import CreateFood from './Food/CreateFood';

export default createAppContainer (
    createBottomTabNavigator({
      Scan: BarcodeScanner,
      "Create Food": CreateFood
    },
    {
      initialRouteName: 'Scan',
      tabBarOptions: {
        activeTintColor: 'yellow',
        inactiveTintColor: 'black',
        style: {
          backgroundColor: '#98d99d',
        },
        labelStyle: {
          fontSize: 20,
          textAlign: 'center',
          fontFamily: 'Cochin'
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }
    }
    )
  )