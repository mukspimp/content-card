import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import img1 from './images/insurance.jpeg';
import img2 from './images/self-drive.jpeg';
import img3 from './images/advertise.jpeg';
import img4 from './images/com-truck.jpeg';
import icon1 from './images/car.png';
import icon2 from './images/free-delivery.png';
import icon3 from './images/bicycle.png';
import icon4 from './images/cargo-truck.png';

class HeaderIcon extends React.Component {
    render () {
        return (
            <div className="float-left mr15">
                <img src={icon1} className="grid-icon icon-a" />
            </div>
        );
    }
}

class HeaderTitle extends React.Component {
    render() {
        return (
            <div className="grid-title">Car insurance</div>
        );
    }
}

class HeaderDescription extends React.Component {
    render() {
        return (
            <div className="grid-desc">
                We know lots of factors go into calculating insurance costs...
            </div>
        );
    }
}

class CardHeader extends React.Component {
    render() {
        return (
            <div className="grid-header">
                <HeaderIcon />
                <div>
                    <HeaderTitle />
                    <HeaderDescription />
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
        return (
            <div className="grid-options">
                <div className="grid-options-icons">
                    <EditorOption value='delete-icon' />
                    <EditorOption value="print-icon" />
                    <EditorOption value="edit-icon" />
                    <EditorOption value="copy-icon" />
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
                    <img src={img1} />
                    <div className="abs-content">
                    </div>
                    <Editor />
                    <CardHeader />                   
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
                backgroundImg: './images/insurance.jpeg',
                editorOptions: {
                    copy: true,
                    edit: true,
                    print: true,
                    delete: true
                },
                header: true,
                headerOptions: {
                    icon: './images/car.png',
                    title: 'Car insurance',
                    description: 'We know lots of factors go into calculating insurance costs...'
                }
            }]
        }
    };
    
    render() {
        return (
            <div className="row">
                <div className="col-grid">
                    <ContentCard />
                    <ContentCard />
                    <ContentCard />
                    <ContentCard />
                    {/* <RenderContentCards cards="this.state" /> */}
                </div>
            </div>        
        );  
    }
};

// function RenderContentCards(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         <li key={number.toString()}>
//             {number}
//         </li>
//     );
//     return (
//         <ul>{listItems}</ul>
//     );
// }

ReactDOM.render(
   <ContentCards />,
    document.getElementById('root')
);

