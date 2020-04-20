import styled from 'styled-components';

export const Bar = styled.div`
    margin-top: 20px;
    padding: 2px;
    height: 40px;
    width: 100%;
    border-radius: 5px;
    border: 3px solid linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    text-align: center;
    background: #f09433; 
`;

export const BarContent = styled.div`
    background: #f09433; 
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    width: ${(props) => props.progress}%;
    height: 40px;
`;

export const BarText = styled.div`
    padding-top: 5px;
    color: white;
    font-weight: bolder;
    font-size: 1.5em;
`;
