import React, {useState} from 'react'

function Button({handleClick, text}){
    return(
      <>
      <button onClick={handleClick}>{text}</button>
      </>
    )
  }

function Statistics({text, value, info}){
  if(value === 0 || value < 0.1){
    return ""
  }if(value === "."){
    return "No feedback given"
  }
  return(
    <tbody>
    <tr>
        {info}
        {text} {value}
    </tr>
    </tbody>
     
  )
}

function Heading({info}){
  return(
    <h3>{info}</h3>
  )
}

function App() {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setFeedback] = useState([])
  const [average, setAverage] = useState(0)

function handleClickGood() {
  setGood(good + 1)
  setFeedback(allFeedback.concat("g"))
  setAverage(average + 1)
}

function handleClickNeutral(){
  setNeutral(neutral + 1)
   setFeedback(allFeedback.concat("n"))
   setAverage(average + 1)
}

function handleClickBad() {
  setBad(bad - 1)
  setFeedback(allFeedback.concat("b"))
  setAverage(average + 1)
}

function calcAverage(){
   return (average / 3).toFixed(1);
}

function positiveFeedback(){
  if(allFeedback.length === 0){
    return "."
  }
  return (good / allFeedback.length * 100).toFixed(1) + "%";
}

return (
  <>
     <Heading info="Please give your feedback. Thankyou!"/>
     <Button handleClick={handleClickGood} text="Good"/>
     <Button handleClick={handleClickNeutral} text="Neutral"/>
     <Button handleClick={handleClickBad} text="Bad"/>
     
     
     <Heading info="Statistics"/>
     <Statistics text="Good:" value={good}/> 
     <Statistics text="Neutral:" value={neutral}/>
     <Statistics text="Bad:" value={bad}/>
     <Statistics text="All feedback:" value={allFeedback.length} />
     <Statistics text="Average:" value={calcAverage()} />
     <Statistics text="Positive feedback percentage:" value={positiveFeedback()} />
  </>
  );
}

export default App;
