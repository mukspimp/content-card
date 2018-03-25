import React from 'react';

import CardHeader from '../CardHeader';
import Editor from '../Editor';

class ContentCard extends React.Component {   
    render () {       
        return (
            <div className="grid-item">                
                <div className="grid-box rel">
                    <img src={process.env.PUBLIC_URL + this.props.card.backgroundImg} />                
                    <div className="abs-content">
                    </div>
                    <Editor editOptions={this.props.card.editorOptions} />
                    <CardHeader header={this.props.card.headerData} headerOption={this.props.card.headerOptions} />                   
                </div>
            </div>
        );
    }
}

export default ContentCard;
