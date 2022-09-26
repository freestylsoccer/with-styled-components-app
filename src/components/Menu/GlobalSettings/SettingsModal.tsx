import { i18n } from '@lingui/core'
import { t } from '@lingui/macro'
import styled from 'styled-components'

import { Flex, InjectedModalProps, Modal, Text, ThemeSwitcher } from '../../../../uikit/src'
import useTheme from '../../../hooks/useTheme'

const ScrollableContainer = styled(Flex)`
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.xs} {
    max-height: none;
    height: 90vh;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    max-height: none;
    height: auto;
  }
`

const SettingsModal: React.FC<InjectedModalProps> = ({ onDismiss, mode }) => {
  const { isDark, setTheme } = useTheme()

  return (
    <Modal
      title={i18n._(t`Settings`)}
      headerBackground="gradients.cardHeader"
      onDismiss={onDismiss}
      style={{ maxWidth: '420px' }}
    >
      <ScrollableContainer>
        <Flex pb="24px" flexDirection="column">
          <Text bold textTransform="uppercase" fontSize="18px" color="secondary" mb="24px">
            {i18n._(t`Global`)}
          </Text>
          <Flex justifyContent="space-between" mb="24px">
            <Text>{i18n._(t`Dark mode`)}</Text>
            <ThemeSwitcher isDark={isDark} toggleTheme={() => setTheme(isDark ? 'light' : 'dark')} />
          </Flex>
        </Flex>
      </ScrollableContainer>
    </Modal>
  )
}

export default SettingsModal
