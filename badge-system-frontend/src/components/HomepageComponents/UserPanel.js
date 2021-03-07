import React, { Fragment, useState, useContext } from 'react'
import BadgerContext from '../../context/badger/BadgerContext'

import BadgeObject from "./UserPanelComponents/BadgeObject"

import "./UserPanel.css"

const UserPanel = () => {

    const context = useContext(BadgerContext)

    const myBadges = context.allBadges

    return(
        <div class="user-panel-div">
            <div class="badge-library-div">
                <div class="badge-library-header">
                    Your Badges
                </div>

                { console.log(myBadges) }

            </div>

        </div>
    );
}

export default UserPanel;