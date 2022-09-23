import { light, dark, MatchBreakpointsProvider } from '../uikit/src'

import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Store } from '@reduxjs/toolkit'
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes'

const StyledThemeProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const { resolvedTheme } = useNextTheme()
  return <ThemeProvider theme={resolvedTheme === 'dark' ? dark : light} {...props} />
}

const Providers: React.FC<{ children: React.ReactNode, store: Store }> = ({ children, store }) => {
  return (
      <Provider store={store}>
        <MatchBreakpointsProvider>
          <NextThemeProvider>
            <StyledThemeProvider>
              {children}
            </StyledThemeProvider>
          </NextThemeProvider>
        </MatchBreakpointsProvider>
      </Provider>
  )
}

export default Providers
