import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;
    }

    .react-multiple-carousel__arrow--left {
        left: 15px;
        top: 10px;
    }

    .react-multiple-carousel__arrow--right {
        right: 55px;
        top: 10px;
    }

    padding-left: 50px;
    cursor: grab;
`;

export const Title = styled.h2`
    font-size: 34px;
    font-weight: 800;
    color: #9758a6;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 20px;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 56px;
        height: 4px;
        background-color: #9758a6;
    }
`;

export const ContainerItems = styled.div`
    background: url('${(props) => props.imageurl}');
    background-position: center;
    background-size: cover;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 250px;
    border-radius: 20px;
`;

export const CategoryButton = styled(Link)`
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: 500;
    margin-top: 180px;
    text-decoration: none;

    &:hover {
        background-color: #9758a6;
        transition: background-color 0.2s ease-in-out;
        transform: translateY(-2px);
        
        &:active {
            transform: translateY(-4px);
            background-color: #9719b3;
        }
    }
`;