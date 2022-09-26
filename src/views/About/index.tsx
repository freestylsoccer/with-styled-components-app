import Link from 'next/link'

import { Container, Description,Main, Title } from '../../components/sharedstyles'
import useTheme from '../../hooks/useTheme'

const About = () => {
  const { isDark, setTheme } = useTheme()
  console.log(isDark)

  return (
    <Container>
      <Main>
        <Title>About Page</Title>
        <Description>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </Description>
      </Main>
    </Container>
  )
}

export default About
