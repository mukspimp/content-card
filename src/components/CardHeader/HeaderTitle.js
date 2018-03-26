import React from 'react';
import PropTypes from 'prop-types';

const HeaderTitle = (props) => {
    return (<div className="grid-title">{props.title}</div>);
}

HeaderTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default HeaderTitle;