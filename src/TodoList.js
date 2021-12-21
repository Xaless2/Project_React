import React, { Component } from 'react';
import './Todolist.css';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            tache: '',
            date: '',
            etat: '',
            newetat:'',
            champ:''
        };
    }
    
    onChangeTache(event) {
        this.setState({
            tache: event.target.value,
        });
    }

    onChangeDate(event){
        this.setState({
            date: event.target.value0
        });
    }

    onChangeEtatModifier(event) {
        this.setState({
            newetat: event.target.value,
        });
    }

    onChangeEtat(event){
        this.setState({
            etat: event.target.value
        });
    }

    ajouter(event) {
        event.preventDefault();
        if(this.state.tache !== '' && this.state.date !== '' && this.state.etat !== '' && this.state.champ !== 'etat'){
            this.setState({
                items: [...[{"tache" : this.state.tache,"date" : this.state.date,"etat": this.state.etat}]],
            });
        }
        else alert("Veuillez changer tous les champs");
    }

    modifier(event){
        event.preventDefault();
        if(this.state.newetat !== '' && this.state.champ !== 'etat'){
            this.setState({
                items: [...[{"tache" : this.state.tache,"date" : this.state.date,"etat": this.state.newetat}]],
            });
        }
        else alert("Veuillez remplir le champ");
    }

    supprimer(item) {
        const list = this.state.items;
        const index = list.indexOf(item);
        list.splice(index, 1);
        this.setState({
            items: list
        });
    }

    rendermodifier(){
        return(
            <span>
                <select id="value3" value={this.state.newetat} onChange={this.onChangeEtatModifier.bind(this)} className="form-control mb-2" >
                    <option value={this.state.champ}> état </option>
                    <option value="A faire">A faire</option>
                    <option value="Commencer">Commencer</option>
                    <option value="En Cours">En cours</option>
                    <option value="Terminer">Terminer</option>
                </select>
                <label> </label>
                <button className="btn btn-dark" onClick={this.modifier.bind(this)}>Modifier</button>
            </span>
        );
    }

    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div className="list-group-item" key={item}>
                    tâche : {item.tache} | date : {item.date} | état : {item.etat} <button className="btn btn-dark" onClick={this.supprimer.bind(this, item)}>Supprimer</button> 
                    <label> </label>
                    {this.rendermodifier()}
                </div>    
            );
        });
    }

    render() {
        return(
            <div align="center">
                <h1 align="center">TodoList</h1>
                <form className="form-row align-items-center">
                    <label> Nom de tâche : </label>
                    <input value={this.state.tache} type="text" placeholder="Renseigner un item" onChange={this.onChangeTache.bind(this)} className="form-control mb-2"/>
                    <label> Date de tâche : </label>
                    <input type="date" min="2021-01-01" value={this.state.date} onChange={this.onChangeDate.bind(this)} className="form-control mb-2"/>
                    <label> État : </label>
                    <select id="value3" value={this.state.etat} onChange={this.onChangeEtat.bind(this)} className="form-control mb-2" >
                        <option value={this.state.champ}> état </option>
                        <option value="A faire">A faire</option>
                        <option value="Commencer">Commencer</option>
                        <option value="En Cours">En cours</option>
                        <option value="Terminer">Terminer</option>
                    </select>
                    <label> </label>
                    <button onClick={this.ajouter.bind(this)} className="btn btn-dark" > Ajouter </button>
                </form>
                <div className="list-group">
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList;
