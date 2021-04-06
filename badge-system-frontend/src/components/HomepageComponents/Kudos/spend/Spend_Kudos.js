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


  const close = () => {
    return setShowSpendKudosModal((prev) => !prev);
  }

  const resetTotal = () => {
    data.amount1 = 0;
    data.amount2 = 0;
    data.amount3 = 0;

    total.amount1 = 0;
    total.amount2 = 0;
    total.amount3 = 0;
  }

  const reset = () => {
    close();
    resetTotal();
  }

  var data = {
    amount1: 10,
    amount2: 0,
    amount3: 0,
  }

  const [total, setTotal] = useState({
    amount1: 0,
    amount2: 0,
    amount3: 0
  });

  const onChange = async (e) => {
    setTotal({ ...total, [e.target.name]: e.target.value });
    data.[e.target.name] = e.target.value;
    console.log(e.target.value)
    console.log("Data", data);
    console.log("Total", total);

  };

  var spendKudosInfo = { kudos: 0 }

  /* useEffect(() => {
     console.log("Total", total)
     console.log("I am here", totalPrice);
     context.spendKudos(totalPrice, context.token);
   }, [total.amount1, total.amount2, total.amount3]);*/


  const onSubmit = async (e) => {
    e.preventDefault();
    //var kudos = Number(Number(data.amount1) * 100 + Number(data.amount2) * 40 + Number(data.amount3) * 140);
    var kudos = Number(Number(total.amount1) * 100 + Number(total.amount2) * 40 + Number(total.amount3) * 140);
    console.log("here is total kudos", kudos);
    if (kudos > context.user.kudosBank) {
      window.alert("Can not spend kudos more than" + context.user.kudosBank)
    }
    else {
      spendKudosInfo.kudos = kudos;
      console.log("here is total kudos", spendKudosInfo);
      //context.loadUser(context.token);
      context.spendKudos(spendKudosInfo, context.token);
      //context.loadUser(context.token);
      reset();
    }
  };


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
                          <p> price: 100</p>
                          <div className="goods-amount-input-div">

                            <input className="goods-amount-input" type="number"
                              name="amount1"
                              placeholder="0"
                              min="0"
                              max="99"
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="modal-goods">
                        <div>
                          <img src={goods2} />
                        </div>

                        <div class="goods-info">
                          <p>Snicker </p>
                          <p> price: 40 </p>
                          <div className="goods-amount-input-div">

                            <input className="goods-amount-input" type="number"
                              name="amount2"
                              placeholder="0"
                              min="0"
                              max="99"
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="modal-goods">
                        <div>
                          <img src={goods3} />
                        </div>

                        <div class="goods-info">
                          <p>Tacos </p>
                          <p> price: 140</p>
                          <div className="goods-amount-input-div">

                            <input className="goods-amount-input" type="number"
                              name="amount3"
                              placeholder="0"
                              min="0"
                              max="99"
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-kudos-cost">
                      <div style={{ "margin-top": "2vh", "font color": "white" }}> Total (kudos) {Number(total.amount1) * 100 + Number(total.amount2) * 40 + Number(total.amount3) * 140} </div>
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
