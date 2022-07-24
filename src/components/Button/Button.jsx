import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    padding: 16px 56px;
    background-color: ${props => props.colorReverse ? '#02010F' : '#D8EA0D'};
    border:  ${props => props.withBorder ? `0.5px solid ${props.colorReverse ? '#D8EA0D' : '#02010F'}` : 'none'};
    border-radius: 40px;
    cursor: pointer;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: ${props => props.colorReverse ? '#D8EA0D' : '#02010F'};
`;

export default function Button({ withBorder, colorReverse, children, ...props }) {
  return (
    <StyledButton withBorder={withBorder} colorReverse={colorReverse} {...props}>{children}</StyledButton>
  )
}
