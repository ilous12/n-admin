import { useState } from "react";

function TodoInput({ onTodoAdd }) {
  const [inputText, setInputText] = useState("");

  const handleInput = (event) => {
    const value = event.target.value;
    console.log(value);
    setInputText(value);
  };

  const handleClick = (event) => {
    console.log("handleClick");
    localStorage.setItem(inputText, inputText);
    onTodoAdd(inputText);
    setInputText("");
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInput} />
      <button onClick={handleClick}>add</button>
    </div>
  );
}

export default TodoInput;
