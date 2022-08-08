import styled from 'styled-components';

export const ViewWrapper = styled.section`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-color: ${(props)=> props.backgroundColor};

`