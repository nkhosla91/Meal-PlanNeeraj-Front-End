import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import AccountInfo from './AccountInfo'

const SignupStack = createStackNavigator(
  {
    AccountInfo: AccountInfo,
  },
  {
    initialRouteName: 'AccountInfo',
    headerMode: 'none'
  }
)

class Signup extends React.Component {
  static router = SignupStack.router;

  state = {
    username: null,
    email: null,
    password: null,
    gender: null,
    age: null,
    height: null,
    weight: null,
    calories: null,
    carbs: null,
    fat: null
  }

  handleState = (infoHash) => {
    this.setState({...infoHash})
    // console.log('infoHahs', infoHash)
  }
  

  render () {
    console.log(this.state)
    const { navigation } = this.props

      return (
      <SignupStack navigation={navigation} screenProps={this.handleState}/>
    )
  }
}

export default Signup




