import React from "react";
import "../reset.css";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import TodoSection from "../components/TodoSection";
import { styled } from "styled-components";

const LayoutBox = styled.div`
  min-width: 800px;
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  background-color: white;
`;

function Home() {
  return (
    <LayoutBox>
      <Header />
      <TodoForm />
      <TodoSection />
    </LayoutBox>
  );
}

export default Home;
