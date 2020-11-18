import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {

  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )

}

const Content = (props) => {

  return (
    <div>
      <Part content = {props.content[0].name} no = {props.content[0].exercises}/>
      <Part content = {props.content[1].name} no = {props.content[1].exercises}/>
      <Part content = {props.content[2].name} no = {props.content[2].exercises}/>
    </div>
  )

}

const Part = (props) => {

  return (

    <div>
      <p>
        {props.content} {props.no}
      </p>
    </div>

  )

}

const Total = (props) => {

  

  return (
   
    <div>
      <p>  
        Number of exercises {props.content[0].exercises + props.content[1].exercises + props.content[2].exercises}
      </p>
    </div>
    

  )

}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [

    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  


  return (

    <div>

      <Header course={course} />
      <Content content={parts}  />
      <Total content={parts} />

    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))