import './App.css'
import Home from './Pages/Home'
import { QuestionsProvider } from './Context/Question.context'


function App() {


  return (
    <>
    <QuestionsProvider>
    <Home />
    </QuestionsProvider>
    </>
  )
}

export default App
