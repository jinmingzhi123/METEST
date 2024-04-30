const ElementPlus = require('element-plus');
const { createI18n } = require('vue-i18n');
const cssFilePath = require.resolve('element-plus/dist/index.css');
const localeZH = require('element-plus/lib/locale/lang/zh-cn').default;
const localeEN = require('element-plus/lib/locale/lang/en').default;
const messages = require('../utils/i18n').default;
// console.log(msg)

// const messages = {
//   [localeEN.name]: {
//     el: localeEN.el,
//     i18n: msg.en.i18n,
//   },
//   [localeZH.name]: {
//     el: localeZH.el,
//     i18n: msg.zh.i18n,
//   },
// }

const i18n = createI18n({
  locale: localeZH.name,
  fallbackLocale: localeEN.name,
  messages,
})

  exports=(app) => {
  app.use(ElementPlus, { locale:localeZH })
  app.use(i18n)
}
