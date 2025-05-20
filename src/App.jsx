import './App.css'

function App() {
  function changeColor(rang){
    const body=document.getElementsByClassName("body")[0];
    body.style.backgroundColor=rang;
  }
  return (
    <>
      <div className="body">
        <button onClick={()=>changeColor('red')}>RED</button>
        <button onClick={()=>changeColor('blue')}>BLUE</button>
        <button onClick={()=>changeColor('yellow')}>YELLOW</button>
      </div>
    </>
  )
}

export default App
