import React, {useReducer } from 'react';
import axios from 'axios';
import badgerContext from "./badgerContext";
import badgerReducer from "./badgerReducer";

import{
    LOAD_USER,
    GET_USER,
    LOG_IN,
    CREAT_BADGE,
    GET_MY_BADGES,
    GET_ALL_BADGES,
    LOG_OUT

} from "./constants.js"

const badgerState = props => {
    const initialState = {
        user : {},
        auth : false,
        loading : false,
        myBadges : [],
        allBadges : []
    }

    const [state, dispatch] = useReducer(badgerReducer, initialState);

    //Register a user
    const registerUser =  async ({email, password}) =>  {

    }

    // const loadUser = () => async (dispatch) => {


    // Log in user
    const logIn =  async ({email, password}) =>  {

    }

    // Get user
    const getUser =  async ({email, password}) =>  {

    }

    // load user
    const loadUser =  async ({email, password}) =>  {

    }

    // Create a badge
    const creatBadge =  async ({email, name, title, department, location, accomplishment}) =>  {

    }

    // Get my badges 
    const getMyBadges =  async () =>  {

    }

    // Get all badges
    const getAllBadges =  async () =>  {

    }

    // Log out a user
    const logOut =  async () =>  {

    }

    return <badgerContext.Provider value = {{
        user: state.user,
        auth: state.auth,
        loading: state.loading,
        myBadges: state.myBadges,
        allBadges: state.allBadges
    }}>
        {props.children}


    </badgerContext.Provider>
}

export default badgerState;