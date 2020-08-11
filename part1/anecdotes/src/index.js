import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const points = Array(6).fill(0)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)
  const [max, setMax] = useState(0)
  const clickBtn = () => {
    const random = Math.floor(Math.random() * 6)
    setSelected(random)
    setVote(points[random])
  }

  const voteClick = () => {
    points[selected] += 1
    console.log(selected)
    setVote(points[selected])
    console.log('pointes: ', points)
    setMax(points.indexOf(Math.max(...points)))
  }

  return(
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has { vote } votes</p>
      <button onClick={voteClick}>vote</button>
      <button onClick={clickBtn}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[max]}</p>
      <p>has { points[max] } votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Dubugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to dubug it.'

]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root')
);

