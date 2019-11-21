import React from 'react';
import AppNavigation from './AppNavigation'
import AuthNavigation from './AuthNavigation'
import {connect} from 'react-redux'


class FullAppNavigator extends React.Component {
  
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

  export default connect(mapStateToProps)(FullAppNavigator)

  function mapStateToProps(state){
    return{
        loggedIn: state.loggedIn
    }
  }