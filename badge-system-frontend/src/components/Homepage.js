import React, { Component } from "react";

import MainNav from "./HomepageComponents/MainNav"
import BadgePanel from "./HomepageComponents/BadgePanel"
import WaterfallFeed from "./HomepageComponents/WaterfallFeed"

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
                    <WaterfallFeed />
                </div>
                <div class="BadgePanelContainer">
                    <BadgePanel />
                </div>
            </div>
        )
    }
}

export default Homepage;