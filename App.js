import React from 'react';
import FullAppNavigator from './FullAppNavigator'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const initialState = {
  user: {id: 8, username: "nk216", email: "n.khosla91@gmail.com", password: "1", gender: "M", age: 28, height: 72, weight: 177, activityLevel: 1.55, BMR: 1893, calories: 2604, carbPercent: 50, fatPercent: 30, proteinPercent: 20, carbCalories: 1302, fatCalories: 781, proteinCalories: 520},
  // meals: [ {id: 1, user_id: 8, name: "Meal One", created_at: "2019-11-23 17:07:38", updated_at: "2019-11-23 17:07:38"}, {id: 2, user_id: 8, name: "Meal Two", created_at: "2019-11-23 17:07:52", updated_at: "2019-11-23 17:07:52"} ],
  // breakfastMeals:  [ {id: 1, name: "Kid's Minestrone Soup", carbs: 8, fat: 1, protein: 2, calories: 50}, { id: 2, name: "Kid's Sourdough Bread", carbs: 30, fat: 1, protein: 6, calories: 150}, {  id: 3, name: "Kid's Spaghetti with Tomato Sauce", carbs: 52, fat: 2, protein: 10, calories: 270} ],
  allFood: [],
  userfoods: [],
  sessionFoods: [],
  loggedIn: true,
  selectFood: {},
}




const reducer = (prevState = initialState, action) => {
  switch(action.type)
  {
    case 'LOGGED_IN':
      return {...prevState, loggedIn: true}
    case 'ALL_FOOD':
      // console.log("selected")
      return {...prevState, allFood: action.payload}
    case 'SELECT_FOOD':
      return {...prevState, selectFood: action.payload}
    case 'FETCH_USER_FOODS':
          return {...prevState, userFoods: action.payload}
    case 'ADD_SESSION_FOODS':
      // console.log(action.payload, "payload")
          return {...prevState, sessionFoods: [...prevState.sessionFoods, action.payload]}
    case 'REPLACE_SESSION_FOODS':
          return {...prevState, sessionFoods: action.payload}
    // case 'SELECTED_MEAL':
    //     return {selectedMeal: null}
    // case 'SET_USER':
    //   return {user: {id: 8, username: "nk216", email: "n.khosla91@gmail.com", password: [FILTERED], gender: "M", age: 28, height: 72, weight: 177, activityLevel: 1, BMR: 1893, calories: 2604, carbPercent: 50, fatPercent: 30, proteinPercent: 20, carbCalories: 1302, fatCalories: 781, proteinCalories: 520} }
    // case 'SET_FOOD':
    //   return {foods:  [ {id: 1, name: "Kid's Minestrone Soup", carbs: 8, fat: 1, protein: 2, calories: 50}, { id: 2, name: "Kid's Sourdough Bread", carbs: 30, fat: 1, protein: 6, calories: 150}, {  id: 3, name: "Kid's Spaghetti with Tomato Sauce", carbs: 52, fat: 2, protein: 10, calories: 270} , {id: 4, name: "Lunch Four Cheese Manicotti with Alfredo and Tomato", carbs: 49, fat: 31, protein: 30, calories: 590}, { id: 5, name: "Grilled Chicken Breast Sandwich with French Fries", carbs: 154, fat: 33, protein: 49, calories: 1100},{id: 6, name: "Tilapia Sandwich with French Fries", carbs: 140, fat: 61, protein: 47, calories: 1320}, {id: 7, name: "Baked Penne", carbs: 81, fat: 37, protein: 31, calories: 780}, { id: 8, name: "Four Cheese Manicotti", carbs: 70, fat: 41, protein: 43, calories: 810}, { id: 9, name: "Shrimp Alfredo", carbs: 78,  fat: 25, protein: 39, calories: 700}] }
    // case 'SET_MEALS':
    //   return {foods: [] }
    default:
     return prevState 
  }
}

const store = createStore(reducer)


class App extends React.Component {
  
  render (){
      return (
        <Provider store={store}>
          <FullAppNavigator />
        </Provider>
      )
  }

}//end of App Class 


export default App

