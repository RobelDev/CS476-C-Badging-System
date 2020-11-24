import React from 'react';
import '../styles/Card.css';
import img1 from '../imgs/1.jpg';
import img2 from '../imgs/2.jpeg';
import img4 from '../imgs/4.jpg';
import img5 from '../imgs/5.jpg';



class Card extends React.Component {
    constructor(props) {
        // get interface
        // let url = "some url"
        // $.ajax({
        //     url:url,
        //     method:"POST",
        //     dataType:"jsonp",
        //     crossDomain:true,
        //     jsonpCallback:"jsonpCallbackFun",
        //     jsonp:"callback",
        //     success:function(e){
        //         this.setState({imgs:JSON.parse(e)})
        //     }
        // })
        super(props)
        this.state = {
            mode: 1,
            uname: "",
            imgs: [
                {
                    mode: false,
                    img: img1,
                },
                {
                    mode: false,
                    img: img2,
                },
                {
                    mode: false,
                    img: img4,
                },
                {
                    mode: false,
                    img: img5,
                }
            ],
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
        this.NextClick = this.NextClick.bind(this);
        this.BackClick = this.BackClick.bind(this);
        this.getMsgClick = this.getMsgClick.bind(this);
        this.getChecked1 = this.getChecked1.bind(this);
        this.getChecked2 = this.getChecked2.bind(this);
        this.getChecked3 = this.getChecked3.bind(this);
        this.getChecked4 = this.getChecked4.bind(this);
        this.updateFontChange = this.updateFontChange.bind(this);
        this.initCanvas = this.initCanvas.bind(this);
        this.downLoad = this.downLoad.bind(this);
        this.closeClick = this.closeClick.bind(this);
        this.setChecked = this.setChecked.bind(this);
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
            for(let i in this.state.imgs){
                if(this.state.imgs[i].mode){
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
            uname: e.target.value
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
        document.querySelector("#font").style.fontFamily = e.target.value
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

    render() {
        if (this.state.mode === 1) {
            return (
                <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m card-box">
                    <h3 className="uk-card-title">Select your Badges</h3>
                    <div className='img-box'>

                        {
                            this.state.imgs.map((item, index) => {
                                return (
                                    <div className="uk-width-1-6@m img-box-column">
                                        <div>
                                            <img src={item.img} alt={index} />
                                        </div>
                                        <div>
                                            <input className="uk-checkbox" type="checkbox" value={item.mode} onChange={(e) => this.setChecked(e, index, item.img)} checked={item.mode} />
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                    <div className="img-box-btn">
                        <div>
                            <button className="uk-button uk-button-danger" onClick={this.NextClick}>Next</button>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.mode === 2) {
            return (
                <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m card-box">
                    <h3 className="uk-card-title">Enter your name</h3>
                    <div>
                        <input className="uk-input" placeholder="Enter your name" value={this.state.uname} onChange={this.getMsgClick} />
                    </div>
                    <h3 className="uk-card-title">Select your font</h3>
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
                            <button className="uk-button uk-button-default select-box" type="button" tabIndex="-1">
                                <span></span>
                                <span uk-icon="icon: chevron-down"></span>
                            </button>
                        </div>
                        <div className="uk-width-1-2@m" id="font">{this.state.uname}</div>
                    </div>
                    <div className="img-box-btn">
                        <div>
                            <button className="uk-button uk-button-primary" onClick={this.BackClick}>Back</button>
                        </div>
                        <div>
                            <button className="uk-button uk-button-danger" onClick={this.NextClick}>Next</button>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.mode === 3) {
            return (
                <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m card-box" id="box">
                    <h3 className="uk-card-title">Preview</h3>
                    <div className='p-box' id="aimBlock">
                        <div>
                            <canvas className="p-box-canvas" id="p-img"></canvas>
                        </div>
                    </div>
                    <div className="img-box-btn">
                        <div>
                            <button className="uk-button uk-button-danger" onClick={this.downLoad}>Save</button>
                        </div>
                        <div>
                            <button className="uk-button uk-button-primary" onClick={this.BackClick}>Back</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Card
