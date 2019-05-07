import React, { useState, useEffect } from "react";
import { StyledRow } from "../Survey/Survey";
import styled from "styled-components";
import Axios from "axios";

function Question(props) {
    // const [q1, setQ1] = useState();
    // const [q2, setQ2] = useState();
    // const [q3, setQ3] = useState();
    // const [feedback, setFeedback] = useState("");

    useEffect(() => {});
    function generate(questionNum) {
        return (
            <StyledEmojiSelect
                onChange={e => setValue(questionNum, e.target.value)}
            >
                <option>--</option>
                <option value={2}>{"😄"}</option>
                <option value={1}>{"😐"}</option>
                <option value={0}>{"🙁"}</option>
            </StyledEmojiSelect>
        );
    }
    function setValue(questionNum, val) {
        // const { happiness } = props;
        // props.setQuestion();
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
}

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
