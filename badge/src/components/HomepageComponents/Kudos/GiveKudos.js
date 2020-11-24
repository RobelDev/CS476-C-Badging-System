import React from "react"

import "./GiveKudos.css"

class GiveKudos extends React.Component {
    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return(
            <div class="modal">
                <div class="modal-content">
                    <span className="close" onClick={this.handleClick}>
                        &times;
                    </span>
                    <form>
                        <h3>Give Kudos</h3>
                        <label>
                            Who are you sending Kudos to?
                            <input type="text" name="name" />    
                        </label> 
                        <br />
                        <label>
                            How Many Kudos?
                            <input type="number" name="amountToSend" />
                        </label>
                        <br />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default GiveKudos;