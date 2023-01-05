import styled, { css } from 'styled-components'

const getButtonSize = ({ size }) => {
  if (size === 'small') {
    return css`
      min-width: 102px;
      height: 26px;
      font-size: 14px;
      border-radius: 30px;
      padding: 7px 8px;
    `
  }
  if (size === 'medium') {
    return css`
      min-width: 136px;
      height: 40px;
      font-size: 14px;
      border-radius: 10px;
      padding: 8px 4px;
    `
  }
  if (size === 'big') {
    return css`
      min-width: 180px;
      height: 48px;
      font-size: 18px;
      border-radius: 10px;
      padding: 10px 8px;
    `
  }
}

const getHoverState = ({ isColorFilled, color }) => {
  if (isColorFilled) {
    return css`
      box-shadow: 0 0 8px 0 ${color};
    `
  }
  return css`
    color: #fff;
    background-color: ${color};
  `
}

export const Button = styled.button`
  cursor: pointer;
  outline: none;

  line-height: 12px;
  font-weight: 700;
  color: ${({ isColorFilled, color }) => (isColorFilled ? '#fff' : color)};

  border: 1px solid ${({ color }) => color};
  background-color: ${({ isColorFilled, color }) =>
    isColorFilled ? color : '#fff'};
  transition: all 150ms ease-in-out;

  ${getButtonSize};

  &:hover {
    ${getHoverState};
  }
`
