import Link from 'next/link'
import { useRouter } from 'next/router'
import { t } from '@lingui/macro'
import { Text } from '../../../../uikit/src'
import Cookie from 'js-cookie'

const availableLanguageNames = {
  en: t`English`,
  sv: t`Spanish`,
}

const LANG_TO_COUNTRY: Record<string, string> = {
  en: 'English',
  es: 'Español',
}

const LangSwitcher: React.FC = () => {
  const { locale, locales, asPath, push } = useRouter()
  const otherLocale = locales?.find((cur) => cur !== locale)

  return (
    <>
      <div>
        <Text>
          {locale && LANG_TO_COUNTRY[locale]}
        </Text>
        <ul>
          {locales?.map((l, index) => {
            return (
              <li
                onClick={() => {
                  Cookie.set('NEXT_LOCALE', l)
                  push(asPath, undefined, { locale: l })
                }}
                key={index}
              >
                <Text
                  fontSize="sm"
                  fontWeight={700}
                >
                  {LANG_TO_COUNTRY[l]}
                </Text>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default LangSwitcher