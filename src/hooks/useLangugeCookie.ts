import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { COOKIE_LANGUAGE_KEY, LANG_DOMAIN } from './useLanguage'

const useLanguageCookie = () => {
  const { locale, push, asPath } = useRouter()

  useEffect(() => {
    const getLanguageCookie = Cookie.get(COOKIE_LANGUAGE_KEY, { domain: LANG_DOMAIN })

    if (!getLanguageCookie && getLanguageCookie !== locale) {
      Cookie.set(COOKIE_LANGUAGE_KEY, locale, { domain: LANG_DOMAIN })
      push(asPath, undefined, { locale: locale })
    }
  }, [locale, push, asPath])
}

export default useLanguageCookie
