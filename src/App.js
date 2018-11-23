import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import ToDos from './Components/ToDos'
import uuid from 'uuid'
import Axios from 'axios'
// import ReactDOM from 'react-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodoAxios() {
    Axios({
      method:'get',
      url:'https://jsonplaceholder.typicode.com/todos',
      responseType:'json'
    })
    .then(function(response) {
      console.log(response.data);
      // this.setState({ todos: response.data });
    }).catch (function(error) {
      console.log(error);
    });
  }

  getToDo() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ todos: data }, function () {
          console.log(this.state);
        });
      }.bind(this),
      error: function (xhr, status, error) {
        console.log(error);
      }
    });
  }

  getProjects() {
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

  componentDidMount() {
    this.getToDo();
  }

  componentWillMount() {
    this.getProjects();
    this.getToDo();
  }

  handleAddProject(project) {
    let newProjectList = this.state.projects;
    newProjectList.push(project);
    this.setState({ projects: newProjectList });
  }

  handleDeleteProject(id) {
    let projectsList = this.state.projects;
    let index = projectsList.find(x => x.id === id);
    projectsList.splice(index, 1);
    this.setState({ projects: projectsList });
  }

  render() {
    return (
      <div className="App">
        <h1>Project Manager</h1>
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr />
        <ToDos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
