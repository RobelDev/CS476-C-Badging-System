import React, { useState, useContext, useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import "./Spend_Kudos.css";
import goods1 from "./images/coffee.jpg";
import goods2 from "./images/snickers.jpg";
import goods3 from "./images/tacos.jpg";
import BadgerContext from '../../../../context/badger/BadgerContext'




const Background = styled.div`
  width: 120%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;



export const SpendKudos = ({ showSpendKudosModal, setShowSpendKudosModal }) => {

  const context = useContext(BadgerContext);

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 150,
    },
    opacity: showSpendKudosModal ? 1 : 0,
    transform: showSpendKudosModal ? `translateY(0%)` : `translateY(0%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowSpendKudosModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showSpendKudosModal) {
        setShowSpendKudosModal(false);
      }
    },
    [setShowSpendKudosModal, showSpendKudosModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const [data, setData] = useState({
    amount1: 0,
    amount2: 0,
    amount3: 0
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
  };

  const close = () => {
    return setShowSpendKudosModal((prev) => !prev);
  }

  const resetTotal = () => {
    data.amount1 = 0;
    data.amount2 = 0;
    data.amount3 = 0;
    console.log(data);
  }

  const reset = () => {
    close();
    resetTotal();
  }

  return (
    <>
      {showSpendKudosModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div
              class="spendKudos-modal-wrapper"
              showSpendKudosModal={showSpendKudosModal}
            //{...setIsBought(false)}
            >
              <div class="spendKudos-title-div">
                <p>Use Kudos</p>

                <button
                  class="spendKudos-close-modal-button"
                  onClick={reset}
                >
                  <i class="fas fa-times" />
                </button>
              </div>

              <div class="spendKudos-modal-content">
                <form class="spend-kudos-form" onSubmit={onSubmit}>
                  <div class="spendKudos-modal-form">
                    <p>What would you like to buy?</p>
                    <div class="modal-form-center">
                      {/*
                                            Below is where the list of badges will go, 
                                            for now there are just radio buttons and labels
                                        */}
                      <div class="modal-goods">
                        <div>
                          <img src={goods1} />
                        </div>

                        <div class="goods-info">
                          <p>Coffee </p>
                          <p> price: 1000</p>
                          <div className="goods-amount-input-div">

                            <input className="goods-amount-input" type="number"
                              name="amount1"
                              placeholder="0"
                              min="0"
                              max="99"
                              onChange={onChange}
                              required />
                          </div>
                        </div>
                      </div>

                      <div class="modal-goods">
                        <div>
                          <img src={goods2} />
                        </div>

                        <div class="goods-info">
                          <p>Snicker </p>
                          <p> price: 400 </p>
                          <div className="goods-amount-input-div">

                            <input className="goods-amount-input" type="number"
                              name="amount2"
                              placeholder="0"
                              min="0"
                              max="99"
                              onChange={onChange}
                              required />
                          </div>
                        </div>
                      </div>

                      <div class="modal-goods">
                        <div>
                          <img src={goods3} />
                        </div>

                        <div class="goods-info">
                          <p>Tacos </p>
                          <p> price: 1400</p>
                          <div className="goods-amount-input-div">

                            <input className="goods-amount-input" type="number"
                              name="amount3"
                              placeholder="0"
                              min="0"
                              max="99"
                              onChange={onChange}
                              required />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-kudos-cost">
                      <div style={{ "margin-top": "2vh", "font color": "white" }}> Total (kudos) {Number(data.amount1) * 1000 + Number(data.amount2) * 400 + Number(data.amount3) * 1400} </div>
                      <div> Your Kudos: {context.user.kudosBank}</div>
                    </div>
                  </div>
                  <button class="spend-kudos-button" type="submit">
                    Confirm
                  </button>
                </form>
              </div>
            </div>
          </animated.div>
        </Background>
      ) : null
      }
    </>
  );
};
