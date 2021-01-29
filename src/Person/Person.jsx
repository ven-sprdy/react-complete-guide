import React, { Component } from 'react';

class Person extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // componentWillMount = () => {
  //   console.log('Person will mount');
  // }

  // componentDidMount = () => {
  //   console.log('Person mounted');
  // }

  // componentWillReceiveProps = (nextProps) => {
  //   console.log('Person will receive props', nextProps);
  // }

  // componentWillUpdate = (nextProps, nextState) => {
  //   console.log('Person will update', nextProps, nextState);
  // }

  // componentDidUpdate = () => {
  //   console.log('Person did update');
  // }

  // componentWillUnmount = () => {
  //   console.log('Person will unmount');
  // }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="PersonWrapper">
        <p>I'm {this.props.name} and I'm {this.props.age} years old.</p>
      </div>
    );
  }
}

export default Person;
