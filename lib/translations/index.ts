import { en } from './en'
import { am } from './am'
import { om } from './om'

export const translations = {
  en,
  am,
  om,
}

export type Locale = keyof typeof translations
