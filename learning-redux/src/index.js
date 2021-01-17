import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,} from 'redux';







const store = createStore()


// store state of the whole application

// action is the object that updates the state

//  const increment = () => {


//      return {
//        type:'INCREMENT',

//      }
//  }

//  const decrement = () => {

   
//     return{
//       type:'DECREMENT'
//     }

//  }
 
// // reducer is the function that updates the state from the object
// const counter = (state = 0 , action) => {

//    switch(action.type){

//      case 'INCREMENT':

//        return state + 1


//      case 'DECREMENT':
        
//         return state - 1


//    }



// }

// // to display everything in the console

// store.subscribe(() => console.log(store.getState()))




// //dispatch excute the actions


// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(decrement())



// let store = createStore(reducer,action)




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

