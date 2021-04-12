import React from 'react';
import Pdf from "react-to-pdf";
import jsPDF from 'jspdf';
import {Button} from 'reactstrap';

import logo from '../../../Assets/Team_Badgers_Logo.png'
import b5 from '../../../Assets/5yrFull.png'
import b10 from '../../../Assets/10yrFull.png'
import b15 from '../../../Assets/15yrFull.png'
import b20 from '../../../Assets/20yrFull.png'
import b25 from '../../../Assets/25yrFull.png'
import b30 from '../../../Assets/30yrFull.png'
import b35 from '../../../Assets/35yrFull.png'
import b40 from '../../../Assets/40yr.png'

const ref = React.createRef();

const PDF = (props) => {

  var image = logo;

    const getBadgeImage = () => {
        const name = props.badgeData.badgeName;

        switch (name) {
          case "5yr":
            image = b5;
            break;
          case "10yr":
            image = b10;
            break;
          case "15yr":
            image = b15;
            break;
          case "20yr":
            image = b20;
            break;
          case "25yr":
              image = b25;
              break;
          case "30yr":
              image = b30;
              break;
          case "35yr":
              image = b35;
              break;
          case "40yr":
              image = b40;
              break;

        }

        return image;

    }

  const pdfGenerate = () => {
    var doc = new jsPDF('landscpace', 'px', 'a4', 'false');
    doc.addImage( image, 'PNG', 65, 20, 500, 400);
    doc.save('a.pdf');
  }

  return (
    <div>
      <div className="Post" ref={ref}>
        <h1>{props.title}</h1>
        <img src={props.img} alt={props.title} />
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
      <div>
          <Button onClick={pdfGenerate}>Download</Button>
      </div>
    </div>
  );
}

export default PDF;

/**
 import React from 'react';
import Pdf from "react-to-pdf";
import jsPDF from 'jspdf';
import {Button} from 'reactstrap';

const ref = React.createRef();

const PDF = (props) => {
  const pdfGenerate = () => {
    var doc = new jsPDF('landscpace', 'px', 'a4', 'false');
    doc.addImage( props.imgs, 'PNG', 65, 20, 500, 400);
    doc.save('a.pdf');
  }
  return (
    <div>
      <div className="Post" ref={ref}>
        <h1>{props.title}</h1>
        <img src={props.imgs} alt={props.title} />
      </div>
      <div>
          <Button onClick={pdfGenerate}>Download</Button>
      </div>
    </div>
  );
}

export default PDF;
 */