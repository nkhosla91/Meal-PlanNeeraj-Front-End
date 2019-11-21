import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import AccountInfo from './AccountInfo'
import PersonalInfo from './PersonalInfo'

const SignupStack = createStackNavigator(
  {
    AccountInfo: AccountInfo,
    PersonalInfo: PersonalInfo
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
    fat: null,
    protein: null
  }

  handleState = (infoHash) => {
    this.setState({...infoHash})
    if (!this.state.age){
     this.props.navigation.navigate('PersonalInfo')
    }
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




