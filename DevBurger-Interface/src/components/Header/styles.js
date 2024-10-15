import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div `
    background-color: #1f1f1f;
    width: 100%;
    height: 72px;
    padding: 0 56px;
`;

export const Content = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`;

export const Navigation = styled.nav `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    hr {
        height: 24px;
        border: 1px solid #625e5e;
    }
`;

export const HeaderLink = styled(Link) `
    text-decoration: none;
    color: ${ props => props.$isActive ? '#9758a6' : '#fff'};
    border-bottom: ${ props => props.$isActive ? '2px solid #9758a6' : 'none'};
    padding: 4px;
    font-size: 16px;
    transition: 0.2s;

    &:hover {
        color: #9758a6;
    }
`;

export const Options = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
`;

export const Profile = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 16px;

    p {
        color: #fff;
        line-height: 90%;
        font-weight: 400;
    }

    span {
        font-weight: 700;
        color: #9758a6;
    }
`;

export const LinkContainer = styled.div `
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Logout = styled.button `
    color: #ff3205;
    text-decoration: none;
    font-weight: 700;
    background-color: transparent;
    border: none;
`;