import React from "react"
import BadgeObject from "./UserPanelComponents/BadgeObject"

import "./UserPanel.css"

class UserPanel extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div class="user-panel-div">
                <div class="badge-library-div">
                    <div class="badge-library-header">
                        Your Badges
                    </div>

                    <BadgeObject />
                    <BadgeObject />
                    <BadgeObject />
                    <BadgeObject />
                    <BadgeObject />
                    <BadgeObject />
                    <BadgeObject />
                    <BadgeObject />
                    <BadgeObject />

                </div>

            </div>

        );
    }
}

export default UserPanel;