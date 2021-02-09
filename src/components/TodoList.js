import React from 'react';
import Todo from './Todo';
const TodoList = ({todos, setTodos,filteredTodos})  => {
    return (
        <div className="todo-container">
        <ul className="todo-list"></ul>
        {filteredTodos.map(todo => (
            <Todo todos={todos} todo={todo} setTodos={setTodos} text={todo.text}  key={todo.id} />
        ))}
      </div>
  
    );
};

export default TodoList;