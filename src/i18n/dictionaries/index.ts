import { en } from "./en";
import { es } from "./es";

import type { Locale } from "../config";

const dictionaries = {
  en,
  es,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
