import React from 'react';
import Button from '../../../components/Button/Button';
import { DarkSubTitle, DarkText } from '../../../styles/common';
import * as Styled from './styles';

export default function ServicesSection() {
  return (
    <Styled.ServicesSection>
        <DarkSubTitle>Services</DarkSubTitle>

        <Styled.ServicesContainer>
            <Styled.Service>
                <Styled.ServiceTitle>Web development</Styled.ServiceTitle>
                <DarkText>Powerful web applications and complex CRM, ERP, and HRM systems built according to the industry’s latest tech trends</DarkText>
            </Styled.Service>

            <Styled.Service>
                <Styled.ServiceTitle>UI/UX design</Styled.ServiceTitle>
                <DarkText>Intuitive digital product designs that solve business problems and meet user needs following the latest UI trends and UX techniques</DarkText>
            </Styled.Service>

            <Styled.Service>
                <Styled.ServiceTitle>Building design system</Styled.ServiceTitle>
                <DarkText>We help can build a solid and strong design system according to your goals and needs.</DarkText>
            </Styled.Service>
        </Styled.ServicesContainer>

        <Button colorReverse>Contact us</Button>
    </Styled.ServicesSection>
  )
}
