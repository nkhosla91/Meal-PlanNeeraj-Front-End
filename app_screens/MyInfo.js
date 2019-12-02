import React from 'react'
import { StyleSheet, Text, View, Animated, Dimensions} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { PieChart } from "react-native-chart-kit"
import {connect} from 'react-redux'
import MacroPie from './DailySummary/MacroPie'
import CalorieCalc from './DailySummary/CalorieCalc'
import CalorieLineChart from './DailySummary/LineChart'

class MyInfo extends React.Component {


    render () {
        // console.log(this.props.screenProps)
    return (
        <KeyboardAwareScrollView  contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
            <Text style={styles.paragraph}> 
                    Daily Summary
                </Text>
              <MacroPie />
              <CalorieCalc />
            <Text style={styles.paragraph}> 
                   Weekly Caloric Intake
                </Text>
      <CalorieLineChart style={{padding: 0}}/>
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
      // padding: 20,
      justifyContent: 'center'
    },
    paragraph: {
      marginBottom: 18,
      fontSize: 18,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Cochin'
    },  
  })