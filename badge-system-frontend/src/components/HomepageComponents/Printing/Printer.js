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

    initCanvas() {
        if (this.state.mode === 3) {
            var canvas = document.querySelector('#p-img');
            var ctx = canvas.getContext('2d');
            canvas.width = "900"
            canvas.height = "500"

            ctx.font = "70px " + this.state.fontFamily
            ctx.textAlign = 'center';
            ctx.fillText(this.state.uname, 450, 100)
            if (this.state.uname === "") {
                alert("Enter your name")
                this.setState({
                    mode: 2
                })
            }
            let arr = []
            for (let i in this.state.imgs) {
                if (this.state.imgs[i].mode) {
                    arr.push(this.state.imgs[i])
                }
            }
            if (arr.length === 0) {
                alert("Please select a picture")
                this.setState({
                    mode: 1
                })
            } else if (arr.length === 1) {
                let img = new Image();
                img.src = arr[0].img
                img.alt = "demo"
                img.onload = function () {
                    ctx.drawImage(img, 350, 250, 200, 200)
                    let png = canvas.toDataURL("image/png")
                    localStorage.setItem("url", png)
                }
            } else if (arr.length === 2) {
                let x = 125
                let y = 200
                for (let a = 0; a < arr.length; a++) {
                    let img = new Image();
                    img.src = arr[a].img
                    img.alt = "demo"
                    img.onload = function () {
                        if (a === 0) {
                            ctx.drawImage(img, x, y, 200, 200)
                        } else if (a === 1) {
                            ctx.drawImage(img, 565, y, 200, 200)
                        }
                        let png = canvas.toDataURL("image/png")
                        localStorage.setItem("url", png)
                    }
                }
            } else if (arr.length === 3) {
                for (let a = 0; a < arr.length; a++) {
                    let img = new Image();
                    img.src = arr[a].img
                    img.alt = "demo"
                    img.onload = function () {
                        if (a === 0) {
                            ctx.drawImage(img, 75, 200, 200, 200)

                        } else if (a === 1) {
                            ctx.drawImage(img, 350, 200, 200, 200)

                        } else if (a === 2) {
                            ctx.drawImage(img, 625, 200, 200, 200)
                        }
                        let png = canvas.toDataURL("image/png")
                        localStorage.setItem("url", png)
                    }
                }
            } else if (arr.length === 4) {

                alert("Number of pictures 1-3")
                this.setState({
                    mode: 1
                })
            }
        }
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
