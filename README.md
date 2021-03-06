![testing](https://github.com/hilezi/life/workflows/testing/badge.svg?branch=master) [![](https://img.shields.io/badge/CHANGELOG-conventional%20changelog-informational)](./packages/bot/CHANGELOG.md)

# 這個 LINE BOT 機器人

> 三人行必有我師，這是一個學習用的代碼庫，用來實驗各試各樣的方法
>
> A hobby bot & web repository that intent to learn from others, practice, and keep in mind.
>
> https://www.notion.so/hilezi/d7ac6acf3ee94029a245be3df3c9f5fe

---

- [這個 LINE BOT 機器人](#這個-line-bot-機器人)
  - [加入好友](#加入好友)
- [BOT](#bot)
  - [development](#development)
  - [deploy](#deploy)

---

| 預覽                                  |
| ------------------------------------- |
| ![](./public/2020-02-26-11-36-42.png) |
| ![](./public/2020-02-11-12-52-32.png) |
| ![](./public/2020-02-11-12-53-47.png) |
| ![](./public/2020-02-11-12-54-50.png) |

## 加入好友

### LINE

| 正式站                                  | 測試機人                                  |
| --------------------------------------- | ----------------------------------------- |
| <img src="./public/正式站機器人.png" /> | <img src="./public/公開測試機器人.png" /> |

### Telegram

[@itsthatbot](https://t.me/itsthatbot)

# BOT

## development

> 需要三個 sessions 分別給 webpack build、npm test 和 bottender start 作測試。

```sh
npm run dev:watch
```

```sh
npm run test -- --verbose --watch
```

```sh
npm run dev:server
```

## deploy

```sh
# 部署到 heroku 正式站
npm run deploy:prod
```
