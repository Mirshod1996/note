import React, { useState } from "react";
import "./Main.scss";

const Main = ({info, setInfo,note, setNote }) => {

  
  
  function getInfo(event){
    setNote(
      {
        id:new Date(),
        text:event.target.value
      }
    )
  }
  function addInfo(){
    setInfo([...info, note]);
    setNote(
      {
        id:new Date(),
        text:''
      }
    )
  }


  return (
    <div className="container">
      <h1 className="main-title">Welcome To keep Notes</h1>
      <div className="box">
        <p className="box-title">Add a note</p>
        <textarea name="" value={note.text} onChange={getInfo} id="addTxt" rows="4" className="box-inp" ></textarea>
        <button className="box-btn" onClick={addInfo} >Add Note</button>
      </div>
      <h2 className="note-title">Your Notes</h2>
    </div>
  );
};

export default Main;
