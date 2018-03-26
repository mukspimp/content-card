import React from 'react';
import PropTypes from 'prop-types';

//import EditorOption from './EditorOption';

const Editor = (props) => {    
    let isDelete = props.editOptions.delete;
    let isPrint = props.editOptions.print;
    let isEdit = props.editOptions.edit;
    let isCopy = props.editOptions.copy;
    let positionClass = 'grid-options-icons';
    if(props.editOptions.position === 'bottom') {
        positionClass = 'grid-options-icons-bottom';
    }
    return (
        <div className="grid-options">
            <div className={positionClass}>
                { isDelete === true &&
                    <div className='icon delete-icon' title='Delete' onClick={()=>props.deleteItem(props.id)}></div>
                    //<EditorOption value='delete-icon' title="Delete"  />
                }
                { isPrint === true &&
                    <div className='icon print-icon' title='Print' onClick={()=>props.printItem(props.id)}></div>
                    // <EditorOption value="print-icon" title="Print" />
                }
                { isEdit === true &&
                    <div className='icon edit-icon' title='Edit' ></div>
                    // <EditorOption value="edit-icon" title="Edit" />
                }
                { isCopy === true &&
                    <div className='icon copy-icon' title='Copy' ></div>
                    // <EditorOption value="copy-icon" title="Copy" />
                }
            </div>
        </div>
    );    
}

Editor.propTypes = {
    editOptions: PropTypes.shape({
        position: PropTypes.string,
        delete: PropTypes.boolea
    })
}

export default Editor;
