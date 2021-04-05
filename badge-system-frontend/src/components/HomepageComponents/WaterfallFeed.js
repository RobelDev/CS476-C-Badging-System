import React, { useContext } from "react"
import { useState } from "react";

import BadgerContext from '../../context/badger/BadgerContext'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import MessageObject from "./WaterfallFeedComponents/MessageObject"

import "./WaterfallFeed.css"


export const WaterfallFeed = () => {

    const kudosInfoArray = [];

    var email;
    var kudosReason;
    var kudos;
    var receiver;
    var badgeName;
    var badgeReason

    const context = useContext(BadgerContext);

    const showKudosInfo = () => {

        //console.log("Waterfallfeed called here", context.isKudosChanged);

        if (context.isKudosChanged) {
            email = context.kudosInfo.email;
            kudosReason = context.kudosInfo.reason;
            kudos = context.kudosInfo.kudos;

        }
    }

    const showBadgesInfo = () => {

        //console.log("Waterfallfeed called here", context.isBadgeSent);

        if (context.isBadgeSent) {
            receiver = context.badgesInfo.receiver;
            badgeReason = context.badgesInfo.reason;
            badgeName = context.badgesInfo.badgeName;

        }
    }

    return (
        <div class="waterfall-feed-container">
            <div class="feed-title">
                Reward Feed
            </div>

            <div class="feed-div">
                {showKudosInfo()}
                <div>{email}</div>
                <div>{kudosReason}</div>
                <div>{kudos}</div>
                {/*(<ChatRoom />
                <MessageObject />*/}
            </div>

            <div class="feed-div">
                {showBadgesInfo()}
                <div>{receiver}</div>
                <div>{badgeReason}</div>
                <div>{badgeName}</div>
                {/*(<ChatRoom />
                <MessageObject />*/}
            </div>
        </div>
    );
}


