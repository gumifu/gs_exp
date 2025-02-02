import React from "react";
import styled from "styled-components";

const Test = styled.div<{ bg: string; textColor?: string }>`
  /* color: red; */
  border: 1px solid black;
  background: ${(props) => props.bg};
  padding: 20px;
  color: ${(props) => props.textColor};
  width: 200px;
  text-align: center;
  transition: background 0.4s ease-in-out, color 0.4s ease-in-out; /* イージングを適用 */
  &:hover {
    background: #5b424221;
  }
`;

const Button = ({ bg = "gray", textColor = "gray" }) => {
  return (
    <Test bg={bg} textColor={textColor}>
      Button
      <p></p>
      <p></p>
    </Test>
  );
};

export default Button;
