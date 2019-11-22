import React from 'react'
import { StyleSheet, Text, View, Button, Linking } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import t from 'tcomb-form-native'

const Form = t.form.Form

  const Macros = t.enums({
   503020: "Recommended 50, 30, 20"
  })

const User = t.struct({
    macros: Macros
})


export default class AccountInfo extends React.Component {

    handleSubmit = () => {
        const value = this._form.getValue()
        // console.log(value)
        let macros = {}
        if(value["macros"] === "503020" ){
            macros["carbs"] = 50
            macros["fat"] = 30
            macros["protein"] = 20
            // console.log("macs", macros)
            this.props.screenProps.handleState(macros)
        }
    }
    
    render () {
        // console.log(this.props.screenProps)
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
                />
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
      link: {
        marginBottom: 24,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Cochin'
      }
      
      
  })