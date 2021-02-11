import React from "react";
import ReactDOM from "react-dom";
import store from './redux/store'

import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
// import { createStore } from 'redux'

import "./scss/app.css";
import App from "./App";

ReactDOM.render(

    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>,

  document.getElementById("root")
  );


  // function counterReducer(state = { value: 0 }, action) {
  //   switch (action.type) {
  //     case 'counter/incremented':
  //       return { value: state.value + 1 }
  //     case 'counter/decremented':
  //       return { value: state.value - 1 }
  //     default:
  //       return state
  //   }
  // }

  // let store = createStore(counterReducer)

  // console.log(store.getState())

  // store.subscribe(() => console.log('store change', store.getState()))

  // store.dispatch({ type: 'counter/incremented' })
  // store.dispatch({ type: 'counter/decremented' })
  // store.dispatch({ type: 'counter/incremented' })