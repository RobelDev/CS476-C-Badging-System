import React, { useRef, useEffect, useCallback, useState} from 'react';
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import axios from 'axios';

import "./Kudos_Modal.css";
import { BadgerContext } from '../../../context/badger/BadgerContext';




const Background = styled.div`
  width: 120%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalWrapper = styled.div`
  width: 45vw;
  height: 60vh;
  box-shadow: 0 5px 16px rgba(0,0,0,0.2);
  background: #1d1d1d;
  color: #fff;
  display: grid;
  z-index: 10;
  border-radius: 1vw;
`

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2;
  color: #fff;

  p {
      margin-bottom: 2vh;
  }

button {
    padding: 10px 24px;
    background: black;
    color: #fff;
    border: none;
}
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 1;
`;


export const Kudos_Modal = ({ showModal, setShowModal}) => {

   const xxx = useContext(BadgerContext);

   const modalRef = useRef()
   
   const animation = useSpring({
       config: {
           duration: 150
       },
       opacity: showModal ? 1 : 0,
       transform: showModal ? `translateY(0%)` : `translateY(0%)`
   });
    
   const closeModal = e => {
       if(modalRef.current === e.target) {
           setShowModal(false);
       }
   }

    const keyPress = useCallback(
        e => {
            if(e.key === 'Escape' && showModal){
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
   );

    useEffect(
        () => {
       document.addEventListener('keydown', keyPress);
       return () => document.removeEventListener('keydown', keyPress);
   },
   [keyPress]
   );


   const sendKudos =  async ({email, resaon, kudos}) =>  {

    const receiver = {email,resaon,kudos};

    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

    try {
        const res = await axios.post("http://localhost:8000/api/auth/kudos",receiver,config);

       /* dispatch({
            type: CHANGE_KUDOS 
        })*/
        
    } catch (error) {
        console.log(error);
        
    }

}


   const [data, setData] = useState({
    email: "",
    reason: "",
    kudos: Number,
  });

  const { email, reason, kudos } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Send" + kudos +"kudos to" + email + "  because " + reason)
    sendKudos({ email, reason, kudos });
};
    
    return (
  <> 
  {showModal ?(
    <Background ref={modalRef}>
        <animated.div style={animation}>
                       <div class="kudos-modal-wrapper" showModal={showModal}>

                         <div class="kudos-title-div">
                                <p>Send Kudos</p>

                                <button class="kudos-close-modal-button"
                                    onClick={() => setShowModal(prev => !prev)}
                                >
                                    <i class="fas fa-times" />
                                </button>
                         </div>

                            <div class="kudos-modal-content">


                            <form class="send-kudos-form" onSubmit={onSubmit}>

                            <div class="kudos-modal-form">

                                <p>Who would you like to send kudos?</p>
                                    <div class="recipient-input-div">

                                        <input class="kudos-recipient-input" type="text"
                                            name="recipient"
                                            placeholder="Recipient"
                                            onChange={onChange}
                                            required />
                                        </div>

                                <p>What is the reason for sending kudos?</p>
                                    <div class="kudos-message-input-div">
                                        <textarea class="message-input" type="text"
                                            name="message"
                                            placeholder="Message"
                                            onChange={onChange}
                                            minLength="8"
                                            required />
                                    </div>



                                <p>Enter the amount of Kudos</p>
                                    <div class="kudos-input-div">
                                        <input class="kudos-amount-input" type="amount"
                                            name="kudos-to-send"
                                            placeholder="0"
                                            onChange={onChange}
                                            required></input>
                                    </div>

                            </div>
                            <button class="send-kudos-button" type="submit">Send Kudos</button>
                        </form>

                          </div>
                                                                                                        
                        </div> 
        </animated.div>
    </Background>
  ) : null}
  </>
    ) 
};




