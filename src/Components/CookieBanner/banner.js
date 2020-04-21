import React, { Component } from 'react';
import CookieConsent from "react-cookie-consent";

class CookieBanner extends Component {
    constructor(props) {
        super(props);
        this.state = { };

      
    }
   

render() {
                   

    return ('',
    <CookieConsent
        location="bottom"
        buttonText="X"
        cookieName="cookieCollectionconsent"
        style={{ background: "#2B373B", fontSize:'13px' }}
        buttonStyle={{ background: 'rgb(232, 131, 2)', color:'white', fontSize: "13px" }}
        expires={150}
    >
        We use cookies and other tracking technologies to improve your browsing experience on our website, to analyze our website traffic, and to understand where our visitors are coming from. By browsing our website, you consent to our use of cookies and other tracking technologies.
    </CookieConsent>
    );
}
}


export default CookieBanner