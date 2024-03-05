import { useState, useContext } from 'react'
import DataContext from './DataContext'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import './App.css'

function App() {

  const [userInfo, setUserInfo] = useState({
    name: "Jeremy",
    favColor: "blue",
    favFood: "Chicken Parm",
    favMovie: "Goodfellas"
  })

  return (
  
      <div className="app">
        <div className="header">
          <h1>Intro to Context</h1>
        </div>

        <div className="main">

   <DataContext.Provider value={{userInfo, setUserInfo}}>
          <ComponentA/>
          <ComponentB/>
  </DataContext.Provider>

        </div>
 </div>
  )
}

export default App
