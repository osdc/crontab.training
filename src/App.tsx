import './App.css'
import cronstrue from 'cronstrue'

function App() {
  const cronExpression = generateCronExpression();

  return (
    <>
      <h1>crontab.training</h1>
      <p>{cronExpression}</p>
      <p>{cronstrue.toString(cronExpression)}</p>
    </>
  )
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


function generateCronExpression() {
  const minute = getRandomIntInclusive(0, 59);
  const hour = getRandomIntInclusive(0, 23);
  const dayOfMonth = getRandomIntInclusive(1, 31);
  const month = getRandomIntInclusive(1, 12);
  const dayOfWeek = getRandomIntInclusive(0, 6);


  return `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`
}

export default App
