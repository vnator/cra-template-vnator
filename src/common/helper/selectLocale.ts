import { LANG, CURRENCY } from '../constant/locale';
import { langPath, polifilStructList } from '../constant/intlPolifillStruct';
import { LocaleSelected } from '../model/intlModels';

export function selectLocale(): LocaleSelected {
  const browserLocale: string = navigator.language || (navigator.languages && navigator.languages[0]);

  const locale = Object.values(LANG).includes(browserLocale as LANG) ? browserLocale : LANG.PT;

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
      const checkIfLangPath = arr.length > 1 && index === arr.length - 1;
      const pathToLang = `${path}/${langPath[locale]}`;

      return Promise.resolve(checkIfLangPath ? pathToLang : path);
    });

    await Promise.all(importPaths);
  }
}
