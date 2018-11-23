import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class ProjectItem extends Component {
    render() {
        return (
            <li className="ProjectItem">
                <b>{this.props.project.title}</b> - {this.props.project.category}
            </li>
        );
    }
}

export default ProjectItem;
