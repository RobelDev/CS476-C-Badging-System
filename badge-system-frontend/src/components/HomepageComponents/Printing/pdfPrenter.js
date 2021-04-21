import jsPDF from 'jspdf';
import React, { Component } from 'react';
import styled from 'styled-components';
//import { Button } from 'reactstrap';
import "./pdfPrenter.css"
import logo from '../../../Assets/Team_Badgers_Logo.png';
import b5 from '../../../Assets/5yrFull.png'
import b10 from '../../../Assets/10yrFull.png'
import b15 from '../../../Assets/15yrFull.png'
import b20 from '../../../Assets/20yrFull.png'
import b25 from '../../../Assets/25yrFull.png'
import b30 from '../../../Assets/30yrFull.png'
import b35 from '../../../Assets/35yrFull.png'
import b40 from '../../../Assets/40yr.png'

const Button = styled.button`
  background-color: crimson;
  color: white;
  margin-top: 10%;
  border-radius: 0.3vw;
`;

class PdfPrenter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 1,
            imgs: this.props.arr,
            image: ""
        }
        this.pdfGenerate = this.pdfGenerate.bind(this);
    }



    pdfGenerate = (src) => {
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.addImage(logo, 'PNG', 10, 20, 50, 40);
        doc.setFont("helvetica");
        //doc.setFontType("bold");
        doc.setFontSize(23);
        doc.setTextColor(255,0,0);
        doc.text(100, 100, 'This Badge Was Awarded To You For Your Work In State Farm');
        doc.addPage();
        doc.addImage(src, 'PNG', 65, 20, 500, 400);
        doc.save('badge.pdf');
    }

    render() {
        return (
            <div className="printer-funtion-box" >
                <div className="printer-funtion-title">
                    <p>Select your Badges</p>
                </div>
                <div className="modal-form-badges-selector">
                    {
                        this.state.imgs.map((item, index) => {
                            return (
                                <div>
                                    <div className="image-selection">
                                        <img src={this.state.imgs[index].img} />
                                        <div>
                                        <Button variant="danger" value={item.mode} onClick={(e) => { this.pdfGenerate(this.state.imgs[index].img) }}>download</Button>
                                        </div>                                        
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

