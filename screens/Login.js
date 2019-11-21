import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {connect} from 'react-redux'
import { runInThisContext } from 'vm'

function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
          title="Log In"
          onPress={() => this.props.logIn}
        />
    </View>
  )
}

export default connect(mapDispatchToProps)(Login)


function mapDispatchToProps(dispatch){
  return {
      logIn: () => dispatch({type: 'LOG_IN'}),
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})