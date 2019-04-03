import React, {Component} from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

class InfoButton extends Component {   
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          popoverOpen: false
        };
      }
    
      toggle() {
        this.setState({
          popoverOpen: !this.state.popoverOpen
        });
      }
    
      render() {
        return (
          <div>
            <Button id="Popover1" type="button">
              HELP!
            </Button>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
              <PopoverHeader>info</PopoverHeader>
              <PopoverBody>please upload image </PopoverBody>
            </Popover>
          </div>
        );
      }
    }
export default InfoButton;