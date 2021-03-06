import React from 'react'
//import { format, addMonths, subMonths, startOfWeek, endOfWeek, addDays, startOfMonth, endOfMonth, isSameMonth, isSameDay, parse } from 'date-fns'
import DateTimePicker from 'react-datetime-picker';


class Modal extends React.Component {

    

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            title : '',
            description: '',
            date: ''
        }
      }

    onSave =  (e)=>{
        this.props.onSave(this.state)
        e.preventDefault();
    }

    handleChange = (value)=>{
        this.props.onChangeData(value);
        this.setState({date:value});
        
    }

    render(){  
        const data = this.props.data
        return(
        <div id="appuntamentoModal" tabIndex="-1" aria-hidden="true" className={"overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full " + (this.props.show ? "" : "hidden")}>
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    
                    <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                            Aggiungi appuntamente
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal"  onClick={this.props.onClose}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        <label htmlFor="titolo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Titolo</label>
                        <input type="text" id="titolo" name="titolo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.title} onChange={e=>{this.setState({title:e.target.value})}}></input>
                        <label htmlFor="descrizione" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Descrizione</label>
                        <input type="text" id="descrizione" name="descrizione"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.description} onChange={e=>{this.setState({description:e.target.value})}}></input>
                        <label htmlFor="data" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Data</label>
                        {/*<input type="datePicker" id="data" name="data" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={data} onChange={e=>{this.handleChange()}}></input>]*/}
                        <DateTimePicker  id="data" name="data" value={data} onChange={e=>{this.handleChange(e)}} />
                    </div>
                    <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={this.onSave}>Salva</button>
                        <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={this.props.onClose}>Annulla</button>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Modal;