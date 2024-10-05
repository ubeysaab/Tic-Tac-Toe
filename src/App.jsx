import { useEffect, useState } from 'react'

import Confetti from 'react-confetti'
import Button from './Components/Button'
import './App.css'

function App() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const startingArray = [
    
    {
    id:"-0",
    checked:false,
    content:""
  },
    {
    id:"-1",
    checked:false,
    content:""
  },
    {
    id:"-2",
    checked:false,
    content:""
  },
    {
    id:"-3",
    checked:false,
    content:""
  },
    {
    id:"-4",
    checked:false,
    content:""
  },
    {
    id:"-5",
    checked:false,
    content:""
  },
    {
    id:"-6",
    checked:false,
    content:""
  },
    {
    id:"-7",
    checked:false,
    content:""
  },
    {
    id:"-8",
    checked:false,
    content:""
  },




]
  const [count, setCount] = useState(1)
  const [winner,setWinner] = useState("")

  const [data,setData] =useState(startingArray)

// setWinner(winner)

useEffect(()=>{


  checkwinner()
},[data])


  const styles = {
    grid:{
      display:"grid",
      gridTemplateColumns: "repeat(3,50px)",
      gridTemplateRows:"repeat(3,50px)",
      gap:"5px"
    },
    flex:{

      display:"flex",
      width:"80%",
      height:"60dvh",
      border:"1px solid black",
      justifyContent:"center",
      alignItems:"center",
      marginInline:"auto"

    },
    button:{
      marginTop: '16px',
      padding:'10px',


    }
  }


  function checkwinner(){


// Horizontal Wins
if (data[0].content === data[1].content && data[1].content === data[2].content && data[0].content !== "") {
  setWinner(`Winner: ${data[0].content}`);
}
if (data[3].content === data[4].content && data[4].content === data[5].content && data[3].content !== "") {
  setWinner(`Winner: ${data[3].content}`);
}
if (data[6].content === data[7].content && data[7].content === data[8].content && data[6].content !== "") {
  setWinner(`Winner: ${data[6].content}`);
}

// Vertical Wins
if (data[0].content === data[3].content && data[3].content === data[6].content && data[0].content !== "") {
  setWinner(`Winner:, ${data[0].content}`);
}
if (data[1].content === data[4].content && data[4].content === data[7].content && data[1].content !== "") {
  setWinner(`Winner:', ${data[1].content}`);
}
if (data[2].content === data[5].content && data[5].content === data[8].content && data[2].content !== "") {
  setWinner(`Winner ${data[2].content}`);
}

// Diagonal Wins
if (data[0].content === data[4].content && data[4].content === data[8].content && data[0].content !== "") {
  setWinner(`Winner:, ${data[0].content}`);
}
if (data[2].content === data[4].content && data[4].content === data[6].content && data[2].content !== "") {
  setWinner(`Winner:, ${data[2].content}`);
}

  }


  function handleRestart(){
    setData(startingArray);
    setWinner("")
    setCount(1)
  }

  function handle(id){
    const newArray = data.map(item => {
      return (item.id==id &&item.checked != true ? {...item ,checked:true,content:count%2==0?"O":"X"}:item
      )
    })
    const element = data.filter(element => element.id==id);
    element[0].checked != true &&setCount(prev => prev+1)
    setData(newArray)
  }
  return (
    <>
       
    <main style={styles.flex}>
    {
      winner &&  <Confetti
      width={width}
      height={height}
    />
    }
    <div>
    <div  style={styles.grid}>
      
      {
        data.map((item,i)=><Button
        content = {item.content}
        id={item.id}
        key={item.id}
        handleClick = {handle}
        winner={winner}
        
        
        />)
      }

     </div>


{
  winner && <button style={styles.button}   onClick={handleRestart}>
    Start a new Game
  </button>
}

    </div>
    </main>
    
    {
      winner&&<span> {winner}</span>
    }

    </>
  )
}

export default App
