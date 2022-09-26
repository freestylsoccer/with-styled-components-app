import Cookie from 'js-cookie'
import { useRouter } from 'next/router'

export const COOKIE_LANGUAGE_KEY = 'language'
export const LANG_DOMAIN = '.mytemplate.com'

const useLanguage = () => {
  const { asPath, push } = useRouter()

  const handleSwitchLanguage = ({ locale }) => {
    try {
      Cookie.set(COOKIE_LANGUAGE_KEY, locale, { domain: LANG_DOMAIN })
      push(asPath, undefined, { locale: locale })
    } catch (err) {
      // ignore set cookie error for perp theme
    }
  }

  return { setLanguage: handleSwitchLanguage }
}

export default useLanguage
