import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import AccountInfo from './AccountInfo'
import PersonalInfo from './PersonalInfo'
import Macros from './Macros'
import Summary from './Summary'
// import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions'
import { zoomIn } from 'react-navigation-transitions';


const SignupStack = createStackNavigator(
  {
    AccountInfo: AccountInfo,
    PersonalInfo: PersonalInfo,
    Macros: Macros,
    Summary: Summary
  },
  {
    initialRouteName: 'AccountInfo',
    transitionConfig: () => zoomIn(1000),
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
    carbPercent: null,
    fatPercent: null,
    proteinPercent: null,
    carbCalories: null,
    fatCalories: null,
    proteinCalories: null
  }

  handleState = (infoHash) => {
    console.log(this.state.activityLevel)
    this.setState({...infoHash})
    // console.log(this.state.email, this.state.age)
    if (!this.state.email){
     this.props.navigation.navigate('PersonalInfo')
    
    } else if (!this.state.age){
      // console.log(this.state)
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
                  //  console.log(this.state)
                   this.props.navigation.navigate('Macros')
              }//end of calorie if statement
          
    } else if (!this.state.proteinCalories){
      this.props.navigation.navigate('Summary')
    } 
  }

  handleCreateUser = () => {
    let createUserArray = this.state
    createUserArray["activityLevel"] = parseFloat(this.state.activityLevel)
    // console.log(createUserArray)
   
      return fetch('http://10.9.109.135:3000/api/v1/users', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(createUserArray),
     }) 
     .then(this.props.navigation.navigate('WelcomeScreen'))
  }
  

  render () {
    // console.log(this.state)
    const { navigation } = this.props
    const props = {
      handleState: this.handleState,
      calories: this.state.calories,
      carbCalories: this.state.carbCalories,
      proteinCalories: this.state.proteinCalories,
      fatCalories: this.state.fatCalories,
      handleCreateUser: this.handleCreateUser
    }

      return (
      <SignupStack navigation={navigation} screenProps={props}/>
    )
  }
}

export default Signup




