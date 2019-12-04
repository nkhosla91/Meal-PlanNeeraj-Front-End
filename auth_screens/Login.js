import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {connect} from 'react-redux'
import t from 'tcomb-form-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Form = t.form.Form

const User = t.struct({
    username: t.String,
    password: t.String
})


class Login extends React.Component {
  render(){
    return (
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>Please enter your username and password</Text>
           <Form  
                    ref={c => this._form = c} 
                    type={User} 
    
                    />
        <Button
            title="Log In"
            onPress={this.props.loggedIn}
            
          />
      </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default connect(null, mapDispatchToProps)(Login)


function mapDispatchToProps(dispatch){
  return {
      loggedIn: () => dispatch({type: 'LOGGED_IN'}),
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5FFCA',
    padding: 20,
    justifyContent: 'center'
  },
  paragraph: {
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Cochin'
  },
})