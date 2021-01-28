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



import "./GiveBadge.css"

class GiveBadge extends React.Component {
    render() {
        return(
            <div >
                <div >
                    <form>
                        <h3>Give Badge</h3>
                        <label>
                            Who are you sending Badge to?
                            <input type="text" name="name" />    
                        </label> 
                        <br />
                        <div className="row padd-15">
                            <label>
                            Choose a Badge
                            <br />
                            <div className="column">
                            <img src={img1} alt="img1" width="100px" height="100px"/>
                            <input type="checkbox">
                            </input>
                            </div>
                            <div className="column">
                            <img src={img2} alt="img2" width="100px" height="100px"/>
                            <input type="checkbox">
                            </input>
                            </div>
                            <div className="column">
                            <img src={img4} alt="img4" width="100px" height="100px"/>
                            <input type="checkbox">
                            </input>
                            </div>
                            </label>
                        </div>
                        <br />
                        <label>
                            Why are you sending the Badge?
                            <input type="text" name="name" />    
                        </label> 
                        <br />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default GiveBadge;