import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Animate } from 'react-native'
import {connect} from 'react-redux'



// const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class MealContainer extends React.Component {

  state = {
    calories: null,
    food: []
  }
  

   findFoods = () => {
     if (this.props.mealFoods) {
      // console.log(this.props.mealFoods)
      let calories = null
      let foodArray = []

      for (i=0; i<this.props.mealFoods.length; i++){
        foodArray.push(this.props.mealFoods[i])
        calories = calories + this.props.mealFoods[i]["food"]["calories"]
      }
      
      // console.log(calories)
      return foodArray
     }
   }

    render() {
      // console.log(this.props.mealFoods)
        return (
            <FlatList 
                // style={styles.container}
                data={this.findFoods()}
                renderItem={({item}) => <Text key={item["created_at"]}>{item["food"]["name"]}</Text>}
                keyExtractor={item => item["created_at"]}
            />
        
        )
    }
}

export default connect(mapStateToProps)(MealContainer)

  function mapStateToProps(state){
    return{
       allFood: state.allFood
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderColor: "black",
    },
  });