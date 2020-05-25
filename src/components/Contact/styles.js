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
    font-size: 1.4em;
    letter-spacing: 1px;
    margin-top: 30px;
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
    margin-left: 20px;
    margin-right: 10%;
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
    height: 4em;
    width: 4em;
`;

export const SocialMediaForm = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const SocialMedia = styled.span`
    cursor: pointer;
    a {
        color: black;
        font-size: 1rem;
        margin: 10px;
        margin-left: 10px;
    }
`;

export const SocialMediaLink = styled.a`
    font-size: 1rem;
    color: black;
    margin-left: 20px;
`;

export const SocialMediaIcon = styled.img`
    height: 48px;
    width: 48px;
`;
