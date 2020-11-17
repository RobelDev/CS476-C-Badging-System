import React from "react"

import "./MainNav.css"

class MainNav extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
        <div class="navbar-div">
            <ul>
                <li><a href="#home">State Farm</a></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#give-badge">Give A Badge</a></li>
                <li><a href="#give-kudos">Give Kudos</a></li>
                <li><a href="#spend-kudos">Spend Kudos</a></li>
                <li><a href="#print-badge">Badge Printing</a></li>
                <li><a href="#generate-email">Generate Email Signature</a></li>
                <li><a href="#log-out">Log Out</a></li>
            </ul>                
        </div>

        );
    }
}

export default MainNav;