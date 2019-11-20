import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
// import { LinearGradient } from 'expo'

export default class Welcome extends React.Component {

  render (){
      console.log(this.props)
    return (
      <SafeAreaView style={styles.container}>
          <Text style={styles.titleText}>Welcome to</Text>
          <Text style={styles.titleText}>Meal PlanNeeraj!</Text>
        <View style={styles.formContainer}>
          <Button title="Log In" onPress={this.props.handleWelcome('logIn')}/>
          <Button title="Sign Up" onPress={this.props.handleWelcome('signUp')}/>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5FFCA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    marginTop: 100,
    paddingLeft: 15,
 },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Cochin'
  },
});
