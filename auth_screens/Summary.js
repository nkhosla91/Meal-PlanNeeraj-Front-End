import React from 'react'
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LineChart, BarChart, Grid } from "react-native-chart-kit"


export default class Summary extends React.Component {

    
    render () {
        // console.log(this.props.screenProps)
    return (
        <KeyboardAwareScrollView  contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.paragraph}> 
                   DAILY CALORIC BREAKDOWN
                </Text>
                <View>
  
                    <BarChart
                      data={{
                        labels: ["Carbs", "Fat", "Protein"],
                        datasets: [
                          {

                              data: [
                            this.props.screenProps.carbCalories,
                            this.props.screenProps.fatCalories,
                            this.props.screenProps.proteinCalories
                            ]
                          }
                        ]
                      }}
                      width={330} // from react-native
                      height={220}
                      chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                          borderRadius: 16
                        },
                      }}
                      style={{
                        marginVertical: 8,
                        borderRadius: 16
                      }}
                    />
                    
                  </View>
      
                    <Text style={styles.calorieContainer}>Carbs: {Math.round(this.props.screenProps.carbCalories)}       Fat: {Math.round(this.props.screenProps.fatCalories)}       Protein: {Math.round(this.props.screenProps.proteinCalories)}</Text>
                <Button
                  title="Create User"
                  onPress={this.props.screenProps.handleCreateUser}
                />
            </View>
        </KeyboardAwareScrollView>
    )
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
    },
    calorieContainer:  {
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
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10,
      fontWeight: 'bold'
    },
  })