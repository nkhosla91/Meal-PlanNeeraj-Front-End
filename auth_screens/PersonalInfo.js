import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import t from 'tcomb-form-native'

const Form = t.form.Form

const Gender = t.enums({
    M: 'Male',
    F: 'Female'
  })

  const ActivityLevel = t.enums({
   1.2: 'Sedentary (little to no exercise + work a desk job)',
   1.375: 'Lightly Active (light exercise 1-3 days / week)',
   1.55: 'Moderately Active (moderate exercise 3-5 days / week)',
   1.725: 'Very Active (heavy exercise 6-7 days / week)',
   1.9: 'Extremely Active (very heavy exercise, hard labor job, training 2x / day)'

  })

const User = t.struct({
    gender: Gender,
    age: t.Number,
    height: t.Number,
    weight: t.Number,
    activityLevel: ActivityLevel
})


export default class AccountInfo extends React.Component {

    handleSubmit = () => {

        const value = this._form.getValue(); // use that ref to get the form value


        if (value['gender'] === 'M'){
            const BMR = 66 + (6.23 * value["weight"]) + (12.7 * value["height"]) - (6.76 * value["age"])
            const calories = BMR * value["activityLevel"]
            value["calories"] = calories
            console.log(calories)
        } else if (value['gender'] === 'F'){
            const BMR = 655.1 + (4.35 * value["weight"]) + (4.7 * value["height"]) - (4.7 * value["age"])
            const calories = BMR * value["activityLevel"]
            value["calories"] = calories
            console.log(calories)
    }

        console.log(value)
        this.props.screenProps(value)

    }
    
    render () {
        // console.log(this.props.screenProps)
    return (
        <KeyboardAwareScrollView  contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.paragraph}> 
                    Tell Us About Yourself!
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
      marginBottom: 24,
      fontSize: 18,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Cochin'
    }
  })