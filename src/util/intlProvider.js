import React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'

addLocaleData([...en, ...zh])

const Provider = ({ langKey, messages, children }) => (
  <IntlProvider locale={langKey} messages={messages}>
    {children}
  </IntlProvider>
)

export default Provider
