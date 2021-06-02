import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ good, bad, Difficult, }) => {
 
  return (
    <table>
      <tbody>
        <tr><Statistic feedback="good" value={good} /></tr>
        <tr><Statistic feedback="bad" value={bad} /></tr>
        <tr><Statistic feedback="Difficult" value={Difficult} /></tr>
      </tbody>
    </table>
  )
}

const Statistic = ({ Feedback, Value }) => {
  return (
    <td>{Feedback} {Value}</td>
  )
}

const App = () => {
  const [good, setgood] = useState(0)
  const [bad, setbad] = useState(0)
  const [Difficult, setDifficult] = useState(0)

  const handlegoodClick = () =>
    setgood(good + 1)

  const handlebadClick = () =>
    setbad(bad + 1)

  const handleDifficultClick = () =>
    setDifficult(Difficult + 1)

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handlegoodClick} text="good" />
      <Button handleClick={handlebadClick} text="bad" />
      <Button handleClick={handleDifficultClick} text="Difficult" />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} Difficult={Difficult} />
    </>
  )
}

export default App