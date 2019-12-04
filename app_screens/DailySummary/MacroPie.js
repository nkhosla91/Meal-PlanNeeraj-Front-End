import React from 'react'
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { PieChart, ProgressChart } from "react-native-chart-kit"
import {connect} from 'react-redux'
// import { VictoryPie } from 'victory-native';



class MacroPie extends React.Component {



  pieData = ()=> {
    let data = []
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
      
      let carbs = 0
      let fat = 0
      let protein = 0
      

     
      const allMeals = [...this.props.userFoods, ...this.props.sessionFoods]
      let dailyMeals = allMeals.filter(food => {
        // console.log(food["created_at"])
                          return food["created_at"].slice(0,10) === fullDate
                        })
      // console.log(allMeals)
      dailyMeals.forEach(meal => {
        carbs = carbs + meal["food"]["carbs"]*4
        fat = fat + meal["food"]["fat"]*9
        protein = protein + meal["food"]["protein"]*4
      })
      // console.log(fat, carbs, protein, fullDate)
      
      data = [
        {
          name: 'Carbs',
          macro: carbs,
          color: '#D81159',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'Fat',
          macro: fat,
          color: '#8DDBE0',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'Protein',
          macro: protein,
          color: '#4B5043',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
      
      ]
      
    } 
      return data
}

    render () {
        // console.log(this.props, "props")
    return (
      <View>
                <PieChart
                    data={this.pieData()}
                                    width={Dimensions.get('window').width - 16}
                    height={220}
                    chartConfig={  {
                      backgroundColor: '#000000',
                      backgroundGradientFrom: '#1E2923',
                      backgroundGradientTo: '#08130D',
                      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                      style: {
                        borderRadius: 16
                      }
                    }}
                    style={{
                      marginLeft: 20,
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