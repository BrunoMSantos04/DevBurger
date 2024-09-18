import styled from "styled-components";
import BannerMenu from "../../assets/MenuBanner.svg"


export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;
`

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 480px;
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
  
`

export const ProductsContainer = styled.div`
  
`