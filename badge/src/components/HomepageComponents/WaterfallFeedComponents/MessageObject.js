import React from "react"

import './MessageObject.css'

import logo from '../../../Assets/Team_Badgers_Logo.png'

class MessageObject extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <li style={{display: "flex"}}>
                <img src={logo}/>
                <div class="message-container">
                    
                    <p class="message-id">
                    Team Badgers Badge
                    </p>
                    
                    <p class="message-description">
                        This badge is a template for the UI to show where a badge would be!
                    </p>
                </div>
            </li>
        );
    }
}

export default MessageObject;