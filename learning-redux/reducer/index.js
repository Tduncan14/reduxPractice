const loggedReducer = (state = false , state) => {


 switch(action.type){


    case'SIGN_IN':

     return true

    case 'SIGN_OUT':
    
     return false

     default:
         return state
 }







}