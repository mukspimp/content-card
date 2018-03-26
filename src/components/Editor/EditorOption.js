import React from 'react';
import PropTypes from 'prop-types';

const EditorOption = (props) => {    
        return (
            <div className={'icon '+props.value} title={props.title}></div>
        );       
}

EditorOption.propTypes = {
    value: PropTypes.string,
    title: PropTypes.string
}

export default EditorOption;
