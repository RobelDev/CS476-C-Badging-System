import React, { Component } from 'react';
import PDF from './PDF';
import jsPDF from 'jspdf';
import {Button} from 'reactstrap';

import b5yr from './img/b5yr.png'
class Printer1 extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            imgs: this.props.arr,
            postSubmitted: false
        }
        /*this.showImgInfo = this.showImgInfo.bind(this);
        this.getChecked1 = this.getChecked1.bind(this);
        this.getChecked2 = this.getChecked2.bind(this);
        this.getChecked3 = this.getChecked3.bind(this);
        this.getChecked4 = this.getChecked4.bind(this);*/
    }

    pdfGenerate = () => {
        var doc = new jsPDF('landscpace', 'px', 'a4', 'false');
        doc.addImage(b5yr, 'PNG', 65, 20, 500, 400);
        doc.save('a.pdf');
    }

    render()
    {
        return
        (
            <div>
                <Button onClick={this.pdfGenerate}>Download</Button>
            </div>
        )
    }


}

export default Printer1