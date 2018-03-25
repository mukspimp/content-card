import React from 'react';

class EditorOption extends React.Component {
    render() {       
        return (
            <div className={'icon '+this.props.value} title={this.props.title}></div>
        );       
    }
}

export default EditorOption;
