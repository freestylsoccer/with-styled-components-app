import { i18n } from '@lingui/core'
import { t } from '@lingui/macro'

import { FooterLinkType } from '../../../../uikit/src'

export const footerLinks: () => FooterLinkType[] = () => [
  {
    label: i18n._(t`About`),
    items: [
      {
        label: i18n._(t`Contact`),
        href: 'https://docs.pancakeswap.finance/contact-us',
        isHighlighted: true,
      },
      {
        label: i18n._(t`Brand`),
        href: 'https://docs.pancakeswap.finance/brand',
      },
      {
        label: i18n._(t`Blog`),
        href: 'https://medium.com/pancakeswap',
      },
      {
        label: i18n._(t`Community`),
        href: 'https://docs.pancakeswap.finance/contact-us/telegram',
      },
      {
        label: i18n._(t`Litepaper`),
        href: 'https://v2litepaper.pancakeswap.finance/',
      },
      {
        label: '—',
      },
      {
        label: i18n._(t`Online Store`),
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
  {
    label: i18n._(t`Help`),
    items: [
      {
        label: i18n._(t`Customer Support`),
        href: 'https://docs.pancakeswap.finance/contact-us/customer-support',
      },
      {
        label: i18n._(t`Troubleshooting`),
        href: 'https://docs.pancakeswap.finance/help/troubleshooting',
      },
      {
        label: i18n._(t`Guides`),
        href: 'https://docs.pancakeswap.finance/get-started',
      },
    ],
  },
  {
    label: i18n._(t`Developers`),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: i18n._(t`Documentation`),
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: i18n._(t`Bug Bounty`),
        href: 'https://docs.pancakeswap.finance/code/bug-bounty',
      },
      {
        label: i18n._(t`Audits`),
        href: 'https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      },
      {
        label: i18n._(t`Careers`),
        href: 'https://docs.pancakeswap.finance/hiring/become-a-chef',
      },
    ],
  },
]
