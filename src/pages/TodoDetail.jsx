import React from "react";
import "../reset.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const DetailBox = styled.div`
  background-color: rgba(149, 142, 142, 0.214);
  width: 400px;
  height: 150px;
  margin: 100px auto 0px auto;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

function TodoDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const todo = useSelector((state) => state.todos.todoList).filter(
    (todo) => todo.id === parseInt(params.id)
  )[0];

  return (
    <DetailBox>
      <FlexContainer>
        <span>id:{todo.id}</span>
        <button onClick={() => navigate("/")}>돌아가기</button>
      </FlexContainer>
      <h1 style={{ marginBottom: "19px", fontSize: "25px", fontWeight: "800" }}>
        {todo.title}
      </h1>
      <h4 style={{ fontSize: "19px", fontWeight: "700" }}>{todo.content}</h4>
    </DetailBox>
  );
}

export default TodoDetail;
