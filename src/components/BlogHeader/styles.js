import styled from 'styled-components';

export const Container = styled.div`
    background-color: black;
    color: white;
`;

export const BlogTitle = styled.div`
    padding 20px 0px 0px 40px;
    text-align: left;
    font-size: 1.8em;
    letter-spacing: 2px;
`;

export const BlogMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const BlogMenuItem = styled.p`
    font-size: 1.2em;
    letter-spacing: 2px;
    margin: 0px 20px 10px 20px;
    cursor: pointer;
`;

export const BlogNavigator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const BlogNavigatorText = styled.div`
    font-size: 2.0em;
    color: white;
`;
