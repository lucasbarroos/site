import styled from 'styled-components';

export const Container = styled.div`
    background-color: black;
    color: white;
    padding: 20px;
`;

export const Title = styled.div`
    text-align: center;
    font-size: 3em;
    letter-spacing: 2px;
    font-weight: 300;
    margin-bottom: 20px;
`;

export const Text = styled.p`
    font-size: 2em;
    letter-spacing: 2px;
    font-weight: 300;
    margin-top: 10px;
    color: white;
    @media only screen and (min-width: 885px) {       
        text-align: right;
    };
    @media only screen and (max-width: 885px) {       
        text-align: center;
    };
`;

export const Form = styled.div`
    background-color: ghostwhite;
    color: black;
    margin-left: 30px;
    margin-bottom: 30px;
    padding: 2% 20% 2% 20%;    
    border-radius: 10px;
    border: 1px solid white;
`;

export const FormTitle = styled.p`
    text-align: center;
    font-size: 1.6em;
    letter-spacing: 2px;
    font-weight: 300;
`;

export const Icon = styled.img`
    text-align: right;
    height: 4em;
    width: 4em;
`;
