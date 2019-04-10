import React from "react";
import styled from "styled-components";
const Question = props => {
  return (
    <StyledRow>
      <div />
      <div />
      <div />
      <div />
      <button>Feedback</button>
    </StyledRow>
  );
};

export default Question;

const StyledRow = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    height: 100%;
    width: 25%;
    border: 1px solid purple;
  }
  & button {
    background-color: #23acd6;
    font-size: 24px;
  }
`;
