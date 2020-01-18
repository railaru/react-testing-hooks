import React, { useState, useRef } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 0, item: 'Fix bugs' },
    { id: 1, item: 'Take out the trash' }
  ]);
  const todoRef = useRef();
  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const addTodo = data => {
    let id = todos.length + 1;
    setTodos([
      ...todos,
      {
        id,
        item: data
      }
    ]);
  };
  const handleNewTodo = e => {
    e.preventDefault();
    const item = todoRef.current;
    if (item.value) {
      addTodo(item.value);
    }
    item.value = '';
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-4">
          <h2>Add Todo</h2>
        </div>
      </div>
      <form>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              autoFocus
              ref={todoRef}
              placeholder="Enter a task"
              className="form-control"
              data-testid="input"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-2">
            <button
              type="submit"
              onClick={handleNewTodo}
              className="btn btn-primary"
            >
              Add Task
            </button>
          </div>
        </div>
      </form>
      <div className="row todo-list">
        <div className="col-md-6 mt-4">
          <h3>Tasks</h3>
          {!todos.length ? (
            <div className="no-task">No tasks!</div>
          ) : (
            <ul data-testid="todos">
              {todos.map(todo => {
                return (
                  <li key={todo.id} className="mt-2">
                    <div>
                      <span>{todo.item}</span>
                      <button
                        className="btn btn-danger ml-4"
                        data-testid="delete-button"
                        onClick={() => removeTodo(todo.id)}
                      >
                        X
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default Todos;
