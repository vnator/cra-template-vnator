import { LANG } from "../constants/locale";

export interface PolifillStruct {
  hasPolifill: boolean;
  paths: string[];
}

export type IntlMessage = { [key: string]: string | IntlMessage } | {}

export interface IntlParsedMessage {
  [key: string]: string,
}

export interface ParseMessage {
  (nestedMessages: IntlMessage, prefix?: string): IntlParsedMessage
}

export interface ApplicationMessages {
  [LANG.EN]: IntlParsedMessage,
  [LANG.PT]: IntlParsedMessage,
}