import React, { useState, useEffect, useContext } from 'react'
import { context } from './Spend_Kudos.js'
//import "./Spend_Kudos.css";


export const Counter = () => {

    const [count, setCount] = useState(0);
/*
    const { counter, add } = useContext(context);

    const increase = () => {

        if (count < 99)
            return setCount(count + 1)

        else {
            window.alert("99 is the most you can buy at one time");

        }
    }

    const decrease = () => {

        if (count > 0)
            return setCount(count - 1)

        else {
            window.alert("The quantity can not be number less than zero");
        }

    }

    const { email, kudos } = data;

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };


    return (
        <div class="modal-counter-button">
            {/* <button onClick={increase} style={{ "backgroundColor": "#26456e", "height": "25px", "width": "25px" }}>+</button> }
            <div className="goods-amount-input-div">

                <input className="goods-amount-input" type="number"
                    name=""
                    placeholder="0"
                    onChange={onChange}
                    required />
            </div>
            {/*<button onClick={decrease} style={{ "backgroundColor": "#26456e", "height": "25px", "width": "25px" }}>-</button>}
        </div >

    );

}
