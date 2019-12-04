import React from 'react'
import { StyleSheet, Text, View, Animated, Dimensions, ScrollView} from 'react-native'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { PieChart } from "react-native-chart-kit"
import {connect} from 'react-redux'
import MacroPie from './DailySummary/MacroPie'
import CalorieCalc from './DailySummary/CalorieCalc'
import CalorieLineChart from './DailySummary/LineChart'

class MyInfo extends React.Component {


    render () {
        // console.log(this.props.screenProps)
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
            <Text style={styles.title}> 
                    Daily Summary
                </Text>
              <CalorieCalc />
                
              <Text style={styles.paragraph}> 
                    Macronutrients
                </Text>
              <MacroPie />
            <Text style={styles.paragraph}> 
                   Weekly Caloric Intake
                </Text>
                <Text style={styles.subText}> 
                    Click any data point for more information!
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <CalorieLineChart style={{justifyContent: 'center'}}/>
                  </View>
              
            <Text style={{padding: 20}}></Text>
            </View>

        </ScrollView>
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
      // padding: 20,
      justifyContent: 'center'
    },
    title: {
      marginTop: 75,
      marginBottom: 18,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Cochin',
      justifyContent: 'center'
    },
    paragraph: {
      marginBottom: 18,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Cochin',
      justifyContent: 'center'
    },  
    subText: {
      marginBottom: 10,
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily: 'Cochin',
      justifyContent: 'center'
    }
  })