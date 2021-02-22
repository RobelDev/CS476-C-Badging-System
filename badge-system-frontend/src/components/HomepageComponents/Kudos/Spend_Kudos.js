import React, {useRef, useEffect, useCallback} from 'react';
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import "./Spend_Kudos.css";
import logo from '../../../Assets/Team_Badgers_Logo.png'
import { GiveKudos } from './GiveKudos';


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


export const SpendKudos = ({ showSpendKudosModal, setShowSpendKudosModal}) => {
   const modalRef = useRef()
   
   const animation = useSpring({
       config: {
           duration: 150
       },
       opacity: showSpendKudosModal ? 1 : 0,
       transform: showSpendKudosModal ? `translateY(0%)` : `translateY(0%)`
   });
    
   const closeModal = e => {
       if(modalRef.current === e.target) {
           setShowSpendKudosModal(false);
       }
   }

    const keyPress = useCallback(
        e => {
            if(e.key === 'Escape' && showSpendKudosModal){
                setShowSpendKudosModal(false);
            }
        },
        [setShowSpendKudosModal, showSpendKudosModal]
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
  {showSpendKudosModal ?(
    <Background ref={modalRef}>
        <animated.div style={animation}>
                       <div class="kudos-modal-wrapper" showSpendKudosModal={showSpendKudosModal}>

                         <div class="kudos-title-div">
                                <p>Use Kudos</p>

                                <button class="kudos-close-modal-button"
                                    onClick={() => setShowSpendKudosModal(prev => !prev)}
                                >
                                    <i class="fas fa-times" />
                                </button>
                         </div>

                            <div class="kudos-modal-content">


                            <form class="send-kudos-form" onSubmit="">

                            <div class="kudos-modal-form">

                                <p>What would you like to buy?</p>
                                   
                                    <div class="kudos-message-input-div">
                                        <textarea class="message-input" type="text"
                                            name="message"
                                            placeholder="goods"
                                            onChange=""
                                            minLength="8"
                                            required />
                                    </div>

                            </div>
                            <button class="send-kudos-button" type="submit">Confirm</button>
                        </form>

                          </div>
                                                                                                        
                        </div> 
        </animated.div>
    </Background>
  ) : null}
  </>
    ) 
};




