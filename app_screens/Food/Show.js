import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MealContainer from '/Users/flatironschool/Documents/FINAL PROJECT - MOD 5/Meal-Planneeraj-Front-End/containers/MealContainer.js'
import t from 'tcomb-form-native'
import {connect} from 'react-redux'

const Form = t.form.Form



  const Meal = t.enums({
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner'
  })

const AddFood = t.struct({
    meal: Meal
})


const breakfastMeals = [ {id: 1, name: "Kid's Minestrone Soup", carbs: 8, fat: 1, protein: 2, calories: 50}, { id: 2, name: "Kid's Sourdough Bread", carbs: 30, fat: 1, protein: 6, calories: 150}, {  id: 3, name: "Kid's Spaghetti with Tomato Sauce", carbs: 52, fat: 2, protein: 10, calories: 270} ]

class Show extends React.Component {

  
    render () {
        console.log(this.props.selectFood, "selected")
    return (
        <View style={styles.container}>
        <Text style={styles.paragraph}> 
            </Text>
            <Text style={styles.paragraph}> 
                Food
            </Text>
            <Form  
                ref={c => this._form = c} 
                type={AddFood} 
                />
         <Text>Name: {this.props.selectFood["name"]}</Text>
         <Text>Calories: {this.props.selectFood["calories"]}</Text>
         <Text>Carbohydrates: {this.props.selectFood["carbs"]} g</Text>
         <Text>Fat: {this.props.selectFood["fat"]} g</Text>
         <Text>Protein: {this.props.selectFood["protein"]} g</Text>

        <Button title="Add Food!"/>

        </View>
    )
  }
}

export default connect(mapStateToProps)(Show)

function mapStateToProps(state){
    return{
        selectFood: state.selectFood
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
        marginBottom: 24,
        fontSize: 18,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Cochin'
      },
      meal: {
        marginBottom: 10,
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily: 'Cochin'
      }

  })