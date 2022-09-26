import { Language } from '../types'

export const EN: Language = { locale: 'en', language: 'English', code: 'en' }
export const ESES: Language = { locale: 'es', language: 'Español', code: 'es' }

export const languages = {
  'en-US': EN,
  'es-ES': ESES,
}

const languageList = Object.values(languages)

export default languageList
