import { createI18n } from 'vue-i18n'
import type { App } from 'vue'
import zhCN from './zhCN'
import en from './en'
import { useNavigatorLanguage } from '@vueuse/core'

export type Local = 'en' | 'zh-CN'

const localeState = ref<Local>('zh-CN')

// 获取浏览器默认语言
const { language } = useNavigatorLanguage()

// 获取语言类型
export const getLanguage = () => {
  const local = localStorage.getItem('local')
  if (local && language.value) setLocale(language.value as Local)
  return localeState.value
}

// 设置语言类型
export const setLocale = (locale: Local) => {
  localStorage.setItem('local', locale)
  localeState.value = locale
}

// 创建i18n实例
const i18n = createI18n({
  legacy: false,
  locale: getLanguage(),
  messages: {
    'zh-CN': zhCN,
    en
  }
})

// 注册国际化
export const setupI18n = (app: App)  => {
  app.use(i18n)
}

// 使用国际化
export const $t = i18n.global.t

export default i18n
