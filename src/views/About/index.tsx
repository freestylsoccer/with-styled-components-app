import Link from 'next/link'
import useTheme from "../../hooks/useTheme"
import { Container, Main, Title, Description } from '../../components/sharedstyles'

const About = () =>  {
  const { isDark, setTheme } = useTheme()
  console.log(isDark);
  
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