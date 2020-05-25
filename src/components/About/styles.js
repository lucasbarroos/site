import styled from 'styled-components';

export const AboutContainer = styled.div`
    position: relative; 
    padding: 40px;
    background-color: #eee;
`;

export const AboutTitle = styled.div`
    text-align: center;
    font-size: 3.5em;
    letter-spacing: 2px;
    font-weight: 300;
`;

export const AboutComponents = styled.div`
    margin-top: 60px;
    padding: 0px 60px 0px 50p40pxx;
`;

export const AboutText = styled.p`
    color: white;
    border-radius: 15px;
    position: relative; 
    font-size: 1.5em;
    min-height: 260px;
    padding: 60px 7% 7% 7%;
    a {
        color: rgba(255, 255, 255, 0.7);
    }
`;

export const AboutIcon = styled.img`
    top: -40px;
    right: 0px;
    height: 1.5em;
    width: 1.5em;
`;

export const Picture = styled.div`
    background-image: url('https://static-cdn.jtvnw.net/jtv_user_pictures/ce9467dd-e503-4754-8c4d-ba24379eeadb-profile_image-300x300.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-top: 10px;
    border-radius: 8px;
    min-height: 300px;
    border: 5px solid #dddddd;
`;

export const AboutV2 = styled.div`
    background-color: rgba(51, 51, 51, 1);
    position: relative;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0px 0px 9px -1px rgb(51, 51, 51);
`;

export const AboutCloseButton = styled.div`
    position: absolute;
    top: 10px;
    left: 22px;
    background: rgba(255, 0, 0 , 0.8);
    height: 12px;
    border-radius: 50%;
    width: 12px;
`;

export const AboutMaxButton = styled.div`
    position: absolute;
    top: 10px;
    left: 42px;
    background: rgba(255, 255, 0 , 0.85);
    height: 12px;
    border-radius: 50%;
    width: 12px;
`;

export const AboutMinButton = styled.div`
    position: absolute;
    top: 10px;
    left: 62px;
    background: rgba(0, 255, 0, 0.5);
    height: 12px;
    border-radius: 50%;
    width: 12px;
`;
