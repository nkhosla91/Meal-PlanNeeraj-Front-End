import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MealContainer from '/Users/flatironschool/Documents/FINAL PROJECT - MOD 5/Meal-Planneeraj-Front-End/containers/MealContainer.js'
import t from 'tcomb-form-native'
import {connect} from 'react-redux'
import { addSessionFoods }from '../../actions'

const Form = t.form.Form



  const Mealtime = t.enums({
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner'
  })

const AddFood = t.struct({
    mealtime: Mealtime
})


// const breakfastMeals = [ {id: 1, name: "Kid's Minestrone Soup", carbs: 8, fat: 1, protein: 2, calories: 50}, { id: 2, name: "Kid's Sourdough Bread", carbs: 30, fat: 1, protein: 6, calories: 150}, {  id: 3, name: "Kid's Spaghetti with Tomato Sauce", carbs: 52, fat: 2, protein: 10, calories: 270} ]

class Show extends React.Component {


  handleSubmit = () => {
    const value = this._form.getValue()
    
    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    const hours = new Date().getHours(); //Current Hours
    const min = new Date().getMinutes(); //Current Minutes
    const sec = new Date().getSeconds(); //Current Seconds
    const fullDate = year + '-' + month + '-' + date + ' ' + hours + ':' + min + ':' + sec
    
    const sessionFood = {
      "created_at": `${fullDate}`,
      "food": {
          "name": this.props.selectFood["name"],
          "calories": this.props.selectFood["calories"],
          "carbs": this.props.selectFood["carbs"],
          "fat": this.props.selectFood["fat"],
          "protein": this.props.selectFood["protein"],
        },
      "mealtime": value["mealtime"]
    }

    const userfood = {
      user_id: this.props.user["id"],
      food_id: this.props.selectFood["id"],
      mealtime: value["mealtime"]
    }
    // console.log(userfood, "userfood")

    return fetch('http://10.9.105.109:3000/api/v1/userfoods', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userfood),
    }) 
    .then(this.props.addSessionFoods(sessionFood))
    .then(this.props.navigation.navigate('Meals'))
  }
//end of handle submit
  
    render () {
        // console.log(this.state)
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
            <View style={styles.meal}>  
              <Text>Name: {this.props.selectFood["name"]}</Text>
              <Text>Calories: {this.props.selectFood["calories"]}</Text>
              <Text>Carbohydrates: {this.props.selectFood["carbs"]} g</Text>
              <Text>Fat: {this.props.selectFood["fat"]} g</Text>
              <Text>Protein: {this.props.selectFood["protein"]} g</Text>
              </View>    
          <Button onPress={this.handleSubmit} title="Add Food!"/>
        </View>
    )
  }
}

export default connect(mapStateToProps, {addSessionFoods})(Show)

function mapStateToProps(state){
    return{
        selectFood: state.selectFood,
        user: state.user
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
        marginTop: 10
      }

  })