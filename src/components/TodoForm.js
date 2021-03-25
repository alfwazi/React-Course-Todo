import React from 'react';
class TodoForm extends React.Component{ 
        state = 
        { 
            item:{}
        };
    getItem = (e) => {
        this.setState({item: { value: e.target.value}});
            };
    
    render() {
        return (
            <div className="form">
                <input className="item-input" type="text" onChange={(e) => this.getItem(e)}></input>
                <button type="button" className="btn btn__add" onClick={() => this.props.addItem(this.state.item)}></button> 
            </div>
        ) 
    }
}

export default TodoForm;