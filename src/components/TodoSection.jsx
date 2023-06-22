import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "../components/TodoCard";
import { styled } from "styled-components";

const TodoCardContainer = styled.div`
  display: flex;
  height: 180px;
  margin: 20px;
  overflow-x: auto;
  margin-bottom: 100px;
`;

const SectionContainer = styled.div`
  height: 250px;
  margin-bottom: 50px;
`;

function TodoSection() {
  const todoData = useSelector((state) => state.todos.todoList);

  const onFilterTodo = (bool) => {
    return todoData
      .filter((todo) => todo.done === bool)
      .map((todo) => {
        return <TodoCard key={todo.id} todo={todo} />;
      });
  };
  return (
    <div>
      {[false, true].map((bool) => {
        return (
          <SectionContainer key={bool}>
            <h1 style={{ fontSize: "22px", fontWeight: "900" }}>
              {bool ? "한 거..🎉" : "할 거..🔥"}
            </h1>
            <TodoCardContainer>{onFilterTodo(bool)}</TodoCardContainer>
          </SectionContainer>
        );
      })}
    </div>
  );
}

export default TodoSection;
