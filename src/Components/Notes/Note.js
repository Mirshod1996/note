import { useState } from "react";
import "./Note.scss";

const Note = ({ text,index,info,id,setInfo}) => {
  function removeInfo(id){
    const arr=info.filter(data=>{
      return data.id!==id
    })
    setInfo(arr)
  }
  return (
  
    <div className="card">
      <h3 className="card-title">Note {index+1}</h3>
      <p className="card-text">{text}</p>
      <button className="card-btn" onClick={()=>removeInfo(id)}>Delete Note</button>
    </div>
 
  );
};

export default Note;
