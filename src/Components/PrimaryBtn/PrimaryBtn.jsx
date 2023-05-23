import React from 'react';
import './PrimaryBtn.css';

const PrimaryBtn = ({btnInfo, styles}) => {
    return (
        <button className="primaryBtn" style={styles}>{btnInfo}</button>
    );
};

export default PrimaryBtn;