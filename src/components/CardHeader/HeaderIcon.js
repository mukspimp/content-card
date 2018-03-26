import React from 'react';
import PropTypes from 'prop-types';

const HeaderIcon = (props) => {
    return (
        <div className="float-left mr15">            
            <img src={process.env.PUBLIC_URL  + props.icon} className="grid-icon icon-a" />
        </div>
    );    
}

HeaderIcon.propTypes = {
    icon: PropTypes.string.isRequired
}

export default HeaderIcon;
