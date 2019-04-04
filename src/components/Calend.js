import React, {Component} from 'react';
import { DateTimePicker } from 'react-widgets';

class Calend extends Component {   
    let { DateTimePicker } = ReactWidgets; 
    let formatter = Globalize.dateFormatter({ raw: 'MMM dd, yyyy' })

    let widget = (
        <DateTimePicker
        format={formatter} 
        defaultValue={new Date()}
        time={false}
     />
        )

render(widget); 
}
  
export default Calend;