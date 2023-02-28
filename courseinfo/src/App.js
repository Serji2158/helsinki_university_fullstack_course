const App = () => {

  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }

  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  const Header = ({ course }) => {
    console.log(course)
    return (
      <div>
        <h1>{course.name}</h1>
      </div>
    )
  }

  // const Content = ({part1, part2, part3, exercises1, exercises2, exercises3}) => {
  //   return (
  //     <>
  //       <p>
  //         {part1} {exercises1}
  //       </p>
  //       <p>
  //         {part2} {exercises2}
  //       </p>
  //       <p>
  //         {part3} {exercises3}
  //       </p>
  //     </>
  //   )
  // }

  const Part = ({
    part,
    // exercises
  }) => {
    console.log(part)
    return (
      <div>
        <p>
          {part.name} {part.exercises}
        </p>
      </div>
    )
  }
  const Content = (
    course
    // parts
    // part1,
    // part2,
    // part3,
    // exercises1,
    // exercises2,
    // exercises3
  ) => {
    console.log(course)
    return (
      <div>
        <Part
          part={course.parts[0]}
        // exercises={exercises1}
        />
        <Part
          part={course.parts[1]}
          // exercises={exercises2}
        />
        <Part
          part={course.parts[2]}
          // exercises={exercises3}
        />
      </div>
    )
  }
  

  const Total = ({
    parts,
    // part1,
    // part2,
    // part3
  }) => {
    console.log(parts);
    // console.log(part1, part2, part3)
    // console.log(part1.exercises, part2.exercises, part3.exercises)
    return (
      <div>
        <p>
          Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
        </p>
      </div>
    )
  }

  return (
    <div>
      <Header
        course={course}
      />
      <Content 
        parts={course.parts}
        // part1={part1}
        // part2={part2}
        // part3={part3}
        // exercises1={exercises1}
        // exercises2={exercises2}
        // exercises3={exercises3}
      />      
      <Total
        parts={course.parts}
        // part1={part1}
        // part2={part2}
        // part3={part3}
        // exercises1={exercises1}
        // exercises2={exercises2}
        // exercises3={exercises3}
      />
    </div>
  )
}



export default App;
