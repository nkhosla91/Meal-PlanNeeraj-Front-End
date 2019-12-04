import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import * as Progress from 'react-native-progress';
import { PieChart, ProgressChart, ProgressPie } from "react-native-chart-kit"
import ProgressCircle from 'react-native-progress-circle'
import { AnimatedCircularProgress } from 'react-native-circular-progress';


// const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class CalorieCalc extends React.Component {

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
                                return food["created_at"].slice(0,10) === fullDate
                            })
      
      dailyMeals.forEach(meal => {
        calories = calories + meal["food"]["calories"]
       
      })
      
      return calories
     }
   }

    render() {
    //   console.log(this.state)
        return (
            <View>

              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 20}}>
                  <AnimatedCircularProgress
                  style={{justifyContent: 'center'}}
          
                    rotation={0}
                    size={200}
                    duration={1200}
                    width={20}
                    fill={this.getCalories()/this.props.user["calories"]*100}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875">
                    {
                      (fill) => (
                        <Text style={styles.percent}>
                        {Math.floor(fill)} %
                        </Text>
                      )
                    }
                  </AnimatedCircularProgress>
                </View>
              <View style={styles.container}>
                  <Text style={styles.text}>{this.props.user["calories"]}     -    {this.getCalories()}     =   {this.props.user["calories"] - this.getCalories()} </Text>
                  <Text style={styles.text}>TDEE  -  Daily Cals  =  Rem. Cals</Text>
  
              </View>

              <View></View>
                 
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
        marginBottom: 20,
        textAlign: 'left',
        height: 55,
        justifyContent: 'center'
      },
      text: { 
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'Cochin',
          fontSize: 18
        },
        percent: { 
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'Cochin',
          fontSize: 40
        }
  });