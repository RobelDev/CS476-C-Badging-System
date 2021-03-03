import { useReducer } from 'react';
import axios from 'axios';
import badgerReducer from "./badgerReducer";
import BadgerContext from "./BadgerContext"

import{
    LOAD_USER,
    GET_USER,
    LOG_IN,
    REGISTER_USER,
    CREAT_BADGE,
    GET_MY_BADGES,
    GET_ALL_BADGES,
    CHANGE_KUDOS,
    LOG_OUT
} from "./constants.js";

const BadgerState = (props) => {

    const initialState = {
        user: {},
        auth: false,
        loading: false,
        myBadges: [],
        allBadges: [],
        isKudosChanged: false
    }

    const [state, dispatch] = useReducer(badgerReducer, initialState);
    // const {user, auth, loading, myBadges, allBadges} = state;

    //Register a user
    const registerUser = async ({ email, password }) => {
        const user = { email, password };

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const res = await axios.post("/api/auth/register", user, config);

            dispatch({
                type: REGISTER_USER,
                payload: res
            });

            console.log(res)


        } catch (error) {
            console.log(error);
        }

    }

    // const loadUser = () => async (dispatch) => {


    // Log in user
    const logIn = async ({ email, password }) => {
        const user = { email, password };

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const res = await axios.post("/api/auth/signin", user, config);
            
            dispatch({
                type: LOG_IN,
                payload: res
            });

            dispatch(loadUser());

            console.log(res)
            
        } catch (error) {
            console.log(error);
        }

    }

    // Get user
    // const getUser =  async ({email, password}) =>  {

    // }

    // load user
    const loadUser = async () => {

        try {
            const res = await axios.get("/api/auth/signin");
            
            dispatch({
                type: LOAD_USER,
                payload: res
            });

            console.log(res);
            
        } catch (error) {
            console.log(error);
        }
    }

    // Create a badge

    const creatBadge = async ({ data }) => {

        // const badge = {email, name, title, department, location, accomplishment};

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };


        try {
            const res = await axios.post("/api/badge/create", data, config);

            dispatch({
                type: CREAT_BADGE,
                payload: res
            });

            console.log(res);


            
        } catch (error) {
            console.log(error);
        }

    }

    // Get my badges 
    const getMyBadges = async () => {

        try {
            const res = await axios.get("/api/badge/me");


            dispatch({
                type: GET_MY_BADGES,
                payload: res
            })

            console.log(res);

            
        } catch (error) {
            console.log(error);

        }

    }


    // Get all badges
    const getAllBadges = async () => {
        try {
            const res = await axios.get("/api/badge/all");

            // console.log(res);

            dispatch({
                type: GET_ALL_BADGES,
                payload: res
            });
            console.log(res);

            
        } catch (error) {
            console.log(error);

        }

    }



    // Send Kudos
     const sendKudos =  async ({email, kudos}) =>  {

        const info = {email,kudos};

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const res = await axios.post("/api/auth/kudos",info,config);

            console.log(res)

            dispatch({
                type: CHANGE_KUDOS
            })
            
        } catch (error) {
            console.log(error);
            
        }

    }

    // Send Kudos
    const spendKudos =  async ( kudos) =>  {

        // const info = {kudos};

        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

        try {
            const res = await axios.post("/api/auth/spendkudos",kudos,config);

            console.log(res)

            /*dispatch({
                type: CHANGE_KUDOS
            })*/

        } catch (error) {
            console.log(error);

        }

    }

    // Log out a user
    const logOut = async () => {
        dispatch({ type: LOG_OUT, payload: "Logged out" });
    }

    return (
        <BadgerContext.Provider value={{
            user: state.user,
            auth: state.auth,
            loading: state.loading,
            myBadges: state.myBadges,
            allBadges: state.allBadges,
            registerUser,
            logIn,
            sendKudos,
            spendKudos,
            creatBadge,
            getMyBadges,
            getAllBadges
        }}>
            {props.children}

        </BadgerContext.Provider>
    )

}


export default BadgerState