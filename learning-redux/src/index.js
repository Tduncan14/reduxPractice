import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'


// store state of the whole application

// action is the object that updates the state

 const increment = () => {


     return {
       type:'INCREMENT',

     }
 }

 const decrement = () => {

   
    return{
      type:'DECREMENT'
    }

 }
 
// reducer is the function that updates the state from the object

//dispatch excute the actions


let store = createStore(reducer,action)




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

