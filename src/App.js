import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './components/Projects';
import AddProject from './components/AddProject';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'JSON',
      cache: false,
      success: function(data) {
        this.setState({todos: data}, () => {
          console.log(this.state);
        });
      }.bind(this),
      error: (xhr, status,err) => {
        console.log(err);
      }
    });
  }

  getProjects() {
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Al Pioppeto',
        category: 'Sito Web'
      },
      {
        id: uuid.v4(),
        title: 'Trattoria dai Tosi Grandi',
        category: 'Sito Web'
      },
      {
        id: uuid.v4(),
        title: 'CAOS Studio',
        category: 'Sisto Web'
      },
      {
        id: uuid.v4(),
        title: 'Secret Chat',
        category: 'Applicazione Android'
      },
      {
        id: uuid.v4(),
        title: 'Memory',
        category: 'Android Game'
      },
      {
        id: uuid.v4(),
        title: 'PDF Archiviator',
        category: 'Programma Desktop VB.NET'
      }

    ]});
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount() {

  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState(projects: projects);
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
  }

  render() {
    return (
      <div className="App">
        <h1>Project Manager</h1>
        <hr />
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects name="Gianvito Bono" projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
