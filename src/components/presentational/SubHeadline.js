import React from 'react'
import { colors, fontSizes } from '../../style'

const Headline = ({ color = colors.light, children }) => (
  <p
    style={{
      color,
      fontSize: fontSizes.standard,
      padding: 0,
      margin: 0,
      lineHeight: 1.1,
    }}
  >
    {children}
  </p>
)

export default Headline
