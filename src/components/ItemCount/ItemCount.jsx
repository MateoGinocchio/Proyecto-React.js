import React from 'react'
import { useState } from 'react';
import "../ItemCount/ItemCount.css"

const ItemCount = ({stock}) => {

    const [clicks, setClicks] = useState(0)

    const addClick = () => {
      if(clicks < stock) setClicks(clicks+1)
    }
  
    const removeClick = () => {
      if(clicks > 0) setClicks(clicks-1)
    }

    return (
        <div className="containerContador">
            <button onClick={()=>removeClick()}>Eliminar</button>
            <p>{clicks}</p>
            <button onClick={()=>addClick()}>Agregar</button>
        </div>
    )
}

export default ItemCount
