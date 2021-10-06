import React from 'react'
import "./ItemListContainer.css"
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="textWelcome">
            {/* <h1>{greeting}</h1> */}
            
            <ItemCount/>
        </div>
    )
}

export default ItemListContainer
