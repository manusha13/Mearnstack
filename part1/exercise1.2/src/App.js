const courses = 'half stack application development'
const manu1 = 'DBMS'
const exercise1 = 43
const manu2 = 'Java'
const exercise2 = 27
const manu3 = 'Fundamentals of React'
const exercise3 = 25
const Header = (props) => {
  return (
    <div>
      <p> {props.courses}</p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercise {props.total}</p>
    </div>
  )
}
  const Part = (props) => {
    return(
      <p>
        {props.part} {props.exercise}
      </p>
    )
  }
const Content = () => {
  return(
    <div>
      <Part part={manu1} exercise={exercise1}/>
      <Part part={manu2} exercise={exercise2}/>
      <Part part={manu3} exercise={exercise3}/>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <Header courses={courses} />
      <Content/>
      <Total total= {exercise1 + exercise2 + exercise3} />
    </div>
  )
}
export default App