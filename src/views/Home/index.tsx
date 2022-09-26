import { useMemo } from "react"
import { Trans } from '@lingui/macro'
import styled from "styled-components";
import { Box, Flex, Heading, Text, ThemeSwitcher } from "../../../uikit/src"
import useTheme from "../../hooks/useTheme"
import Cards from "./components/cards"

import { footerLinks } from "../../components/Menu/config/footerConfig";
import { useRouter } from "next/router";
import useLanguage from "../../hooks/useLanguage";

export const StyledToolsContainer = styled(Flex)`
  border-color: ${({ theme }) => theme.colors.cardBorder};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  padding: 24px 0;
  margin-bottom: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    border-top-width: 0;
    border-bottom-width: 0;
    padding: 0 0;
    margin-bottom: 0;
  }
`

const LANG_TO_COUNTRY: Record<string, string> = {
  en: 'English',
  es: 'Español',
}
const languages = {
  'en-US': { locale: 'en', language: 'English', code: 'en' },
  'es-ES': { locale: 'es', language: 'Español', code: 'es' },
}
const languageList = Object.values(languages)

const Home: React.FC = () => {
  const { isDark, setTheme } = useTheme()
  const { locale } = useRouter()

  const toggleTheme = useMemo(() => {
    return () => setTheme(isDark ? 'light' : 'dark')
  }, [setTheme, isDark])

  const getFooterLinks = useMemo(() => {
    return footerLinks()
  }, [locale])

  const { setLanguage } = useLanguage()

  return (
    <>
      <Box mt="6rem">
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <Heading scale="xxl" color="secondary" mb="24px"><Trans>Welcome to</Trans> <a href="https://nextjs.org">Next.js!</a></Heading>
          <Text color='secondary'><Trans>Get started by editing</Trans></Text>
          <Text color='textSubtle'>pages/index.tsx</Text>
        </Flex>
        <Flex mt="2rem" flexDirection="column" alignItems="center" justifyContent="center">
          <Cards />
        </Flex>
      </Box>
    </>
  )
}

export default Home