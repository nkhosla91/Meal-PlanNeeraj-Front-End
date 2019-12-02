import React from 'react'
import { StyleSheet, Text, View, Button, Linking, TextInput, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CheckBox } from 'react-native-elements'
import NumericInput from 'react-native-numeric-input'

import t from 'tcomb-form-native'

const Form = t.form.Form

  const Macros = t.enums({
   "Recommended": "Recommended 50%-30%-20%",
   "Low Carb": "Low Carb 15%-65%-20%", 
   "Keto": "Keto 5%-70%-25%",
   "Plaeo": "Paleo 20%-5%-25%"
  })

const User = t.struct({
    macros: Macros
})


export default class AccountInfo extends React.Component {

  state = {
    checked: false,
    customCarbs: "0",
    customFat: "0",
    customProtien: "0"
  }

  handleCustom = (macro, percent) => {
    if (macro === "customCarbs") {
    this.setState({customCarbs: percent})
    } else if (macro === "customFat") {
      this.setState({customFat: percent})
      } else if (macro === "customProtein") {
        this.setState({customProtein: percent})
        }
  }
  handleCheck = () =>{
    if(this.props.screenProps.calories) {
      // console.log("CHECKING")
      this.setState({checked: true})
    }
  }
    handleSubmit = () => {
      let macros = {}
  
    
      if (!this.state.checked){
        let value = this._form.getValue()
        // console.log(value)
        if (!value){
          return alert("Please make a selection or choose custom.")
        } else if(value["macros"] === "Recommended" ){
          macros["carbPercent"] = 50
          macros["fatPercent"] = 30
          macros["proteinPercent"] = 20
          macros["carbCalories"] = .50 * this.props.screenProps.calories
          macros["fatCalories"] = .30 * this.props.screenProps.calories
          macros["proteinCalories"] = .20 * this.props.screenProps.calories
          
          this.props.screenProps.handleState(macros)
        } else if(value["macros"] === "Low Carb" ){
          macros["carbPercent"] = 15
          macros["fatPercent"] = 65
                  macros["proteinPercent"] = 20
                  macros["carbCalories"] = .15 * this.props.screenProps.calories
                  macros["fatCalories"] = .65 * this.props.screenProps.calories
                  macros["proteinCalories"] = .20 * this.props.screenProps.calories
                  this.props.screenProps.handleState(macros)
              } else if(value["macros"] === "Keto" ){
                macros["carbPercent"] = 5
                macros["fatPercent"] = 70
                macros["proteinPercent"] = 25
                macros["carbCalories"] = .05 * this.props.screenProps.calories
                macros["fatCalories"] = .70 * this.props.screenProps.calories
                macros["proteinCalories"] = .25 * this.props.screenProps.calories
                this.props.screenProps.handleState(macros)
                  } else if(value["macros"] === "Paleo" ){
                    macros["carbPercent"] = 20
                    macros["fatPercent"] = 55
                    macros["proteinPercent"] = 25
                    macros["carbCalories"] = .20 * this.props.screenProps.calories
                    macros["fatCalories"] = .55 * this.props.screenProps.calories
                    macros["proteinCalories"] = .25 * this.props.screenProps.calories
                    this.props.screenProps.handleState(macros)
                }  //end of in if


      } else if(this.state.checked === true){
                 

                  if (parseInt(this.state.customCarbs) + parseInt(this.state.customFat) + parseInt(this.state.customProtien)!= 100) {
                   return alert("Please have your percentages equal 100")
                  } else if (parseInt(this.state.customCarbs) + parseInt(this.state.customFat) + parseInt(this.state.customProtien)=== 100) {
                    macros["carbPercent"] = this.state.customCarbs
                    macros["fatPercent"] = this.state.customFat
                    macros["proteinPercent"] = this.state.customProtien
                    macros["carbCalories"] = this.state.customCarbs * this.props.screenProps.calories/100
                    macros["fatCalories"] = this.state.customFat * this.props.screenProps.calories/100
                    macros["proteinCalories"] = this.state.customProtien * this.props.screenProps.calories/100
                    
                    this.props.screenProps.handleState(macros)
                  }
                  
     } //end of out if   
              
    }
    
    render () {
        // console.log(this.state)
    return (
      <KeyboardAwareScrollView  contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.paragraph}> 
                    Your TDEE is               {Math.floor(this.props.screenProps.calories)} calories
                </Text>
                <Text style={styles.link}>
                    For more information on TDEE click <Text onPress={()=>{Linking.openURL('https://google.com')}}>here</Text>
                </Text>

                <Text style={styles.paragraph}> 
                    Next, tell us your target Carb, Fat, and Protein percentage.
                </Text>
                <Form  
                ref={c => this._form = c} 
                type={User} 
                // style={{backgroundColor: "white"}}
                />

        <CheckBox
          title="Custom"
          checked={this.state.checked}
          onPress={() => this.setState({checked: !this.state.checked})}
          containerStyle ={{
            backgroundColor: "#C5FFCA",
            justifyContent: 'center'
          }}
  
        />

                <View>
            <View>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.textInput}>
                        <TextInput placeholder="Carbs" style={{justifyContent: 'flex-start',}} onChangeText={percent => this.handleCustom("customCarbs", percent)}   /> 
                    </View>
                  
                    <View style={styles.textInput}>
                        <TextInput placeholder="Fat" style={{justifyContent: 'center',}} onChangeText={percent => this.handleCustom("customFat", percent)} />
                    </View>
                    <View style={styles.textInput}>
                        <TextInput placeholder="Protein" style={{justifyContent: 'flex-end',}} onChangeText={percent => this.handleCustom("customProtein", percent)}/>
                    </View>
                </View>
            </View>

        </View>

                <Button
                title="Next"
                onPress={this.handleSubmit}
      
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
      marginBottom: 18,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Cochin'
    },
    link: {
        marginBottom: 24,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Cochin'
      },
      textInput: {
        flex:1, 
        backgroundColor: '#C5FFCA', 
        marginRight: 30,
        marginLeft: 40,
        marginTop: 5,
        marginBottom: 5,
        // borderRadius: 14,
        padding: 10,
        // borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        // shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
      }
      
      
  })