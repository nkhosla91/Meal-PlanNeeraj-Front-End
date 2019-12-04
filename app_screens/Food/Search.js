import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Icon, Button, Container, Header, Content} from 'native-base'
import {connect} from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Searchbar } from 'react-native-paper';
import { selectFood }from '../../actions'

// const Form = t.form.Form



//   const Meal = t.enums({
//     breakfast: 'Breakfast',
//     lunch: 'Lunch',
//     dinner: 'Dinner'
//   })

// const AddFood = t.struct({
//     meal: Meal
// })

class Search extends React.Component {

    state = {
        search: null,
        food: {
            id: null,
            name: null,
            carbs: null,
            fat: null,
            protein: null,
            calories: null
        }
      }

    updateSearch = search => {
        this.setState({ search });
    }

    handleSubmit = () => {
        const value = this._form.getValue()
        // console.log(value)
        this.props.selectedFood()
    }

    handleFoodPress = (food) => {
        // console.log(food)
        this.setState({food})
        this.props.selectFood(food)
        this.props.navigation.navigate('Show')
    }

    handleScanNav = () => {
      this.props.navigation.navigate('Scan')
    }



    render () {
        
        return (
          <KeyboardAwareScrollView  contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <Text style={styles.title}>Search Foods</Text>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={styles.navText}>Cant find your food?</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={styles.navText}>Scan your barcode</Text>
              <TouchableOpacity onPress={this.handleScanNav}><Text style={styles.linkText}> here!</Text></TouchableOpacity>
            </View>

            <View style={{marginTop: 12}}>
                  <Searchbar
                      inputStyle={{backgroundColor: 'white'}}
                      containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5, padding: 20}}
                      placeholder={'Search food here'}
                      onChangeText={this.updateSearch}
                      />  
            
                {this.props.allFood.filter(foods =>{
                    // console.log(foods["name"], "hi")
                        return foods["name"].includes(this.state.search)}).map(food => {
                            // console.log(food["id"])
                            return (      
                            <Button onPress={this.handleFoodPress.bind(this, food)} style={styles.row} key={food["id"]}><Text style={styles.text}>{food["name"]}</Text></Button>   
                          
                        )
                        })
                      }
                </View>
              
          </View>
          </KeyboardAwareScrollView>
        )
    }
} //end of MyInfo Class

export default connect(mapStateToProps, {selectFood})(Search)

  function mapStateToProps(state){
    return{
       allFood: state.allFood
    }
  }



  const styles = StyleSheet.create({
    row: {
      fontSize: 15,
      fontWeight: 'bold',
      fontFamily: 'Cochin',
      
      flex: 1,
      // paddingVertical: 25,
      // paddingHorizontal: 15,
      borderBottomWidth: 3,
      backgroundColor: '#B0A7FF',
      textAlign: 'center',
      justifyContent: "center",
      padding: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#C5FFCA',
      //   marginTop: 150,
        padding: 75,
        justifyContent: 'flex-start'
      },
      title: {
        marginBottom: 12,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
      },
      text: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
        justifyContent: 'center',
        textAlign: 'center'
      },
      navText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
        justifyContent: 'center',
        textAlign: 'center'
      },
      linkText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'blue'
      }
  })