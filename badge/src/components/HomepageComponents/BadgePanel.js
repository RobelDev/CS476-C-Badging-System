import React from "react"
import BadgeObject from "./BadgePanelComponents/BadgeObject"

import "./BadgePanel.css"

class BadgePanel extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
        <div class="badge-panel-div">
            <div class="badge-panel-header">
                Your Badges
            </div>
            
            <ul>
                <BadgeObject />
                <BadgeObject />
                <BadgeObject />
                <BadgeObject />
                <BadgeObject />
                <BadgeObject />
            </ul>

            <div class="kudos-div">
                <div class="kudos-title">
                Your Kudos
                </div>
                <div class="kudos-amount">
                    1000
                </div>
            </div>

        </div>

        );
    }
}

export default BadgePanel;