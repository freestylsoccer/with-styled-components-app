import { i18n } from '@lingui/core'
import { t } from '@lingui/macro'
import styled from 'styled-components'

import { Box, Flex, Heading, Text } from '../../../uikit/src'
import Cards from './components/cards'

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

const Home: React.FC = () => {
  return (
    <>
      <Box mt="6rem">
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <Heading scale="xxl" color="secondary" mb="24px">
            {i18n._(t`Welcome to`)} <a href="https://nextjs.org">Next.js!</a>
          </Heading>
          <Text color="secondary">{i18n._(t`Get started by editing`)}</Text>
          <Text color="textSubtle">pages/index.tsx</Text>
        </Flex>
        <Flex mt="2rem" flexDirection="column" alignItems="center" justifyContent="center">
          <Cards />
        </Flex>
      </Box>
    </>
  )
}

export default Home
