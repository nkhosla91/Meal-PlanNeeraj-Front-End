import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import AccountInfo from './AccountInfo'
import PersonalInfo from './PersonalInfo'
import Macros from './Macros'
import Summary from './Summary'

const SignupStack = createStackNavigator(
  {
    AccountInfo: AccountInfo,
    PersonalInfo: PersonalInfo,
    Macros: Macros,
    Summary: Summary
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
    activityLevel: null,
    BMR: null,
    calories: null,
    carbs: null,
    fat: null,
    protein: null
  }

  handleState = (infoHash) => {
    // console.log(infoHash)
    this.setState({...infoHash})
    // console.log(this.state.email, this.state.age)
    if (!this.state.email){
     this.props.navigation.navigate('PersonalInfo')
    
    } else if (!this.state.age){
      console.log(infoHash["gender"], this.state)
              if (infoHash["gender"] === "M"){
                    const BMR = 66 + (6.23 * infoHash["weight"]) + (12.7 * infoHash["height"]) - (6.76 * infoHash["age"])
                    const calories = BMR * infoHash["activityLevel"]
                    this.setState({BMR, calories})
                    // console.log(this.state)
                    this.props.navigation.navigate('Macros')
              } else if (infoHash["gender"] === "F"){
                    const BMR = 655.1 + (4.35 * infoHash["weight"]) + (4.7 * infoHash["height"]) - (4.7 * infoHash["age"])
                    const calories = BMR * infoHash["activityLevel"]
                    this.setState({BMR, calories})
                   console.log(this.state)
                   this.props.navigation.navigate('Macros')
              }//end of calorie if statement
    } else {
      //fetch post goes here************************************************************
      this.props.navigation.navigate('Summary')
    }
  }
  

  render () {
    console.log(this.state)
    const { navigation } = this.props
    const props = {
      handleState: this.handleState,
      calories: this.state.calories
    }

      return (
      <SignupStack navigation={navigation} screenProps={props}/>
    )
  }
}

export default Signup




