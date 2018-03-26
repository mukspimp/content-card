import React from 'react';

import HeaderIcon from './HeaderIcon';
import HeaderTitle from './HeaderTitle';
import HeaderDescription from './HeaderDescription';

import PropTypes from 'prop-types';

const CardHeader = (props) => {
    let headerGridClass = 'grid-header';
    if(props.headerOption.position === 'top') {
        headerGridClass = 'grid-header-top';
    } 

    return (
        <div className={headerGridClass}>
            <HeaderIcon icon={props.header.icon}  />
            <div>
                <HeaderTitle title={props.header.title} />
                <HeaderDescription description={props.header.description} />
            </div>
        </div>
    );
}

CardHeader.propTypes = {
    headerOption: PropTypes.shape({
        position: PropTypes.string
    }),
    header: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.description
    })
}

export default CardHeader;
