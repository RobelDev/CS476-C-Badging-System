import React from "react"
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import GiveKudos from "./Kudos/GiveKudos.js"
import BadgePrinting from "./Printing/BadgePrinting.js"
import GiveBadge from "./Badges/GiveBadge.js"

import Card from './Card/Card.js'

import "./MainNav.css"

const openModal = () => {
    console.log("LOLOLOLOLOLOLOLOLOLOL");
}

class MainNav extends React.Component {

    

    render() {
        return (
            <div class="navbar-div">

                <a href="#" onClick={openModal}><i class="fas fa-home"></i><span>Home</span></a>
                <a href="#" onClick={openModal}><i class="fas fa-award"></i><span>Give a Badge</span></a>
                <a href="#" onClick={openModal}><i class="fas fa-coins"></i><span>Give Kudos</span></a>
                <a href="#" onClick={openModal}><i class="fas fa-coins"></i><span>Spend Kudos</span></a>
                <a href="#" onClick={openModal}><i class="fas fa-print"></i><span>Badge Printing</span></a>
                <a href="#" onClick={openModal}><i class="fas fa-file-signature"></i><span>Generate Email Signature</span></a>
                <a href="#" onClick={openModal}><i class="fas fa-sign-out-alt"></i><span>Log Out</span></a>




                {/*
                    <ul>
                        <li>
                            <Popup trigger={<button>State Farm</button>} position="right center">
                                <div></div>
                            </Popup>
                        </li>
                        <li>
                            <Popup trigger={<button>Home</button>} position="right center">
                                <div></div>
                            </Popup>
                        </li>
                        <li>
                            <Popup trigger={<button>Give a Badge</button>} position="right center">
                                <div><GiveBadge /></div>
                            </Popup>
                        </li>
                        <li>
                            <Popup trigger={<button>Give Kudos</button>} position="right center">
                                <div><GiveKudos /></div>
                            </Popup>
                        </li>
                        <li>
                            <Popup trigger={<button>Spend Kudos</button>} position="right center">
                                <div>Spend Kudos coming soon...</div>
                            </Popup>
                        </li>
                        <li>
                            <Popup trigger={<button>Badge Printing</button>} position="right center">
                                <div><BadgePrinting /></div>
                            </Popup>
                        </li>
                        <li>
                            <Popup trigger={<button>Generate Email Signature</button>} position="right center">
                                <div class="card-popup"><Card /></div>
                            </Popup>
                        </li>
                        <li>
                            <Popup trigger={<button>Log Out</button>} position="right center">
                                <div></div>
                            </Popup>
                        </li>
                    </ul>
                */}
        </div>

        );
    }
}

export default MainNav;