import React, { Fragment, useState, useContext, useEffect} from 'react'
import BadgerContext from '../../context/badger/BadgerContext'

import BadgeObject from "./UserPanelComponents/BadgeObject"
import "./WaterfallFeed.css"


const WaterFall = () => {

    const context = useContext(BadgerContext);

    var allBadgesList = [];

    const populateFeed = () => {

        if (context.allBadges) {
            for (var index = 0; index < context.allBadges.length; index++) {
                allBadgesList[index] = <BadgeObject badgeData={context.allBadges[index]} />
            }
        }
    }

    const updateFeed = () => {

        context.getAllBadges(context.token);

        if (context.allBadges) {
            for (var index = 0; index < context.allBadges.length; index++) {
                allBadgesList[index] = <BadgeObject badgeData={context.allBadges[index]} />
            }
        }
    }

    useEffect(() => { updateFeed()}, [context.allBadges])

    return(
        <Fragment>
            <div class="feed-title">Reward Feed</div>

            <div class="feed-div">
                {populateFeed()}
                {allBadgesList}

            </div>

        </Fragment>
    );
}


export default WaterFall


