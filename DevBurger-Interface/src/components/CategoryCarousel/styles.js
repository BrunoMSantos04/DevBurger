import styled from "styled-components";

export const Container = styled.div`
    
    .carousel-item {
        padding-right: 40px;
    }

    padding-left: 30px;
`
export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #9758a6;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 20px;
    padding-right: 20px;
    padding-left: 20px;

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #9758a6;
        left: calc(50% - 28px);
        
    }
`

export const ContainerItems = styled.div`
    background: url('${(props) => props.imageurl}');
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    padding: 30px 10px;
    width: 100%;
    height: 230px;
    border-radius: 20px;

    p{
        color: #fff;
        background-color: rgba(0,0,0,0.5);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 22.5px;
        font-weight: bold;
        margin-top: 100px
    }
`

export const Button = styled.button`
    
`