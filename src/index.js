import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HeaderIcon extends React.Component {
    render () {
        return (
            <div className="float-left mr15">            
                <img src={process.env.PUBLIC_URL  + this.props.icon} className="grid-icon icon-a" />
            </div>
        );
    }
}

class HeaderTitle extends React.Component {
    render() {
        return (
            <div className="grid-title">{this.props.title}</div>
        );
    }
}

class HeaderDescription extends React.Component {
    render() {
        return (
            <div className="grid-desc">
                {this.props.description}
            </div>
        );
    }
}

class CardHeader extends React.Component {
    render() {
        return (
            <div className="grid-header">
                <HeaderIcon icon={this.props.header.icon}  />
                <div>
                    <HeaderTitle title={this.props.header.title} />
                    <HeaderDescription description={this.props.header.description} />
                </div>
            </div>
        );
    };
}

class EditorOption extends React.Component {
    render() {       
        return (
            <div className={this.props.value}></div>
        );       
    }
}

class Editor extends React.Component {
    render() {
        const isDelete = this.props.editOptions.delete;
        const isPrint = this.props.editOptions.print;
        const isEdit = this.props.editOptions.edit;
        const isCopy = this.props.editOptions.copy;
        return (
            <div className="grid-options">
                <div className="grid-options-icons">
                    { isDelete === true &&
                        <EditorOption value='delete-icon' />
                    }
                    { isPrint === true &&
                        <EditorOption value="print-icon" />
                    }
                    { isEdit === true &&
                        <EditorOption value="edit-icon" />
                    }
                    { isCopy === true &&
                        <EditorOption value="copy-icon" />
                    }
                </div>
            </div>
        );
    }
}

class ContentCard extends React.Component {   
    render () {       
        return (
            <div className="grid-item">                
                <div className="grid-box rel">
                    <img src={process.env.PUBLIC_URL + this.props.card.backgroundImg} />                
                    <div className="abs-content">
                    </div>
                    <Editor editOptions={this.props.card.editorOptions} />
                    <CardHeader header={this.props.card.headerOptions} />                   
                </div>
            </div>
        );
    }
}

class ContentCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [{
                backgroundImg: '/insurance.jpeg',
                editorOptions: {
                    copy: true,
                    edit: true,
                    print: true,
                    delete: true
                },
                header: true,
                headerOptions: {
                    icon: '/car.png',
                    title: 'Car insurance1',
                    description: '1.We know lots of factors go into calculating insurance costs...'
                }
            },
            {
                backgroundImg: '/self-drive.jpeg',
                editorOptions: {
                    copy: true,
                    edit: true,
                    print: true,
                    delete: true
                },
                header: true,
                headerOptions: {
                    icon: 'free-delivery.png',
                    title: 'Car insurance2',
                    description: '2.We know lots of factors go into calculating insurance costs...'
                }
            },
            {
                backgroundImg: '/advertise.jpeg',
                editorOptions: {
                    copy: true,
                    edit: true,
                    print: true,
                    delete: true
                },
                header: true,
                headerOptions: {
                    icon: 'bicycle.png',
                    title: 'Car insurance3',
                    description: '3.We know lots of factors go into calculating insurance costs...'
                }
            },
            {
                backgroundImg: '/com-truck.jpeg',
                editorOptions: {
                    copy: true,
                    edit: true,
                    print: true,
                    delete: false
                },
                header: true,
                headerOptions: {
                    icon: 'cargo-truck.png',
                    title: 'Car insurance4',
                    description: '4.We know lots of factors go into calculating insurance costs...'
                }
            }]
        }
    };
    
    render() {
        return (
            <div className="row">
                <div className="col-grid">
                    {
                        this.state.cards.map(function(card) {
                            return <ContentCard card={card} />
                        })
                    }                   
                </div>
            </div>        
        );  
    }
};

ReactDOM.render(
   <ContentCards />,
    document.getElementById('root')
);


