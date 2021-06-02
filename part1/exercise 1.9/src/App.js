import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ good, moderate, difficult, all, average, positive }) => {
 
  return (
    <table>
      <tbody>
        <tr><Statistic feedback="good" value={good} /></tr>
        <tr><Statistic feedback="moderate" value={moderate} /></tr>
        <tr><Statistic feedback="difficult" value={difficult} /></tr>
        <tr><Statistic feedback="all" value={all} /></tr>
        <tr><Statistic feedback="average" value= {average} /></tr>
        <tr><Statistic feedback="positive" value={positive + '%'} /></tr>
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
  const [Moderate, setModerate] = useState(0)
  const [Difficult, setDifficult] = useState(0)

  const handlegoodClick = () =>
    setgood(good + 1)

  const handleModerateClick = () =>
    setModerate(Moderate + 1)

  const handleDifficultClick = () =>
    setDifficult(Difficult + 1)

    const All = good + Moderate + Difficult
    
    const Average = ((good - Difficult) / All)

    const Positive = (good / All) * 100


  return (
    <>
      <h1>give Feedback</h1>
      <Button handleClick={handlegoodClick} text="good" />
      <Button handleClick={handleModerateClick} text="Moderate" />
      <Button handleClick={handleDifficultClick} text="Difficult" />
      <h1>Statistics</h1>
      <Statistics good={good} Moderate={Moderate} Difficult={Difficult} All={All} Average={Average} Positive={Positive} />
    </>
  )
}

export default App