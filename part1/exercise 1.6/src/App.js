import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({  ALL, AVERAGE, NEGATIVE, EASY, MODERATE, DIFFICULT }) => {
 
  return (
    <table>
      <tbody>
        <tr><Statistic feedback="ALL" value={ALL} /></tr>
        <tr><Statistic feedback="AVERAGE" value= {AVERAGE} /></tr>
        <tr><Statistic feedback="NEGATIVE" value={NEGATIVE + '%'} /></tr>
        <tr><Statistic feedback="EASY" value={EASY} /></tr>
        <tr><Statistic feedback="MODERATE" value={MODERATE} /></tr>
        <tr><Statistic feedback="DIFFICULT " value={DIFFICULT} /></tr>
      </tbody>
    </table>
  )
}

const Statistic = ({ feedback, value }) => {
  return (
    <td>{feedback} {value}</td>
  )
}

const App = () => {
  const [EASY, setEasy] = useState(0)
  const [MODERATE, setModerate] = useState(0)
  const [DIFFICULT, setDifficult] = useState(0)

  const handleEASYClick = () =>
    setEasy(EASY + 1)

  const handleMODERATEClick = () =>
    setModerate(MODERATE + 1)

  const handleDIFFICULTClick = () =>
    setDifficult(DIFFICULT + 1)

    const ALL = EASY + MODERATE + DIFFICULT
    
    const AVERAGE = ((EASY - DIFFICULT) / ALL)

    const NEGATIVE = (EASY / ALL) * 100


  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleEASYClick} text="EASY" />
      <Button handleClick={handleMODERATEClick} text="MODERATE" />
      <Button handleClick={handleDIFFICULTClick} text="DIFFICULT" />
      <h1>statistics</h1>
      <Statistics EASY={EASY} MODERATE={MODERATE} DIFFICULT={DIFFICULT} ALL={ALL} AVERAGE={AVERAGE} NEGATIVE={NEGATIVE} />
    </>
  )
}

export default App