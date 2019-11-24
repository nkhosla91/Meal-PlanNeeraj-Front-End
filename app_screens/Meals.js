import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MealContainer from '../containers/MealContainer'

const breakfastMeals = [ {id: 1, name: "Kid's Minestrone Soup", carbs: 8, fat: 1, protein: 2, calories: 50}, { id: 2, name: "Kid's Sourdough Bread", carbs: 30, fat: 1, protein: 6, calories: 150}, {  id: 3, name: "Kid's Spaghetti with Tomato Sauce", carbs: 52, fat: 2, protein: 10, calories: 270} ]

export default class Meals extends React.Component {

  
    render () {
        // console.log(this.props.screenProps)
    return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
        <Text style={styles.paragraph}> 
            </Text>
            <Text style={styles.paragraph}> 
                My Meals
            </Text>
            <Text style={styles.meal}>Breakfast</Text>
            <MealContainer data={breakfastMeals}/>
            <Text style={styles.meal}>Lunch</Text>
            <MealContainer data={breakfastMeals}/>
            <Text style={styles.meal}>Dinner</Text>
            <MealContainer data={breakfastMeals}/>
        </View>
        </KeyboardAwareScrollView>
    
    )
  }
}

const styles = StyleSheet.create({
    container: {
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