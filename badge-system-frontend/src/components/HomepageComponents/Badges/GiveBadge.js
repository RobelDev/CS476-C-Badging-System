import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import "./GiveBadge.css";
import "./2.jpg";
import logo from '../../../Assets/Team_Badgers_Logo.png'

const Background = styled.div`
  width: 120%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImg = styled.img`
  width: 150px;
  height: 100px;
  margin-left: 10%; /* 15% from the top and centered */
  border-radius: 5px 5px 5px 5px;
  background: #000;
  display: flex;
  left: 10px;
`;

const ModalImgCont = styled.div`
    background-color: #fefefe;
    padding: 10px;
    border: 1px solid red;
    margin: 0px 0px 800px 5px;
    width: 90%; /* Could be more or less, depending on screen size */
    height: 350px;
    overflow: auto;
    button {
        display: block;
        width: 100%;
        border: none;
        background-color: #4CAF50;
        padding: 14px 28px;
        font-size: 16px;
        cursor: pointer;
        text-align: center;
    } 
`;


export const GiveBadge = ({ showGiveBadgeModal, setShowGiveBadgeModal }) => {
    
    const GiveBadgeModalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showGiveBadgeModal ? 1 : 0,
        transform: showGiveBadgeModal ? `translatrY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if (GiveBadgeModalRef.current === e.target) {
            setShowGiveBadgeModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escap' && showGiveBadgeModal) {
                setShowGiveBadgeModal(false);
                console.log('I pressed');
            }
        },
        [setShowGiveBadgeModal, showGiveBadgeModal]
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
            {showGiveBadgeModal ? (
                <Background onClick={closeModal} ref={GiveBadgeModalRef}>
                    <animated.div style={animation}>

                        <div class="modal-wrapper" showGiveBadgeModal={showGiveBadgeModal}>

                            <div class="title-div">
                                <p>Send a Badge</p>

                                <button class="close-modal-button"
                                    onClick={() => setShowGiveBadgeModal(prev => !prev)}
                                >
                                    <i class="fas fa-times" />
                                </button>
                            </div>

                            <div class="modal-content">

                                <form class="send-badge-form" onSubmit="">

                                    <div class="modal-form-left">

                                        <p>Who would you like to send a badge to?</p>
                                        <div class="recipient-input-div">
                                           
                                            <input class="recipient-input" type="text"
                                                name="recipient"
                                                placeholder="Recipient"
                                                onChange=""
                                                required />
                                        </div>

                                        <p>What is the reason for sending this badge?</p>
                                        <div class="message-input-div">
                                            <textarea class="message-input" type="text"
                                                name="message"
                                                placeholder="Message"
                                                onChange=""
                                                minLength="8"
                                                required />
                                            </div>
                                    </div>

                                    <div class="modal-form-right">

                                        {/*
                                            Below is where the list of badges will go, 
                                            for now there are just radio buttons and labels
                                        */}
                                        <input type="radio" id="badge1" name="badge" value="badge1"/>
                                        <label for="badge1"><img src={logo} /></label>

                                        <input type="radio" id="badge2" name="badge" value="badge2"/>
                                        <label for="badge2"><img src={logo} /></label>

                                        <input type="radio" id="badge3" name="badge" value="badge3"/>
                                        <label for="badge3"><img src={logo} /></label>

                                        <input type="radio" id="badge4" name="badge" value="badge4" />
                                        <label for="badge4"><img src={logo} /></label>

                                        <input type="radio" id="badge5" name="badge" value="badge5" />
                                        <label for="badge5"><img src={logo} /></label>

                                        <input type="radio" id="badge6" name="badge" value="badge6" />
                                        <label for="badge6"><img src={logo} /></label>
                                            
                                    </div>

                                    <button class="send-badge-button" type="submit">Send Badge</button>

                                </form>

                            </div>

                            
                            

                        </div>




                    </animated.div>
                </Background>
            ) : null}
        </>
    )
}






/** import React from "react"
import img1 from '../imgs/1.jpg';
import img2 from '../imgs/2.jpeg';
import img4 from '../imgs/4.jpg';
import img5 from '../imgs/5.jpg';
import timg from '../imgs/timg.jpeg';

import img1PDF from '../imgs/img1.pdf';
import img2PDF from '../imgs/img2.pdf';
import img4PDF from '../imgs/img4.pdf';
import img5PDF from '../imgs/img5.pdf';
import timgPDF from '../imgs/timg.pdf';



import "./GiveBadge.css"

class GiveBadge extends React.Component {
    render() {
        return(
            <div >
                <div >
                    <form>
                        <h3>Give Badge</h3>
                        <label>
                            Who are you sending Badge to?
                            <input type="text" name="name" />    
                        </label> 
                        <br />
                        <div className="row padd-15">
                            <label>
                            Choose a Badge
                            <br />
                            <div className="column">
                            <img src={img1} alt="img1" width="100px" height="100px"/>
                            <input type="checkbox">
                            </input>
                            </div>
                            <div className="column">
                            <img src={img2} alt="img2" width="100px" height="100px"/>
                            <input type="checkbox">
                            </input>
                            </div>
                            <div className="column">
                            <img src={img4} alt="img4" width="100px" height="100px"/>
                            <input type="checkbox">
                            </input>
                            </div>
                            </label>
                        </div>
                        <br />
                        <label>
                            Why are you sending the Badge?
                            <input type="text" name="name" />    
                        </label> 
                        <br />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        );
    }
}



export default GiveBadge;
 */