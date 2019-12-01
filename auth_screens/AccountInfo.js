import React from 'react'
import { StyleSheet, Text, View, Button, Linking } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import t from 'tcomb-form-native'

const Form = t.form.Form

const User = t.struct({
    email: t.String,
    username: t.String,
    password: t.String
})


export default class AccountInfo extends React.Component {

    handleSubmit = () => {
        // console.log(this.props.screenProps)
        const value = this._form.getValue()
    //     console.log(value["email"])
       this.props.screenProps.handleState(value)

    }
    
    render () {
        // console.log(this.props.screenProps.handleState, 'screenProps')
        return (
            <KeyboardAwareScrollView  contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.container}>
                    <Text style={styles.paragraph}> 
                        Account Information
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