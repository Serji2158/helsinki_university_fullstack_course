import { useState } from 'react'

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

const Title = ({ text }) => (
  <h2>{text}</h2>
)
  
// const StatisticLine = ({ text, value, props }) => (
//   <div >
//     <p>{text}: {value} {props}</p>
//   </div>  
// )

// const Statistics = ({text, good, neutral, bad, total, average, positive}) => {
//   return (
//     <>
//       <Title text={text} />
//       <StatisticLine text="GOOD" value={good} />
//       <StatisticLine text="NEUTRAL" value={neutral}/>
//       <StatisticLine text="BAD" value={bad} />
//       <StatisticLine text="TOTAL" value={total} />
//       <StatisticLine text="AVERAGE" value={average} />
//       <StatisticLine text="POSITIVE" props="%" value={positive} />
//     </>      
//   )
// }

const Statistics = ({text, good, neutral, bad, total, average, positive}) => {
  return (
    <>
    <Title text={text} />
    <table>
      {/* <caption>
        Statistics
      </caption> */}      
      <tbody>
        <tr>
          <td>GOOD</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>NEUTRAL</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>BAD</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>TOTAL</td>
          <td>{total}</td>
        </tr>
        <tr>
          <td>AVERAGE</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>POSITIVE</td>
          <td>{positive}%</td>
        </tr>
      </tbody>      
      </table>
    </>  
  )
}
  

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
  const handleClickGood = () => setGood(good + 1)    
  
  const handleClickNeutral = () => setNeutral(neutral + 1)    
   
  const handleClickBad = () => setBad(bad + 1)    
   
  const total = good + neutral + bad

  const average = (good - bad)/total || 0

  const positive = (good / total) * 100 || 0
  
  return (
    <div>
      <Title text="Give feedback" />
      <Button onClick={handleClickGood} text="GOOD" />
      <Button onClick={handleClickNeutral} text="NEUTRAL" />
      <Button onClick={handleClickBad} text="BAD" />
      <Statistics 
        text="Statistics"
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
      {/* {total ? (
        <Statistics
        text="Statistics"
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
      ) :
        (
          <Title text="No any feedback given yet" />
      )} */}
      
      {/* <Title text="Statistics" />
      <Bullet text="GOOD" counter={good} />
      <Bullet text="NEUTRAL" counter={neutral}/>
      <Bullet text="BAD" counter={bad} />
      <Bullet text="TOTAL" counter={total} />
      <Bullet text="AVERAGE" counter={average} />
      <Bullet text="POSITIVE" props="%" counter={positive} /> */}
    </div>
  )
}

export default App
