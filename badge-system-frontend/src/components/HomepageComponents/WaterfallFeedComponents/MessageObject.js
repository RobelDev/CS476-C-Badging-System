import React from "react"

import './MessageObject.css'

import logo from '../../../Assets/Team_Badgers_Logo.png'
import img1 from "../imgs/1.jpg"

class MessageObject extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <li style={{listStyle: "none"}}>
                <div class="message-container">
                {/* <div class="card" style={"width: 18rem"}>
  <img class="card-img-top" src="..." alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
                    
                    <div class="message-part-1">
                        <div class="message-id">
                            <a href="#user-link">Tristan Marcus</a> recieved the Team Badgers Badge!

                        </div>
                        <br />
                        <div>
                        <img src={img1} alt="jj"/>
                        </div>
                        {/* <div class="icon-container"> */}
                        {/* </div> */}
                        
                    </div>
                    
                    <div class="message-part-2">
                        <p class="message-description">
Mater Front-End web development         </p>
                    </div>
                    
                    <hr />

                    <div class="message-part-1">
                        <div class="message-id">
                            <a href="#user-link">Robel </a> recieved the Team Badgers Badge!

                        </div>
                        <br />
                        <div>
                        <img src={img1} alt="jj"/>
                        </div>
                        {/* <div class="icon-container"> */}
                        {/* </div> */}
                        
                    </div>
                    
                    <div class="message-part-2">
                        <p class="message-description">
Mater at Amazon Cloud Services (AWS)</p>
                    </div>
                </div>


                <div class="message-part-1">
                        <div class="message-id">
                            <a href="#user-link">Abdu y</a> recieved the Team Badgers Badge!

                        </div>
                        <br />
                        <div>
                        <img src={img1} alt="jj"/>
                        </div>
                        {/* <div class="icon-container"> */}
                        {/* </div> */}
                        
                    </div>
                    
                    <div class="message-part-2">
                        <p class="message-description">
                        Master at Java programming language. 
                        </p>
                    </div>
                
            </li>
        );
    }
}

export default MessageObject;