import React from 'react'
import { format, addMonths, subMonths, startOfWeek, endOfWeek, addDays, startOfMonth, endOfMonth, isSameMonth, isSameDay } from 'date-fns'
import Modal from './modal'

class Calendar extends React.Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date(),
        showModal: false
    }


    setShowModal = show => {
        this.setState({ 
            showModal: show
        })
    }
    
    saveAppointement = data => {
        data.date = data.date
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('/appuntamento', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        

    }

    renderHeader = ()=>{
        const dateFormat = "dd/M/Y"
        return (
        <div className="header row flex-middle">
            <div className="col col-start">
                <div className="icon" onClick={this.prevMonth}>
                    chevron_left
                </div>
            </div>
            <div className="col col-center">
                <span>
                    {format(this.state.currentMonth, dateFormat)}
                </span>
            </div>
            <div className="col col-end" onClick={this.nextMonth}>
                <div className="icon">chevron_right</div>
            </div>
      </div>
      )

    }
    renderDays(){
        const dayFormat = "iiii";
        var days = [];
        let startDate = startOfWeek(this.state.currentMonth);

        for(let i= 0; i<7; i++){
            days.push(<div className="col col-center" key={i}>
                {format(addDays(startDate, i), dayFormat)}
            </div>)
        }
        return <div className="days row">{days}</div>

    }
    renderCells(){

        const { currentMonth, selectedDate } = this.state;
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const dateFormat = 'd';
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";


        while(day <= endDate){
            for(let i = 0; i < 7; i++){
                formattedDate = format(day,dateFormat)
                const cloneDay = day;
                days.push(
                    <div className={`col cell ${
                        !isSameMonth(day,monthStart) ? "disabled" : isSameDay(day, selectedDate) ? "selected" : ""
                    }`}
                    key={day}
                    onClick={!isSameDay(day, selectedDate) ? ()=>this.onDateClick(cloneDay) : ()=>this.setShowModal(true)}>
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                    </div>
                )
                day = addDays(day,1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = []
        }
        return <div className="body">{rows}</div>
    }



    onDateClick = day => {
        this.setState({ 
            selectedDate: day
        })
    }

    nextMonth = ()=>{
        this.setState({
            currentMonth: addMonths(this.state.currentMonth,1)
        })
    }

    prevMonth = ()=>{
        this.setState({
            currentMonth: subMonths(this.state.currentMonth,1)
        })
    }

    changeDataHandle = (d)=>{
        this.setState({selectedDate:d})
    }

    render(){
        const data = this.state.selectedDate;
        return (
            <div className="calendar">
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
                <Modal data={this.state.selectedDate} onChangeData={this.changeDataHandle} onClose={()=>this.setShowModal(false)} show={this.state.showModal} onSave={this.saveAppointement}></Modal>
            </div>
          );
    }
}


export default Calendar;