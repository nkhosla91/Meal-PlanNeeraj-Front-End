import React from 'react';
import FullAppNavigator from './FullAppNavigator'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const initialState = {
  loggedIn: false
}

const reducer = (state = initialState, action) => {
  switch(action.type)
  {
    case 'LOGGED_IN':
      return {loggedIn: true}
  }
  return state 
}

const store = createStore(reducer)


class App extends React.Component {
  
  render (){
      return (
        <Provider store={store}>
          <FullAppNavigator />
        </Provider>
      )
  }

}//end of App Class

export default App

