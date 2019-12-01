import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {connect} from 'react-redux'
import t from 'tcomb-form-native'

const Form = t.form.Form

const User = t.struct({
    username: t.String,
    password: t.String
})


class Login extends React.Component {
  render(){
    return (
      <View style={styles.container}>
           <Form  
                    ref={c => this._form = c} 
                    type={User} 
    
                    />
        <Button
            title="Log In"
            onPress={this.props.loggedIn}
            
          />
      </View>
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
    alignItems: 'center',
    justifyContent: 'center'
  }
})