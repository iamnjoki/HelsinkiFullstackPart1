import React, {useState} from 'react'

function Heading({info}){
  return(
    <h3>{info}</h3>
  )
}
function Anecdote({value}) {
  return(
    <div>{value}</div>
  )
}
function Votes({value}){
  return(
    <div>has {value} votes</div>
  )
}
function Button({handleClick, text}){
    return(
      <>
      <button onClick={handleClick}>{text}</button>
      </>
    )
  }
  
function App() {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const random = Math.floor(Math.random() * anecdotes.length);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const mostVotes = Math.max(...votes);
  const mostVoted = anecdotes[votes.indexOf(mostVotes)];

function randomAnecdote(){
  setSelected(random)
}

function addVote(){
  const copyOfVotes = [...votes];
   copyOfVotes[selected] += 1
   setVotes(copyOfVotes)
}

    return (
    <>
    <Heading info="Get your daily dose of an Anecdote"/>
    <Anecdote value={anecdotes[selected]} />
    <Votes value={votes[selected]}/>
    <Button handleClick={addVote} text="Vote" />
    <Button handleClick={randomAnecdote} text="Next Anecdote"/>

    <Heading info="Anecdote with the most votes"/>
    <Anecdote value={mostVoted}/>
    <Votes value={mostVotes}/>
    </>
  );
} 

export default App;
