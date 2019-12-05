import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import { fetchUserFoods } from '../actions';
import { replaceSessionFoods } from '../actions';


// const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class MealContainer extends React.Component {

  state = {
    calories: null,
    food: []
  }
  
    handleRemove = userfood_id => () => {  
      // console.log(userfood_id)
      fetch(`http://10.9.106.90:3000/api/v1/userfoods/${userfood_id}`, {
        method: 'delete'
           })
          .then(response => response.json())
          
        let newUserFoods = this.props.userFoods.filter(userFood =>{
          // console.log(userFood["id"],"help", userfood_id)
                return userFood["id"] != userfood_id
        })

        let newSessionFoods = this.props.sessionFoods.filter(sessionFood =>{
          return sessionFood["id"] != userfood_id
  })


        this.props.fetchUserFoods(newUserFoods)
          this.props.replaceSessionFoods(newSessionFoods)
  
    }

   findFoods = () => {
     if (this.props.mealFoods) {
      // console.log(this.props.sessionFoods)
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
      // console.log(this.props.userfoods)
        return (
            <FlatList 
                // style={styles.container}
                data={this.findFoods()}
                renderItem={({item}) =>(
             
                    <View style={styles.container}>
                        <Text style={{fontWeight: 'bold', maxWidth: 290}} key={item["created_at"]} >{item["food"]["name"]}</Text>
                        <TouchableOpacity onPress={this.handleRemove(item["id"])}>
                          <Text style={styles.button}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                          
              )}
                keyExtractor={item => item["created_at"]}
                ListFooterComponent={this.props.mealTime}
              />
        
        )
    }
}

export default connect(mapStateToProps,{ fetchUserFoods, replaceSessionFoods })(MealContainer)

  function mapStateToProps(state){
    return{
       allFood: state.allFood,
       sessionFoods: state.sessionFoods,
       userFoods: state.userFoods
    }
  }

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flex: 1,
      marginBottom: 10,
      justifyContent: 'space-between'
    },
    button: {
      backgroundColor: '#BF6F71',
      borderRadius: 14,
      borderWidth: 1,
      borderRadius: 2,
      borderColor: 'transparent',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      textAlign: 'center',
      fontSize: 12,
      marginRight: 9

    }
  });