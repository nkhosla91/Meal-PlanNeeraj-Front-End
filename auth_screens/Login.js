import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {connect} from 'react-redux'


class Login extends React.Component {
  render(){
    return (
      <View style={styles.container}>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})