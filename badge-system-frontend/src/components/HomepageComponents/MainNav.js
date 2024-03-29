import React, { useState } from "react";
import 'reactjs-popup/dist/index.css';

import { GiveBadge } from "./Badges/GiveBadge";
import { Kudos_Modal } from './Kudos/give/Kudos_Modal';
import { EmailModal } from './Email/EmailModal';

import { BadgePrinting } from './Printing/BadgePrinting';
import { SpendKudos } from './Kudos/spend/Spend_Kudos';

//import GiveKudos from "./Kudos/GiveKudos.js";
//import BadgePrinting from "./Printing/BadgePrinting.js";
//import Card from './Email/Card.js'

import "./MainNav.css"


const MainNav = () => {

    const [showBadgePrintingModal, setShowBadgePrintingModal] = useState(false);

    const openBadgePrinter = () => {
        setShowBadgePrintingModal(prev => !prev)
    }

    const [showEmailModal, setShowEmailModal] = useState(false);

    const openEmailModal = () => {
        setShowEmailModal(prev => !prev)
    }

    const [showGiveBadgeModal, setShowGiveBadgeModal] = useState(false);

    const openGiveBadgeModal = () => {
        setShowGiveBadgeModal(prev => !prev)
    }

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const [showSpendKudosModal, setShowSpendKudosModal] = useState(false);

    const openSpendKudosModal = () => {
        setShowSpendKudosModal(prev => !prev)
    }

    return (
        <div class="navbar-div">

            <GiveBadge showGiveBadgeModal={showGiveBadgeModal} setShowGiveBadgeModal={setShowGiveBadgeModal} />
            <Kudos_Modal showModal={showModal} setShowModal={setShowModal} />
            <EmailModal showEmailModal={showEmailModal} setShowEmailModal={setShowEmailModal} />
            <SpendKudos showSpendKudosModal={showSpendKudosModal} setShowSpendKudosModal={setShowSpendKudosModal} />
            <BadgePrinting showBadgePrintingModal={showBadgePrintingModal} setShowBadgePrintingModal={setShowBadgePrintingModal} />

            <a href="#" ><i class="fas fa-home"></i><span>Home</span></a>
            <a href="#" onClick={openGiveBadgeModal}><i class="fas fa-award"></i><span>Send a Badge</span></a>
            <a href="#" onClick={openModal}><i class="fas fa-coins"></i><span>Send Kudos</span></a>

            <a href="#" onClick={openSpendKudosModal}><i class="fas fa-coins"></i><span>Kudos Shop</span></a>
            <a href="#" onClick={openBadgePrinter}><i class="fas fa-print"></i><span>Badge Printing</span></a> 

            <a href="#" onClick={openEmailModal}><i class="fas fa-file-signature"></i><span>Generate Email Signature</span></a>

        </div>

    );
}

export default MainNav;