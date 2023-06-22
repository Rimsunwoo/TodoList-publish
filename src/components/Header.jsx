import React from "react";
import styled from "styled-components";
const HdBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

function Header() {
  return (
    <HdBox>
      <h2>My todo List</h2>
      <h3>React</h3>
    </HdBox>
  );
}

export default Header;
