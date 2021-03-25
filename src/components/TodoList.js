import react from 'react';
import Todo from './Todo'
export  default class TodoList extends react.Component {
render () {
    const todoItems = this.props.todoItems.map((item,index)=> {
        return (
            <Todo index = {index}
            doneItem    = {this.props.doneItem}
            deleteItem  = {this.props.deleteItem}
            done        =  {item.done}          
            value       = {item.value}
            key         = {index}
            />           
        );        
    });
    return (
        <ul>{todoItems}</ul>
        )

}
}
