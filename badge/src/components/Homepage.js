import React, { Component } from "react";

import MainNav from "../Components/HomepageComponents/MainNav"
import BadgePanel from "../Components/HomepageComponents/BadgePanel"
import WaterfallFeed from "../Components/HomepageComponents/WaterfallFeed"

import "./Homepage.css"

class Homepage extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div class="HomepageContainer">
                <div class="NavbarContainer">
                    <MainNav />
                </div>
                <div class="WaterfallFeedContainer">
                    
                </div>
                <div class="BadgePanelContainer">
                    <BadgePanel />
                </div>
            </div>
        )
    }
}

export default Homepage;