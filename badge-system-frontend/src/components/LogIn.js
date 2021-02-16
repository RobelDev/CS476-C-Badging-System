import React, { Fragment, useState } from 'react'
import "./LogIn.css"


const LogIn = () => {
    // state = {
    //     user1 : {
    //         email : "rk394@nau.edu",
    //         password : "123456"
    //     }
    //     ,
    //     user2 : {
    //         email : "rrr@nau.edu",
    //         password : "899888"
    //     }
    //     ,
    //     user3 : {
    //         email : "lk34@nau.edu",
    //         password : "99999"
    //     }
    //     ,
    //     user4: {
    //         email : "aaa8@nau.edu",
    //         password : "1111111"
    //     }
    //     ,
    //     user5 : {
    //         email : "yx4444@nau.edu",
    //         password : "333333"
    //     }
    //     ,
    //     user6 : {
    //         email : "tk4444@nau.edu",
    //         password : "123999"
    //     }
    // }

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
        console.log("signedin an email" +  email + "  password " + password)
        // login({ email, password });
      };
    return (
        <div class="wrapper">

                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            


            <div class="LoginUI">
                <div class="LogInUILeft">
                    <div class="GreetingLeft">
                        <span class="left-span-1">
                            WELCOME TO
                        </span>
                        <span class="left-span-2">
                            Team Badger's Skills and Knowledge Badging System
                        </span>
                        <span class="left-span-3">
                                Log in to reward your collegues with badges.
                        </span>
                    </div>
                    <form onSubmit={onSubmit} class="center">
                        <div class="EmailBox">
                            <label for="email"></label>
                            <input type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={onChange}
                                required />
                        </div>

                        <div class="PasswordBox">
                            <label for="password"></label>
                            <input type="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                onChange={onChange}
                                minLength="8"
                                required />
                        </div>

                        <button type="submit" class="LogInButton">SIGN IN</button>
                    </form>

                    <div class="sign-up-div">
                        <span class="sign-up-text">Don't have an account?</span>
                        <a href="#">Sign Up!</a>
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
            
            {/* <form>

                <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>

                </div>
                <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control"  placeholder="Password">

                </div>
                <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form> */}
            
        </div>
    )
}

export default LogIn
