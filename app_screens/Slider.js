import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, List } from 'react-native'
import {connect} from 'react-redux'
import { SliderBox } from 'react-native-image-slider-box';


// const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Slider extends React.Component {

    state = {
        images: [
          'https://i0.wp.com/lisamdecker.com/wp-content/uploads/2017/03/mealplanning.jpeg?fit=320%2C213&ssl=1',
          'https://www.leisurecare.com/resources/wp-content/uploads/2018/12/healthy-eating-during-holidays.png',
          'https://simpleandsane.com/wp-content/uploads/2018/07/Keto-Diet-for-Beginners-blog-graphic.jpg',
          'https://www.developgoodhabits.com/wp-content/uploads/2019/01/best-workout-apps.jpg'
        ]
      }

    render() {
    //   console.log(this.state)
        return (
           <SliderBox images={this.state.images} />
        )
    }
}

export default connect(mapStateToProps)(Slider)

function mapStateToProps(state){
    return{
       userFoods: state.userFoods,
       sessionFoods: state.sessionFoods,
       user: state.user
    }
  }

const styles = StyleSheet.create({
      container:  {
        backgroundColor: '#B3A5FD',
        borderRadius: 14,
        padding: 10,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        textAlign: 'center'
      },
      text: { 
          textAlign: 'center',
          fontWeight: 'bold',

        }
  });