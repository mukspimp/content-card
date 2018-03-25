import React from 'react';

class HeaderIcon extends React.Component {
    render () {
        return (
            <div className="float-left mr15">            
                <img src={process.env.PUBLIC_URL  + this.props.icon} className="grid-icon icon-a" />
            </div>
        );
    }
}

export default HeaderIcon;
