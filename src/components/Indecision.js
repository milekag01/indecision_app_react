import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class Indecision extends React.Component {
    
    //challenge:
    //pull the state out of constructor
    //convert all 4 event handler to class properties(arrow functions)
    //delete the constructor completely
    //start with class properties and end with methods

    state = {
        options:[]
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }) );
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove!==option )//to delete the option
        })
        )
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option); 
    }
    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item';
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'This option already exist';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }) );
    }

    //fetching data from database when the app starts
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({options: options}) );
            }
        } catch(error) {
            //if error like wrong datatype, do nothing
        }
    }

    //as new options is added it stores it
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const subtitle = "Put your life in hands of a computer";

        return (
            <div>
                <Header subtitle = {subtitle} />
                <Action 
                hasOptions = {this.state.options.length}
                handlePick = {this.handlePick}
                />
                <Options 
                options = {this.state.options}
                handleDeleteOptions= {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption} 
                />
                <AddOption handleAddOption = {this.handleAddOption}/>
            </div>
        );
    }
}
