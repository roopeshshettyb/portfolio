import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Whatsapp() {

    useEffect(() => {
        const isMobile = /Mobi/i.test(window.navigator.userAgent);
        const whatsappLink = isMobile ? "https://api.whatsapp.com/send/?phone=918867771953&text=Hi, Roopesh. Are you open for some collaboration?&type=phone_number&app_absent=0" : "https://web.whatsapp.com/send/?phone=918867771953&text=Hi%2C+Roopesh.+Are+you+open+for+some+collaboration%3F&type=phone_number&app_absent=0";
        window.location.href = whatsappLink;
    }, [])
    return (
        <div>

        </div>
    );
}

export default Whatsapp;