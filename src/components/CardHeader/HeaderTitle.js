import React from 'react';

class HeaderTitle extends React.Component {
    render() {
        return (
            <div className="grid-title">{this.props.title}</div>
        );
    }
}

export default HeaderTitle;