import React from 'react';
import { LightText, LightSubTitle } from '../../../styles/common';
import * as Styled from './styles';

export default function DescriptionSection() {
  return (
    <Styled.DescriptionSection>
        <LightText>WHO WE ARE</LightText>
        <LightSubTitle>We are ready to become your reliable partner and provide solutions for different industries.</LightSubTitle>
        <LightText>We work with cloud services, a variety of languages, web and mobile development. Our team will help you along at every step of the way, taking care of the project before and after the release.</LightText>
    </Styled.DescriptionSection>
  )
}
