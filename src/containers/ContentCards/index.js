import React from 'react';

import ContentCard from '../../components/ContentCard';

class ContentCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [{
                backgroundImg: 'images/insurance.jpeg',
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
                    icon: 'images/car.png',
                    title: 'Car insurance',
                    description: 'We know lots of factors go into calculating insurance costs...'
                }
            },
            {
                backgroundImg: 'images/self-drive.jpeg',
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
                    icon: 'images/free-delivery.png',
                    title: 'Self-driving vehicles are here',
                    description: 'Fully self-driving vehicles can transform the way we get around...'
                }
            },
            {
                backgroundImg: 'images/advertise.jpeg',
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
                    icon: 'images/bicycle.png',
                    title: 'A cost-effective advertising',
                    description: 'Many businesses are now realizing the potentials of advertising...'
                }
            },
            {
                backgroundImg: 'images/com-truck.jpeg',
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
                    icon: 'images/cargo-truck.png',
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

export default ContentCards;
