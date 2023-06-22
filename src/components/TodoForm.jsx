import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import { styled } from "styled-components";

const TodoFormContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: rgb(233, 229, 229);
  font-size: 25px;
  font-weight: 900;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-bottom: 20px;
`;

const TodoFormBox = styled.form`
  margin: auto 0px auto 10px;
  display: flex;
  align-items: center;
`;

const TodoInput = styled.input`
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 7px;
  margin-left: 10px;
  margin-right: 15px;
  font-size: 20px;
`;

const AddBtn = styled.button`
  width: 250px;
  height: 50px;
  background-color: rgb(8, 149, 111);
  color: white;
  font-size: 20px;
  font-weight: 900;
  border: none;
  border-radius: 10px;
  margin-left: 150px;
`;

function TodoForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ title: "", content: "" });

  const onChangeForm = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(newForm);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (form.title.trim() === "") alert("제목을 입력해주세요");
    else if (form.content.trim() === "") alert("내용을 입력해주세요");
    else {
      const newData = {
        title: form.title,
        content: form.content,
        done: false,
        id: Date.now(),
      };
      dispatch(addTodo(newData));
      setForm({ title: "", content: "" });
    }
  };
  return (
    <TodoFormContainer>
      <TodoFormBox>
        <span>제목</span>
        <TodoInput
          name="title"
          value={form.title}
          onChange={onChangeForm}
        ></TodoInput>
        <span>내용</span>
        <TodoInput
          name="content"
          value={form.content}
          onChange={onChangeForm}
        ></TodoInput>
        <AddBtn onClick={addTodoHandler}>추가하기</AddBtn>
      </TodoFormBox>
    </TodoFormContainer>
  );
}

export default TodoForm;
