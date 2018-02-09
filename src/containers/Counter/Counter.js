import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import Person from '../../components/person/person';
import Input from '../../components/person/input';
import { increment, decrement, add, substract } from '../../store/actions/counter';
import { storeResult, deleteResult } from '../../store/actions/result';
import { removePerson, addPerson } from '../../store/actions/person';

class Counter extends Component {

    state = {
        name:'',
        age:0
    }

    onNameChange = (evt) => {
        const name = evt.target.value;
        this.setState({name})
    }

    onAgeChange = (evt) => {
        const age = evt.target.value;
        this.setState({age})
    }

    onSubmitPerson = () => {
        this.props.onAddPerson({name:this.state.name, age:this.state.age});
        this.setState({name:'',age:0});
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:{}
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecCounter}  />
                <CounterControl label="Add 5" clicked={()=>this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={()=>this.props.onSubCounter(5)}  />
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <hr/>
                <Input change={this.onNameChange} name={this.state.name} type="text" place="Nom"/>
                <Input change={this.onAgeChange} name={this.state.age} type="number" place="Age"/>
                <button onClick={this.onSubmitPerson}>ADD Person</button>
                <div className="container">
                <div className="result">
                    <ul>
                        {this.props.storedResult.map((res)=>{
                            return <li key={res.id} onClick={()=>this.props.onDeleteResult(res.id)}>{res.value}</li>
                        })}                    
                    </ul>
                </div>
                <div className="persons">
                        {this.props.persons.map((p)=>{
                            return <Person key={p.id} name={p.name} age={p.age} remove={()=>this.props.onDeletePerson(p.id)}/>
                        })}
                </div>
                </div>
                
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResult: state.res.results,
        persons: state.pers.persons
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncCounter: () => dispatch(increment()),
        onDecCounter: () => dispatch(decrement()),
        onAddCounter: (val) => dispatch(add(val)),
        onSubCounter: (val) => dispatch(substract(val)),
        onStoreResult: (val) => dispatch(storeResult(val)),
        onDeleteResult: (id) => dispatch(deleteResult(id)),
        onAddPerson: (pers) => dispatch(addPerson(pers)),
        onDeletePerson: (id) => dispatch(removePerson(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);