
import{
    LOAD_USER,
    GET_USER,
    LOG_IN,
    CREAT_BADGE,
    GET_MY_BADGES,
    GET_ALL_BADGES,
    LOG_OUT

} from "./constants.js"

export default (state, action) =>{
    switch (action.type){

        case LOAD_USER:
            return{

            }
        case LOG_IN:
        // case LOG_IN_SUCCESS:
        // case REGISTER_SUCCESS:
            return{
                
                ...state,
                user: action.payload,
                loading: false,

            }
        case CREAT_BADGE:
            return{
                ...state,
                myBadges: action.payload,

            }
        case GET_MY_BADGES: 
            return {

            }
        case GET_ALL_BADGES:
            return{

            }
        case LOG_OUT:
        // case LOG_IN_FAILED:
            return{
                // token: null,
                user: null,
                loading: false,

            }
        default:
            return state;

    }
}