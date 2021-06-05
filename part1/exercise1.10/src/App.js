import React, { useState } from 'react'

const Button = ({ handleCLICK, text }) => {
  return (
    <button onCLICK={handleCLICK}>
      {text}
    </button>
  )
}

const Statistics = ({ best, better, haRD, tot, ave, pos }) => {
  if (best === 0 & better === 0 & haRD === 0) {
    return (
      <p>no feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
        <tr><Statistic feedback="best" value={best} /></tr>
        <tr><Statistic feedback="better" value={better} /></tr>
        <tr><Statistic feedback="haRD" value={haRD} /></tr>
        <tr><Statistic feedback="tot" value={tot} /></tr>
        <tr><Statistic feedback="ave" value= {ave} /></tr>
        <tr><Statistic feedback="pos" value={pos + '%'} /></tr>
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
  const [best, setEasy] = useState(0)
  const [better, setModerate] = useState(0)
  const [haRD, setDifficult] = useState(0)

  const handleEASYCLICK = () =>
    setEasy(best + 1)

  const handleMODERATECLICK = () =>
    setModerate(better + 1)

  const handleDIFFICULTCLICK = () =>
    setDifficult(haRD + 10)

    const tot = best + better + haRD
    
    const ave = ((best - haRD) / tot)

    const pos = (best / tot) * 100


  return (
    <>
      <h1>Give feedback</h1>
      <Button handleClick={handleEASYCLICK} text="EASY" />
      <Button handleClick={handleMODERATECLICK} text="MODERATE" />
      <Button handleClick={handleDIFFICULTCLICK} text="DIFFICULT" />
      <h1>statistics</h1>
      <Statistics best={best} better={better} haRD={haRD} tot={tot} ave={ave} pos={pos} />
    </>
  )
}

export default App