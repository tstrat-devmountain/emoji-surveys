import React from "react";
import styled from "styled-components";
import Question from "../Question/Question";

function Survey(props) {
  // Map over data
  // Should come from props
  const questions = [1, 2, 3, 4, 5].map((e, i) => (
    <Question key={i} topic={e} />
  ));

  return (
    <StyledContainer className="survey">
      {questions}
      <div className="survey-button_container">
        <StyledButton save>Save</StyledButton>
        <StyledButton cancel>Cancel</StyledButton>
      </div>
    </StyledContainer>
  );
}

export default Survey;

const StyledContainer = styled.div`
  width: 95%;
  height: 100%;
  border: 1px solid purple;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
`;

const StyledButton = styled.button`
  height: 50px;
  width: 120px;
  background-color: ${props => (props.save ? "lightblue" : "red")};
`;
