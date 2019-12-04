import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MealContainer from '../containers/MealContainer'
import {connect} from 'react-redux'
import Slider from './Slider'
import BreakfastCalories from '../containers/BreakfastCalories'
import LunchCalories from '../containers/LunchCalories'
import DinnerCalories from '../containers/DinnerCalories'
import Icon from 'react-native-vector-icons/FontAwesome'


class Meals extends React.Component {
  
  userMeals = (meal) => {

    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    const hours = new Date().getHours(); //Current Hours

    function pad2(date) {
      return (date < 10 ? '0' : '') + date
  }

    newDay=pad2(date)

    const fullDate = year + '-' + month + '-' + newDay
  
    // console.log(`${fullDate}`)

    if (this.props.userFoods) {
      // console.log(this.props.userFoods, "user")
      // console.log(this.props.sessionFoods, "sesssss")
      const allMeals = [...this.props.userFoods, ...this.props.sessionFoods]
     return allMeals.filter(food => {
        // console.log(food["created_at"].slice(0,10))
        return food["mealtime"] === meal && food["created_at"].slice(0,10) === fullDate
    
      })
    }
  }

  handleAddFood = () => {
    this.props.navigation.navigate('Food')
  }
  
    render () {
        // console.log(this.props.sessionFoods, "?")
    return (
<ScrollView >
        <View style={styles.container}>
        <Text style={styles.paragraph}> 
            </Text>
            <Text style={styles.paragraph}> 
                My Meals
            </Text>

              <Slider style={{marginTop: 2, marginBottom: 10}}/>

            <TouchableOpacity style={styles.button} onPress={this.handleAddFood}>
              <Icon name="plus-square" color="red" size={70} />
            </TouchableOpacity>



            <Text style={styles.mealTitle}>Breakfast</Text>
              <View style={styles.meal}>
                  <MealContainer mealTime={BreakfastCalories} mealFoods={this.userMeals("breakfast")}/>
              </View>

              <Text style={styles.mealTitle}>Lunch</Text>
              <View style={styles.meal}>
                  <MealContainer mealTime={LunchCalories} mealFoods={this.userMeals("lunch")}/>
              </View>

              <Text style={styles.mealTitle}>Dinner</Text>
              <View style={styles.meal}>
                  <MealContainer mealTime={DinnerCalories} mealFoods={this.userMeals("dinner")}/>
              </View>
              <Text style={styles.paragraph}> 
             </Text>
        </View>
        </ScrollView>
    
    )
  }
}//end of meals class

export default connect(mapStateToProps)(Meals)

  function mapStateToProps(state){
    return{
       userFoods: state.userFoods,
       sessionFoods: state.sessionFoods,
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C5FFCA',
      //   marginTop: 150,
        justifyContent: 'flex-start'
      },
      paragraph: {
        // flex: 1,
        padding: 24,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Cochin'
      },
      mealTitle: {
        padding:10,
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily: 'Cochin'
      },
      meal: {
        backgroundColor: '#B3A5FD',
        borderRadius: 14,
        padding: 10,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10
      },
      button: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 14,
      },
      buttonText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#B5C0AE',
        height: 26,
        width: 100,
        textAlignVertical: 'center'
      }

  })