

import {
    LOAD_USER,
    // GET_USER,
    LOG_IN,
    CREAT_BADGE,
    GET_MY_BADGES,
    GET_ALL_BADGES,
    LOG_OUT,
    REGISTER_USER,
    CHANGE_KUDOS,
    GIVE_BADGES

} from "./constants.js"

export default (state, action) => {

    switch (action.type) {

        case LOAD_USER:

            return {
                ...state,
                user: action.payload.user,
                auth: true,
                loading: false,
            };

        case LOG_IN:
        case REGISTER_USER:
            return {
                ...state,
                token: action.payload.token,
                auth: true,
                loading: false,


            };
        case CREAT_BADGE:
            return {
                ...state,
                myBadges: action.payload,
                // auth: true,
                loading: false,

            };
        case GET_MY_BADGES:
            return {
                ...state,
                myBadges: action.payload,
                loading: false,
            };


        case GET_ALL_BADGES:
            return {
                ...state,
                allBadges: action.payload,
                loading: false,

            };


        case CHANGE_KUDOS:
            return {
                ...state,
                isKudosChanged: true,
                loading: false,
            }

        case GIVE_BADGES:
            return {
                ...state,
                isBadgeSent: false,
                loading: false,
            }

        case LOG_OUT:
            // case LOG_IN_FAILED:
            return {
                token: null,
                user: null,
                auth: false,
                myBadges: null,
                loading: false,
            };

        default:
            return state;
    }
}
