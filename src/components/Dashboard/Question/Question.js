import React from "react";
import { StyledRow } from "../Survey/Survey";
import styled from "styled-components";

function Question(props) {
    function generate(questionNum) {
        return (
            <StyledEmojiSelect onChange={e => setValue(questionNum, e.target.value)}>
                <option value={1}>{"😄"}</option>
                <option value={0}>{"😐"}</option>
                <option value={-1}>{"🙁"}</option>
            </StyledEmojiSelect>
        );
    }
    function setValue(questionNum, val) {
      // const { happiness } = props;
      props.setQuestion()
    }

    return (
        <StyledRow className="question">
            <div>
                <h2>{props.topic}</h2>
            </div>
            <div>{generate()}</div>
            <div>{generate()}</div>
            <div>{generate()}</div>
            <div>
                <StyledDevMountainButton>Feedback</StyledDevMountainButton>
            </div>
        </StyledRow>
    );
};

export default Question;

const StyledDevMountainButton = styled.button`
    background-color: #23acd6;
    font-size: 1.5rem;
    border: none;
    color: white;
`;

const StyledEmojiSelect = styled.select`
    height: 90%;
    width: 90%;
    font-size: 3rem;
    text-align-last: center;
`;
