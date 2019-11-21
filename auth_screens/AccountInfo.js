import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import t from 'tcomb-form-native'

const Form = t.form.Form

const User = t.struct({
    email: t.String,
    username: t.String,
    password: t.String
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
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  }
})