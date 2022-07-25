import React from 'react';
import DescriptionSection from '../_sections/DescriptionSection';
import HeroSection from '../_sections/HeroSection';
import ServicesSection from '../_sections/ServicesSection';
import * as Styled from './styles';

export default function Home() {
    return (
        <Styled.Home>
            <HeroSection />
            <DescriptionSection />
            <ServicesSection />
        </Styled.Home>
    )
}