import React from "react"
import img1 from '../imgs/1.jpg';
import img2 from '../imgs/2.jpeg';
import img4 from '../imgs/4.jpg';
import img5 from '../imgs/5.jpg';
import timg from '../imgs/timg.jpeg';

import img1PDF from '../imgs/img1.pdf';
import img2PDF from '../imgs/img2.pdf';
import img4PDF from '../imgs/img4.pdf';
import img5PDF from '../imgs/img5.pdf';
import timgPDF from '../imgs/timg.pdf';
import "./BadgePrinting.css"


class BadgePrinting extends React.Component {

    render() {
        return(
            <div >
                <h3>Print a Badge</h3>
                <br />
                <a href={img1PDF} target="_blank" rel="noreferrer">
                    <img src={img1} alt="img1" width="200px" height="200px"/>
                </a>
                <a href={img2PDF} target="_blank" rel="noreferrer">
                    <img src={img2} alt="img2" width="200px" height="200px"/>
                </a>
                <a href={img4PDF} target="_blank" rel="noreferrer">
                    <img src={img4} alt="img4" width="200px" height="200px"/>
                </a>
                <a href={img5PDF} target="_blank" rel="noreferrer">
                    <img src={img5} alt="img5" width="200px" height="200px"/>
                </a>
                <a href={timgPDF} target="_blank" rel="noreferrer">
                    <img src={timg} alt="timg" width="200px" height="200px"/>
                </a>
            </div>
        );
    }
}

export default BadgePrinting;