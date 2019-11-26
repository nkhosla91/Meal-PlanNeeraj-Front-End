import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MealContainer from '../containers/MealContainer'
import {connect} from 'react-redux'




class Meals extends React.Component {
  
  userMeals = (meal) => {

    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    const hours = new Date().getHours(); //Current Hours
    const fullDate = year + '-' + month + '-' + date
   
    // console.log(`${fullDate}`)

    if (this.props.userFoods) {
      // console.log(this.props.userFoods, "user")
      // console.log(this.props.sessionFoods, "sesssss")
      const allMeals = [...this.props.userFoods, ...this.props.sessionFoods]
     return allMeals.filter(food => {
        // console.log(food["created_at"].slice(0,10))
        return food["mealtime"] === meal && food["created_at"].slice(0,10) === fullDate
    
      })
      // console.log(allMeals)
    }
  }
  
    render () {
        // console.log(this.props.sessionFoods, "?")
    return (
    <KeyboardAwareScrollView contentContainerStyle={{flexgrow: 1}}>
        <View style={styles.container}>
        <Text style={styles.paragraph}> 
            </Text>
            <Text style={styles.paragraph}> 
                My Meals
            </Text>
            <Text style={styles.meal}>Breakfast</Text>
            <MealContainer mealFoods={this.userMeals("breakfast")}/>
            <Text style={styles.meal}>Lunch</Text>
            <MealContainer mealFoods={this.userMeals("lunch")}/>
            <Text style={styles.meal}>Dinner</Text>
            <MealContainer mealFoods={this.userMeals("dinner")}/>
        </View>
        </KeyboardAwareScrollView>
    
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
        padding: 20,
        justifyContent: 'center'
      },
      paragraph: {
        flex: 1,
        padding: 24,
        fontSize: 18,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Cochin'
      },
      meal: {
        flex: 1,
        padding: 20,
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily: 'Cochin'
      }

  })