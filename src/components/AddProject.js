import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: [
      'Sito Web',
      'Web App',
      'Programma Desktop',
      'Applicazione Android',
      'Android Game'
    ]
  };

  handleSubmit(e) {
    if(this.refs.title.value == '') {
      alert('Titolo richiesto');
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, () => {
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoriesOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>;
    });
    return (
      <div>
        <h3>Aggiungi un progetto</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Titolo:</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Categoria:</label><br />
            <select ref="category">
              {categoriesOptions}
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  categories: React.PropTypes.array,
  addProject: React.PropTypes.func
}

export default AddProject;
