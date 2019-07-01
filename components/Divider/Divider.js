import React from 'react';
import './divider.scss';

const Divider = props => {
    if(props.type === 'signup') {
        return (
            <>
                <div className="divider-large"></div>
                <div className="or-container"><span className="or-div-large">OR</span></div>
            </>
        );
    } else {
        return (
            <>
                <div className="divider-small"></div>
                <div className="or-container"><span className="or-div-small">OR</span></div>
            </>
        );
    }
}

export default Divider;