import React from 'react'
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LineChart, BarChart, Grid } from "react-native-chart-kit"


export default class AccountInfo extends React.Component {

    // handleSubmit = () => {
  
    //     this.props.screenProps.handleCreateUser()
    // }

    
    render () {
        // console.log(this.props.screenProps)
    return (
        <KeyboardAwareScrollView  contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.paragraph}> 
                    SUMMARY
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
    }
  })