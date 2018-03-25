import React from 'react';

class HeaderDescription extends React.Component {
    render() {
        return (
            <div className="grid-desc">
                {this.props.description}
            </div>
        );
    }
}

export default HeaderDescription;
