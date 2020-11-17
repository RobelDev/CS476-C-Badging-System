import React from "react"

import MessageObject from "./WaterfallFeedComponents/MessageObject"

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
                <ul>
                    <MessageObject />
                    <MessageObject />
                    <MessageObject />
                    <MessageObject />
                    <MessageObject />
                    <MessageObject />
                    <MessageObject />
                    <MessageObject />
                    <MessageObject />
                    <MessageObject />
                    <MessageObject />
                    <MessageObject />
                    
                </ul>
            </div>
        </div>

        );
    }
}

export default WaterfallFeed;