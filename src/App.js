import { useState } from 'react';
import './App.css';
import List from './components/List';

function App() {
  const [currentItem,setCurrentItem]=useState("");
  const [itemList,updateitemList]=useState([]);
  const onchangeHandler=(e)=>{
  
  setCurrentItem(e.target.value)
 }
const addItemToList=()=>{
  updateitemList([...itemList,{item:currentItem, key:Date.now()}]);
  setCurrentItem("");
}
// {item:currentItem, key:Date.now()}
  return (
    <div className="App">
    <div className='App-header'>
      <div className='wrapper'>
          <div className='input-wrapper'>
            <input value={currentItem} onChange={onchangeHandler} placeholder= "Add Items..." />
          <button onClick={addItemToList}>Add</button>
          </div>
         <List itemList={itemList} updateitemList= {updateitemList} />
      </div>
    </div>
    </div>
  );
}

export default App;
