
import { LOG_IN, SING_UP } from '../actiontype'
import { USER_DATA } from '../actiontype'



const Intialvalue = {
    UserData : [],
    CurrentUser : {}
};



function Userreducer(state = Intialvalue , {type, payload}) {
    switch(type){
        case SING_UP:
         return{
         ...state,
         UserData : payload
         }

    case USER_DATA:
        return{
            ...state,
            UserData : payload
        }

    case LOG_IN:
        return{
            ...state,
            CurrentUser: payload
        }

         default: 
         return state
    }
  
 
}

export default Userreducer