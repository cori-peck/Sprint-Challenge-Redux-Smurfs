import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class SmurfForm extends React.Component {
    state = {
            name: '',
            age: '',
            height: ''
      }
  
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    addSmurf = e => {
      e.preventDefault();
      this.props.addSmurf(this.state);
      this.setState({ name: '', age: '', height: '' });
    }

    render () {
        return (
            <form onSubmit={this.addSmurf}>
                <h1>Add a Smurf to the Village</h1>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
                <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} />
                <input type="text" name="height" placeholder="Height" value={this.state.height} onChange={this.handleChange} />
                <button type="submit">Add Smurf</button>
            </form>
        )
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { addSmurf })(SmurfForm)
