import React from 'react';
import PropTypes from 'prop-types';

const HeaderDescription = (props) => {
    return (
        <div className="grid-desc">
            {props.description}
        </div>
    );
}

HeaderDescription.propTypes = {
    description: PropTypes.string.isRequired
};

export default HeaderDescription;
