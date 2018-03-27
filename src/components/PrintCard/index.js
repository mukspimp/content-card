import React from 'react';

class PrintCard extends React.Component {
    
    render() {
        return (
            <div id="printDiv" className="hide"> 
                <div className="grid-item">
                    <div className="grid-box rel">
                        <img src={process.env.PUBLIC_URL  + this.props.card.headerData.icon} />
                        <div className="abs-content"></div>
                        <div className="grid-header-top">
                            <div className="float-left mr15">
                                <img src={process.env.PUBLIC_URL + this.props.card.backgroundImg} className="grid-icon icon-a" />
                            </div>
                            <div>
                                <div className="grid-title">{this.props.card.headerData.title}</div>
                                <div className="grid-desc">{this.props.card.headerData.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default PrintCard;
