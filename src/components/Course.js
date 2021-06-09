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
      <div>
        <p>
          {props.name} {props.exercises}
        </p>
      </div>
    )
}
  
const Content = (props) => {
    return (
      <div>
        <Part name={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
        <Part name={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
        <Part name={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
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