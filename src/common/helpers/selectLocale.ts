import { LANG, CURRENCY } from '../constants/locale';

import { langPath, polifilStructList } from '../constants/intlPolifillStruct';
import { LocaleSelected } from '../models/intlModels';

export function selectLocale(): LocaleSelected {
  const browserLocale: string =
    navigator.language || (navigator.languages && navigator.languages[0]);

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

export async function applyIntlPolyfill(locale: LANG): Promise<void> {
  for (const polifill of polifilStructList) {
    const { hasPolifill, paths } = polifill;

    if (hasPolifill) continue;

    const importPaths = paths.map((path, index, arr) => {
      if (arr.length > 1 && index === arr.length - 1) {
        return import(`${path}/${langPath[locale]}`);
      }

      return import(path);
    });

    await Promise.all(importPaths);
  }
}
