import React from "react";
import styled from "styled-components";
import Question from "../Question/Question";

function Survey(props) {
    // Map over data
    // Should come from props
    const questions = props.topics.map((e, i) => (
        <Question key={i} topic={e} />
    ));

    return (
        <StyledContainer className="survey">
            <div className="survey-topics">
                <StyledRow className="survey__top-row">
                    <div>
                        <h2>Topics</h2>
                    </div>
                    <div>
                        <h2>How was the content?</h2>
                    </div>
                    <div>
                        <h2>How was the instructor?</h2>
                    </div>
                    <div>
                        <h2>What is your overall satisfaction?</h2>
                    </div>
                    <div />
                </StyledRow>
                {questions}
            </div>
            <StyledButtonContainer>
                <StyledButton cancel>Cancel</StyledButton>
                <StyledButton save>Save</StyledButton>
            </StyledButtonContainer>
        </StyledContainer>
    );
}

export default Survey;

const StyledContainer = styled.div`
    width: 95%;
    height: 100%;
    /* border: 1px solid purple; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px;
    .survey-topics {
        width: 100%;
        height: calc(100% - 75px);
    }
`;

export const StyledRow = styled.div`
    width: 100%;
    height: calc(100% / 6);
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
        height: 100%;
        width: calc(100% / 5);
        /* border: 1px solid purple; */
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
            color: white;
        }
    }
    &.survey__top-row {
        background-color: #282828;
    }
    &.question {
        background-color: #363636;
        color: white;
    }
`;

const StyledButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledButton = styled.button`
    background-color: ${props => (props.save ? "#77B621" : "#D45538")};
    height: 50px;
    width: 120px;
    border: none;
    color: white;
    margin: 5px;
`;
