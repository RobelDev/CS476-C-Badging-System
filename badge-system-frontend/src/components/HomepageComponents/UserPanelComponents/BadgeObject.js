import React from "react"

import './BadgeObject.css'

import logo from '../../../Assets/Team_Badgers_Logo.png'

const BadgeObject = () => {

        return(
            <li style={{display: "flex"}}>
                <img src={logo}/>
                <div class="badge-info-div">
                    
                    <p class="badge-name">
                    Team Badgers Badge
                    </p>
                    
                    <p class="badge-description">
                        This badge is a template for the UI to show where a badge would be!
                    </p>
                </div>
            </li>
        );
}

export default BadgeObject;