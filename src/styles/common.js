import styled from "styled-components";

export const LightText = styled.div`
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    width: 534px;
    margin-bottom: 40px;
`;

export const DarkText = styled(LightText)`
    color: #02010F;
`;

export const LightSubTitle = styled.h2`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 64px;
    line-height: 80px;
    text-align: left;
    color: #FFFFFF;
`;

export const DarkSubTitle = styled(LightSubTitle)`
    color: #02010F;
`;