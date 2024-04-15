import React, { useState } from 'react';

const ChangeName = (props) => {
    let { sname } = props;

    return (
        <div className="container mt-3">
            <div> {name} </div>
            <button className="btn btn-warning" onClick={onUpdate} >CHANGE NAME</button>
        </div>
    );
};

export default ChangeName;
