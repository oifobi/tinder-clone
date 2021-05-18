/* eslint-disable react/jsx-no-undef */
import React from 'react'
import "./SwipeButons.css";
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

function SwipeButtons() {
    return (
    <div className="swipeButtons">
        <IconButton className="swipeButtons__repeat">
            <Replayicon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__left">
            <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__star">
            <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__right">
            <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__lightning">
            <FlashOnIcon fontSize="large" />
        </IconButton>

    </div>
    );
}



export default SwipeButtons;
