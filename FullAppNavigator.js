  
import React from 'react';
import AppNavigation from './AppNavigation'
import AuthNavigation from './AuthNavigation'
import {connect} from 'react-redux'
import { allFood }from './actions'


class FullAppNavigator extends React.Component {
  
    componentDidMount() {
        return fetch('http://10.9.110.172:3000/api/v1/foods')
          .then(response => response.json())
          .then(data => this.props.allFood(data))
      }

    render (){
    console.log(this.props, "fullap")
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

  export default connect(mapStateToProps,{allFood})(FullAppNavigator)

  function mapStateToProps(state){
    return{
        loggedIn: state.loggedIn
    }
  }