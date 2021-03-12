import React, { useContext, useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import axios from 'axios';

import "./Kudos_Modal.css";
import BadgerContext from '../../../../context/badger/BadgerContext';

const Background = styled.div`
  width: 120%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Kudos_Modal = ({ showModal, setShowModal }) => {

  const context = useContext(BadgerContext)

  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 150
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(0%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  }

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
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

  const { kudosInfo, saveKudosInfo, sendKudos } = useContext(BadgerContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("here it is", typeof (kudosInfo.kudos));
    sendKudos(kudosInfo, context.token);
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="kudos-modal-wrapper" showModal={showModal}>

              <div className="kudos-title-div">
                <p>Send Kudos</p>

                <button className="kudos-close-modal-button"
                  onClick={() => setShowModal(prev => !prev)}
                >
                  <i className="fas fa-times" />
                </button>
              </div>

              <div className="kudos-modal-content">


                <form className="send-kudos-form" onSubmit={onSubmit}>

                  <div className="kudos-modal-form">

                    <p>Who would you like to send kudos?</p>
                    <div className="recipient-input-div">

                      <input className="kudos-recipient-input" type="text"
                        name="email"
                        placeholder="Recipient"
                        onChange={saveKudosInfo}
                        required />
                    </div>

                    <p>What is the reason for sending kudos?</p>
                    <div className="kudos-message-input-div">
                      <textarea class="message-input" type="text"
                        name="reason"
                        placeholder="Message"
                        onChange={saveKudosInfo}
                        min="8"
                        required />
                    </div>



                    <p>Enter the amount of Kudos</p>
                    <div className="kudos-input-div">
                      <input className="kudos-amount-input" type="amount"
                        name="kudos"
                        placeholder="0"
                        onChange={saveKudosInfo}
                        required></input>
                    </div>

                  </div>
                  <button className="send-kudos-button" type="submit">Send Kudos</button>
                </form>

              </div>

            </div>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
};




