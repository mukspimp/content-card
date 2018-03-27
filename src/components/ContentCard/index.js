import React from 'react';
import PropTypes from 'prop-types';

import CardHeader from '../CardHeader';
import Editor from '../Editor';

const ContentCard = (props) => {
    console.log("Props ===>> ", props);
    return props.cards.map((card) => {
        return (
            <div className="grid-item" key={card.id}>
                <div className="grid-box rel">
                    <img src={process.env.PUBLIC_URL + card.backgroundImg} />
                    <div className="abs-content">
                    </div>
                    <Editor editItem={props.editItem} deleteItem={props.deleteItem} id={card.id} printItem={props.printItem}  editOptions={card.editorOptions} />
                    <CardHeader header={card.headerData} headerOption={card.headerOptions} />
                </div>
            </div>
        );
    })
}

ContentCard.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number.isRequired,
        backgroundImg: PropTypes.string.isRequired,
        editorOptions: PropTypes.object,
        headerOptions: PropTypes.object,
        headerData: PropTypes.object
    })
}

export default ContentCard;
