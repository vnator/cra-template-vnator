import { LANG } from './locale';
import { shouldPolyfill as isLocale } from '@formatjs/intl-locale/should-polyfill';
import { shouldPolyfill as isDisplayNames } from '@formatjs/intl-displaynames/should-polyfill';
import { shouldPolyfill as isDateTime } from '@formatjs/intl-datetimeformat/should-polyfill';
import { shouldPolyfill as isGetCanon } from '@formatjs/intl-getcanonicallocales/should-polyfill';
import { shouldPolyfill as isListFormat } from '@formatjs/intl-listformat/should-polyfill';
import { shouldPolyfill as isNumberFormat } from '@formatjs/intl-numberformat/should-polyfill';
import { shouldPolyfill as isPluralRules } from '@formatjs/intl-pluralrules/should-polyfill';
import { shouldPolyfill as isRelativeTime } from '@formatjs/intl-relativetimeformat/should-polyfill';

import { PolifillStruct } from './../models/intlModels';

export const polifilStructList: PolifillStruct[] = [
  {
    hasPolifill: isGetCanon(),
    paths: ['@formatjs/intl-listformat/polyfill'],
  },
  {
    hasPolifill: isLocale(),
    paths: ['@formatjs/intl-displaynames/polyfill'],
  },
  {
    hasPolifill: isDisplayNames(),
    paths: [
      '@formatjs/intl-datetimeformat/polyfill',
      '@formatjs/intl-displaynames/locale-data',
    ],
  },
  {
    hasPolifill: isListFormat(),
    paths: [
      '@formatjs/intl-locale/polyfill',
      '@formatjs/intl-listformat/locale-data',
    ],
  },
  {
    hasPolifill: isPluralRules(),
    paths: [
      '@formatjs/intl-pluralrules/polyfill',
      '@formatjs/intl-pluralrules/locale-data',
    ],
  },
  {
    hasPolifill: isNumberFormat(),
    paths: [
      '@formatjs/intl-numberformat/polyfill',
      '@formatjs/intl-numberformat/locale-data',
    ],
  },
  {
    hasPolifill: isDateTime(),
    paths: [
      '@formatjs/intl-getcanonicallocales/polyfill',
      '@formatjs/intl-datetimeformat/add-all-tz',
      '@formatjs/intl-listformat/locale-data',
    ],
  },
  {
    hasPolifill: isRelativeTime(),
    paths: [
      '@formatjs/intl-relativetimeformat/polyfill',
      '@formatjs/intl-relativetimeformat/locale-data',
    ],
  },
]

export const langPath = {
  [LANG.EN]: 'en',
  [LANG.PT]: 'pt',
}