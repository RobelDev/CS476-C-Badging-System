import React from "react"

import logo from '../../../Assets/Team_Badgers_Logo.png';

class BadgeObject extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <li><img src={logo}/>
                <div>
                    Team Badgers Badge
                    <p>
                        This badge is awarded to people who are developing the project
                    </p>
                </div>
            </li>
        );
    }
}

export default BadgeObject;