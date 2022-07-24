import styled from "styled-components";
import { LightSubTitle } from "../../../styles/common";

export const DescriptionSection = styled.section`
    width: 100%;
    background: linear-gradient(180deg, rgba(46, 0, 255, 0) 0%, rgba(46, 0, 255, 0.1) 50.57%, rgba(46, 0, 255, 0) 95.31%), #02010F;
    padding: 120px 112px 130px 112px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &>*:not(:last-child) {
        margin-bottom: 32px;
    }

    & ${LightSubTitle} {
        text-align: center;
        font-size: 48px;
        line-height: 64px;
    }
`;