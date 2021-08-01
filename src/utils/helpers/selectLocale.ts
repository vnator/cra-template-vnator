import { PolifillStruct } from './../models/intlModels';
import { LANG, CURRENCY } from '../constants/locale';
import { shouldPolyfill as isLocale } from '@formatjs/intl-locale/should-polyfill';
import { shouldPolyfill as isDisplayNames } from '@formatjs/intl-displaynames/should-polyfill';
import { shouldPolyfill as isDateTime } from '@formatjs/intl-datetimeformat/should-polyfill';
import { shouldPolyfill as isGetCanon } from '@formatjs/intl-getcanonicallocales/should-polyfill';
import { shouldPolyfill as isListFormat } from '@formatjs/intl-listformat/should-polyfill';
import { shouldPolyfill as isNumberFormat } from '@formatjs/intl-numberformat/should-polyfill';
import { shouldPolyfill as isPluralRules } from '@formatjs/intl-pluralrules/should-polyfill';
import { shouldPolyfill as isRelativeTime } from '@formatjs/intl-relativetimeformat/should-polyfill';
import { langPath, polifilStructList } from '../constants/intlPolifillStruct';


export function selectLocale() {
  const browserLocale: string =
    navigator.language ||
    (navigator.languages && navigator.languages[0]);

  const locale = Object.values(LANG).includes(browserLocale as LANG)
    ? browserLocale
    : LANG.PT;

  switch (locale) {
    case LANG.EN:
      return {
        lang: locale,
        currency: CURRENCY.USD,
      };

    default:
      return {
        lang: LANG.PT,
        currency: CURRENCY.BRL,
      };
  }
}

export async function applyIntlPolyfill(locale: LANG) {
  for (let polifill of polifilStructList) {
    const {
      hasPolifill,
      paths
    } = polifill;

    if (hasPolifill) continue;

    const importPaths = paths.map((path, index, arr) => {
      if (arr.length > 1 && index === arr.length - 1) {
        return import(`${path}/${langPath[locale]}`)
      }

      return import(path);
    });

    await Promise.all(importPaths);
  }
}

