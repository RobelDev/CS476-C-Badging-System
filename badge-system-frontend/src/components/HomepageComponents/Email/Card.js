import React, { useContext } from 'react';
import './Card.css';
import img1 from '../imgs/1.jpg';
import img2 from '../imgs/2.jpeg';
import img4 from '../imgs/4.jpg';
import img5 from '../imgs/5.jpg';
import BadgerContext from '../../../context/badger/BadgerContext'
import { SetArray } from "./SetArray"
import b5 from '../../../Assets/5yrFull.png'
import b10 from '../../../Assets/10yrFull.png'
import b15 from '../../../Assets/15yrFull.png'
import b20 from '../../../Assets/20yrFull.png'
import b25 from '../../../Assets/25yrFull.png'
import b30 from '../../../Assets/30yrFull.png'
import b35 from '../../../Assets/35yrFull.png'
import b40 from '../../../Assets/40yr.png'
import logo from '../../../Assets/Team_Badgers_Logo.png'



class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            mode: 1,
            uname: "",
            personalInfo: "",
            phone: "",
            email: "",
            address: "",
            imgs: this.props.arr,
            fontSelected: {
                text1: "STHeiti",
                text2: "STKaiti",
                text3: "STSong",
                text4: "STFangsong",
                text5: "SimHei",
                text6: "Microsoft YaHei",
                text7: "LiSu",
            },
            fontFamily: "",
            x: 10,
            y: 10,
            width: 200,
            height: 200,
        }
        this.showImgInfo = this.showImgInfo.bind(this);
        this.NextClick = this.NextClick.bind(this);
        this.BackClick = this.BackClick.bind(this);
        this.getMsgClick = this.getMsgClick.bind(this);
        this.getMsgClick2 = this.getMsgClick2.bind(this);
        this.getMsgClick3 = this.getMsgClick3.bind(this);
        this.getMsgClick4 = this.getMsgClick4.bind(this);
        this.getMsgClick5 = this.getMsgClick5.bind(this);
        this.getChecked1 = this.getChecked1.bind(this);
        this.getChecked2 = this.getChecked2.bind(this);
        this.getChecked3 = this.getChecked3.bind(this);
        this.getChecked4 = this.getChecked4.bind(this);
        this.updateFontChange = this.updateFontChange.bind(this);
        this.initCanvas = this.initCanvas.bind(this);
        this.downLoad = this.downLoad.bind(this);
        this.closeClick = this.closeClick.bind(this);
        this.setChecked = this.setChecked.bind(this);
        this.showImgInfo = this.showImgInfo.bind(this);
    }

    showImgInfo() {
        console.log(this.state.imgs);
    }

    componentDidMount() {

        this.initCanvas();
    }
    componentDidUpdate() {
        this.initCanvas();
        if (this.state.mode === 3) {
            let img = document.querySelector("#p-img")
            img.src = localStorage.getItem("url")
        }
    }

    closeClick() {
        document.querySelector("#box").style.display = "none";
    }


    downLoad() {
        console.log("asdasd")
        let a = document.createElement("a")
        a.download = localStorage.getItem("url")
        a.href = localStorage.getItem("url")
        a.click()
    }

    initCanvas() {
        if (this.state.mode === 3) {
            var canvas = document.querySelector('#p-img');
            var ctx = canvas.getContext('2d');
            canvas.width = "900"
            canvas.height = "500"

            ctx.font = "50px " + this.state.fontFamily
            ctx.textAlign = 'center';
            ctx.fillText(this.state.uname, 150, 100)
            ctx.fillText(this.state.personalInfo, 150, 170)
            ctx.fillText(this.state.phone, 150, 240)
            ctx.fillText(this.state.email, 150, 310)
            ctx.fillText(this.state.address, 150, 380)

            /*if (this.state.uname === "") {
                alert("Enter your name")
                this.setState({
                    mode: 2
                })
            }
            */
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
                    ctx.drawImage(img, 650, 170, 150, 150)
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
                            ctx.drawImage(img, 650, 80, 150, 150)
                        } else if (a === 1) {
                            ctx.drawImage(img, 650, 280, 150, 150)
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
                            ctx.drawImage(img, 650, 40, 120, 120)

                        } else if (a === 1) {
                            ctx.drawImage(img, 650, 180, 120, 120)

                        } else if (a === 2) {
                            ctx.drawImage(img, 650, 320, 120, 120)
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


    NextClick(e) {
        if (this.state.mode <= 3) {
            this.setState({
                mode: this.state.mode + 1
            })
        }
    }

    BackClick(e) {
        if (this.state.mode > 1) {
            this.setState({
                mode: this.state.mode - 1
            })
        }

    }

    getMsgClick(e) {
        this.setState({
            uname: e.target.value,
        })
    }

    getMsgClick2(e) {
        this.setState({
            personalInfo: e.target.value
        })
    }

    getMsgClick3(e) {
        this.setState({
            phone: e.target.value
        })
    }

    getMsgClick4(e) {
        this.setState({
            email: e.target.value
        })
    }

    getMsgClick5(e) {
        this.setState({
            address: e.target.value
        })
    }



    getChecked1(e) {
        this.setState({
            checked1: {
                mode: !this.state.checked1.mode,
                img: img1
            }
        })
    }
    getChecked2(e) {
        this.setState({
            checked2: {
                mode: !this.state.checked2.mode,
                img: img2,
            }
        })
    }
    getChecked3(e) {
        this.setState({
            checked3: {
                mode: !this.state.checked3.mode,
                img: img4
            }
        })
    }
    getChecked4(e) {
        this.setState({
            checked4: {
                mode: !this.state.checked4.mode,
                img: img5
            }
        })
    }

    updateFontChange(e) {
        if (!this.state.uname) {
            alert("Please enter your name")
        }
        /*document.querySelector("#font").style.fontFamily = e.target.value */
        this.setState({
            fontFamily: e.target.value
        })

    }

    setChecked(e, index, img) {
        let imgs = this.state.imgs
        imgs[index].mode = !Boolean(imgs[index].mode)
        this.setState({
            imgs: imgs
        })
    }

    showBadgeInfo(index) {
        console.log(this.state.imgs[index]);
    }


    render() {

        if (this.state.mode === 1) {
            return (
                <div className="email-funtion-box" >
                    <div className="email-funtion-title"><p>Select your Badges</p></div>
                    <div className="modal-form-badges-selector">

                        {
                            this.state.imgs.map((item, index) => {
                                return (
                                    <div className="badges-select-block">
                                        <div className="badge-display"><img src={this.state.imgs[index].img} /></div>

                                        {/*<BadgeObject badge={this.state.imgs[index]} >*/}
                                        <div className="check-box-div">
                                            <input type="checkbox" value={item.mode} onChange={(e) => this.setChecked(e, index, item.img)} checked={item.mode} />

                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <button className="button-style-1" onClick={this.NextClick}>Next</button>
                </div >
            )
        } else if (this.state.mode === 2) {
            return (
                <div className="email-funtion-box">
                    <div className="email-funtion-title"><p>Enter your name</p></div>
                    <div>

                        <div>
                            <input className="uk-input" placeholder="Enter your name" value={this.state.uname} onChange={this.getMsgClick} />
                        </div>
                        <div>
                            <input className="uk-input" placeholder="Enter personal information" value={this.state.personalInfo} onChange={this.getMsgClick2} />
                        </div>

                        <div>
                            <input className="uk-input" placeholder="Enter your phone number" value={this.state.phone} onChange={this.getMsgClick3} />
                        </div>

                        <div>
                            <input className="uk-input" placeholder="Enter your email" value={this.state.email} onChange={this.getMsgClick4} />
                        </div>

                        <div>
                            <input className="uk-input" placeholder="Enter your address" value={this.state.address} onChange={this.getMsgClick5} />
                        </div>

                    </div>

                    <div className="email-funtion-title"><p>select your font</p></div>
                    <div className="uk-margin font-box">
                        <div uk-form-custom="target: > * > span:first-child">
                            <select onChange={this.updateFontChange}>
                                <option></option>
                                <option value={this.state.fontSelected.text1}>{this.state.fontSelected.text1}</option>
                                <option value={this.state.fontSelected.text2}>{this.state.fontSelected.text2}</option>
                                <option value={this.state.fontSelected.text3}>{this.state.fontSelected.text3}</option>
                                <option value={this.state.fontSelected.text4}>{this.state.fontSelected.text4}</option>
                                <option value={this.state.fontSelected.text5}>{this.state.fontSelected.text5}</option>
                                <option value={this.state.fontSelected.text6}>{this.state.fontSelected.text6}</option>
                                <option value={this.state.fontSelected.text7}>{this.state.fontSelected.text7}</option>
                            </select>

                        </div>
                        {/* <div className="uk-width-1-2@m" id="font">{this.state.uname}</div> */}
                    </div>
                    <div className="img-box-btn">
                        <button className="button-style" onClick={this.BackClick}>Back</button>
                        <button className="button-style" onClick={this.NextClick}>Next</button>
                    </div>
                </div>
            )
        } else if (this.state.mode === 3) {
            return (
                <div className="email-funtion-box">
                    <div className="email-funtion-title"><p>Preview</p></div>
                    <div className='p-box' id="aimBlock">
                        <div>
                            <canvas className="p-box-canvas" id="p-img"></canvas>
                        </div>
                    </div>
                    <div className="img-box-btn-2">
                        <button className="button-style" onClick={this.downLoad}>Save</button>
                        <button className="button-style-1" onClick={this.BackClick}>Back</button>
                    </div>
                </div>
            )
        }
    }
}

export default Card
