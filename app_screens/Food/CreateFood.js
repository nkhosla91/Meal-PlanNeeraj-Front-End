import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import t from 'tcomb-form-native'
import {connect} from 'react-redux'
import { addSessionFoods }from '../../actions'
import Show from './Show'


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
  mealtime: Mealtime,
})


// const breakfastMeals = [ {id: 1, name: "Kid's Minestrone Soup", carbs: 8, fat: 1, protein: 2, calories: 50}, { id: 2, name: "Kid's Sourdough Bread", carbs: 30, fat: 1, protein: 6, calories: 150}, {  id: 3, name: "Kid's Spaghetti with Tomato Sauce", carbs: 52, fat: 2, protein: 10, calories: 270} ]

class CreateFood extends React.Component {

  state= {
    limitArray: {
      "asin": "B01BGY9GOE",
      "brand": "Coca-Cola Zero",
      "color": "Buff",
      "currency": "",
      "description": "Enjoy Coke Zero Sugar's real Coca-Cola taste and zero calories with meals, on the go, or to share. Serve ice cold for maximum refreshment.",
      "dimension": "7.8 X 1 X 2.6 inches",
      "ean": "0049000047547",
      "elid": "333254553369",
      "highest_recorded_price": 30.37,
      "images": [
        "http://ct.mywebgrocer.com/legacy/productimagesroot/DJ/0/582520.jpg",
        "https://target.scene7.com/is/image/Target/GUEST_d247c008-ee4b-4eda-8b43-3dc10e11dfbe?wid=1000&hei=1000",
        "https://i5.walmartimages.com/asr/1859423f-4674-4df0-949a-845ff52d7d6f_1.a0aaf3350cfb8efc6748118a4b6dff57.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
        "https://pics.drugstore.com/prodimg/416865/450.jpg",
      ],
      "lowest_recorded_price": 0,
      "model": "0004900004754",
      "offers": [
        {
          "availability": "",
          "condition": "New",
          "currency": "",
          "domain": "walgreens.com",
          "link": "http://www.upcitemdb.com/norob/alink/?id=x2x253t213y2b4d4r2&tid=1&seq=1575474934&plt=4db48c2b366256839ed23e29dabc9ce7",
          "list_price": "",
          "merchant": "Walgreens",
          "price": 1.99,
          "shipping": "US:::5.49 USD",
          "title": "Coca-Cola Zero Cherry Soda - 20 oz.",
          "updated_t": 1569798300,
        },
        {
          "availability": "",
          "condition": "New",
          "currency": "",
          "domain": "walmart.com",
          "link": "http://www.upcitemdb.com/norob/alink/?id=v2p243130303c494s2&tid=1&seq=1575474934&plt=a133935cb58e060f018ed8efd3b5b895",
          "list_price": "",
          "merchant": "Wal-Mart.com",
          "price": 1.88,
          "shipping": "5.99",
          "title": "Coca-Cola Cherry Zero Bottle, 20 fl oz",
          "updated_t": 1570201519,
        },
        {
          "availability": "",
          "condition": "New",
          "currency": "",
          "domain": "target.com",
          "link": "http://www.upcitemdb.com/norob/alink/?id=23p23323w233a464&tid=1&seq=1575474934&plt=5aa497ff77b9ab3c43b25e7928f72b52",
          "list_price": "",
          "merchant": "Target",
          "price": 1.99,
          "shipping": "",
          "title": "Coca-Cola Cherry Zero Soda 20 oz",
          "updated_t": 1573350709,
        },
        {
          "availability": "",
          "condition": "New",
          "currency": "",
          "domain": "albertsons.com",
          "link": "http://www.upcitemdb.com/norob/alink/?id=v2q23303y243f4a4v2&tid=1&seq=1575474934&plt=9e6b15676be54ac49b8bc72915e5643b",
          "list_price": "",
          "merchant": "Albertsons",
          "price": 0,
          "shipping": "",
          "title": "Coca-Cola - Soda - Cherry Zero 20.00 fl oz",
          "updated_t": 1484640854,
        },
      ],
      "size": "",
      "title": "Coca-Cola Cherry Zero Soda 20 oz",
      "upc": "049000047547",
      "weight": "30 Pounds",
    
    },
    food: {}
  }


  handleSubmit = () => {
    if(this.props.userFoods){
      const value = this._form.getValue()
      console.log(value, "value" )

        if(!value || !value["Calories"] || !value["Carbs"] || !value["Fat"] || !value["Protein"] || !value["mealtime"]){
          return alert("Please complete the entire form to add this food!")
        }


      let newFoodArray = {
        "name": this.props.scannedFood["title"],
        "carbs": value["Carbs"],
        "fat": value["Fat"],
        "protein": value["Protein"],
        "calories": value["Calories"],
      }

      let food_id = null

      postUserFood = (data) => {
        if (data){
          console.log(data, "data")
      
          const value = this._form.getValue()
          const date = new Date().getDate(); //Current Date
          const month = new Date().getMonth() + 1; //Current Month
          const year = new Date().getFullYear(); //Current Year
          const hours = new Date().getHours(); //Current Hours
          const min = new Date().getMinutes(); //Current Minutes
          const sec = new Date().getSeconds(); //Current Seconds
    
         function pad2(date) {
            return (date < 10 ? '0' : '') + date
        }
    
          newDay=pad2(date)
    
          const fullDate = year + '-' + month + '-' + newDay + ' ' + hours + ':' + min + ':' + sec

          const sessionFood = {
            "created_at": `${fullDate}`,
            "food": {
              "name": data["name"],
              "carbs": data["carbs"],
              "fat": data["fat"],
              "protein": data["protein"],
              "calories": data["calories"],
            },
            "mealtime": value["mealtime"]
          }

          console.log("sessionFood", sessionFood, "end")

          const userfood = {
                user_id: this.props.user["id"],
                food_id: data["id"],
                mealtime: value["mealtime"]
              }

              console.log("userfood", userfood)
        fetch('http://10.9.106.90:3000/api/v1/userfoods', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userfood),
      }) 
      .then(response => response.json())
      .then(sessionFood["id"])
      .then(this.props.addSessionFoods(sessionFood))
      .then(this.props.navigation.navigate('Meals'))

        }//end of if
      }//end of postUserFood
  

      fetch('http://10.9.106.90:3000/api/v1/foods', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFoodArray),
      }) 
      .then(response => response.json())
      .then(response => postUserFood(response))

      }
      
    }//end of handle submit
    render () {
    
      if(1===1){
      // if(this.props.scannedFood["title"]){
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
          <View style={{marginTop: 30}}></View>
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
        userFoods: state.userFoods
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