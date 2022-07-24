import React from 'react'
import Button from '../../../components/Button/Button';
import { LightText } from '../../../styles/common';
import * as Styled from './styles';

export default function HeroSection() {
  return (
    <Styled.HeroSection>
        <Styled.Title>We develop top-notch JavaScript apps for all platforms</Styled.Title>
        <LightText>We provide high-end technical consulting and software development so you can focus on business growth.</LightText>
        <Button>Contact us</Button>
    </Styled.HeroSection>
  )
}
