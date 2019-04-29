import React, { Component } from "react";
import styled from "styled-components";

import logo from "../../media/devmtn.png";
export default class Header extends Component {
    /*
        componentDidMount to get session?
    */

    render() {
        return (
            <StyledHeader className="header">
                <StyledLogo src={logo} />
            </StyledHeader>
        );
    }
}

const StyledHeader = styled.header`
    height: 100px;
    width: 100%;
    background-color: #363636;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2%;
`;
const StyledLogo = styled.img`
    height: 80%;
`;
