import React, {useRef, useEffect, useCallback} from 'react';
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';


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


export const Kudos_Modal = ({ showModal, setShowModal}) => {
   const modalRef = useRef()
   
   const animation = useSpring({
       config: {
           duration: 250
       },
       opacity: showModal ? 1 : 0,
       transform: showModal ? `translateY(0%)` : `translateY(-100%)`
   });
    
   const closeModal = e => {
       if(modalRef.current === e.target) {
           setShowModal(false);
       }
   }

   const keyPress = useCallback(e => {
       if(e.key === 'Escape' && showModal){
           setShowModal(false);
       }
   }, [setShowModal, showModal]
   );

   useEffect(() => {
       document.addEventListener('keydown', keyPress);
       return () => document.removeEventListener('keydown', keyPress);
   },
   [keyPress]
   );
    
    return (
  <> 
  {showModal ?(
    <Background ref={modalRef} onClick={closeModal}>
        <animated.div style={animation}>
        <ModalWrapper showModal={showModal}>
           <ModalContent>
           <h3>Give Kudos</h3>
                        <p>
                            Who are you sending Kudos to?
                            <br/>
                            <input type="text" name="name" />    
                        </p> 
                        <p>
                            How Many Kudos?
                          <br/>
                            <input type="number" name="amountToSend" />
                        </p>
                        <p>
                            Why are you sending them Kudos?
                            <br/>
                            <input type="text" name="name" />    
                        </p> 
                        
                        <input type="submit" />
           </ModalContent>
           <CloseModalButton aria-label='Close modal' onClick={() => setShowModal
           (prev => !prev)} />
        </ModalWrapper> 
        </animated.div>
    </Background>
  ) : null}
  </>
    ) 
};




