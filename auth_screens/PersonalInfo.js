import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import t from 'tcomb-form-native'

const Form = t.form.Form

const Gender = t.enums({
    M: 'Male',
    F: 'Female'
  })

const User = t.struct({
    gender: Gender,
    age: t.Number,
    height: t.Number,
    weight: t.Number
})


export default class AccountInfo extends React.Component {

    handleSubmit = () => {
        console.log(this.props.screenProps)
        const value = this._form.getValue(); // use that ref to get the form value
    //     console.log(value["email"])
       this.props.screenProps(value)

    }
    
    render () {
        // console.log(this.props.screenProps)
    return (
      <View style={styles.container}>
          <Text style={styles.paragraph}> 
            Tell Us About Yourself!
          </Text>
        <Form  
          ref={c => this._form = c} 
          type={User} 
        />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C5FFCA',
      marginTop: 50,
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