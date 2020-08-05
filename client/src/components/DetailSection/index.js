import React, { Component } from "react";
// import { FaInfoCircle } from "react-icons/fa";
import { FiInfo } from "react-icons/fi"
import { Modal, Section, Button } from "react-bulma-components";

class DetailSection extends Component {
  state = {
    isModal: false,
  };

  handleClick = () => {
    this.setState({ isModal: !this.state.isModal });
    console.log("clicked!");
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Modal
          show={this.state.isModal}
          onClose={() => this.setState({ isModal: false })}
        >
          <Modal.Content>
            <Section style={{ backgroundColor: "white" }}>
              {this.props.details}
            </Section>
          </Modal.Content>
        </Modal>

        {/* <Button onClick={this.handleClick}><FaInfoCircle/></Button> */}
        <FiInfo onClick={this.handleClick}/>
      </>
    );
  }
}

export default DetailSection;
