import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerButton = styled(Link) `
    color: #9758a6;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    /* line-height: 14px; */
    text-decoration: none;
    margin-bottom: 20px;
    display: block; /* Isso permite centralizar o botão como um bloco */
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`;