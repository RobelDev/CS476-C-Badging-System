import React, { Fragment, useState, useContext } from 'react'
import "./LogIn.css"
import { BadgerContext } from '../context/badger/BadgerContext'
import axios from "axios";


const LogIn = () => {

    const value = useContext(BadgerContext)

    function switchForm() {
        if (document.getElementById('form1')) {

            if (document.getElementById('form1').style.display == 'none') {
                document.getElementById('form1').style.display = 'block';
                document.getElementById('form2').style.display = 'none';
            }
            else {
                document.getElementById('form1').style.display = 'none';
                document.getElementById('form2').style.display = 'block';
            }
        }
    }

    const registerUser = async ({ email, password }) => {
        const user = { email, password };

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const res = await axios.post("/api/auth/register", user, config);

            /*dispatch({
                type: REGISTER_USER,
                payload: res
            }); */


        } catch (error) {
            console.log(error);
        }

    }

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = data;

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("signedin an email" + email + "  password " + password)
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await axios.post("/api/auth/register", data, config);
        // logIn({ email, password });
    };

    return (
        <div class="wrapper">
            <div class="LoginUI">
                <div class="LogInUILeft">
                    <div class="GreetingLeft">
                        <span class="left-span-1">
                            WELCOME TO
                        </span>
                        <span class="left-span-2">
                            Team Badger's Skills and Knowledge Badging System
                        </span>

                    </div>

                    <div class="log-in-form" id="form1">
                        <span class="left-span-3">
                            Log in to reward your collegues with badges.
                        </span>
                        <form class="log-in-form" onSubmit={onSubmit} class="center">
                            <div class="EmailBox">
                                <label for="email"></label>
                                <input class="login-input" type="email"
                                    name="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={onChange}
                                    required />
                            </div>

                            <div class="PasswordBox">
                                <label for="password"></label>
                                <input class="login-input" type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={onChange}
                                    minLength="8"
                                    required />
                            </div>

                            <button type="submit" class="LogInButton">SIGN IN</button>
                        </form>

                        <div class="switch-div">
                            <span class="sign-up-text">Don't have an account?</span>
                            <button type="submit" onClick={switchForm} class="sign-up-button">Sign Up</button>
                        </div>
                    </div>

                    <div class="sign-up-form" id="form2">
                        <span class="left-span-3">
                            Enter your email and password to create an account
                        </span>
                        <form onSubmit={onSubmit} class="center">
                            <div class="EmailBox">
                                <label for="email"></label>
                                <input class="login-input" type="email"
                                    name="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={onChange}
                                    required />
                            </div>

                            <div class="PasswordBox">
                                <label for="password"></label>
                                <input class="login-input" type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={onChange}
                                    minLength="8"
                                    required />
                            </div>


                            <button type="submit" class="LogInButton">REGISTER</button>
                        </form>

                        <div class="switch-div">
                            <span class="sign-up-text">Already have an account?</span>
                            <button type="submit" onClick={switchForm} class="sign-up-button">Log in</button>
                        </div>
                    </div>



                </div>
                <div class="LogInUIRight">
                    <div class="GreetingRight">
                        <span class="right-span-1">
                            Team Badger's
                        </span>
                        <span class="right-span-2">
                            Skills and Knowledge Badging System
                        </span>
                        <hr class="line" />
                        <span class="right-span-3">
                            <p>
                                Bring back the social enviornment that remote work has lost.
                            </p>
                            Acknowledge your colleagues by sending badges based on skills and achievements.
                            Redeem kudos recevied from colleagues to redeem rewards.
                            <p>
                            </p>
                            <p>

                            </p>
                        </span>

                    </div>
                </div>


            </div>

            {/*  */}

        </div>
    )
}

export default LogIn
