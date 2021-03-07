import React, { Component, useContext } from "react";

import BadgerContext from '../context/badger/BadgerContext'

import MainNav from "./HomepageComponents/MainNav"
import UserPanel from "./HomepageComponents/UserPanel"
import WaterfallFeed from "./HomepageComponents/WaterfallFeed"

import "./Homepage.css"

const Homepage = () => {

    const context = useContext(BadgerContext);

    const onClickSignOut = async (e) => {
        e.preventDefault();
        context.logOut();
    };

    return (
        <div class="HomepageContainer">

            <input type="checkbox" id="check" />

            <div class="HeaderContainer">
                <label for="check">
                    <i class="fas fa-bars" id="sidebar-button"></i>
                </label>

                <div class="header-left">
                    <h3>State <span>Farm</span></h3>
                </div>

                <div class="header-right">
                    <a href="#" onClick={onClickSignOut} class="log-out-button">Log Out</a>
                </div>
            </div>

            <div class="NavbarContainer">
                <MainNav />
            </div>

            <div class="WaterfallFeedContainer">
                <WaterfallFeed />
            </div>

            <div class="UserPanelContainer">
                <UserPanel />
            </div>

            <div class="kudos-div">
                <div class="kudos-amount">
                    Kudos: { context.user.kudosBank }
                </div>
            </div>

        </div>
    )

}

export default Homepage;