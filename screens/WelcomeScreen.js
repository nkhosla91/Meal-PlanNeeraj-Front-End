import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
// import { LinearGradient } from 'expo'

export default function WelcomeScreen (props) {

 
    return (
      <SafeAreaView style={styles.container}>
          <Text style={styles.titleText}>Welcome to</Text>
          <Text style={styles.titleText}>Meal PlanNeeraj!</Text>
        <View style={styles.formContainer}>
        <Button
          title="Log In"
          onPress={() => props.navigation.navigate('Login')}
        />
            <Button
          title="Sign Up"
          onPress={() => props.navigation.navigate('Signup')}
        />
        </View>
      </SafeAreaView>
    )
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
