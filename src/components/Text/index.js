// @flow
import React from 'react'
import * as Styled from './styled'
import { globalColors } from '../../consts/colors'

declare type Props = {
  fontSize?: number,
  color?: string,
  lineHeight?: number,
  textAlign?: string,
  fontWeight?: number,
  className?: string,
}

export const Text = React.memo<Props>((props: Props) => {
  const {
    color = globalColors.primaryDark,
    fontSize = 18,
    lineHeight = 24,
    className = '',
    textAlign = 'left',
    fontWeight = 400,
    children,
  } = props

  return (
    <Styled.Text
      color={color}
      fontSize={fontSize}
      className={className}
      textAlign={textAlign}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
    >
      {children}
    </Styled.Text>
  )
})
