import React, { useContext } from 'react';
import './Printer.css';
import PDF from './PDF';
import img1 from '../imgs/1.jpg';
import img2 from '../imgs/2.jpeg';
import img4 from '../imgs/4.jpg';
import img5 from '../imgs/5.jpg';
import BadgerContext from '../../../context/badger/BadgerContext';
import { SetArray } from "./SetArray";
import b5 from '../../../Assets/5yrFull.png';
import b10 from '../../../Assets/10yrFull.png';
import b15 from '../../../Assets/15yrFull.png';
import b20 from '../../../Assets/20yrFull.png';
import b25 from '../../../Assets/25yrFull.png';
import b30 from '../../../Assets/30yrFull.png';
import b35 from '../../../Assets/35yrFull.png';
import b40 from '../../../Assets/40yr.png';
import logo from '../../../Assets/Team_Badgers_Logo.png';
import twentyYearsExperience from './img/twentyYearsExperience.pdf';



const Printer = (props) => {

    var image = logo;

    const getBadgeImage = () => {
        const name = props.badgeName;

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

    return (
        <div className="modal-print-content">
            <span title={props.badgeData.badgeName}>
                {getBadgeImage()}
                <a href={twentyYearsExperience} target="_blank" rel="twentyYearsExperience">
                    <form class="modal-print-content-form">
                        <label for="badge1">
                            {getBadgeImage()}
                            <img class="modal-print-content-img" src={image} />
                            {/*<div class="modal-badge-info-div">
                    
                
                
                
                   
                                <p class="badge-description">
                                    Badge Description: { props.badgeData.reason}
                                </p>
                                <p class="badge-date">
                                    Date Received: { props.badgeData.date }
                                </p>
                            </div>*/}
                        </label>
                    </form>
                </a>
            </span>
        </div>
    );
}
export default Printer