import { createStackNavigator } from 'react-navigation-stack'
import  { createAppContainer  } from 'react-navigation'
import Login from './screens/Login'
import Signup from './screens/Signup'
import WelcomeScreen from './screens/WelcomeScreen'

export default createAppContainer (
  createStackNavigator(
      {
        WelcomeScreen: WelcomeScreen,
        Login: Login,
        Signup: Signup,
      },
      {
        initialRouteName: 'WelcomeScreen',
      }
    )
)

