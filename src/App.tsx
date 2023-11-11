import './App.css'
import cronstrue from 'cronstrue'
import { generateCronExpression } from './generator';

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


export default App
