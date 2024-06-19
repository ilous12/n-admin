interface TodoListProps {
  todos: (string | null)[];
  onTodoRemove(x: string | null): unknown;
}

function TodoList({ todos, onTodoRemove }: TodoListProps) {
  return (
    <div>
      <ul>
        {todos.map((todo: string | null, index: number) => {
          return (
            <li key={index}>
              <span>{todo}</span>
              <button onClick={() => onTodoRemove(todo)}>remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
