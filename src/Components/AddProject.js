import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject : {}
        }
    }

    static defaultProps = {
        categories: [
            'Software Development',
            'Machine Learning',
            'Web Development',
            'Web Design',
            'Mobile Development'
        ]
    }

    handleSubmit(e) {
        if (this.refs.title.value === '') {
            alert("Title cannot be empty\n");
        }
        else {
            this.setState({newProject : {
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }}, function() {
                    this.props.addProject(this.state.newProject);
                });
        }
        e.preventDefault();
    }
    
    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        return (
            <div className="AddProject">
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label> <br />
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <label>Using</label> <br />
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default AddProject;
