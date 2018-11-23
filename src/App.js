import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
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
          title: "Credit Risk Modelling",
          category: "Machine Learning"
        },
        {
          title: "Virtual Assistant for Windows",
          category: "Software Development"
        },
        {
          title: "Intrusion Detection System",
          category: "Machine Learning"
        },
        {
          title: "NSS Website",
          category: "Web Development"
        }
      ]
    });
  }

  handleAddProject(project) {
    // console.log(project);
    let newProjectList = this.state.projects;
    newProjectList.push(project);
    this.setState({projects:newProjectList});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
