import styled from "styled-components";

export const Container = styled.div`
    
    .carousel-item {
        padding-right: 40px;
    }
`
export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #9758a6;
    padding-bottom: 12px;
    position: relative;
    text-align: center;

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #9758a6;
        left: calc(50% - 25px);
    }
`

export const ContainerItems = styled.div`
    background: url('${(props) => props.imageurl}');
`

export const Button = styled.button`
    
`