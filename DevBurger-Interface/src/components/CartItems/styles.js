import styled from "styled-components";

export const ProductImage = styled.img `
    height: 80px;
    width: 80px;
    border-radius: 16px;
`;

export const ButtonGroup = styled.div `
    display: flex;
    align-items: center;
    gap: 12px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        border-radius: 6px;
        color: #fff;
        background-color: #9758a6;
        transition: all 0.4s;
        border: none;

        &:hover {
            background-color: #6f357c;
        }
    }
`;

export const EmptyCart = styled.p `
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`;

export const TotalPrice = styled.p `
    font-weight: bold;
`;

export const TrashImage = styled.img `
    height: 20px;
    width: 20px;
    cursor: pointer;
`;