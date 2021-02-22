import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import "./BadgePrinting.css";

import img1 from './img/1.jpg';
import img2 from './img/2.jpeg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import timg from './img/timg.jpeg';

import img1PDF from './img/img1.pdf';
import img2PDF from './img/img2.pdf';
import img4PDF from './img/img4.pdf';
import img5PDF from './img/img5.pdf';
import timgPDF from './img/timg.pdf';
import javaBadge from './img/javaBadge.pdf';
import CplucBadge from './img/CplusBadge.pdf';
import pythonBadge from './img/pythonBadge.pdf';


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

    return (
        <>
            { showBadgePrintingModal ? (
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
                                {/*<div class="info-div">
                                    <p>Hi</p>
                                </div>*/}
                            {/*<div class="image-container">*/}
                                <div class="modal-content">
                                    <form class="send-badge-form" onSubmit="">
                                        <div class="print-modal-form">

                                            <a href={javaBadge} target="_blank" rel="noreferrer">
                                                <label>
                                                    <img src={img1} alt="img1" width="200px" height="200px"/>
                                                    <p>JAVA Badge</p>
                                                </label>
                                            </a>
                                            <a href={CplucBadge} target="_blank" rel="noreferrer">
                                                <label>
                                                    <img src={img2} alt="img2" width="200px" height="200px"/>
                                                    <p>C++ Badge</p>
                                                </label>
                                            </a>

                                            <a href={pythonBadge} target="_blank" rel="noreferrer">
                                                <label>
                                                    <img src={img4} alt="img4" width="200px" height="200px"/>
                                                    <p>PYTHON Badge</p>
                                                </label>
                                            </a>
                                            <a href={img5PDF} target="_blank" rel="noreferrer">
                                                <label>
                                                    <img src={img5} alt="img5" width="200px" height="200px"/>
                                                </label>
                                            </a>
                                        </div>
                                    </form>
                                    
                                    
                                </div>
                            {/*</div>*/}    
                            
                            
                        </div>
                        
                    </animated.div>
                </Background>
            ) : null}        
        </>
    )
}

{/*
class BadgePrinting extends React.Component {

    render() {
        return(
            <div >
                <h3>Print a Badge</h3>
                <br />
                <a href={img1PDF} target="_blank" rel="noreferrer">
                    <img src={img1} alt="img1" width="200px" height="200px"/>
                </a>
                <a href={img2PDF} target="_blank" rel="noreferrer">
                    <img src={img2} alt="img2" width="200px" height="200px"/>
                </a>
                <a href={img4PDF} target="_blank" rel="noreferrer">
                    <img src={img4} alt="img4" width="200px" height="200px"/>
                </a>
                <a href={img5PDF} target="_blank" rel="noreferrer">
                    <img src={img5} alt="img5" width="200px" height="200px"/>
                </a>
                <a href={timgPDF} target="_blank" rel="noreferrer">
                    <img src={timg} alt="timg" width="200px" height="200px"/>
                </a>
            </div>
        );
    }
}

export default BadgePrinting;*/}