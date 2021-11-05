import React from "react";

const Form = ({ setInputText, label, setLabel, inputText }) => {
  // Here I will write javascript code
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
  };
  // setLabel([...label, { text: inputText }]);
  setInputText("");

  return (
    <form>
      <input
        onChange={inputTextHandler}
        type="text"
        className="inputText"
      ></input>

      <button onClick={submitTodoHandler} className="add-todo" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
