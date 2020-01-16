import i18next from 'i18next'

const resources: {
  [key in 'tw' | 'en']: {
    translation: Partial<{
      'error/系統內部錯誤': string
      'game/chatting': string
      'game/cod': string
      'game/lol': string
      'game/minecraft': string
      'game/overwatch': string
      'game/sc2': string
      'game/wc3': string
      'game/wow': string
      'tip/正在查詢': string
      'validate/支援文字': string
    }>
  }
} = {
  tw: {
    translation: {
      'error/系統內部錯誤':
        '系統內部錯誤，如果你願意，可以通知開發者：hilezi.chen@gmail.com',
      'game/chatting': '純聊天',
      'game/cod': '決勝時刻16：現代戰爭',
      'game/lol': '英雄聯盟',
      'game/minecraft': '創世神',
      'game/overwatch': '鬥陣特攻',
      'game/sc2': '星海爭霸2',
      'game/wc3': '魔獸爭霸3',
      'game/wow': '魔獸世界',
      'tip/正在查詢': '查詢中...',
      'validate/支援文字':
        '輸入的後輟「{{text}}」不在支援列表之中，必須是 {{- list}} 的其中一項',
    },
  },
  en: {
    translation: {
      'game/sc2': 'StarCraft II',
      'game/wc3': 'WarCraft III',
    },
  },
}

type I18nKeys = keyof typeof resources['tw']['translation']

export const i18nAPI = {
  init: () => {
    return i18next.init({
      lng: 'tw',
      fallbackLng: ['tw', 'en'],
      debug: process.env.DEBUG_I18N === '1',
      resources,
    })
  },
  t: <T extends I18nKeys>(
    key: T,
    options?: T extends 'validate/支援文字'
      ? { text: string; list: string }
      : undefined,
  ) => {
    return i18next.t(key, options)
  },
}