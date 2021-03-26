import React, { useContext, useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Printer from './Printer';
import "./BadgePrinting.css";
import BadgerContext from '../../../context/badger/BadgerContext';
import logo from '../../../Assets/Team_Badgers_Logo.png';
import BadgeObject from "../UserPanelComponents/BadgeObject"

import b5 from '../../../Assets/5yrFull.png';
import b10 from '../../../Assets/10yrFull.png';
import b15 from '../../../Assets/15yrFull.png';
import b20 from '../../../Assets/20yrFull.png';
import b25 from '../../../Assets/25yrFull.png';
import b30 from '../../../Assets/30yrFull.png';
import b35 from '../../../Assets/35yrFull.png';
import b40 from '../../../Assets/40yr.png';

const Background = styled.div`
  width: 120%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseModalButton = styled(MdClose)`
    margin-top: 0.5vh;
    margin-left: 22vw;
    z-index: 10;
    color: white;
    background-color: rgba(0, 0, 0, 0.00);
    border:none;
    width: 2vw;
    height: 4vh;
    i {
        font-size: 1.7vw;
        
    }
    &:hover {
        color: crimson;
    }
`;

export const BadgePrinting = ({ showBadgePrintingModal, setShowBadgePrintingModal }) => {

    const BadgePrintingModalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 150
        },
        opacity: showBadgePrintingModal ? 1 : 0,
        transform: showBadgePrintingModal ? `translatrY(0%)` : `translateY(0%)`
    });

    

    const closeModal = e => {
        if (BadgePrintingModalRef.current === e.target) {
            setShowBadgePrintingModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showBadgePrintingModal) {
                setShowBadgePrintingModal(false);
                console.log('I pressed');
            }
        },
        [setShowBadgePrintingModal, showBadgePrintingModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    var image = logo;
    const context = useContext(BadgerContext);

    var listOfBadges = [];

    const populateUserPanel = () => {
       for (var index = 0; index < context.myBadges.length; index++) {
           listOfBadges[index] = <Printer badgeData={ context.myBadges[index] } />
       }
    }

    const badgeArray = [];

    function getBadgeImage(badgeName, badgeDate) {
        const name = badgeName;

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
    return image

}

  function setImageArray() {
    for (var index = 0; index < context.myBadges.length; index++) {
      badgeArray[index] = { img: getBadgeImage(context.myBadges[index].badgeName), mode: false }
    }
  }

  var badgerImg;

  const badgePrinter = () => {
    if (context.isBadgesGet) {
      setImageArray();
      badgerImg = <Printer arr={badgeArray} />;
    }
  }

    

    const display = () => {

        if (showBadgePrintingModal) {
    
          return (
            <Background onClick={closeModal} ref={BadgePrintingModalRef}>
            <animated.div style={animation}>
                <div class="modal-wrapper" showBadgePrintingModal={showBadgePrintingModal}>
                    <div class="title-div">
                        <p>Print a Badge</p>
                        <CloseModalButton class="close-modal-button"
                            aria-label='Close modal'
                            onClick={() => setShowBadgePrintingModal(prev => !prev)}
                            ><i class="fas fa-times" />
                        </CloseModalButton>
                    </div>
                    {populateUserPanel()}
                { listOfBadges}
                </div>                              
            </animated.div>
        </Background>
          )
        }
    }

    

    return (
        <>
            {badgePrinter()}
            {display()}
        </>
    )
}
export default BadgePrinting;