  
import React from 'react';
import AppNavigation from './AppNavigation'
import AuthNavigation from './AuthNavigation'
import {connect} from 'react-redux'
import { allFood, fetchUserFoods }from './actions'


class FullAppNavigator extends React.Component {
  
    componentDidMount() {
        fetch('http://10.9.106.90:3000/api/v1/foods')
          .then(response => response.json())
          .then(data => this.props.allFood(data))
          
        fetch('http://10.9.106.90:3000/api/v1/userfoods')
          .then(response => response.json())
          .then(data => this.props.fetchUserFoods(data))

      }

    render (){
        if(!this.props.loggedIn){
            return (
                <AuthNavigation />
            )
        } else if (this.props.loggedIn) {
            return(
                <AppNavigation />
            )
        }
    }
  
  }//end of FullAppNavigator Class

  export default connect(mapStateToProps,{allFood, fetchUserFoods})(FullAppNavigator)

  function mapStateToProps(state){
    return{
        loggedIn: state.loggedIn
    }
  }