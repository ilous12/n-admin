import { useState } from "react";

interface TodoInputProps {
  onTodoAdd(x: string | null): unknown;
}

function TodoInput({ onTodoAdd }: TodoInputProps) {
  const [inputText, setInputText] = useState<string>("");

  const handleInput = (event: { target: { value: unknown } }) => {
    const value = event.target.value;
    console.log(value);
    setInputText(value as string);
  };

  const handleClick = () => {
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
