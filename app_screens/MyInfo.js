import React from 'react'
import { StyleSheet, Text, View, Animated, Dimensions} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { PieChart } from "react-native-chart-kit"
import {connect} from 'react-redux'
import MacroPie from './DailySummary/MacroPie'
import CalorieCalc from './DailySummary/CalorieCalc'
// import LineChart from './DailySummary/LineChart'

const data = [
  { x: 1, y: 13000 },
  { x: 2, y: 16500 },
  { x: 3, y: 14250 },
  { x: 4, y: 19000 }
];

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
            </View>
            {/* <LineChart
        onDataPointClick={()=>console.log('masoud')}
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ]
          }]
        }}
        // width={Dimensions.get('window').width} // from react-native
        // height={Dimensions.get('window').height}
        // chartConfig={{
        //   backgroundColor: '#e26a00',
        //   backgroundGradientFrom: '#fb8c00',
        //   backgroundGradientTo: '#ffa726',
        //   decimalPlaces: 2, // optional, defaults to 2dp
        //   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        //   style: {
        //     borderRadius: 16
        //   }
        // }}
        // style={{
         /> */}

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
  })