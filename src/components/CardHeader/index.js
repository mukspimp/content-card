import React from 'react';

import HeaderIcon from './HeaderIcon';
import HeaderTitle from './HeaderTitle';
import HeaderDescription from './HeaderDescription';

class CardHeader extends React.Component {
    render() {
        let headerGridClass = 'grid-header';
        if(this.props.headerOption.position === 'top') {
            headerGridClass = 'grid-header-top';
        } 

        return (
            <div className={headerGridClass}>
                <HeaderIcon icon={this.props.header.icon}  />
                <div>
                    <HeaderTitle title={this.props.header.title} />
                    <HeaderDescription description={this.props.header.description} />
                </div>
            </div>
        );
    };
}

export default CardHeader;
