import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, List } from 'react-native'
import {connect} from 'react-redux'
import * as Progress from 'react-native-progress';
import { PieChart, ProgressChart } from "react-native-chart-kit"
import ProgressCircle from 'react-native-progress-circle'
 



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
              <View style={styles.container}>
                  <Text style={styles.text}>{this.props.user["calories"]}     -    {this.getCalories()}     =   {this.props.user["calories"] - this.getCalories()} </Text>
                  <Text style={styles.text}>TDEE  -  Daily Cals  =  Rem. Cals</Text>
                  <Text> </Text>
                  <Progress.Bar progress={this.getCalories()/this.props.user["calories"]} width={340} />
              </View>
              <View></View>
                  {/* <ProgressChart
                        data={[.4]}
                        width={300}
                        height={220}
                        
                        // backgroundColor="#B3A5FD"
                        chartConfig={{
                          backgroundColor: "#C5FFCA'",
                          backgroundGradientFrom: "#C5FFCA'",
                          backgroundGradientTo: "#C5FFCA'",
                          decimalPlaces: 2, // optional, defaults to 2dp
                          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                          style: {
                            borderRadius: 16
                          },
                          propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                          }
                        }}
                        /> */}
                   {/* <ProgressCircle
                        percent={30}
                        radius={50}
                        borderWidth={8}
                        color="#3399FF"
                        shadowColor="#999"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 18 }}>Cals</Text> */}
                    {/* </ProgressCircle>
              </View> */}
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