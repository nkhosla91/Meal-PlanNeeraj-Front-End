import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {connect} from 'react-redux'


class EditUser extends React.Component {


    findActivityLevel = () => {
        let activityName = ""

        if(this.props.user["activityLevel"] === 1.2){
            activityName = "Sedentary"
        } else if (this.props.user["activityLevel"] === 1.375){
            activityName = "Lightly Active"
        } else if(this.props.user["activityLevel"] === 1.55){
            activityName = "Moderately Active"
        } else if(this.props.user["activityLevel"] === 1.725){
            activityName = "Very Active"
        } else if(this.props.user["activityLevel"] === 1.9){
            activityName = "Extremely Active"
        }



        return activityName
    }
   
    render () {
    if(this.props.user){
            return (
                <KeyboardAwareScrollView  contentContainerStyle={{flexGrow: 1}}>
                    <View style={styles.container}>
                        <Text style={styles.paragraph}> 
                        Edit User
                        </Text> 
                        <View style={styles.row}>
                            <Text style={styles.key}>Username</Text>
                            <TextInput style={styles.value}>{this.props.user["username"]}</TextInput>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.key}>Email</Text>
                            <Text style={styles.value}>{this.props.user["email"]}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.key}>Password</Text>
                            <Text style={styles.value}>{this.props.user["password"]}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.key}>Age</Text>
                            <Text style={styles.value}>{this.props.user["age"]}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.key}>Height</Text>
                            <Text style={styles.value}>{this.props.user["height"]} inches</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.key}>Weight</Text>
                            <Text style={styles.value}>{this.props.user["weight"]} lbs.</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.key}>Carbs-Fat-Protein</Text>
                            <Text style={styles.value}>{this.props.user["carbPercent"]}%-{this.props.user["fatPercent"]}%-{this.props.user["proteinPercent"]}%</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.key}>Activity Level</Text>
                            <Text style={styles.value}>{this.findActivityLevel()}</Text>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            )
  }
  }
}

export default connect(mapStateToProps)(EditUser)

  function mapStateToProps(state){
    return{
       user: state.user,

    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C5FFCA',
    //   marginTop: 150,
      padding: 20,
      justifyContent: 'flex-start'
    },
    paragraph: {
      marginTop: 75,
      marginBottom: 24,
      fontSize: 18,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Cochin'
    },  
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    key: {
        // justifyContent: 'space-between'
    },
    value: {
        backgroundColor: 'white'
    }
  })