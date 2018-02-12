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
        let headerGridClass = 'grid-header';
        if(this.props.headerOption.position === 'top') {
            headerGridClass = 'grid-header-top';
        } 

        return (
            <div className={headerGridClass}>
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
        let positionClass = 'grid-options-icons';
        if(this.props.editOptions.position === 'bottom') {
            positionClass = 'grid-options-icons-bottom';
        }
        return (
            <div className="grid-options">
                <div className={positionClass}>
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
                    <CardHeader header={this.props.card.headerData} headerOption={this.props.card.headerOptions} />                   
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
                    position: 'bottom',
                    copy: true,
                    edit: true,
                    print: true,
                    delete: true
                },
                headerOptions: {
                    header: true,
                    position: 'top',
                },
                headerData: {
                    icon: '/car.png',
                    title: 'Car insurance',
                    description: 'We know lots of factors go into calculating insurance costs...'
                }
            },
            {
                backgroundImg: '/self-drive.jpeg',
                editorOptions: {
                    position: 'bottom',
                    copy: true,
                    edit: true,
                    print: true,
                    delete: true
                },
                headerOptions: {
                    header: true,
                    position: 'top',
                },
                headerData: {
                    icon: 'free-delivery.png',
                    title: 'Self-driving vehicles are here',
                    description: 'Fully self-driving vehicles can transform the way we get around...'
                }
            },
            {
                backgroundImg: '/advertise.jpeg',
                editorOptions: {
                    position: 'top',
                    copy: true,
                    edit: true,
                    print: true,
                    delete: true
                },
                headerOptions: {
                    header: true,
                    position: 'bottom',
                },
                headerData: {
                    icon: 'bicycle.png',
                    title: 'A cost-effective advertising',
                    description: 'Many businesses are now realizing the potentials of advertising...'
                }
            },
            {
                backgroundImg: '/com-truck.jpeg',
                editorOptions: {
                    position: 'top',
                    copy: true,
                    edit: true,
                    print: true,
                    delete: false
                },
                headerOptions: {
                    header: true,
                    position: 'bottom',
                },
                headerData: {
                    icon: 'cargo-truck.png',
                    title: 'Commerical Vehical Hiring',
                    description: 'Online commercial vehicle hiring portal based on bidding system...'
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


