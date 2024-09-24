import styled from "styled-components";
import BannerMenu from "../../assets/MenuBanner.svg"
import Background from '../../assets/background2.png'
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    min-height: 390vh;
    background-color: #f0f0f0;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ),
    url('${Background}');
    height: 700px;
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
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${ (props) => (props.$IsActiveCategory ? '#9758a6' : '#4a474a')};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border-bottom: ${ (props) => props.$IsActiveCategory && '1px solid #9758a6'} ;
    border: none;
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

export const BackButton = styled(Link)`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 5px;
    line-height: 20px;
    color: #9758a6;
  
`