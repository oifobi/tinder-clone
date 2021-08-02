import React from 'react'
import "./Header.css";
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import IconButton from '@material-ui/core/IconButton';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
function Header() {
    return (
        <div className="header">
            <IconButton>
            <AccessibilityNewIcon fontSize="large" className="header__icon"/>
            </IconButton>


            <IconButton>
                <LocalPharmacyIcon fontSize="large" className="header__icon"/>
                </IconButton>

    
                <IconButton>
                <ContactSupportIcon fontSize="large" className="header__icon"/>
                </IconButton>


            </div>

        
    );
}

export default Header
