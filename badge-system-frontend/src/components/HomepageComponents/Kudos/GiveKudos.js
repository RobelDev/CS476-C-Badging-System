import React from "react"

import "./GiveKudos.css"

class GiveKudos extends React.Component {
    render() {
        return(
            <div >
                <div >
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
                        <label>
                            Why are you sending them Kudos?
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

export default GiveKudos;