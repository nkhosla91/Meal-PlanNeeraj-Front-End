import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LineChart, BarChart, Grid } from "react-native-chart-kit"


export default class SettingsHome extends React.Component {

    handleNavigation = () =>{
        this.props.navigation.navigate('EditUser')
    }
    
    render () {
        // console.log(this.props.screenProps)
    return (
        <KeyboardAwareScrollView  contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}> 
                   Settings
                </Text>
                <TouchableOpacity onPress={this.handleNavigation}>
                          <Text >Edit User</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                          <Text >Log Out</Text>
                </TouchableOpacity>
              
            </View>
        </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C5FFCA',
    //   marginTop: 150,
      padding: 20,
      justifyContent: 'flex-start'
    },
    title: {
      marginTop: 85,
      marginBottom: 55,
      fontSize: 18,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Cochin'
    },  
  })