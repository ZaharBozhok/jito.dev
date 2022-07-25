import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 100px;
    background-color: #02010F;
    display: flex;
    justify-content: space-between;
    padding: 24px;
    align-items: center;
`;

export const Navigation = styled.nav``;

export const Link = styled.a`
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    color: #9A99A2;
    cursor: pointer;

    &:not(:last-of-type) {
        margin-right: 40px;
    }
`;