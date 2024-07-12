import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
function App() {
  
  return (
    <main className="outer-container">
      <div className="inner-container">
       <Header/>
       <Form/>
      </div>
    </main>
  );
}

export default App;