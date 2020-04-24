import styled from 'styled-components';

export const Container = styled.div``;

export const PostTitle = styled.p`
    padding: 10px;
    text-align: center;
    font-size: 3em;
    letter-spacing: 0.8px;
    font-weight: 300;
`;

export const PostImage = styled.img`
    text-align: center;
`;

export const PostText = styled.div`
    text-align: justify;
    font-size: 1.6em;
    padding: 20px;    
    margin-left: 20%;
    margin-right: 20%;
`;

export const BackButton = styled.div`
    position: absolute;
    top: 12vh;
    left: 10px;
    height: 35px;
    width: 120px;
    background-color: black;
    font-size: 1.2em;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    color: white;
`;
