import React, { Component } from 'react';
// import ReactDOM from 'react-dom';


class ToDoItem extends Component {
    render() {
        return (
            <li className="ToDoItem">
                <strong>{this.props.todo.title}</strong>
            </li>
        );
    }
}

export default ToDoItem;
