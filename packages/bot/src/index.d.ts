declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'test' | 'production' | 'development'

    /** battle.net client_id */
    BNET_CLIENT_ID: string
    /** battle.net client_secret */
    BNET_CLIENT_SECRET: string
    /** twitch.tv */
    TWITCH_CLIENT_ID: string
    /** twitch.tv */
    TWITCH_CLIENT_SECRET: string

    /** 台灣星盟電子競技情報網 */
    GOOGLE_ANALYTICS_UA_ID: string
    /** Google Calendar */
    GOOGLE_CLIENT_ID: string
    /** Google Calendar */
    GOOGLE_CLIENT_SECRET: string
    /** Google Calendar */
    GOOGLE_APPLICATION_CREDENTIALS: string
    /** Google Calendar */
    GOOGLE_OWN_CALENDAR_ID: string
    /** Google Calendar */
    GOOGLE_REFRESH_TOKEN: string
    /** Google Calendar */
    GOOGLE_ACCESS_TOKEN: string

    FIREBASE_API_KEY: string
    FIREBASE_APP_ID: string
    FIREBASE_MEASUREMENT_ID: string

    /** i18next debug */
    DEBUG_I18N: '0' | '1'

    /** mongoDB Atlas */
    MONGODB_URL: string
  }
}

type ThenArg<T> = T extends Promise<infer U>
  ? U
  : T extends (...args: any[]) => Promise<infer U>
  ? U
  : T
