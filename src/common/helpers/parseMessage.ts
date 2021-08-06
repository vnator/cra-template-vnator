import { ParseMessage } from '../models/intlModels';
import { parse } from '@formatjs/icu-messageformat-parser';

export const parseMessages: ParseMessage = (nestedMessages, prefix = '') =>
  nestedMessages instanceof Object
    ? Object.entries(nestedMessages).reduce((prev, cur) => {
        const [key, value] = cur;
        const prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'string') {
          return {
            ...prev,
            [prefixedKey]: parse(value),
          };
        }

        return { ...prev, ...parseMessages(value, prefixedKey) };
      }, {})
    : {};
