import React from 'react';
import DescriptionSection from '../_sections/DescriptionSection';
import HeroSection from '../_sections/HeroSection';
import * as Styled from './styles';

export default function Home() {
    return (
        <Styled.Home>
            <HeroSection />
            <DescriptionSection />
        </Styled.Home>
    )
}