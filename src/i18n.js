import { createI18n } from 'vue-i18n/dist/vue-i18n.esm-browser'

const messages = {
  EN: {
    message: {
      hello: 'hello world23'
    }
  },
  SL: {
    message: {
      hello: 'Hallo Welt'
    }
  }
}

const i18n = createI18n({
  locale: 'SL',
  messages,
  datetimeFormats: {
    EN: {
      short: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }
    },
    SL: {
      short: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }
    }
  }
})

export default i18n
