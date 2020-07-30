import React, {Component} from "react";
//import ReactDOM from "react-dom";
import {Modal,Section, Button, } from "react-bulma-components";


class DetailSection extends Component {
  state = {
    isModal: false
  };

 
  handleClick = () => {
    this.setState({ isModal: !this.state.isModal });
    console.log("clicked!")
    console.log(this.state)
  };

  render() {
      
    // const active = this.state.isModal ? "is-active" : "";

    return (
      <>
      <Modal show={this.state.isModal} onClose={() => this.setState({ isModal: false })}>
        <Modal.Content>
            <Section style={{ backgroundColor: 'white' }}>
            Routine details
            </Section>
        </Modal.Content>
        
        <Modal.Card>
        <Modal.Card.Head>
          <Modal.Card.Title >
            {this.props.details}
          </Modal.Card.Title>
            {/* <Button
                onClick={this.handleClick}
                className="delete"
                aria-label="close"/> */}
                  
          
        </Modal.Card.Head>
        
        </Modal.Card>
        </Modal>
        

        
        <Button onClick={this.handleClick} >
          details
        </Button>
     </>
    )
  }
}

export default DetailSection

  
    