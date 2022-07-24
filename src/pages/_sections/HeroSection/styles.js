import styled from "styled-components";

export const HeroSection = styled.section`
    width: 100%;
    height: 685px;
    background-color: #02010F;
    padding: 73px 112px 60px 112px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 90px;
    line-height: 112px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 16px;
`;

export const Button = styled.button`
    border: none;
    width: 185px;
    height: 48px;
    background-color: #D8EA0D;
    border: 0.5px solid #02010F;
    border-radius: 40px;
    cursor: pointer;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #02010F;
`;