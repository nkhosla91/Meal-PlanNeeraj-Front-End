import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, List } from 'react-native'
import {connect} from 'react-redux'
import { SliderBox } from 'react-native-image-slider-box';


// const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Slider extends React.Component {

    state = {
        images: [
          'https://storage.googleapis.com/gen-atmedia/3/2017/03/8370c8f6bdc015e9918e291e7e3277f0a2bb99f6.gif',
          'https://simpleandsane.com/wp-content/uploads/2018/07/Keto-Diet-for-Beginners-blog-graphic.jpg',
          'https://www.leisurecare.com/resources/wp-content/uploads/2018/12/healthy-eating-during-holidays.png',
          'https://www.developgoodhabits.com/wp-content/uploads/2019/01/best-workout-apps.jpg'
        ]
      }

    render() {
    //   console.log(this.state)
        return (
           <SliderBox 
           images={this.state.images}  
      
           dotColor="#FFEE58"
           inactiveDotColor="#90A4AE"
           dotStyle={{
             width: 10,
             height: 10,
             borderRadius: 5,
             marginHorizontal: 0,
             padding: 0,
             margin: 0,
             backgroundColor: 'rgba(128, 128, 128, 0.92)'
           }}
           circleLoop
           />
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