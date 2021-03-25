import React from 'react' 

export default class  Todo extends React.Component{
    render() {
        return (
            <div className="item-div noselect">  
                <li onClick={() => this.props.doneItem(this.props.index)}  className={this.props.done ? "done" : ""+"list-item"} >
                {this.props.value}
                </li>
                <button
          className="btn btn__delete"
          onClick={() => this.props.deleteItem(this.props.index)}
        ></button>
            </div>
        )
    }
}
