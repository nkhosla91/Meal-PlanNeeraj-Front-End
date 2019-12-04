import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {connect} from 'react-redux'


class SettingsHome extends React.Component {

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
                          <Text style={styles.options} >Edit User</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.loggedIn}>
                          <Text style={styles.options}>Log Out</Text>
                </TouchableOpacity>
              
            </View>
        </KeyboardAwareScrollView>
    )
  }
}

export default connect(null, mapDispatchToProps)(SettingsHome)


function mapDispatchToProps(dispatch){
  return {
      loggedIn: () => dispatch({type: 'LOGGED_IN'}),
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
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Cochin'
    },  
    options: {
      fontSize: 18,
      textAlign: 'left',
      fontWeight: 'bold',
      fontFamily: 'Cochin',
      marginBottom: 10
    },  
  })