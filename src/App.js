import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import uuid from 'uuid'
// import ReactDOM from 'react-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: "Credit Risk Modelling",
          category: "Machine Learning"
        },
        {
          id: uuid.v4(),
          title: "Virtual Assistant for Windows",
          category: "Software Development"
        },
        {
          id: uuid.v4(),
          title: "Intrusion Detection System",
          category: "Machine Learning"
        },
        {
          id: uuid.v4(),
          title: "NSS Website",
          category: "Web Development"
        }
      ]
    });
  }

  handleAddProject(project) {
    let newProjectList = this.state.projects;
    newProjectList.push(project);
    this.setState({projects:newProjectList});
  }

  handleDeleteProject(id) {
    let projectsList = this.state.projects;
    let index = projectsList.find(x => x.id === id);
    projectsList.splice(index, 1);
    this.setState({projects:projectsList});
  }

  render() {
    return (
      <div className="App">
        <h1>Project Manager</h1>
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
      </div>
    );
  }
}

export default App;
