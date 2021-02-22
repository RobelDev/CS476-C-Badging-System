import React from "react"

import "./Kudos_Modal.css";

export const GiveKudos = () => {
    <div class="kudos-modal-content">

    <form class="send-kudos-form" onSubmit="">

        <div class="kudos-modal-form">

            <p>Who would you like to send kudos?</p>
            <div class="recipient-input-div">

                <input class="kudos-recipient-input" type="text"
                    name="recipient"
                    placeholder="Recipient"
                    onChange=""
                    required />
            </div>

            <p>What is the reason for sending kudos?</p>
            <div class="kudos-message-input-div">
                <textarea class="message-input" type="text"
                    name="message"
                    placeholder="Message"
                    onChange=""
                    minLength="8"
                    required />
            </div>



            <p>Enter the amount of Kudos</p>
            <div class="kudos-input-div">
                <input class="kudos-amount-input" type="amount"
                    name="kudos-to-send"
                    placeholder="0"
                    onChange=""
                    required></input>
            </div>

        </div>

       

        <button class="send-kudos-button" type="submit">Send Kudos</button>

    </form>

</div>
};