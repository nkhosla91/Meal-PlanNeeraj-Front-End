import React from 'react';
// import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Search from './Food/Search'
import Show from './Food/Show'


export default createAppContainer (
    createBottomTabNavigator({
      Search: Search,
      Show: Show,
    },
    {
      initialRouteName: 'Search',
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
      },
  })
  )