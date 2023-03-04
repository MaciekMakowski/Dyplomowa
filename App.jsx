import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PartOne from "./components/part1.jsx";
import PartTwo from "./components/part2.jsx";
import PartThree from "./components/part3.jsx";
const App = () => {
  return (
        <div style={{display:"flex", flexDirection:"row", height:'500px'}}>
            <PartOne/>
            <PartTwo/>
            <PartThree/>
        </div>
  )
}

export default App
