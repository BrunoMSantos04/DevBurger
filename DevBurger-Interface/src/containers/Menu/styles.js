import styled from "styled-components";
import BannerMenu from "../../assets/MenuBanner.svg"
import Background from '../../assets/background2.png'
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ),
    url('${Background}');
    height: 500px;
`

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    position: relative;
    background: url('${BannerMenu}') no-repeat;
    background-position: center;
    background-color: #1f1f1f;
    background-size: cover;

    h1{
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: #fff;
        position: absolute;

        right: 20%;
        top: 30%;

        span {
            display: block;
            color: #fff;
            font-size: 20px;
            
        }
    }

`

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;

`

export const CategoryButton = styled(Link)`
    text-decoration: nome;
    cursor: pointer;
    background: none;
    color: ${ (props) => (props.$IsActiveCategory ? '#9758a6' : '#9a9f9a')};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border-bottom: ${ (props) => props.$IsActiveCategory && '3px solid #9758a6'} ;
    border: none;
    border-radius: ${ (props) => props.$IsActiveCategory && '8px'};
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap: 50px;
    margin: 50px auto 0;
`