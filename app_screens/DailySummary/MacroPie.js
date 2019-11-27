import React from 'react'
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { PieChart, ProgressChart } from "react-native-chart-kit"
import {connect} from 'react-redux'
import { VictoryPie } from 'victory-native';


class MacroPie extends React.Component {



  pieData = ()=> {

    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    const hours = new Date().getHours(); //Current Hours
    const fullDate = year + '-' + month + '-' + date
    
    let carbs = 0
    let fat = 0
    let protein = 0
    let data = []

    if (this.props.userFoods) {
     
      const allMeals = [...this.props.userFoods, ...this.props.sessionFoods]
      let dailyMeals = allMeals.filter(food => {
                          return food["created_at"].slice(0,10) === fullDate
                        })
      // console.log(allMeals)
      dailyMeals.forEach(meal => {
        carbs = carbs + meal["food"]["carbs"]
        fat = fat + meal["food"]["fat"]
        protein = protein + meal["food"]["protein"]
      })
      // console.log(fat, carbs, protein)
      
      data = [
        {
          name: 'Carbs',
          macro: carbs,
          color: 'blue',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'Fat',
          macro: fat,
          color: '#F00',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'Protein',
          macro: protein,
          color: 'yellow',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
      
      ]
      
    } 
      return data
}

    render () {
        // console.log(this.props.screenProps)
    return (
      <View>
                <PieChart
                    data={this.pieData()}
                                    width={Dimensions.get('window').width - 16}
                    height={220}
                    chartConfig={{
                      backgroundColor: '#1cc910',
                      backgroundGradientFrom: '#eff3ff',
                      backgroundGradientTo: '#efefef',
                      decimalPlaces: 2,
                      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                      style: {
                        borderRadius: 16,
                      },
                    }}
                    style={{
                      marginVertical: 8,
                      borderRadius: 16,
                    }}
                    accessor="macro"
                    backgroundColor="transparent"
                  />
             

                </View>
    
    )
  }
}

export default connect(mapStateToProps)(MacroPie)

  function mapStateToProps(state){
    return{
       userFoods: state.userFoods,
       sessionFoods: state.sessionFoods,
    }
  }

