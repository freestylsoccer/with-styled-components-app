import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  MoreIcon,
} from '../../../../uikit/src'
import { DropdownMenuItems } from '../../../../uikit/src/components/DropdownMenu/types'
import { i18n } from "@lingui/core"
import { t } from "@lingui/macro"

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean } & {
  items?: ConfigMenuDropDownItemsType[]
}

const config: (
) => ConfigMenuItemsType[] = () =>
  [
    {
      label: i18n._(t`Trade`),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [
        {
          label: i18n._(t`Swap`),
          href: '/swap',
        },
        {
          label: i18n._(t`Limit`),
          href: '/limit-orders',
        },
      ]
    },
    {
      label: i18n._(t`Earn`),
      href: '/farms',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      items: [
        {
          label: i18n._(t`Farms`),
          href: '/farms',
        },
      ],
    },
    {
      label: i18n._(t`Win`),
      href: '/prediction',
      icon: TrophyIcon,
      fillIcon: TrophyFillIcon,
      items: [
        {
          label: i18n._(t`Trading Competition`),
          href: '/competition',
          hideSubNav: true,
        },
      ],
    },
    {
      label: '',
      href: '/info',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
        {
          label: i18n._(t`Info`),
          href: '/info',
        },
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: i18n._(t`Blog`),
          href: 'https://medium.com/pancakeswap',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: i18n._(t`Docs`),
          href: 'https://docs.pancakeswap.finance',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ],
    },
  ]

export default config
