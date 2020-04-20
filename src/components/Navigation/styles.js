import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    z-index: 10;
    top: 0px;
    right: 0px;
    height: 80px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    color: white;
`;

export const UL = styled.ul`
    position: absolute;
    display: flex;
    height: ${(props) => (props.showTopHeader ? '60px' : '0px')};
    opacity: ${(props) => (props.showTopHeader ? 100 : 0)};
    flex-direction: row;
    animation-delay: 2s;
    animation-duration: 2s;
    color: ghostwhite;
    transition: 0.2s linear;
`;

export const LI = styled.ul`
    font-size: 2em;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
`;

export const Title = styled.ul`
    position: relative;
    font-size: 1.5em;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
    background-color: white;
    color: black;
`;

export const ULFloating = styled.ul`
    display: flex;
    height: ${(props) => (props.showTopFloatingHeader ? '60px' : '0px')};
    opacity: ${(props) => (props.showTopFloatingHeader ? 100 : 0)};
    flex-direction: row;
    animation-delay: 2s;
    animation-duration: 2s;
    background-color: ghostwhite;
    color: black;
    transition: 0.2s linear;
`;

export const LIFloating = styled.ul`
    font-size: 2em;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
`;
