import { useMemo } from "react"
import { Box, Flex, Heading, Text, ThemeSwitcher } from "../../../uikit/src"
import useTheme from "../../hooks/useTheme"
import Cards from "./components/cards"

const Home: React.FC = () => {
  const { isDark, setTheme } = useTheme()

  const toggleTheme = useMemo(() => {
    return () => setTheme(isDark ? 'light' : 'dark')
  }, [setTheme, isDark])

  return (
    <>
      <Box mt="6rem">
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <Heading scale="xxl" color="secondary" mb="24px">Welcome to <a href="https://nextjs.org">Next.js!</a></Heading>
          <Text color='secondary'>Get started by editing</Text>
          <Text color='textSubtle'>pages/index.tsx</Text>
        </Flex>
        <Flex mt="2rem" flexDirection="column" alignItems="center" justifyContent="center">
          <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
        </Flex>
        <Flex mt="2rem" flexDirection="column" alignItems="center" justifyContent="center">
          <Cards />
        </Flex>
      </Box>
    </>
  )
}

export default Home