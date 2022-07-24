import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

const StyledLogo = styled.img`
    cursor: pointer;
`;

export default function Logo() {
  return (
    <StyledLogo alt='logo' src={logo} />
  )
}
