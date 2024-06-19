function TodoList({ todos: [string], onTodoRemove }) {
  return (
    <div>
      <ul>
        {todos.map((todo: string, index: number) => {
          return (
            <li key={index}>
              <span>{todo}</span>
              <button onClick={(event) => onTodoRemove(todo)}>remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
