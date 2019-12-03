import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import t from 'tcomb-form-native'
import {connect} from 'react-redux'
import { addSessionFoods }from '../../actions'


const Form = t.form.Form

const Mealtime = t.enums({
  breakfast: 'Breakfast',
  lunch: 'Lunch',
  dinner: 'Dinner'
})

const AddFood = t.struct({
  Calories: t.Number,
  Carbs: t.Number,
  Fat: t.Number,
  Protein: t.Number,
  'Add to Meal?': t.Boolean,
  mealtime: t.maybe(Mealtime),
})


// const breakfastMeals = [ {id: 1, name: "Kid's Minestrone Soup", carbs: 8, fat: 1, protein: 2, calories: 50}, { id: 2, name: "Kid's Sourdough Bread", carbs: 30, fat: 1, protein: 6, calories: 150}, {  id: 3, name: "Kid's Spaghetti with Tomato Sauce", carbs: 52, fat: 2, protein: 10, calories: 270} ]

class CreateFood extends React.Component {


  handleSubmit = () => {
    const value = this._form.getValue()
    console.log(value)

    if(value["Add to Meal?"] && !value["mealtime"]){
      return alert("If you would like to add this food to a meal please select a Mealtime")
    }

    

  //   const value = this._form.getValue()
  //   const date = new Date().getDate(); //Current Date
  //   const month = new Date().getMonth() + 1; //Current Month
  //   const year = new Date().getFullYear(); //Current Year
  //   const hours = new Date().getHours(); //Current Hours
  //   const min = new Date().getMinutes(); //Current Minutes
  //   const sec = new Date().getSeconds(); //Current Seconds

  //   function pad2(date) {
  //     return (date < 10 ? '0' : '') + date
  // }

  //   newDay=pad2(date)

  //   const fullDate = year + '-' + month + '-' + newDay + ' ' + hours + ':' + min + ':' + sec
    
  //   const sessionFood = {
  //     "created_at": `${fullDate}`,
  //     "food": {
  //         "name": this.props.selectFood["name"],
  //         "calories": this.props.selectFood["calories"],
  //         "carbs": this.props.selectFood["carbs"],
  //         "fat": this.props.selectFood["fat"],
  //         "protein": this.props.selectFood["protein"],
  //       },
  //     "mealtime": value["mealtime"]
  //   }

  //   // console.log(fullDate)

  //   const userfood = {
  //     user_id: this.props.user["id"],
  //     food_id: this.props.selectFood["id"],
  //     mealtime: value["mealtime"]
  //   }
  //   // console.log(userfood, "userfood")

  //   return fetch('http://10.9.109.135:3000/api/v1/userfoods', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(userfood),
  //   }) 
  //   .then(response => response.json())
  //   .then(sessionFood["id"])
  //   .then(this.props.addSessionFoods(sessionFood))
  //   .then(this.props.navigation.navigate('Meals'))
  }
//end of handle submit
  
    render () {
        
      
    if(this.props.scannedFood["title"]){
    return (      
      <KeyboardAwareScrollView  contentContainerStyle={{flexGrow: 1}}>
         <View style={styles.container}>
            <Text style={styles.title}> 
            Scan Succesful!
            </Text>

              {this.props.scannedFood["images"][0] ?
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                      <Image
                        style={styles.image}
                        source={{uri: this.props.scannedFood["images"][0]}}
                        />
                      </View>
                    : null
              }
            
            <Text style={styles.name}>{this.props.scannedFood["title"]}</Text>

            {this.props.scannedFood["description"] ?
                    <View style={styles.meal}>  
                      <Text style={styles.description}>{this.props.scannedFood["description"]}</Text>
                    </View>    
                            : null
              }

            <Text style={styles.name}>Tell us more about the food!</Text>
                  
            <View style={{padding:20}}>
                  <Form  
                      ref={c => this._form = c} 
                      type={AddFood} 
                      
                      />
              </View>
            <Button  style={{padding:20}} onPress={this.handleSubmit} title="Add Food!"/>
          </View>
      </KeyboardAwareScrollView> 

    )
  } else {
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.title}> 
          Scan an item!
              </Text>
        </View>
     </View>
    )
  }
}
}

export default connect(mapStateToProps, {addSessionFoods})(CreateFood)

function mapStateToProps(state){
    return{
        user: state.user,
        scannedFood: state.scannedFood,
        scannedImage: state.scannedImage
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C5FFCA',

        justifyContent: 'flex-start'
      },
      title: {
        marginBottom: 24,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
        justifyContent: 'center',
        marginTop:80
      },
      meal: {
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
        marginTop: 10,
        marginBottom: 10,
      },
      slider: {
        flex: 1,
        padding: 0

      },
      image: {
        backgroundColor: '#B3A5FD',
        borderRadius: 14,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        width: 200, 
        height: 200, 
      },
      name: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
        justifyContent: 'center',
      },
      description: {
        textAlign: 'center',
        fontWeight: 'bold'
      }
  })