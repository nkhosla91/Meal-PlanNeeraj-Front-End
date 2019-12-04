import { Dimensions, SafeAreaView } from 'react-native'
import { createDrawerNavigator} from 'react-navigation-drawer'
import  { createAppContainer } from 'react-navigation'
import MyInfo from './App_screens/MyInfo'
import SettingsScreen from './App_screens/SettingsScreen'
import FoodNavigator from './App_screens/FoodNavigator'
import Meals from './App_screens/Meals'
import ScanNavigator from './App_screens/ScanNavigator'
 

export default createAppContainer (
  createDrawerNavigator({
    Meals: {
      screen: Meals
    },
    "My Info": {
      screen: MyInfo
    },
    Food: {
      screen: FoodNavigator
    },
    Scan: {
      screen: ScanNavigator
    },
    Settings: {
      screen: SettingsScreen
    },
  },{
    drawerBackgroundColor : '#98d99d',
    drawerWidth: Dimensions.get('window').width*.775,
    drawerType: 'slide',
    resetOnBlur: true,
    contentOptions: {
      activeTintColor: 'yellow',
      inactiveTintColor : 'black',
      labelStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Cochin'
      }
    }
  }
  )
)


// const customDrawerComponent = (props) => {
//   <SafeAreaView style={{flex: 1}}>
//     <View style={{backgroundColor: 'black'}}>

//     </View>
//     <ScrollView>
//       <DrawerItems {...props}/>
//     </ScrollView>
     
//   </SafeAreaView>
// }
