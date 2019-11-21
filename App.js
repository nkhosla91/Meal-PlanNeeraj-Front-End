import React from 'react';
// import { DrawerNavigator } from 'react-navigation'
import AppNavigation from './AppNavigation'
import AuthNavigation from './AuthNavigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const initialState = {
  loggedIn: false
}

const reducer = (state = initialState, action) => {
  switch(action.type)
  {
    case 'LOG_IN':
      return {counter: true}
  }
  return state 
}

const store = createStore(reducer)

export default class App extends React.Component {
  
  render (){
    if(!this.state.loggedIn){
      return (
        <Provider store={store}>
          <AuthNavigation />
        </Provider>
      )
    } else if (this.state.loggedIn){
      return (
        <Provider store={store}>
        <AppNavigation />
      </Provider>
      )
    }
  }
}//end of App Class

