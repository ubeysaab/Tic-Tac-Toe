import React, { useState } from 'react'

function Button({content,id,handleClick,winner}) {


  

  const styles = {
    box : {
      display:"block",
      width:"50px",
      height:"50px",

    },
    disabled:{
      pointerEvents:"none",
    }
  }
  return (
<button  
  onClick={() => handleClick(id)} 
  style={winner ? {...styles.box, ...styles.disabled} : styles.box}>
  {content}
</button>  )
}

export default Button