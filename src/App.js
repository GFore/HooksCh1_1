import React from 'react';
import Hook1 from './Hook1';

class MyName extends React.Component {
  constructor (props) {
    super(props)
    this.state = { name: '' }
    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    this.setState({ name: evt.target.value })
  }

  render () {
    const { name } = this.state;

    return (
      <div>
        <h1>My name is: {name}</h1>
        <input type="text" value={name} onChange={(e) => this.handleChange(e)} />
        <Hook1 />
      </div>
    )
  }
}

export default MyName;
