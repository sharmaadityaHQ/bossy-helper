import React from 'react';
import "../assets/scss/index.scss";

export default (props) => (
    <>
        <div className="card">
            <div className="card-logo">{props.logo}</div>

            <div className="card-title">{props.name}</div>
            <p className="card-summary">{props.summary}</p>
        </div>
    </>
)