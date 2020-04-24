import styled from 'styled-components';

export const Container = styled.div`
    background-color: black;    
    padding: 20px;
`;

export const Title = styled.div`
    color: white;
    text-align: center;
    font-size: 3.5em;
    letter-spacing: 2px;
    font-weight: 300;
`;

export const Post = styled.div`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    position: relative;
    text-align: center; 
    min-height: 500px;
    background-color: white;
`;

export const PostImage = styled.img`
    width: 100%;
    max-height: 180px;    
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

export const PostTitle = styled.p`
    padding: 10px;
    text-align: center;
    font-size: 2em;
    letter-spacing: 0.8px;
    font-weight: 300;
`;

export const PostDescription = styled.div`
    text-align: justify; 
    font-size: 1.1em;
    padding: 20px;    
`;

export const NewIcon = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 5px;
    border-radius: 7px;
    font-weight: 500;
    background-color: rgba(255, 0, 0, 0.7);
    color: white;
    box-shadow: 0px 0px 2px black;
`;

export const PostDate = styled.div`
    position: absolute;
    bottom: 20px;
    right: 30px;
`;
