import React from "react"

import './BadgeObject.css'

import logo from '../../../Assets/Team_Badgers_Logo.png'

import b5 from '../../../Assets/5yrFull.png'
import b10 from '../../../Assets/10yrFull.png'
import b15 from '../../../Assets/15yrFull.png'
import b20 from '../../../Assets/20yrFull.png'
import b25 from '../../../Assets/25yrFull.png'
import b30 from '../../../Assets/30yrFull.png'
import b35 from '../../../Assets/35yrFull.png'
import b40 from '../../../Assets/40yr.png'

const BadgeObject = (props) => {

    var image = logo;

    const getBadgeImage = () => {
        const name = props.badgeData.badgeName;

        switch (name) {
            case "5yr":
                image = b5;
                break;
            case "10yr":
                image = b10;
                break;
            case "15yr":
                image = b15;
                break;
            case "20yr":
                image = b20;
                break;
            case "25yr":
                image = b25;
                break;
            case "30yr":
                image = b30;
                break;
            case "35yr":
                image = b35;
                break;
            case "40yr":
                image = b40;
                break;

        }

    }

    return(
        <li style={{ display: "flex" }}>
            {getBadgeImage()}
            <img src={image}/>
            <div class="badge-info-div">
                    
                <p class="badge-name">
                    Badge Name: { props.badgeData.badgeName}
                </p>
                   
                <p class="badge-description">
                    Badge Description: { props.badgeData.reason}
                </p>

                <p class="badge-date">
                    Date Received: { props.badgeData.date }
                </p>
            </div>
        </li>
    );
}

export default BadgeObject;