import { translations, Locale } from './translations'

export function getTranslation(locale: Locale = 'en') {
  return translations[locale]
}
