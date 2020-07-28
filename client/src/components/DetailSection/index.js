// import React from 'react';

// class OpenModal extends React.Component {
//     static propTypes = {
//       modal: PropTypes.object,
//       children: PropTypes.node.isRequired,
//     }
  
//     static defaultProps = {
//       modal: {},
//     }
  
//     state = {
//       show: false,
//     }
  
//     open = () => this.setState({ show: true });
//     close = () => this.setState({ show: false });
  
//     render() {
//       return (
//         <div>
//           <Button onClick={this.open}>Open</Button>
//           <Modal show={this.state.show} onClose={this.close} {...this.props.modal}>
//             {this.props.children}
//           </Modal>
//         </div>
//       );
//     }
//   }
  
  
//       <OpenModal modal={{ closeOnEsc: false }}>
//         <Modal.Content>
//           <Section style={{ backgroundColor: 'white' }}>
//             Click on the {'"X"'} button on the top-right button to close the Modal (pass closeOnEsc=false to the modal to avoid closing it with the keyboard)
//           </Section>
//         </Modal.Content>
//       </OpenModal>

import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Modal, } from "react-bulma-components";


class DetailSection extends Component {
  state = {
    isModal: false
  };

  handleClick = () => {
    this.setState({ isModal: !this.state.isModal });
  };

  render() {
      
    // const active = this.state.isModal ? "is-active" : "";

    return (
      
          <Modal isOpen={this.state.isModal}>
        <Modal.Content>
            <Section style={{ backgroundColor: 'white' }}>
            put the details here
            </Section>
        </Modal.Content>

        <Modal.Card>
        <Modal.Card.Head>
          <Modal.Card.Title>
            Routine details
          </Modal.Card.Title>
            <Button>
                onClick={this.handleClick}
                className="delete"
                aria-label="close"
            </Button>
        </Modal.Card.Head>
        <Modal.Card.Body>

        </Modal.Card.Body>
        </Modal.Card>
        </Modal>
        

        // <div className={`modal ${active}`}>
        //   <div className="modal-background" />
        //   <div className="modal-card">
        //     <header className="modal-card-head">
        //       <p className="modal-card-title">Modal title</p>
        //       <button
        //         onClick={this.handleClick}
        //         className="delete"
        //         aria-label="close"
        //       />
        //     </header>   
        // </div>

        <Button onClick={this.handleClick} >
          Show Modal
        </Button>
     
    )
  }
}

export default DetailSection

  
    