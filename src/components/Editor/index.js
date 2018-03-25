import React from 'react';
import EditorOption from './EditorOption';

class Editor extends React.Component {
    render() {
        let isDelete = this.props.editOptions.delete;
        let isPrint = this.props.editOptions.print;
        let isEdit = this.props.editOptions.edit;
        let isCopy = this.props.editOptions.copy;
        let positionClass = 'grid-options-icons';
        if(this.props.editOptions.position === 'bottom') {
            positionClass = 'grid-options-icons-bottom';
        }
        return (
            <div className="grid-options">
                <div className={positionClass}>
                    { isDelete === true &&
                        <EditorOption value='delete-icon' title="Delete" />
                    }
                    { isPrint === true &&
                        <EditorOption value="print-icon" title="Print" />
                    }
                    { isEdit === true &&
                        <EditorOption value="edit-icon" title="Edit" />
                    }
                    { isCopy === true &&
                        <EditorOption value="copy-icon" title="Copy" />
                    }
                </div>
            </div>
        );
    }
}

export default Editor;
