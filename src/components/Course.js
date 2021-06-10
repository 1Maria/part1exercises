import React from 'react';

const Header = (props) => {
    return ( 
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}
      
const Part = (props) => {
    return (
        <div>{props.name} {props.exercises}</div>
    )
}
  
const Content = (props) => {
    return (
      <div>
        {props.course.parts.map(part => 
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
      </div>
    )
}
  
const Total = (props) => {
    const totalExercises = props.course.parts.reduce((sum, part) => {
        return sum + part.exercises;
    }, 0);
    return (
      <div>
        <p><b>total of {totalExercises} exercises</b></p>
      </div>
    )
}

const Course = (props) => {
    return (
        <div>
          <Header course={props.course} />
          <Content course={props.course} />
          <Total course={props.course} />
        </div>
    );
}
export default Course;