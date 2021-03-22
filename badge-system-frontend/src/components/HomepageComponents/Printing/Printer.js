import React, { useContext } from 'react';
import './Printer.css';
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



class Printer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            uname: "",
            imgs: this.props.arr,
            
        }
        this.closeClick = this.closeClick.bind(this);
    }


    

    

    closeClick() {
        document.querySelector("#box").style.display = "none";
    }


    render() {
            return (
                <div className="modal-content">

                    {
                        this.state.imgs.map((item, index) => {
                            return (
                                <div className="modal-content">
                                    <form class="send-badge-form" onSubmit="">
                                        <label for="badge1">
                                            <a href={this.state.imgs[index].img} target="_blank" rel="noreferrer">
                                                <img src={this.state.imgs[index].img} />
                                                <div>badge</div>
                                            </a>
                                        </label>
                                    </form>
                                </div>
                            )
                        })
                    }
                </div>
        )
        
    }
}
export default Printer
