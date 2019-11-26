import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, List } from 'react-native'
import {connect} from 'react-redux'



// const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class CalorieCalc extends React.Component {

  state = {
    calories: null
  }

   getCalories = () => {
     if (this.props.userFoods) {
        const date = new Date().getDate(); //Current Date
        const month = new Date().getMonth() + 1; //Current Month
        const year = new Date().getFullYear(); //Current Year
        const hours = new Date().getHours(); //Current Hours
        const fullDate = year + '-' + month + '-' + date

      const allMeals = [...this.props.userFoods, ...this.props.sessionFoods]
      
      let calories = null
     
      allMeals.filter(food => {
        return food["created_at"].slice(0,10) === fullDate
       })
      
      allMeals.forEach(meal => {
        calories = calories + meal["food"]["calories"]
       
      })
      
      return calories
     }
   }

    render() {
    //   console.log(this.state)
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.user["calories"]}     -    {this.getCalories()}   =   {this.props.user["calories"] - this.getCalories()} </Text>
                <Text style={styles.text}>TDEE - Daily Cals = Remaining Cals</Text>
            </View>
        
        )
    }
}

export default connect(mapStateToProps)(CalorieCalc)

function mapStateToProps(state){
    return{
       userFoods: state.userFoods,
       sessionFoods: state.sessionFoods,
       user: state.user
    }
  }

const styles = StyleSheet.create({
      container:  {
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
        marginBottom: 10,
        textAlign: 'center'
      },
      text: { 
          textAlign: 'center',
          fontWeight: 'bold',

        }
  });