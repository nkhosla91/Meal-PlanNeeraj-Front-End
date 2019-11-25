import React from 'react';
// import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Search from './Food/Search'
import Show from './Food/Show'

export default createAppContainer (
    createBottomTabNavigator({
      Search: Search,
      Show: Show
    })
  )