import styled, { keyframes } from 'styled-components';

export const HeaderContainer = styled.div`
    position: relative;
    height: 100vh;
    background-color: black;
    color: white;
    box-shadow: 1px 0px 10px #777777;
`;

export const HeaderBlur = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    background-image: url('https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(30%);
`;

export const HeaderElements = styled.div`
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const HeaderTitle = styled.p`
    position: absolute;
    bottom: 38%;
    font-size: 4em;
    color: wcoolBoxKeyframeshite;
    @media only screen and (max-height: 580px) {
        font-size: 2em;
        bottom: 50%;
    }
    @media only screen and (max-height: 640px) and (min-height: 581px) {
        font-size: 3em;
        bottom: 50%;
    }
`;

export const HeaderSubtitle = styled.p`
    position: absolute;
    bottom: 34%;
    font-size: 2em;
    color: white;
    @media only screen and (max-height: 580px) {
        font-size: 1.4em;
        text-align: center;
        bottom: 45%;
    }
    @media only screen and (max-height: 640px) and (min-height: 581px) {
        font-size: 1.8em;
        bottom: 45%;
    }
`;

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 23%;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-height: 640px) {
        font-size: 1em;
        bottom: 25%;
    }
`;

export const Picture = styled.div`
    position: absolute;
    bottom: 50.5%;
    background-image: url('https://imgur.com/AZdKz0C.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 250px;
    width: 250px;
    border-radius: 50%;
    border: 5px solid #dddddd;
    @media only screen and (max-height: 640px) {
        height: 150px;
        width: 150px;
        bottom: 60%;
    }
`;

const pulse = keyframes`
    0% {
    background: #f09433; 
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  }
  50% {
    background: #f09433; 
    opacity: 40%;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  }
  100% {
    background: #f09433; 
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  }
`;

export const PictureContainer = styled.div`
    position: absolute;
    bottom: 50%;
    height: 270px;
    width: 270px;
    border-radius: 50%;
    background: #f09433; 
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    animation: ${pulse};
    animation-iteration-count: infinite;
    animation-duration: 2s;    
    @media only screen and (max-height: 640px) {
        height: 170px;
        width: 170px;
        bottom: 59%;
    }
`;
