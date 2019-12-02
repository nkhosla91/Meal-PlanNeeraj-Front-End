import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, List } from 'react-native'
import {connect} from 'react-redux'
import * as Progress from 'react-native-progress';
import { PieChart, ProgressChart } from "react-native-chart-kit"
import ProgressCircle from 'react-native-progress-circle'
 



// const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class DinnerCalories extends React.Component {

  state = {
    calories: 0
  }

   getCalories = () => {
     if (this.props.userFoods) {
      const date = new Date().getDate(); //Current Date
      const month = new Date().getMonth() + 1; //Current Month
      const year = new Date().getFullYear(); //Current Year
      const hours = new Date().getHours(); //Current Hours
  
      function pad2(date) {
        return (date < 10 ? '0' : '') + date
    }
  
      newDay=pad2(date)
  
      const fullDate = year + '-' + month + '-' + newDay

      const allMeals = [...this.props.userFoods, ...this.props.sessionFoods]
      
      let calories = null
     
      let dailyMeals = allMeals.filter(food => {
                            if(food["mealtime"]=== "dinner"){
                                return food["created_at"].slice(0,10) === fullDate
                            }
                            })
      
      dailyMeals.forEach(meal => {
        calories = calories + meal["food"]["calories"]
       
      })
      
      return calories
     }
   }

    render() {
    //   console.log(this.props)
        return (
            <View>
              <View style={styles.container}>
                  <Text style={styles.text}>{this.getCalories()} calories </Text>

              </View>
       </View>
        
        )
    }
}

export default connect(mapStateToProps)(DinnerCalories)

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
        marginLeft: 280,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'flex-end',
      },
      text: { 
          textAlign: 'center',
          fontSize: 10

        }
  });