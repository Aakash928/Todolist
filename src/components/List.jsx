import React from 'react'
import './List.css';

function List({itemList, updateitemList}) {
  const deleteItem=(key)=>{
  const newList = itemList.filter((itemObj)=>{
   return itemObj.key!==key
  })
  updateitemList(newList)
  }
 
  return (
    <div>
     {itemList.map((itemObj)=>{
       return(
     <div key={itemObj.key} className='Item'>
       <input type="checkbox" />
       
     <p>{itemObj.item}</p>
     <button onClick={()=>deleteItem(itemObj.key)}>Delete</button>
     </div>
       );
     })}
    </div>
  )
}

export default List
