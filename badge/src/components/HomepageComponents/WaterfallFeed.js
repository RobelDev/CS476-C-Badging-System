import React from "react"

import "./WaterfallFeed.css"

class WaterfallFeed extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
        <div class="waterfall-feed-container">
            <div class="feed-title">
                Reward Feed
            </div>
            <div class="feed-div">
                Feed
            </div>
        </div>

        );
    }
}

export default WaterfallFeed;