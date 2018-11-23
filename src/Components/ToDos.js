import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import ToDoItem from './ToDoItem';

class ToDos extends Component {
    render() {
        let todoItems;
        if (this.props.todos) {
            todoItems = this.props.todos.map(todo => {
                return (
                    <ToDoItem key={todo.title} todo={todo} />
                );
            });
        }
        return (
            <div className="ToDos">
                <h3>ToDo List</h3>
                {todoItems}
            </div>
        );
    }
}

export default ToDos;
