import styled from 'styled-components'

export const Text = styled.p`
  display: block;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  line-height: ${({ lineHeight }) => lineHeight}px;
  color: ${({ color }) => color};
`
