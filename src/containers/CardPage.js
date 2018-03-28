import React from 'react';
import ReactDOM from 'react-dom';

import ContentCard from '../components/ContentCard';
import PrintCard from '../components/PrintCard';
import EditCard from '../components/EditCard';

class CardPage extends React.Component {
    constructor(props) {
        super(props);        
        this.state = {
            cards: [{
                id: 1,
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
                id: 2,
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
                id: 3,
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
                id: 4,
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
        this.state.isOpen = true;
        this.state.editCard = {};
    };
    
    handleTitleChange(title) {            
        let updatedCard = {...this.state.editCard};
        updatedCard.headerData.title = title;
        this.setState({ editCard : updatedCard});
    }

    handleDescriptionChange(description) {        
        let updatedCard = {...this.state.editCard};
        updatedCard.headerData.description = description;
        this.setState({ editCard : updatedCard});
    }
    
    updateCard(updatedCard) {
        var updaedCards = []; 
        this.state.cards.map(card => {
            if(card.id === updatedCard.id) {
                card.headerData.title = updatedCard.title;
                card.headerData.description = updatedCard.description;
            }
            updaedCards.push(card);
        });
        this.setState({cards: updaedCards });
        this.setState({ isOpen : false });       
    } 
    
    toggleModal() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

   editCard(id) {        
        if(this.state.editCard.hasOwnProperty(id) && this.state.editCard.id === id) {           
        } else {
            var editCard = this.state.cards.find(card => {
                if (card.id === id) {
                    return card;
                }            
            }); 
            this.setState({editCard: editCard});  
        }
        // this.setState({editCard: editCard});
        ReactDOM.render(<EditCard card={editCard} show={this.state.isOpen} updateCard={this.updateCard.bind(this)}
                onClose={this.toggleModal.bind(this)} handleDescriptionChange={this.handleDescriptionChange.bind(this)} handleTitleChange={this.handleTitleChange.bind(this)} >
                <h3>Edit Card</h3>
            </EditCard>, document.getElementById('editCardDiv'));
    }

    deleteCard(id) {
        let currentCards = this.state.cards.filter(currentCard => {
            return currentCard.id !== id;
        });        
        this.setState({
            cards: currentCards
        });
    }

    printCard(id) {
        const printCard = this.state.cards.find(card => {
            if(card.id === id) {
                return card;
            }            
        });
        console.log(printCard); 
        ReactDOM.render(<PrintCard card={printCard} />, document.getElementById('printCardDiv'));
        var content = document.getElementById("printCardDiv");
        var pri = document.getElementById("ifmcontentstoprint").contentWindow;
        pri.document.open();
        pri.document.write(content.innerHTML);
        setTimeout(() => {
            pri.document.close();
            pri.focus();
            pri.print();
        }, 500);               
    }
    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-grid">                                            
                    <ContentCard cards={this.state.cards} editItem={this.editCard.bind(this)} printItem={this.printCard.bind(this)} deleteItem={this.deleteCard.bind(this)}/>   </div>
                </div>            
                <div id="editCardDiv"></div>
                <div id="printCardDiv"></div>                                     
            </div>
        );  
    }
};

export default CardPage;
