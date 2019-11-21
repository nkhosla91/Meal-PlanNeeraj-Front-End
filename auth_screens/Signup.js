import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { StyleSheet, Text, View } from 'react-native'
import AccountInfo from './AccountInfo'

const SignupStack = createStackNavigator(
  {
    AccountInfo: AccountInfo,
  },
  {
    initialRouteName: 'AccountInfo',
  }
)

class Signup extends React.Component {
  static router = SignupStack.router;

  state = {
    user: null
  }

  render () {
    const { navigation } = this.props

      return (
      <SignupStack navigation={navigation}/>
    )
  }
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})


