import React, { Fragment, useState, useContext, useEffect } from 'react'
import BadgerContext from '../../context/badger/BadgerContext'

import BadgeObject from "./UserPanelComponents/BadgeObject"

import "./UserPanel.css"

const UserPanel = () => {

    const context = useContext(BadgerContext)

    var listOfBadges = [];

    const populateUserPanel = () => {
       context.getMyBadges(context.token);
    
       if(context.myBadges){
            for (var index = 0; index < context.myBadges.length; index++) {
                listOfBadges[index] = <BadgeObject badgeData={ context.myBadges[index] } />
         }
         }
    }
    useEffect(() => { populateUserPanel() }, [context.myBadges]);

    return(
        <div class="user-panel-div">
            <div class="badge-library-div">
                <div class="badge-library-header">
                    Your Badges
                </div>

                {populateUserPanel()}
                { listOfBadges }
                
            </div>

        </div>
    );
}

export default UserPanel;