import React, { useContext } from 'react';
import './Card.css';
import PDF from './PDF';
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
            title: '',
            imgs: this.props.arr,
            postSubmitted: false
        }
        this.showImgInfo = this.showImgInfo.bind(this);
        this.getMsgClick = this.getMsgClick.bind(this);
        this.getMsgClick2 = this.getMsgClick2.bind(this);
        this.getMsgClick3 = this.getMsgClick3.bind(this);
        this.getMsgClick4 = this.getMsgClick4.bind(this);
        this.getMsgClick5 = this.getMsgClick5.bind(this);
        this.getChecked1 = this.getChecked1.bind(this);
        this.getChecked2 = this.getChecked2.bind(this);
        this.getChecked3 = this.getChecked3.bind(this);
        this.getChecked4 = this.getChecked4.bind(this);
        this.initCanvas = this.initCanvas.bind(this);
        this.downLoad = this.downLoad.bind(this);
        this.closeClick = this.closeClick.bind(this);
        this.setChecked = this.setChecked.bind(this);
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

    

    setChecked(e, index, img) {
        let imgs = this.state.imgs
        imgs[index].mode = !Boolean(imgs[index].mode)
        this.setState({
            imgs: imgs
        })
    }

    

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.title){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }


    render() {
        return (
            <div className="email-funtion-box" >
                <div>
                    <div>
                        <input onChange={this.onChange('title')} name="title" type="text" placeholder="Post Title" className="form-control" />
                    </div>
                </div>
                <div className="email-funtion-title"><p>Select your Badges</p></div>
                <div className="modal-form-badges-selector">

                    {   !this.state.postSubmitted ? 
                        (
                            
                        this.state.imgs.map(
                            (item, index) => {
                                return (
                                    <div className="badges-select-block">
                                        <div className="badge-display">
                                            <span title={this.state.imgs[index].badgeName}>
                                                <img src={this.state.imgs[index].img} />
                                            </span>
                                            
                                        </div>

                                        {/*<BadgeObject badge={this.state.imgs[index]} >*/}
                                        <div className="check-box-div">
                                            {/*<input type="checkbox" value={item.mode} onChange={(e) => this.setChecked(e, index, item.img)} checked={item.mode} />*/}
                                            <input type="checkbox" value={item.mode} onChange={(e) => this.setChecked(e, index, item.img)} checked={item.mode} />
                                        </div>

                                        <div className="form-group">
                                            <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Submit</button>
                                        </div>
                                    </div>
                                )
                            }
                        ) ) : (
                            <PDF title={this.state.title} image={this.state.img} />
                        )
                    }

                </div>
            </div >
        )
        
    }
}

export default Card
