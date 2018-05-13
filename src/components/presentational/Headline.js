import React from 'react'
import { colors } from '../../style'

const baseStyle = {
  fontSize: 80,
  padding: 0,
  margin: 0,
  lineHeight: 1.1,
}
const Headline = ({ color = colors.light, children, bold = true }) => (
  <h2
    style={{
      color,
      ...baseStyle,
      ...(bold ? { fontWeight: 'bold' } : {}),
    }}
  >
    {children}
  </h2>
)

export default Headline
