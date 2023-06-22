// Action Value

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const CHANGE_TODO = "CHANGE_TODO";

// Action Creator

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const removeTodo = (payload) => {
  return { type: REMOVE_TODO, payload };
};

export const changeTodo = (payload) => {
  return { type: CHANGE_TODO, payload };
};

//initial State

const initialState = {
  todoList: JSON.parse(localStorage.getItem("todoData")) ?? [],
};

// function

const setStorage = (newData) =>
  localStorage.setItem("todoData", JSON.stringify(newData));

// Reducer

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      setStorage([...state.todoList, action.payload]);
      return { todoList: [...state.todoList, action.payload] };
    case REMOVE_TODO:
      const newData = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      setStorage(newData);
      return { todoList: newData };
    case CHANGE_TODO:
      const changeData = state.todoList.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo;
      });
      setStorage(changeData);
      return {
        todoList: changeData,
      };
    default:
      return state;
  }
};

export default todos;
