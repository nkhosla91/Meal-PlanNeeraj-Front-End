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

const options = {
  fields: {
    height: {
      label: 'Height (inches)',
      config: 'height'
    },
    weight: {
      label: 'Weight (lbs.)'
    }
  }
};


export default class AccountInfo extends React.Component {

    handleSubmit = () => {
        const value = this._form.getValue()
        // console.log(value, "this.sub")
        this.props.screenProps.handleState(value)
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
                options={options}
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