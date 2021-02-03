import React from 'react';

const Person = (props) => {
  return (
    <div className="PersonWrapper">
        <p>I'm {props.name} and I'm {props.age} years old.</p>
    </div>
  );
}

export default Person;
