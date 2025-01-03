import { LangType } from 'tongwen-core/dictionaries';

/**
 * Should match all possible valid Chinese language tags:
 *  - `zh`
 *  - `zh-TW`
 *  - `zh-Hant`
 *  - `zh-Hant-SG`
 *  - etc.
 */
const ZH_LANG_REGEXP = /^zh(-[a-z]+)*$/i;

/**
 * Updates the element's `lang` attribute according to the target `LangType`
 * only if `lang` is already a valid Chinese language tag:
 *  - `LangType.s2t` -> `zh-Hant`
 *  - `LangType.s2t` -> `zh-Hans`
 */
export function updateLangAttr(element: HTMLElement, target: LangType) {
  if (ZH_LANG_REGEXP.test(element.lang)) {
    element.lang = target === LangType.s2t ? 'zh-Hant' : 'zh-Hans';
  }
}
