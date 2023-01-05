// @flow
import React from 'react'
import * as Styled from './styled'
import { globalColors } from '../../consts/colors'

declare type Props = {
  color: string,
  className?: string,
  isColorFilled?: boolean,
  size?: 'small' | 'medium' | 'big',

  onClick: () => void,
}

export const Button = React.memo<Props>((props: Props) => {
  const {
    color,
    onClick,
    children,
    isColorFilled = false,
    size = 'medium',
    className = '',
  } = props

  return (
    <Styled.Button
      size={size}
      onClick={onClick}
      className={className}
      isColorFilled={isColorFilled}
      color={globalColors[color] || color}
    >
      {children}
    </Styled.Button>
  )
})
