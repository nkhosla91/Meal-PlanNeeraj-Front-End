import React from 'react'
// import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { View, Dimensions, Text } from 'react-native'
import { LineChart } from "react-native-chart-kit"
import {connect} from 'react-redux'



class CalorieLineChart extends React.Component {

    lineData =()=> {
        let data = {
            labels: [],
            datasets: [
              {
                data: [],
              },
            ],
          }
          
            if (this.props.userFoods) {
                

                let dates = [];
                let date = new Date();

                function pad(n) {
                    return (n < 10) ? ("0" + n) : n;
                }

                for (i = 6; i > -1; i--){
                    var tempDate = new Date();
                    tempDate.setDate(date.getDate()-i);
                    var str = tempDate.getFullYear() + "-" + pad(tempDate.getMonth()+1) + "-" + pad(tempDate.getDate());
                    dates.push(str);  
                }
                    // console.log(dates);

                const allMeals = [...this.props.userFoods, ...this.props.sessionFoods]

                        for (i = 1; i < 7; i++){
                            let calories = 0
                            let dailyMeals = allMeals.filter(food => {
                                    return food["created_at"].slice(0,10) === dates[i]
                                })
                            dailyMeals.forEach(meal => {
                                calories = calories + meal["food"]["calories"]
                            })
                            data.datasets[0].data.push(Math.floor(calories))
                            data.labels.push(dates[i].slice(5))
                        }
            
            } //end of props if
                return data
    }///end of lineDaTA

    render() {
        // console.log(this.lineData())
        return (
            <LineChart
            data={this.lineData()}
            width={Dimensions.get('window').width - 16} // from react-native
            height={220}
            chartConfig={  {
                // backgroundColor: '#C5FFCA',
                backgroundGradientFrom: '#e5edad',
                backgroundGradientTo: '#dff071',
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16
                }
              }}
              style={{
                marginRight: 100,
                marginLeft: 8,
                marginVertical: 8,
                borderRadius: 16,
                // backgroundColor: 'transparent'
              }}
            // backgroundColor="transparent"
            />
            // <Text>hi</Text>
        )
    }

}

export default connect(mapStateToProps)(CalorieLineChart)

  function mapStateToProps(state){
    return{
       userFoods: state.userFoods,
       sessionFoods: state.sessionFoods,
    }
  }