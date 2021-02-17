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

const BadgerState = props => {
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
        const user = {email, password};

        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

        try {
            const res = await axios.post("/api/auth/register", user, config);

            
        } catch (error) {
            console.log(error);
        }

    }

    // const loadUser = () => async (dispatch) => {


    // Log in user
    const logIn =  async ({email, password}) =>  {
        const user = {email, password};

        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

        try {
            const res = await axios.post("/api/auth/login", user, config);



            
        } catch (error) {
            console.log(error);
        }

    }

    // Get user
    const getUser =  async ({email, password}) =>  {

    }

    // load user
    const loadUser =  async  =>  {

    }

    // Create a badge
    const creatBadge =  async ({ data }) =>  {

        // const badge = {email, name, title, department, location, accomplishment};

        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

        try {
            const res = await axios.post("/api/auth/create", data, config);

            
        } catch (error) {
            console.log(error);
        }

    }

    // Get my badges 
    const getMyBadges =  async () =>  {

        try {
            const res = await axios.get("/api/badge/me");

            dispatch({
                type: GET_MY_BADGES,
                payload: res
            })
            
        } catch (error) {
            console.log(error);
            
        }

    }

    

    // Get all badges
    const getAllBadges =  async () =>  {
        try {
            const res = await axios.get("/api/badge/all");
            
        } catch (error) {
            console.log(error);
            
        }

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

export default BadgerState;