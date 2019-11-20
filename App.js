import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image} from 'react-native';
// import { LinearGradient } from 'expo'
import { DrawerNavigator } from 'react-navigation'
import { Container, Content, Header, Icon, Body } from 'native-base';
import AppNavigation from './AppNavigation'


export default class App extends React.Component {
  
  state = {
    welcome: null
  }

  handleWelcome = (nav) => {v 
    this.setState({welcome: nav})
  }

  render (){
    console.log(this.state)
    return (
      <AppNavigation />
    )
  }
}//end of App Class


const styles = StyleSheet.create({
});
