import { useState, useReducer, useEffect, useRef } from 'react';
import axios from 'axios';
import badgerReducer from "./badgerReducer";
import BadgerContext from "./BadgerContext"

import {
    LOAD_USER,
    GET_USER,
    LOG_IN,
    REGISTER_USER,
    CREAT_BADGE,
    GET_MY_BADGES,
    GET_ALL_BADGES,
    CHANGE_KUDOS,
    GIVE_BADGES,
    LOG_OUT,

} from "./constants.js";

const BadgerState = (props) => {

    const initialState = {
        token: "",
        user: {},
        auth: false,
        loading: false,
        myBadges: [],
        allBadges: [],
        isBadgesGet: false,
    }


    const [isKudosChanged, setisKudosChanged] = useState(false);
    const [isBadgeSent, setisBadgeSent] = useState(false);

    const [badgesInfo, setBadgesInfo] = useState({
        receiver: "",
        reason: "",
        badgeName: ""
    })


    const [kudosInfo, setKudosInfo] = useState({
        email: "",
        reason: "",
        kudos: ""
    })

    const saveBadgesInfo = (value1, value2, value3) => {
        setBadgesInfo({ ...badgesInfo, receiver: value1, reason: value2, badgeName: value3 });
        // console.log("QQQQQQQQQ", badgesInfo.badgeName)
        // console.log(badgesInfo)
    }

    const kudosInfoRef = useRef(null);



    function saveKudosInfo(value1, value2, value3) {
        setKudosInfo({ ...kudosInfo, email: value1, reason: value2, kudos: value3 });
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
                payload: res.data
            });

            //console.log(res.data)


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
                payload: res.data
            });

            dispatch(loadUser(res.data.token));

            //console.log(res.data)

        } catch (error) {
            console.log(error);
        }

    }

    // Get user
    // const getUser =  async ({email, password}) =>  {

    // }

    // load user
    const loadUser = async (token) => {

        const config = {
            headers: {
                "Content-Type": "application/json",
                "auth-token": token
            },
        };

        try {
            const res = await axios.get("/api/auth/signin", config);

            dispatch({
                type: LOAD_USER,
                payload: res.data
            });

            dispatch(getMyBadges(token));
            dispatch(getAllBadges());

            //console.log(res);

        } catch (error) {
            console.log(error);
            console.log("error has been reached")
        }
    }

    // Create a badge

    const creatBadge = async ({ receiver, reason, badgeName }, token) => {

        // const badge = {email, name, title, department, location, accomplishment};

        const data = { receiver, reason, badgeName }

        const config = {
            headers: {
                "Content-Type": "application/json",
                "auth-token": token
            },
        };


        try {
            const res = await axios.post("/api/badge/create", data, config);



            dispatch({
                type: CREAT_BADGE,
                payload: res.data
            });

            // dispatch(loadUser(token));

            setisBadgeSent(true);

            // console.log(res);



        } catch (error) {
            console.log(error);
        }

    }

    // Get my badges 
    // signed user-- find all the badges given to this user
    const getMyBadges = async (token) => {


        const config = {
            headers: {
                "Content-Type": "application/json",
                "auth-token": token
            },
        };

        try {
            const res = await axios.get("/api/badge/me", config);

            dispatch({
                type: GET_MY_BADGES,
                payload: res.data
            })

            //console.log(res.data);


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
                payload: res.data
            });
            //console.log(res.data);


        } catch (error) {
            console.log(error);

        }

    }



    // Send Kudos
    const sendKudos = async ({ email, kudos }, token) => {


        //const kudos = parseInt(kudosAmount);

        console.log("hhhhhhhhhhhhhhh", kudos);

        const info = { email, kudos };

        const config = {
            headers: {
                "Content-Type": "application/json",
                "auth-token": token
            },
        };



        try {

            // console.log("the state function")

            const res = await axios.post("/api/auth/giveKudos", info, config);


            setisKudosChanged(true);

            //console.log("lllllllll", isKudosChanged)

            /* dispatch({
                 type: CHANGE_KUDOS
             })*/


        } catch (error) {
            console.log(error);

        }

    }

    // Spend Kudos
    const spendKudos = async ({ kudos }, token) => {

        const info = { kudos };

        console.log("function call");

        const config = {
            headers: {
                "Content-Type": "application/json",
                "auth-token": token
            },
        };


        try {
            const res = await axios.post("/api/auth/spendKudos", info, config);

            // console.log("kkkkkkkkkkkkkkkk", res)

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

    const setKudosFlag = () => {
        setisKudosChanged(!isKudosChanged);
    }

    return (
        <BadgerContext.Provider value={{
            token: state.token,
            user: state.user,
            auth: state.auth,
            loading: state.loading,
            myBadges: state.myBadges,
            allBadges: state.allBadges,
            isKudosChanged,
            isBadgeSent,
            kudosInfo,
            badgesInfo,
            isBadgesGet: state.isBadgesGet,
            saveKudosInfo,
            saveBadgesInfo,
            registerUser,
            logIn,
            logOut,
            loadUser,
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