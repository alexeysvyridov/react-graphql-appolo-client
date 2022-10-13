import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
export const NavigationStyled = styled.div`
    width: 100%;
    padding: 16px 32px;
    background-color: #3f51b5;
    color: #fff;
    position: fixed;
    top: 0;
`;

export const NavigationItem = styled(NavLink)`
    min-width: 180px;
    width: fit-content;
    text-transform: uppercase;
    padding: 12px;
    text-decoration: none;
    color: #fff;
    `;