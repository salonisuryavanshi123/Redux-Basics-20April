const redux = require('redux');
//const createStore = require('redux').createStore;
const { legacy_createStore } = require('redux');

console.log('createStore----->',legacy_createStore);

//1. Actions
/*
    Actions are js object which contain "type" property may contain payload
    {
        "type":"",
        payload:""
    }
 */

//2. ActionCreator
/*
    What is Action Creator in redux ?
    ActionCreator are function which return actions

    function myFunction(){
        return { "type" }
    }
*/

const ADDVALUEBY1 = 'ADDVALUEBY1';
const SUBTRACTVALUEBY1 = 'SUBTRACTVALUEBY1';

// Lets define some action creators
/*
let login = ()=>{
    return {
        type:"LOGIN",
        payload:{
            username:"abc",
            password:"1234"
        }
    }
}

let logout = ()=>{
    return {
        type:"LOGOUT"
    }
}*/

let AddValueBy1 = ()=>{
    return {
        type:"ADDVALUEBY1",
        payload:{
            value:1
        }
    }
}

let SubtractValueBy1 = ()=>{
    return {
        type:"SUBTRACTVALUEBY1",
        payload:{
            value:1
        }
    }
}

//3. ReducerFunction
/* 
   Accept
   1. OldState
   2. Actions
   Return new State 
*/

let oldState={
    value:0
}

//Lets define the reducer function rootReducer
const rootReducer = (state=oldState,action)=>{
    let newState = state;
    switch(action.type){
        case ADDVALUEBY1:
            return {
                ...newState,
                value: newState.value + action.payload.value
            }
            break;
        case SUBTRACTVALUEBY1:
            return {
                ...newState,
                value: newState.value - action.payload.value
            }
            break;
        case '':
            break;
        default:
    }

    return newState;
}

//4. Store Global Object

// Lets create the store object

let storeObject = legacy_createStore(rootReducer)


console.log('storeObject--->',storeObject);

console.log('currentState before dispatch--->',storeObject.getState());

console.log('currentState--->',storeObject.dispatch(AddValueBy1()));
console.log('currentState--->',storeObject.dispatch(AddValueBy1()));
console.log('currentState--->',storeObject.dispatch(AddValueBy1()));
console.log('currentState--->',storeObject.dispatch(AddValueBy1()));

console.log('currentState--->',storeObject.dispatch(SubtractValueBy1()));
console.log('currentState after dispatch--->',storeObject.getState());
