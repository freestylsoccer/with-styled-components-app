import { useEffect } from 'react'
import { ModalProvider, light, dark, MatchBreakpointsProvider } from '../uikit/src'
import { Provider } from 'react-redux'
import { useRouter } from 'next/router'
import * as plurals from 'make-plural/plurals'
import { ThemeProvider } from 'styled-components'
import { Store } from '@reduxjs/toolkit'
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'

i18n.loadLocaleData('en', { plurals: plurals.en })
i18n.loadLocaleData('es', { plurals: plurals.es })

const StyledThemeProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const { resolvedTheme } = useNextTheme()
  return <ThemeProvider theme={resolvedTheme === 'dark' ? dark : light} {...props} />
}

const I18Provider: React.FC<{ children: React.ReactNode}> = (props) => {
  const { locale } = useRouter() 

  useEffect(() => {
    async function load(locale) {
      const { messages } = await import(`../locale/${locale}.js`)

      i18n.load(locale, messages)
      i18n.activate(locale)
    }

    load(locale)
  }, [locale])

  return <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false} {...props} />
}

const Providers: React.FC<{ children: React.ReactNode, store: Store }> = ({ children, store }) => {
  return (
      <Provider store={store}>
        <MatchBreakpointsProvider>
          <I18Provider>
            <NextThemeProvider>
              <StyledThemeProvider>
                <ModalProvider>{children}</ModalProvider>
              </StyledThemeProvider>
            </NextThemeProvider>
          </I18Provider>
        </MatchBreakpointsProvider>
      </Provider>
  )
}

export default Providers
