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
      initialRouteName: 'Scan'
    }
    )
  )