import React, { useState, useRef, useEffect, useCallback, useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Card from './Card';
import "./EmailModal.css";
import BadgerContext from '../../../context/badger/BadgerContext'
import logo from '../../../Assets/Team_Badgers_Logo.png'

import b5 from '../../../Assets/5yrFull.png'
import b10 from '../../../Assets/10yrFull.png'
import b15 from '../../../Assets/15yrFull.png'
import b20 from '../../../Assets/20yrFull.png'
import b25 from '../../../Assets/25yrFull.png'
import b30 from '../../../Assets/30yrFull.png'
import b35 from '../../../Assets/35yrFull.png'
import b40 from '../../../Assets/40yr.png'



const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0,0,0,0.2);
  background: #fff;
  color: #000;
  display: grid;
  z-index: 10;
  border-radius: 10px;
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
  color: #141414;

  p {
      margin-bottom: 1rem;
  }

button {
    padding: 10px 24px;
    background: #141414;
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


export const EmailModal = ({ showEmailModal, setShowEmailModal }) => {

  const context = useContext(BadgerContext)

  var image = logo;

  const badgeArray = [];

  function getBadgeImage(badgeName) {
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



  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showEmailModal ? 1 : 0,
    transform: showEmailModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowEmailModal(false);
    }
  }

  const keyPress = useCallback(e => {
    if (e.key === 'Escape' && showEmailModal) {
      setShowEmailModal(false);
    }
  }, [setShowEmailModal, showEmailModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  },
    [keyPress]
  );

  const showImgInfo = () => {
    console.log(context);
  }

  var card;

  const populateCard = () => {
    if (context.isBadgesGet) {
      setImageArray();
      card = <Card arr={badgeArray} />;
      //console.log("I am here", badgeArray);
    }
  }

  const display = () => {

    if (showEmailModal) {

      return (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="emailModal-wrapper" showEmailModal={showEmailModal}>
              <ModalContent>
                {card}
              </ModalContent>
              <CloseModalButton aria-label='Close modal' onClick={() => setShowEmailModal
                (prev => !prev)} />
            </div>
          </animated.div>
        </Background>
      )
    }
    else { return null; }
  }

  return (
    <>
      {populateCard()}
      {display()}
    </>
  )
}
