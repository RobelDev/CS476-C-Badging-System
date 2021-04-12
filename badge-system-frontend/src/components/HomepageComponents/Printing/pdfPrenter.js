import jsPDF from 'jspdf';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import b5 from '../../../Assets/5yrFull.png'
import b10 from '../../../Assets/10yrFull.png'
import b15 from '../../../Assets/15yrFull.png'
import b20 from '../../../Assets/20yrFull.png'
import b25 from '../../../Assets/25yrFull.png'
import b30 from '../../../Assets/30yrFull.png'
import b35 from '../../../Assets/35yrFull.png'
import b40 from '../../../Assets/40yr.png'
class PdfPrenter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 1,
            imgs: this.props.arr,
            image: ""
        }
        this.setChecked = this.setChecked.bind(this);
    }


    setChecked(e, index, img) {
        let imgs = this.state.imgs
        imgs[index].mode = !Boolean(imgs[index].mode)
        this.setState({
            imgs: imgs
        })
    }
    pdfGenerate = (e, index, img) => {
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');

        doc.addImage(b10, 'PNG', 65, 20, 500, 400);
        doc.save('a.pdf');
    }
    render() {
        return (
            <div className="email-funtion-box" >
                <div className="email-funtion-title"><p>Select your Badges</p></div>
                <div className="modal-form-badges-selector">

                    {
                        this.state.imgs.map((item, index) => {
                            return (
                                <div>
                                    <div className="badges-select-block">
                                        <img src={this.state.imgs[index].img} />

                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <Button value={item.mode} onClick={this.pdfGenerate}>download</Button>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>

            </div >
        )

    }
}

export default PdfPrenter;

/**return (
            <div style={{textAlign: 'center'}}>
                <Button onClick={this.pdfGenerate}>download</Button>
            </div>
        ) */