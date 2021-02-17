import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import "./GiveBadge.css";
import "./2.jpg" ;

const Background = styled.div`
  width: 120%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

   
const ModalWrapper = styled.div`

  width: 40vw;
  height: 50vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  z-index: 1;
  border-radius: 10px;
  left: 0;
  top: 0;
  margin-left: -30vw;
  margin-top: -30vh;

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

const ModalContent = styled.div`

    background-color: #fefefe;
    padding: 20px;
    border: 1px solid red;
    margin: 0px 0px 800px 5px;
    width: 90%; /* Could be more or less, depending on screen size */
    p {
        margin-bottom: 1rem;
    }
    h1 {
        font-size: 35px
    }
    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
  }
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

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
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
                        <ModalWrapper showGiveBadgeModal={showGiveBadgeModal}>
                        <h1>Send a Badge</h1>
                        <br />
                            <ModalContent>
                                <label>
                                    <p>Who are you sending a badge to?</p>
                                    <br></br>
                                    <input type="text" name="name" />
                                    <br></br>
                                    <p>Why are you sending this badge?</p>
                                    <br></br>
                                    <input type="text" name="name" />
                                    <br></br>
                                </label>
                                <br />
                                
                                
                                <br></br>
                                
                            </ModalContent>
                            <ModalImgCont>
                            <button class="botao-controle"><i class="fas fa-award"></i>Jave</button>
                            <br />
                            <label>
                                <input type="checkbox">
                                </input> 
                            </label>
                            <br />
                            <button class="botao-controle"><i class="fas fa-award"></i>C++</button>
                            <br />
                            <label>
                                <input type="checkbox">
                                </input> 
                            </label>
                            <br />
                            <button class="botao-controle"><i class="fas fa-award"></i>Python</button>
                            <br />
                            <label>
                                <input type="checkbox">
                                </input> 
                            </label>
                            <br />
                            <button class="botao-controle"><i class="fas fa-award"></i>Matlab</button>
                            <br />
                            <label>
                                <input type="checkbox">
                                </input> 
                            </label>
                            <br />
                            <button class="botao-controle"><i class="fas fa-award"></i>HTML</button>
                            <br />
                            <label>
                                <input type="checkbox">
                                </input> 
                            </label>
                            <br />
                            <button class="botao-controle"><i class="fas fa-award"></i>CSS</button>
                            <br />
                            <label>
                                <input type="checkbox">
                                </input> 
                            </label>
                            <br />
                            <button class="botao-controle"><i class="fas fa-award"></i>React JS</button>
                            <br />
                            <label>
                                <input type="checkbox">
                                </input> 
                            </label>
                            <br />
                            </ModalImgCont>
                            <button>Submit</button>
                            <CloseModalButton
                                aria-label='Close modal'
                                onClick={() => setShowGiveBadgeModal(prev => !prev)}
                            />
                        </ModalWrapper>
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