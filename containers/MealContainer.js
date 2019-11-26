import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, List } from 'react-native'
import {connect} from 'react-redux'



// const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class MealContainer extends React.Component {

   findFoods = () => {
     if (this.props.userFoods) {
       loggedFoods = []
       const userfood = this.props.userFoods.map(userfood => userfood["food_id"])
      //  console.log(userfood)

      for (i=0; i < userfood.length; i++){
        let newFood = this.props.allFood.filter(food => {
                        return food["id"]=== userfood[i]
        })
        loggedFoods.push(newFood[0])
        // console.log(newFood, 'new')
      }

      console.log(loggedFoods, "logged")
      return loggedFoods
     }
   }

    render() {
      // console.log(this.props.userFoods)
        return (
            <FlatList 
                data={this.findFoods()}
                renderItem={({item}) => <Text>{item["name"]}</Text>}
                key={item => item["id"]}
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
      marginTop: 20
    },
  });