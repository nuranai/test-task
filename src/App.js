import React, { useState } from 'react'
import "./App.css"

export default function App() {
  // состояние основной кнопки
  const [number, setNumber] = useState("1")
  // состояние видимости блоки кнопок с выборами
  const [visibility, setVisibility] = useState(false)

  function ChangeNum(e) {
    e.preventDefault()
    // меняем состояние основной кнопки
    setNumber(e.target.innerText)
    // "прячем" блок с выбором
    setVisibility(false)
  }

  return (
    <div className="wrapper">
      <button onClick={() => setVisibility(!visibility)} className="main">{number}</button>
      {
        visibility && <div className="choise_block">
          {["1", "2", "3"].map(val => <button key={val} onClick={ChangeNum} className="choise">{val}</button>)}
        </div>
      }
    </div>
  )
};