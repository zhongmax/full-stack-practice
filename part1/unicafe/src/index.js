import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
  const { good, neutral, bad, average, positive } = props
  if (props.allClicks === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <Statistic text='good' value={good} />
      <Statistic text='neutral' value={neutral} />
      <Statistic text='bad' value={bad} />
      <Statistic text='all' value={good + neutral + bad} />
      <Statistic text='average' value={isNaN(average) ? 0 : average} />
      <Statistic text='positive' value={isNaN(positive) ? 0 : positive} />

    </div>
  )
}

const Statistic = ({ text, value }) => {

  if (text == 'positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }
}



const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const clickGood = () => {
    setGood(good + 1)
    setAll(allClicks + 1)
  }
  const clickNeutral = () => {
    setNeutral(neutral + 1)
    setAll(allClicks + 1)
  }
  const clickBad = () => {
    setBad(bad + 1)
    setAll(allClicks + 1)
  }

  const average = (good - bad) / (good + neutral + bad)

  const positive = good / (good + neutral + bad) * 100

  return (
    <table>
      <tr>
        <h1>give feedback</h1>
      </tr>
      <tr>
        <Button onClick={clickGood} text='good' />
        <Button onClick={clickNeutral} text='neutral' />
        <Button onClick={clickBad} text='bad' />
      </tr>
      <tr>
        <h1>stattistics</h1>
      </tr>
      <Statistics good={good} neutral={neutral} bad={bad} average={average} positive={positive} allClicks={allClicks} />

    </table>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


