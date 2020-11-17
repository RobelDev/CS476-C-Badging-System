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
            <li style={{listStyle: "none"}}>
                <div class="message-container">
                    
                    <div class="message-part-1">
                        <p class="message-id">
                            <a href="#user-link">Tristan Marcus</a> recieved the Team Badgers Badge!
                        </p>
                        <div class="icon-container">
                            <img class="reward-icon" src={logo}/>
                        </div>
                        
                    </div>
                    
                    <div class="message-part-2">
                        <p class="message-description">
                        Here is the message description. This is where the personal message will be.
                        </p>
                    </div>
                    

                </div>
                
            </li>
        );
    }
}

export default MessageObject;