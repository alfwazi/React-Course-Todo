import React from 'react';
import TodoForm from './TodoForm';
import testUtils from 'react-dom/test-utils';
import TodoList from './TodoList';
class TodoContanier extends React.Component {
    state = {
        todos: [],
    }

    addItem = (item) => {
        const newTodos = [...this.state.todos];
        newTodos.push({...item});
        this.setState({ todos: newTodos })
    }
    deleteItem = (index) => {
        const newTodos = [... this.state.todos]
        newTodos.splice(index, 1)
        this.setState(
            this.setState({ todos: newTodos })
        )
    }
    doneItem = (index) => {
        const newTodos = [...this.state.todos];
        newTodos[index].done = !newTodos[index].done;
        this.setState({ todos: newTodos });
    }

    render() {
        return (
         <div>
             <img className="logo" src={this.props.logo} alt="My logo" />
             <h1 className="title"> Todo App</h1>
             <TodoForm addItem={this.addItem}/>
             <hr className="hr" />
             <TodoList 
             doneItem   ={this.doneItem}
             deleteItem ={this.deleteItem}
             todoItems  ={this.state.todos}
             />
         </div>   
        )
    }
}
export default TodoContanier;