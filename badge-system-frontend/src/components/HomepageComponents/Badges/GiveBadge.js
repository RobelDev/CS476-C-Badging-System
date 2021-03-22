import React, { useRef, useEffect, useCallback, useContext, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import "./GiveBadge.css";
import "./2.jpg";
import logo from '../../../Assets/Team_Badgers_Logo.png'
import BadgerContext from "../../../context/badger/BadgerContext"
import b5 from '../../../Assets/5yrFull.png'
import b10 from '../../../Assets/10yrFull.png'
import b15 from '../../../Assets/15yrFull.png'
import b20 from '../../../Assets/20yrFull.png'
import b25 from '../../../Assets/25yrFull.png'
import b30 from '../../../Assets/30yrFull.png'
import b35 from '../../../Assets/35yrFull.png'
import b40 from '../../../Assets/40yr.png'
// import User from '../../../../../model/User';

const Background = styled.div`
  width: 120%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const GiveBadge = ({ showGiveBadgeModal, setShowGiveBadgeModal }) => {

    const GiveBadgeModalRef = useRef();

    const context = useContext(BadgerContext);

    const animation = useSpring({
        config: {
            duration: 150
        },
        opacity: showGiveBadgeModal ? 1 : 0,
        transform: showGiveBadgeModal ? `translatrY(0%)` : `translateY(0%)`
    });

    const closeModal = e => {
        if (GiveBadgeModalRef.current === e.target) {
            setShowGiveBadgeModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showGiveBadgeModal) {
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

    // const getBadgeName = () => {
    //     var name = document.querySelector('input[name="badgeButton"]:checked').value;

        //console.log(name)

    //     return name
    // }

    const [data, setData] = useState({
        receiver: "",
        reason: "",
        badgeName: "",

    });

    const { receiver, reason, badgeName } = data;

    useEffect(() => {
        context.creatBadge(context.badgesInfo, context.token);
    }, [context.badgesInfo.badgeName]);


    const onChange = async (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        // data.badgeName = getBadgeName();
        e.preventDefault();
        console.log("kkkkkkkkkkk", receiver)
        console.log("kkkkkkkkkkk", reason)
        console.log("kkkkkkkkkkk", badgeName)
        context.saveBadgesInfo(receiver, reason, badgeName);
    }

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

                                <form class="send-badge-form" name="sendBadgeForm" onSubmit={onSubmit}>

                                    <div class="modal-form-left">

                                        <p>Who would you like to send a badge to?</p>
                                        <div class="recipient-input-div">

                                            <input class="recipient-input" type="text"
                                                name="receiver"
                                                placeholder="Recipient"
                                                onChange={onChange}
                                                required />
                                        </div>


                                        <p>What is the reason for sending this badge?</p>
                                        <div class="message-input-div">
                                            <textarea class="message-input" type="text"
                                                name="reason"
                                                placeholder="Message"

                                                minLength="8"
                                                onChange={onChange}
                                                required />
                                        </div>
                                    </div>

                                    <div class="modal-form-right">

                                        {/*
                                            Below is where the list of badges will go, 
                                            for now there are just radio buttons and labels
                                        */}
                                        <input type="radio" id="5yr" name="badgeButton" value="5yr" />
                                        <label for="5yr"><img src={b5} /></label>

                                        <input type="radio" id="10yr" name="badgeButton" value="10yr" />
                                        <label for="10yr"><img src={b10} /></label>

                                        <input type="radio" id="15yr" name="badgeButton" value="15yr" />
                                        <label for="15yr"><img src={b15} /></label>

                                        <input type="radio" id="20yr" name="badgeButton" value="20yr" />
                                        <label for="20yr"><img src={b20} /></label>

                                        <input type="radio" id="25yr" name="badgeButton" value="25yr" />
                                        <label for="25yr"><img src={b25} /></label>

                                        <input type="radio" id="30yr" name="badgeButton" value="30yr" />
                                        <label for="30yr"><img src={b30} /></label>

                                        <input type="radio" id="35yr" name="badgeButton" value="35yr" />
                                        <label for="35yr"><img src={b35} /></label>

                                        <input type="radio" id="40yr" name="badgeButton" value="40yr" />
                                        <label for="40yr"><img src={b40} /></label>

                                    </div>

                                    <button class="send-badge-button" type="submit" onClick={onsubmit}>Send Badge</button>

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