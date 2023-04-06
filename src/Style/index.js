import styled from "styled-components";

export const Container = styled.body`
    background-color: #161616;
    color: white;
    display: flex;
    height: 100vh;
`;

export const App = styled.div`
    width: 70%;
    height: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;

    div {
        margin: 50px;
    }

    h2 {
        color: #ffa100;
        border-bottom: 2px solid #52e1e2;
        width: fit-content;
        padding-bottom: 5px;
        padding-right: 25px;
    }
    ul {
        padding: 0;
        list-style: none;
    }

    ul li:not(#total) {
        padding: 15px 0;
    }

`;

export const Botao = styled.button`
    background-color: transparent;
    border: 0;
    color: #ffa100;
    margin-left: 25px;
    cursor: pointer;
    border-left: 2px solid #52e1e2;
    padding-left: 10px;
    border-radius: 50px;
`;

export const Total = styled.li`
    margin-top: 25px;
    border-left: 2px solid #52e1e2;
    padding-left: 10px;
`;
