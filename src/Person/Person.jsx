import React from 'react';

const person = (props) => {
  return (
    <div className="PersonWrapper">
        <p>I'm {props.name} and I'm {props.age} years old.</p>
      </div>
  );
}

export default person;
