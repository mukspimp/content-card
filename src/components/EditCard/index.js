import React from 'react';

class EditCard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            description: ''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    handleTitleChange(event) {        
        this.setState({title: event.target.value});    
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});        
    }   

    componentDidMount() {
        this.setState({id: this.props.card.id});
        this.setState({title: this.props.card.headerData.title});
        this.setState({description: this.props.card.headerData.description});
    }
    
   render() {
        if(!this.props.show) {
            return null;
        }              
       if(!this.props.show) {
           return;
       }
        return ( 
            <div className="model">                                
                <div className="modelBody">  
                    <form className="edit-form">
                        <h3>{this.props.children}</h3>                            
                        <fieldset>
                            <input placeholder="Card Title" type="text" value={this.state.title} onChange={this.handleTitleChange}/>
                        </fieldset>                                              
                        <fieldset>
                            <textarea placeholder="Card Description" value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
                        </fieldset>
                        <fieldset>
                            <button name="update" type="button" id="card-update"  onClick={()=>this.props.updateCard(this.state)}>Update</button>
                        </fieldset>  
                        <fieldset>                      
                            <button name="close" type="button" onClick={()=>this.props.onClose()}> Close </button>                      
                        </fieldset>                                             
                    </form>                    
                </div>
            </div>            
        );
    }
}

export default EditCard;
