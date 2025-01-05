import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import './Die.css'

const Die = ({ face, rolling }) => {

    const faceMap = {
        one: faDiceOne,
        two: faDiceTwo,
        three: faDiceThree,
        four: faDiceFour,
        five: faDiceFive,
        six: faDiceSix,
    };

    return (
        <div>
            <FontAwesomeIcon
                icon={faceMap[face]}
                size="4x"
                className={`Die ${rolling && 'Die-shaking'}`}
            />
        </div>
    );
};


export default Die;
