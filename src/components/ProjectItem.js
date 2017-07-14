import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="ProjectItem">
        <h3>{this.props.project.title}</h3>
        <p>{this.props.project.category}</p> <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;
