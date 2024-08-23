import styled from "styled-components";
import BackgroundLogin from '../../assets/background1.png'
import Background from '../../assets/background2.png'
import { Link as ReactLink } from "react-router-dom";


export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`

export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img{
        width: 80%;
    }
`

export const RightContainer = styled.div`
    height: 100%;
    width: 100%;
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url('${Background}');
    background-color: #1e1e1e;

    p{
        color: #fff;
        font-size: 18px;
        font-weight: 800;

        a{
            text-decoration: underline;
            cursor: pointer;
        }
    }
`

export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 40px;
    color: #fff;

    span{
        color: rgba(151, 88, 166, 1);
        font-family: "Road Rage", sans-serif;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input{
        border: none;
        width: 100%;
        height: 52px;
        border-radius: 6px;
        padding: 0px 16px;
    }

    label {
        font-size: 18px;
        font-weight: 600;
        color: #ffff;
    }

    p {
        font-size: 14px;
        line-height: 80%;
        color: #cf3057;
        font-weight: 600;
        margin-top: 10px;
        height: 10px;
    }
`

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #fff;
`;
