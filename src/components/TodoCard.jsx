import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeTodo, removeTodo } from "../redux/modules/todos";
import { styled } from "styled-components";

const CardBox = styled.div`
  width: 250px;
  height: 170px;
  border: 5px solid gold;
  border-radius: 15px;
  margin-right: 20px;
  display: flex;
  flex-shrink: 0;
  font-size: 18px;
  font-weight: 900;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 10px;
`;

const CardBtn = styled.button`
  width: 100px;
  height: 35px;
  background-color: white;
  border-radius: 6px;
  margin-right: 10px;
  font-weight: 800;
  cursor: pointer;
  border: 3px solid ${({ bordercolor }) => bordercolor};
`;

function TodoCard({ todo }) {
  const dispatch = useDispatch();

  const onRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const onModifyTodo = (id) => {
    dispatch(changeTodo(id));
  };
  return (
    <CardBox>
      <Link
        to={`/todo/${todo.id}`}
        style={{ textDecoration: "none", fontSize: "15px", color: "blue" }}
      >
        상세보기
      </Link>
      <h3>{todo.title}</h3>
      <h4>{todo.content}</h4>
      <div>
        <CardBtn bordercolor="red" onClick={() => onRemoveTodo(todo.id)}>
          삭제하기
        </CardBtn>
        <CardBtn bordercolor="green" onClick={() => onModifyTodo(todo.id)}>
          {todo.done === false ? "완료" : "취소"}
        </CardBtn>
      </div>
    </CardBox>
  );
}

export default TodoCard;
