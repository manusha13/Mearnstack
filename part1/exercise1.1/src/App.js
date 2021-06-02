const Header = (props) => {
  return (
    <div>
      <p> {props.course}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <p> {props.part},{props.exercises}</p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}
const App = () => {
  const courses = 'half Stack application development'
  const manu1 = 'Fundamentals of React'
  const exercise1 = 10
  const manu2 = 'Java '
  const exercise2 = 9
  const manu3 = 'DBMS'
  const exercise3 = 56
  return (
    <div>
      <Header courses={courses} />
      <Content  part={manu1} exercise={exercise1} />
      <Content part={manu2} exercise={exercise2} /> 
      <Content part={manu3} exercise={exercise3} /> 
      <Total total= {exercise1 + exercise2 + exercise3} />
    </div>
  )
}
export default App;
