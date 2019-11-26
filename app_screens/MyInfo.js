import React from 'react'
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { PieChart } from "react-native-chart-kit"
import {connect} from 'react-redux'


class MyInfo extends React.Component {



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
      allMeals.filter(food => {
        return food["created_at"].slice(0,10) === fullDate
       })
      
      allMeals.forEach(meal => {
        carbs = carbs + meal["food"]["carbs"]
        fat = fat + meal["food"]["fat"]
        protein = protein + meal["food"]["protein"]
      })
      console.log(fat, carbs, protein)
      
      data = [
        {
          name: 'Carbs',
          population: carbs,
          color: 'rgba(131, 167, 234, 1)',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'Fat',
          population: fat,
          color: '#F00',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'Protein',
          population: protein,
          color: '#ffffff',
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
        <KeyboardAwareScrollView  contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.paragraph}> 
                    SUMMARY
                </Text>
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
  accessor="population"
  backgroundColor="transparent"
/>
              
            </View>
        </KeyboardAwareScrollView>
    )
  }
}

export default connect(mapStateToProps)(MyInfo)

  function mapStateToProps(state){
    return{
       userFoods: state.userFoods,
       sessionFoods: state.sessionFoods,
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
    chartConfig: {
      backgroundColor: '#e26a00',
      color: () => `rgb(255, 255, 255)`
    }
  })