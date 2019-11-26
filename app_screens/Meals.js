import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MealContainer from '../containers/MealContainer'
import {connect} from 'react-redux'




class Meals extends React.Component {
  
  userBreakfastMeals = () => {
    if (this.props.userFoods) {
      const allBreakfast = [...this.props.userFoods, ...this.props.sessionFoods]
     return allBreakfast.filter(food => {
      //  console.log(food)
        return food["mealtime"] === "breakfast"
    
      })
  
    }
  }
  
    render () {
        // console.log(this.props.sessionFoods, "?")
    return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
        <Text style={styles.paragraph}> 
            </Text>
            <Text style={styles.paragraph}> 
                My Meals
            </Text>
            <Text style={styles.meal}>Breakfast</Text>
            <MealContainer userFoods={this.userBreakfastMeals()}/>
            {/* <Text style={styles.meal}>Lunch</Text>
            <MealContainer data={breakfastMeals}/>
            <Text style={styles.meal}>Dinner</Text>
            <MealContainer data={breakfastMeals}/> */}
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