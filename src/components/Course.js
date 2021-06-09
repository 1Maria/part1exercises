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
        <li>{props.name} {props.exercises}</li>
    )
}
  
const Content = (props) => {
    return (
      <div>
        <ul>
            {props.course.parts.map(part => 
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            )}
        </ul>
      </div>
    )
}
  
const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
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