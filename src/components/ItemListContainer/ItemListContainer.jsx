import React from 'react'
import ItemList from './ItemList/ItemList'
import "./ItemListContainer.css"

const ItemListContainer=(props)=>{
    const {greeting}=props

    function mostrarSinVocales(e) {
        if (e.target.value.includes('a')||e.target.value.includes('e')||e.target.value.includes('i')||e.target.value.includes('o')||e.target.value.includes('u')) {
            e.preventDefault()
        
        }
    }

    return (
    <div className="item-list-container">
        <h1>{greeting}</h1>
        <ItemList/>
        <input type="text" onKeyDown={mostrarSinVocales} />
    </div>

    
    )
}
export default ItemListContainer