import { ResetCSS } from '../../uikit/src'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { NextPage } from 'next'
import GlobalStyle from '../../uikit/src/Global'
import { useStore, persistor } from '../state'
import useThemeCookie from '../hooks/useThemeCookie'
import Providers from '../Providers'

function GlobalHooks() {
  useThemeCookie()
  return null
}

function MyApp(props: AppProps) {
  const { pageProps } = props
  const store = useStore(pageProps)
  return (
    <>
      <Head>
        <title>My Template</title>
      </Head>
      <Providers store={store}>
        <GlobalHooks />
        <ResetCSS />
        <GlobalStyle />
        <PersistGate loading={null} persistor={persistor}>
          <App {...props} />
        </PersistGate>
      </Providers>
    </>
  )
}

type NextPageWithLayout = NextPage & {
  Layout?: React.FC
  mp?: boolean
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps, ...appProps }: AppPropsWithLayout) => {
  const noNeedLayout = [`/451`].includes(appProps.router.pathname)

  if (noNeedLayout) {
    return <Component {...pageProps} />
  }

  // Use the layout defined at the page level, if available
  const Layout = Component.Layout || Fragment

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
