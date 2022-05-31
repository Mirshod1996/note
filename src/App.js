import "./Components/App.scss";
import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Note from "./Components/Notes/Note";

function App() {
  const [info, setInfo] = useState([]);
  const [note, setNote]=useState({})
 

 



  return (
    <div className="app">
      <Navbar />
      <Main info={info} setInfo={setInfo} note={note} setNote={setNote} />
      <div className="main">
        {info.map((el, index) => {
          return <Note key={el.id} {...el} setInfo={setInfo} info={info} id={el.id} index={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
