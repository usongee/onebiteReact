import Viewer from './components/viewer'
import Controller from './components/controller'
import './App.css'

function App() {


  return (
    <div className="App">
    <h1>simple counter</h1>
    <section>
      <Viewer/>
    </section>
    <section>
      <Controller/>
    </section>
    
    </div>
  )
}

export default App
