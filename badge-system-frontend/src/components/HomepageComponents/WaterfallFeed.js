import React, { Fragment, useState, useContext, useEffect} from 'react'
import BadgerContext from '../../context/badger/BadgerContext'

import BadgeObject from "./UserPanelComponents/BadgeObject"
import "./WaterfallFeed.css"


const WaterFall = () => {

    const context = useContext(BadgerContext)

    const waterFallPopulate = () => {
        context.getAllBadges(context.token);
        
    }

    useEffect(() => {
        waterFallPopulate();
    }, [context.allBadges])

    return(
        <Fragment>
            <div class="feed-title">Reward Feed</div>

                <div class="feed-div">

                    {context.allBadges && context.allBadges.map(badge => <BadgeObject badgeData ={ badge} />)}

                </div>

            
        </Fragment>
    );
}


export default WaterFall


