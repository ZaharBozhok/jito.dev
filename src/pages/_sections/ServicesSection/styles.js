import styled from "styled-components";
import { DarkText } from "../../../styles/common";

export const ServicesSection = styled.section`
    height: 784px;
    width: 100%;
    background-color: #D8EA0D;
    padding: 120px 112px 160px 112px;
`;

export const ServiceTitle = styled.h3`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    color: #02010F;
    margin-bottom: 16px;
`;

export const ServicesContainer = styled.div`
    display: flex;
    margin: 80px 0;
`;

export const Service = styled.div`
    flex: 1;
    border-top: 1px solid #02010F;
    padding: 64px 0 12px 0;

    &:not(:last-of-type) {
        margin-right: 48px;
    }

    & ${DarkText} {
        margin: 0;
        text-align: left;
        width: auto;
    }
`;