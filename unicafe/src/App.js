import { useState } from 'react'

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

const Title = ({ text }) => (
  <h2>{text}</h2>
)
  
const Bullet = ({ text, counter, props }) => (
  <div >
    <p>{text}: {counter} {props}</p>
  </div>
  
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
  const handleClickGood = () => setGood(good + 1)    
  
  const handleClickNeutral = () => setNeutral(neutral + 1)    
   
  const handleClickBad = () => setBad(bad + 1)    
   
  const total = good + neutral + bad

  const average = (good - bad)/total

  const positive = (good / total) * 100
  
  return (
    <div>
      <Title text="Give feedback" />
      <Button onClick={handleClickGood} text="GOOD" />
      <Button onClick={handleClickNeutral} text="NEUTRAL" />
      <Button onClick={handleClickBad} text="BAD" />
      <Title text="Statistics" />
      <Bullet text="GOOD" counter={good} />
      <Bullet text="NEUTRAL" counter={neutral}/>
      <Bullet text="BAD" counter={bad} />
      <Bullet text="TOTAL" counter={total} />
      <Bullet text="AVERAGE" counter={average} />
      <Bullet text="POSITIVE" props="%" counter={positive} />
    </div>
  )
}

export default App
