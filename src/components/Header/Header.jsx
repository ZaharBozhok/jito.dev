import React from 'react'
import Logo from '../Logo/Logo';
import * as Styled from './styles';

export default function Header() {
  return (
    <Styled.Header>
        <Logo />

        <Styled.Navigation>
            <Styled.Link>About us</Styled.Link>
            <Styled.Link>Services</Styled.Link>
            <Styled.Link>Contact</Styled.Link>
        </Styled.Navigation>
    </Styled.Header>
  )
}