import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Label from "./Components/Label";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState({});
  return (
    <div className="App">
      <header>
        <h1>My to do App</h1>
      </header>
      <Form setInputText={setInputText} />
      <Label />
    </div>
  );
}

export default App;
