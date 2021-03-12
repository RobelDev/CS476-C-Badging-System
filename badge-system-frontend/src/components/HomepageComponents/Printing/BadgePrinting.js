import React, { useContext, useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import "./BadgePrinting.css";
import BadgerContext from '../../../context/badger/BadgerContext';


import b5 from '../../../Assets/5yrFull.png';
import b10 from '../../../Assets/10yrFull.png';
import b15 from '../../../Assets/15yrFull.png';
import b20 from '../../../Assets/20yrFull.png';
import b25 from '../../../Assets/25yrFull.png';
import b30 from '../../../Assets/30yrFull.png';
import b35 from '../../../Assets/35yrFull.png';
import b40 from '../../../Assets/40yr.png';
import fiveYearsExperience from './img/fiveYearsExperience.pdf'
import tenYearsExperience from './img/tenYearsExperience.pdf';
import fifteenYearsExperience from './img/fifteenYearsExperience.pdf';
import twentyYearsExperience from './img/twentyYearsExperience.pdf';
import towentfiveYearsExperience from './img/towentfiveYearsExperience.pdf';
import thrtiYearsExperience from './img/thrtiYearsExperience.pdf';
import thrtifiveYearsExperience from './img/thrtifiveYearsExperience.pdf';
import fourtyYearsExperience from './img/fourtyYearsExperience.pdf';


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
    
    const context = useContext(BadgerContext);

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
                        {/*<Badges />*/}
                        <div class="modal-wrapper" showBadgePrintingModal={showBadgePrintingModal}>
                            
                            <div class="title-div">
                                <p>Badges</p>
                                <CloseModalButton class="close-modal-button"
                                    aria-label='Close modal'
                                    onClick={() => setShowBadgePrintingModal(prev => !prev)}
                                    ><i class="fas fa-times" />
                                </CloseModalButton>
                            </div>

                            <div class="modal-content">

                                <form class="send-badge-form" onSubmit="">

                                    

                                    <div class="modal-form-print">

                                        
                                        <label for="badge1">
                                            <a href={b5} target="_blank" rel="noreferrer">
                                                <img src={b5} />
                                            </a>
                                        </label>
                                        <label for="badge1">
                                            <a href={tenYearsExperience} target="_blank" rel="noreferrer">
                                                <img src={b10} />
                                            </a>
                                        </label><label for="badge1">
                                            <a href={fifteenYearsExperience} target="_blank" rel="noreferrer">
                                                <img src={b15} />
                                            </a>
                                        </label>
                                        <label for="badge1">
                                            <a href={twentyYearsExperience} target="_blank" rel="noreferrer">
                                                <img src={b20} />
                                            </a>
                                        </label>
                                        <label for="badge1">
                                            <a href={towentfiveYearsExperience} target="_blank" rel="noreferrer">
                                                <img src={b25} />
                                            </a>
                                        </label><label for="badge1">
                                            <a href={thrtiYearsExperience} target="_blank" rel="noreferrer">
                                                <img src={b30} />
                                            </a>
                                        </label>
                                        <label for="badge1">
                                            <a href={thrtifiveYearsExperience} target="_blank" rel="noreferrer">
                                                <img src={b35} />
                                            </a>
                                        </label>
                                        <label for="badge1">
                                            <a href={fourtyYearsExperience} target="_blank" rel="noreferrer">
                                                <img src={b40} />
                                            </a>
                                        </label>
                                        <label for="badge1">
                                            <a href={fiveYearsExperience} target="_blank" rel="noreferrer">
                                                <img src={b5} />
                                            </a>
                                        </label>
                                        <label for="badge1">
                                            <a href={tenYearsExperience} target="_blank" rel="noreferrer">
                                                <img src={b10} />
                                            </a>
                                        </label>
                                        <label for="badge1">
                                            <a href={fifteenYearsExperience} target="_blank" rel="noreferrer">
                                                <img src={b15} />
                                            </a>
                                        </label><label for="badge1">
                                            <a href={twentyYearsExperience} target="_blank" rel="noreferrer">
                                                <img src={b20} />
                                            </a>
                                        </label>
                                        <label for="badge1">
                                            <a href={towentfiveYearsExperience} target="_blank" rel="noreferrer">
                                                <img src={b25} />
                                            </a>
                                        </label>
                                        <label for="badge1">
                                            <a href={thrtiYearsExperience} target="_blank" rel="noreferrer">
                                                <img src={b30} />
                                                
                                            </a>
                                            
                                        </label>
                                        <label for="badge1">
                                            <a href={thrtifiveYearsExperience} target="_blank" rel="noreferrer">
                                                <img src={b35} />
                                            </a>
                                        </label>
                                        <label for="badge1">
                                            <a href={fourtyYearsExperience} target="_blank" rel="noreferrer">
                                                <img src={b40} />
                                            </a>
                                        </label>
                                        


                                            
                                    </div>

                                </form>

                            </div>

                        </div>                              
                    </animated.div>
                </Background>
            ) : null}       
        </>
    )
}
export default BadgePrinting;