import {getUniversity} from "./axios/request"
import './App.css';
import { useState } from "react";
import { FixedSizeList as List } from 'react-window';

function App() {

  const [value, setValue]=useState([])

  getUniversity().then((res)=>{
    setValue(res.data)
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })
  
  const items = value; // some list of items

  const Row = ({ index, style }) => (
    <div style={style}>
       Row {items[index].country}
    </div>
  );


  return (
    <>
    <List
    height={300}
    width={1080}
    itemSize={120}
    itemCount={items.length}
    style={{backgroundColor:"black",color:"#ffff"}}
  >
    {Row}
  </List>

    </>
  );
}

export default App;
