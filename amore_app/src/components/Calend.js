import React, {Component} from 'react';

class DatePicker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			year: this.props.year,
			month: this.props.month - 1,
			day: this.props.day,
      chosenDate: null
		}

		this.prevMonth = this.prevMonth.bind(this);
		this.nextMonth = this.nextMonth.bind(this);
    this.dateSetter = this.dateSetter.bind(this);
    this.resetDate = this.resetDate.bind(this);
	}
  componentWillMount() {
    this.dateSetter(this.props.day, this.props.month - 1, this.state.year);
  }
	prevMonth(e) {
		e.preventDefault();
		let newMonth = this.state.month - 1 === -1 ? 11 : this.state.month - 1;
		let newYear = newMonth === 11 ? this.state.year - 1 : this.state.year;
		this.setState({year: newYear, month: newMonth});
	}
	nextMonth(e) {
		e.preventDefault();
		let newMonth = this.state.month + 1 === 12 ? 0 : this.state.month + 1;
		let newYear = newMonth === 0 ? this.state.year + 1 : this.state.year;
		this.setState({year: newYear, month: newMonth});
	}
	monthConverter(index) {
		return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][index];
	}
  dateSetter(day, month, year, e) {
    if(e !== undefined) e.preventDefault();
    day = day.toString().length < 2 ? '0' + day : day;
    month += 1;
    month = month.toString().length < 2 ? '0' + month : month;
    let date = `${year}.${month}.${day}`;
    this.setState({chosenDate: date});
  }
  resetDate(e) {
    e.preventDefault();
    this.setState({year: this.props.year, month: this.props.month - 1, day: this.props.day});
    this.dateSetter(this.props.day, this.props.month - 1, this.props.year);
  }
	render() {

		let date = new Date(this.state.year, this.state.month, 1);
		let weekDay = date.getDay() !== 0 ? date.getDay() : 7;

		date.setMonth(date.getMonth() + 1);
		date.setDate(1);
		date.setDate(date.getDate() - 1);

		let lastDay = date.getDate();
		// let totalCells = weekDay - 1 + lastDay <= 35 ? 35 : 42;
		let totalCells = 42;

		let calendar = [];
		for(let i = 0; i < totalCells; i++) {
			if(i >= weekDay - 1 && i < weekDay + lastDay - 1) {
				calendar[i] = i - weekDay + 2;
			} else {
				calendar[i] = '';
			}
		}

		let pickerYear = this.state.year;
		let pickerMonth = this.monthConverter(this.state.month);


		let cells = calendar.map((item,i) => {
			if(item !== '') {
        let chosenDateArr = this.state.chosenDate.split('.');
				let cls = item == chosenDateArr[0] && this.state.month == chosenDateArr[1] - 1 && this.state.year == chosenDateArr[2] ? 'current' : '';
        let day = item;
        let month = this.state.month;
        let year = this.state.year;
				return (
					<div className="cell" key={i}>
						<a className={cls} href="#" onClick={e => this.dateSetter(day,month,year,e)}>{item}</a>
					</div>
				)
			} else {
				return <div className="cell" key={i}></div>
			}
		});

		return (
			<div className="datepicker-holder">
        <div className="heading">
				  <a className="prev" href="#" onClick={this.prevMonth}>&lt;</a>
				  <a className="next" href="#" onClick={this.nextMonth}>&gt;</a>
				  {pickerMonth} {pickerYear}
        </div>
				<div className="datepicker">
					{cells}
				</div>
        <div className="chosen-date">
          {this.state.chosenDate}
         
        </div>
			</div>
		);
	}
}

export default DatePicker;